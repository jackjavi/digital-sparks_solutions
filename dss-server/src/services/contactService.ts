import sendEmail from "../utils/sendEmail";
import config from "../config";
import { CustomError } from "../utils/customError";

interface ContactSubmissionData {
  firstName: string;
  lastName: string;
  email: string;
  phone: string;
  service: string;
  message: string;
  timestamp: string;
}

export default class ContactService {
  /**
   * Send contact form submission to admin
   */
  static async sendContactSubmission(data: ContactSubmissionData) {
    const { firstName, lastName, email, phone, service, message, timestamp } =
      data;

    try {
      // Validate input
      if (!firstName || !lastName || !email || !phone || !service || !message) {
        throw new CustomError("Missing required contact form data", 400);
      }

      // Validate admin email exists
      if (!config.dssAdminEmail) {
        throw new CustomError("Admin email address not configured", 500);
      }

      const fullName = `${firstName} ${lastName}`;

      // Send notification email to admin
      const adminSubject = `New Contact Form Submission - ${service}`;
      const adminMessage = `
Hello Admin,

A new contact form submission has been received from the Digital Sparks Solutions website.

Contact Details:
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
👤 Name: ${fullName}
📧 Email: ${email}
🎯 Service Interest: ${service}
📅 Submitted: ${timestamp}
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

Message:
${message}

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

Customer Contact Information:
- Email: ${email}
- Phone: ${phone}
- Preferred Service: ${service}

Please reach out to this potential client promptly to maintain excellent customer service.

Best regards,
Digital Sparks Solutions System
`.trim();

      await sendEmail(config.dssAdminEmail, adminSubject, adminMessage);

      // Send confirmation email to user
      const userSubject = "We Received Your Message - Digital Sparks Solutions";
      const userMessage = `
Hello ${firstName},

Thank you for reaching out to Digital Sparks Solutions! We have successfully received your message and appreciate your interest in our services.

Your Submission Details:
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
📋 Service Interest: ${service}
📅 Submitted: ${timestamp}
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

Your Message:
${message}

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

What Happens Next?
1️⃣ Our team will review your inquiry within 24 hours
2️⃣ We'll reach out to you via email or phone to discuss your needs
3️⃣ We'll schedule a consultation if required

In the meantime, feel free to:
📞 Call us: +44 7493 102401
📧 Email us: ${config.dssAdminEmail}
🌐 Visit our website for more information

We're excited to help you achieve your UK business and career goals!

Best regards,
Digital Sparks Solutions Team
${config.dssAdminEmail}
`.trim();

      await sendEmail(email, userSubject, userMessage);

      return {
        success: true,
        message: "Contact form submitted successfully",
      };
    } catch (error) {
      console.error("Failed to process contact form submission:", error);

      // If it's already a CustomError, rethrow it
      if (error instanceof CustomError) {
        throw error;
      }

      // Otherwise, wrap in CustomError
      throw new CustomError(
        `Failed to process contact form: ${
          error instanceof Error ? error.message : "Unknown error"
        }`,
        500,
      );
    }
  }
}
