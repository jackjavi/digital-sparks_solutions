import sendEmail from "../utils/sendEmail";
import config from "../config";
import { CustomError } from "../utils/customError";
import { downloadFile, validateFileUrl } from "../utils/fileDownload";
import { EmailAttachment } from "../utils/sendEmail";

interface PaymentConfirmationData {
  userEmail: string;
  userName?: string;
  sessionId: string;
  timestamp: string;
  downloadLink?: string;
}

export default class PaymentService {
  /**
   * Send payment confirmation emails to user and admin
   */
  static async sendPaymentConfirmation(data: PaymentConfirmationData) {
    const { userEmail, userName, sessionId, timestamp, downloadLink } = data;

    let ebookAttached = false;
    let attachments: EmailAttachment[] = [];

    try {
      // Validate input
      if (!userEmail || !sessionId) {
        throw new CustomError("Missing required payment data", 400);
      }

      // Validate admin email exists
      if (!config.dssAdminEmail) {
        throw new CustomError("Admin email address not configured", 500);
      }

      // Download e-book file if link is provided
      if (downloadLink) {
        try {
          console.log(`Attempting to download e-book from: ${downloadLink}`);

          // Validate URL is accessible
          const isValid = await validateFileUrl(downloadLink);
          if (!isValid) {
            console.warn(`E-book URL is not accessible: ${downloadLink}`);
          } else {
            // Download the file
            const downloadedFile = await downloadFile(downloadLink);

            attachments.push({
              filename: downloadedFile.filename,
              content: downloadedFile.content,
              contentType: downloadedFile.contentType,
            });

            ebookAttached = true;
            console.log(
              `E-book downloaded successfully: ${downloadedFile.filename}`,
            );
          }
        } catch (downloadError) {
          // Log error but don't fail the entire email send
          console.error(
            "Failed to download e-book, proceeding without attachment:",
            downloadError,
          );
        }
      }

      // Send confirmation email to user
      const userSubject = ebookAttached
        ? "Payment Successful + Your E-book - Digital Sparks Solutions"
        : "Payment Successful - Digital Sparks Solutions";

      const userMessage = `
Hello ${userName || "Valued Customer"},

Thank you for your payment! We have successfully received your payment and your order is being processed.

Payment Details:
- Transaction ID: ${sessionId}
- Date & Time: ${timestamp}
- Status: SUCCESSFUL ✅

${
  ebookAttached
    ? `📚 Your E-book is Attached!
Your complimentary e-book has been attached to this email. You can download it directly from this message or use the download button on our website.

What's Next?
- Download your e-book from the attachment above
- Save it to your device for easy access
- Use the password "${config.ebooksPassword}" to unlock the e-book if prompted.`
    : `What's Next?
- A copy of your purchase confirmation is saved in your account`
}

We truly appreciate your trust in Digital Sparks Solutions. If you have any questions or need assistance, please don't hesitate to reach out to us at ${
        config.dssAdminEmail
      }.

Thank you for choosing Digital Sparks Solutions!

Best regards,
Digital Sparks Solutions Team
${config.dssAdminEmail}
`.trim();

      await sendEmail(userEmail, userSubject, userMessage, attachments);

      // Send notification email to admin (without attachment to save space)
      const adminSubject = "New Payment Received - Digital Sparks Solutions";
      const adminMessage = `
Hello Admin,

A new payment has been successfully processed through Stripe.

Payment Details:
- Customer Email: ${userEmail}
- Customer Name: ${userName || "Not provided"}
- Transaction ID: ${sessionId}
- Date & Time: ${timestamp}
- Status: SUCCESSFUL
- E-book Attached to Customer Email: ${
        ebookAttached ? "YES ✅" : "NO (Download link provided on success page)"
      }

Action Required:
- Reach out to customer within 24 hours for onboarding
- Update order records in the system
- Verify customer received their e-book

Customer Details:
- Email: ${userEmail}
- Ready for onboarding session

Please process this order promptly to ensure customer satisfaction.

Best regards,
Digital Sparks Solutions System
`.trim();

      await sendEmail(config.dssAdminEmail, adminSubject, adminMessage);

      return {
        success: true,
        message: "Confirmation emails sent successfully",
        ebookAttached,
      };
    } catch (error) {
      console.error("Failed to send payment confirmation emails:", error);

      // If it's already a CustomError, rethrow it
      if (error instanceof CustomError) {
        throw error;
      }

      // Otherwise, wrap in CustomError
      throw new CustomError(
        `Failed to send confirmation emails: ${
          error instanceof Error ? error.message : "Unknown error"
        }`,
        500,
      );
    }
  }
}
