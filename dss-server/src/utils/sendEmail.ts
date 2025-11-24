import nodemailer from "nodemailer";
import { google } from "googleapis";
import { CustomError } from "./customError";
import config from "../config";

// Define attachment interface
export interface EmailAttachment {
  filename: string;
  content: Buffer;
  contentType?: string;
}

const oAuth2Client = new google.auth.OAuth2(
  config.googleClientId,
  config.googleClientSecret,
  config.redirectUrl
);

oAuth2Client.setCredentials({
  refresh_token: config.googleRefreshToken,
});

/**
 * Send an email with optional attachments
 * @param to - Recipient email address
 * @param subject - Email subject
 * @param text - Email body text
 * @param attachments - Optional array of file attachments
 */
const sendEmail = async (
  to: string,
  subject: string,
  text: string,
  attachments?: EmailAttachment[]
) => {
  try {
    const transporter = nodemailer.createTransport({
      service: "gmail",
      port: 465,
      secure: true,
      debug: true,
      auth: {
        user: config.userEmail,
        pass: config.userPassword,
      },
      tls: {
        rejectUnauthorized: true,
      },
    });

    const mailOptions: nodemailer.SendMailOptions = {
      from: '"DIGITAL SPARKS SOLUTIONS" <javiartsofficial@gmail.com>',
      to: to,
      subject: subject,
      text: text,
    };

    // Add attachments if provided
    if (attachments && attachments.length > 0) {
      mailOptions.attachments = attachments.map((attachment) => ({
        filename: attachment.filename,
        content: attachment.content,
        contentType: attachment.contentType || "application/octet-stream",
      }));
      console.log(`Sending email with ${attachments.length} attachment(s)`);
    }

    const info = await transporter.sendMail(mailOptions);
    console.log(
      `Email sent successfully to ${to} - Message ID: ${info.messageId}`
    );
  } catch (error) {
    console.error("Send email error:", error);
    throw new CustomError(
      `Failed to send email to ${to}: ${
        error instanceof Error ? error.message : "Unknown error"
      }`,
      500
    );
  }
};

/**
 * Send email to multiple recipients with optional attachments
 * @param recipients - Array of recipient email addresses
 * @param subject - Email subject
 * @param text - Email body text
 * @param attachments - Optional array of file attachments
 */
const sendEmailToMultiple = async (
  recipients: string[],
  subject: string,
  text: string,
  attachments?: EmailAttachment[]
) => {
  try {
    if (!recipients || recipients.length === 0) {
      throw new CustomError("No email recipients provided", 400);
    }

    const emailPromises = recipients.map((email) =>
      sendEmail(email, subject, text, attachments)
    );

    await Promise.all(emailPromises);
    console.log(`Emails sent successfully to ${recipients.length} recipients`);
  } catch (error) {
    console.error("Send multiple emails error:", error);
    if (error instanceof CustomError) {
      throw error;
    }
    throw new CustomError(
      `Failed to send emails to multiple recipients: ${
        error instanceof Error ? error.message : "Unknown error"
      }`,
      500
    );
  }
};

export default sendEmail;
export { sendEmailToMultiple };
