import { waitUntil } from "@vercel/functions";
import type { Payment } from "@whop/sdk/resources.js";
import type { NextRequest } from "next/server";
import { whopsdk } from "../../../lib/whop-sdk";
import { connectDB } from "../../../lib/mongodb"; // You'll need to create this
import { WhopPayment } from "../../../models/WhopPayment";

export async function POST(request: NextRequest): Promise<Response> {
  try {
    // Validate the webhook to ensure it's from Whop
    const requestBodyText = await request.text();
    const headers = Object.fromEntries(request.headers);
    const webhookData = whopsdk.webhooks.unwrap(requestBodyText, { headers });

    // Handle the webhook event
    if (webhookData.type === "payment.succeeded") {
      waitUntil(handlePaymentSucceeded(webhookData));
    }

    // Make sure to return a 2xx status code quickly. Otherwise the webhook will be retried.
    return new Response("OK", { status: 200 });
  } catch (error) {
    console.error("[WEBHOOK ERROR]", error);
    // Still return 200 to prevent retries for invalid webhooks
    return new Response("OK", { status: 200 });
  }
}

async function handlePaymentSucceeded(webhookData: {
  id: string;
  timestamp: string;
  data: Payment;
}) {
  try {
    // Connect to database
    await connectDB();

    const { data: payment, id: webhookId, timestamp } = webhookData;

    console.log("[PAYMENT SUCCEEDED]", payment.id);

    // Check if payment already exists to prevent duplicates
    const existingPayment = await WhopPayment.findOne({
      paymentId: payment.id,
    });

    if (existingPayment) {
      console.log("[PAYMENT ALREADY EXISTS]", payment.id);
      return;
    }

    // Create payment record
    const paymentRecord = new WhopPayment({
      // Payment identifiers
      paymentId: payment.id,
      status: payment.status,
      substatus: payment.substatus,

      // Financial data
      currency: payment.currency,
      total: payment.total,
      subtotal: payment.subtotal,
      usdTotal: payment.usd_total,
      amountAfterFees: payment.amount_after_fees,
      refundedAmount: payment.refunded_amount || 0,

      // User information
      userId: payment.user?.id || "",
      userEmail: payment.user?.email || "",
      userName: payment.user?.name,
      userUsername: payment.user?.username,

      // Membership & Product
      membershipId: payment.membership?.id || "",
      membershipStatus: payment.membership?.status || "",
      planId: payment.plan?.id || "",
      productId: payment.product?.id || "",
      productTitle: payment.product?.title,

      // Company
      companyId: payment.company?.id || "",
      companyTitle: payment.company?.title,

      // Payment method details
      paymentMethodType: payment.payment_method_type,
      cardBrand: payment.card_brand,
      cardLast4: payment.card_last4,

      // Billing
      billingReason: payment.billing_reason,
      billingAddress: payment.billing_address
        ? {
            name: payment.billing_address.name,
            line1: payment.billing_address.line1,
            line2: payment.billing_address.line2,
            city: payment.billing_address.city,
            state: payment.billing_address.state,
            postalCode: payment.billing_address.postal_code,
            country: payment.billing_address.country,
          }
        : undefined,

      // Promo code
      promoCode: payment.promo_code
        ? {
            id: payment.promo_code.id,
            code: payment.promo_code.code,
            amountOff: payment.promo_code.amount_off,
            promoType: payment.promo_code.promo_type,
          }
        : undefined,

      // Status flags
      refundable: payment.refundable,
      autoRefunded: payment.auto_refunded,

      // Timestamps
      createdAt: new Date(payment.created_at),
      paidAt: payment.paid_at ? new Date(payment.paid_at) : undefined,
      refundedAt: payment.refunded_at
        ? new Date(payment.refunded_at)
        : undefined,

      // Metadata
      metadata: payment.metadata,

      // Webhook metadata
      webhookId,
      webhookTimestamp: new Date(timestamp),
    });

    await paymentRecord.save();

    console.log("[PAYMENT SAVED]", payment.id);

    // TODO: Add your custom business logic here
    // For example:
    // - Send confirmation email
    // - Update user's subscription status
    // - Grant access to product
    // - Trigger analytics events
  } catch (error) {
    console.error("[PAYMENT PROCESSING ERROR]", error);
    // Consider implementing a retry mechanism or dead letter queue
    throw error;
  }
}
