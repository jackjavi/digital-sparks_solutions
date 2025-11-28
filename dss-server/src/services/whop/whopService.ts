import WhopPayment from "../../models/whop/WhopPayment";
import { CustomError } from "../../utils/customError";
import sendEmail from "../../utils/sendEmail";
import config from "../../config";

interface WhopWebhookPayload {
  id: string;
  api_version: string;
  timestamp: string;
  type: "payment.succeeded";
  data: {
    id: string;
    status: string | null;
    substatus: string;
    refundable: boolean;
    retryable: boolean;
    voidable: boolean;
    created_at: string;
    paid_at: string | null;
    last_payment_attempt: string | null;
    dispute_alerted_at: string | null;
    refunded_at: string | null;
    plan: { id: string } | null;
    product: { id: string; title: string; route: string } | null;
    user: {
      id: string;
      name: string | null;
      username: string | null;
      email: string;
    } | null;
    membership: { id: string; status: string } | null;
    member: { id: string; phone: string | null } | null;
    company: { id: string; title: string; route: string } | null;
    promo_code: {
      id: string;
      code: string;
      amount_off: number;
      base_currency: string;
      promo_type: string;
      number_of_intervals: number;
    } | null;
    currency: string | null;
    total: string;
    subtotal: string;
    usd_total: string;
    refunded_amount: string;
    auto_refunded: boolean;
    amount_after_fees: string;
    card_brand: string | null;
    card_last4: string | null;
    billing_address: {
      name: string;
      line1: string;
      line2: string;
      city: string;
      state: string;
      postal_code: string;
      country: string;
    } | null;
    payment_method_type: string | null;
    billing_reason: string | null;
    failure_message: string | null;
    metadata: Record<string, any> | null;
  };
}

export default class WhopService {
  /**
   * Process Whop payment.succeeded webhook
   */
  static async processPaymentSucceeded(webhookData: WhopWebhookPayload) {
    try {
      const {
        data: payment,
        id: webhookId,
        timestamp,
        api_version,
      } = webhookData;

      console.log("[WHOP WEBHOOK] Payment succeeded received:", {
        paymentId: payment.id,
        userEmail: payment.user?.email,
        total: payment.total,
        currency: payment.currency,
        substatus: payment.substatus,
      });

      // Validate required fields
      if (!payment.id || !payment.user?.id || !payment.user?.email) {
        throw new CustomError(
          "Invalid webhook data: missing required payment or user information",
          400
        );
      }

      // Check if payment already exists to prevent duplicates
      const existingPayment = await WhopPayment.findOne({
        paymentId: payment.id,
      });

      if (existingPayment) {
        console.log("[WHOP WEBHOOK] Payment already exists:", payment.id);
        return {
          success: true,
          message: "Payment already processed",
          paymentId: payment.id,
          duplicate: true,
        };
      }

      // Create payment record
      const paymentRecord = new WhopPayment({
        // Payment identifiers
        paymentId: payment.id,
        status: payment.status,
        substatus: payment.substatus,

        // Financial data (keep as strings as Whop sends them)
        currency: payment.currency,
        total: payment.total,
        subtotal: payment.subtotal,
        usdTotal: payment.usd_total,
        amountAfterFees: payment.amount_after_fees,
        refundedAmount: payment.refunded_amount,

        // User information
        userId: payment.user.id,
        userEmail: payment.user.email,
        userName: payment.user.name,
        userUsername: payment.user.username,

        // Membership & Product
        membershipId: payment.membership?.id || "",
        membershipStatus: payment.membership?.status || "",
        planId: payment.plan?.id || "",
        productId: payment.product?.id || "",
        productTitle: payment.product?.title,

        // Member
        memberId: payment.member?.id || "",
        memberPhone: payment.member?.phone,

        // Company
        companyId: payment.company?.id || "",
        companyTitle: payment.company?.title,

        // Payment method details
        paymentMethodType: payment.payment_method_type,
        cardBrand: payment.card_brand,
        cardLast4: payment.card_last4,

        // Billing
        billingReason: payment.billing_reason,
        billingAddress: payment.billing_address,

        // Promo code
        promoCode: payment.promo_code
          ? {
              id: payment.promo_code.id,
              code: payment.promo_code.code,
              amountOff: payment.promo_code.amount_off,
              promoType: payment.promo_code.promo_type,
            }
          : null,

        // Status flags
        refundable: payment.refundable,
        autoRefunded: payment.auto_refunded,
        retryable: payment.retryable,
        voidable: payment.voidable,

        // Timestamps
        createdAt: new Date(payment.created_at),
        paidAt: payment.paid_at ? new Date(payment.paid_at) : null,
        refundedAt: payment.refunded_at ? new Date(payment.refunded_at) : null,
        lastPaymentAttempt: payment.last_payment_attempt
          ? new Date(payment.last_payment_attempt)
          : null,
        disputeAlertedAt: payment.dispute_alerted_at
          ? new Date(payment.dispute_alerted_at)
          : null,

        // Metadata
        metadata: payment.metadata,
        failureMessage: payment.failure_message,

        // Webhook metadata
        webhookId,
        webhookTimestamp: new Date(timestamp),
        webhookApiVersion: api_version,
      });

      await paymentRecord.save();

      const dbId = String(paymentRecord._id);

      console.log("[WHOP WEBHOOK] Payment saved successfully:", {
        paymentId: payment.id,
        dbId,
      });

      // Send notification emails (async, don't wait)
      this.sendPaymentNotifications(payment, dbId).catch((error) => {
        console.error("[WHOP WEBHOOK] Failed to send notifications:", error);
        // Don't throw - payment is already saved
      });

      return {
        success: true,
        message: "Payment processed successfully",
        paymentId: payment.id,
        dbId,
        duplicate: false,
      };
    } catch (error) {
      console.error("[WHOP WEBHOOK] Failed to process payment:", error);

      if (error instanceof CustomError) {
        throw error;
      }

      throw new CustomError(
        `Failed to process Whop payment: ${
          error instanceof Error ? error.message : "Unknown error"
        }`,
        500
      );
    }
  }

  /**
   * Send payment notification emails
   */
  private static async sendPaymentNotifications(
    payment: WhopWebhookPayload["data"],
    dbId: string
  ) {
    try {
      const userEmail = payment.user?.email;
      const userName = payment.user?.name || "Valued Customer";
      const productTitle = payment.product?.title || "Product";
      const amount = payment.total || "0.00";
      const currency = payment.currency || "USD";

      const timestamp = new Date().toLocaleString("en-US", {
        timeZone: "Africa/Nairobi",
        dateStyle: "full",
        timeStyle: "long",
      });

      if (userEmail && config.dssAdminEmail) {
        // Send confirmation email to user
        const userSubject = `Payment Successful - ${productTitle}`;
        const userMessage = `
Hello ${userName},

Thank you for your payment! Your order has been successfully processed.

Payment Details:
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
💳 Payment ID: ${payment.id}
📦 Product: ${productTitle}
💰 Amount: ${currency} ${amount}
📅 Date: ${timestamp}
✅ Status: ${payment.substatus.toUpperCase()}
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

${
  payment.membership?.status === "active" ||
  payment.membership?.status === "completed"
    ? `Your membership is now active! You can access your benefits immediately.`
    : `Your order is being processed and you'll receive access shortly.`
}

If you have any questions, please contact us at ${config.dssAdminEmail}.

Best regards,
Digital Sparks Solutions Team
`.trim();

        await sendEmail(userEmail, userSubject, userMessage);

        // Send notification to admin
        const adminSubject = `New Whop Payment - ${productTitle}`;
        const adminMessage = `
Hello Admin,

A new payment has been successfully processed through Whop.

Payment Details:
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
💳 Payment ID: ${payment.id}
🆔 Database ID: ${dbId}
👤 Customer: ${userName} (${userEmail})
📦 Product: ${productTitle}
💰 Amount: ${currency} ${amount}
📅 Date: ${timestamp}
✅ Status: ${payment.substatus.toUpperCase()}
🔄 Membership Status: ${payment.membership?.status || "N/A"}
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

Customer Information:
- Email: ${userEmail}
- User ID: ${payment.user?.id}
- Username: ${payment.user?.username || "N/A"}
- Member ID: ${payment.member?.id}

Company Information:
- Company: ${payment.company?.title || "N/A"}
- Company ID: ${payment.company?.id}

Please ensure the customer has been granted appropriate access.

Best regards,
Digital Sparks Solutions System
`.trim();

        await sendEmail(config.dssAdminEmail, adminSubject, adminMessage);

        console.log("[WHOP WEBHOOK] Notification emails sent successfully");
      }
    } catch (error) {
      console.error(
        "[WHOP WEBHOOK] Failed to send notification emails:",
        error
      );
      // Don't throw - this is not critical
    }
  }
}
