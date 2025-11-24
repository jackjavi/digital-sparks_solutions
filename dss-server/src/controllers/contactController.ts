import { Request, Response, NextFunction } from "express";
import ContactService from "../services/contactService";
import { CustomError } from "../utils/customError";

export default class ContactController {
  /**
   * Handle contact form submission request
   */
  static async submitContact(req: Request, res: Response, next: NextFunction) {
    try {
      const { firstName, lastName, email, phone, service, message } = req.body;

      // Validate required fields
      if (!firstName || !lastName || !email || !phone || !service || !message) {
        throw new CustomError(
          "Missing required fields: all form fields are required",
          400
        );
      }

      // Validate email format
      const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      if (!emailRegex.test(email)) {
        throw new CustomError("Invalid email format", 400);
      }

      // Validate phone format (basic validation)
      const phoneRegex = /^[\d\s+()-]{10,}$/;
      if (!phoneRegex.test(phone)) {
        throw new CustomError("Invalid phone number format", 400);
      }

      // Validate message length
      if (message.trim().length < 10) {
        throw new CustomError(
          "Message must be at least 10 characters long",
          400
        );
      }

      // Create timestamp
      const timestamp = new Date().toLocaleString("en-US", {
        timeZone: "Africa/Nairobi",
        dateStyle: "full",
        timeStyle: "long",
      });

      // Process contact form submission
      const result = await ContactService.sendContactSubmission({
        firstName,
        lastName,
        email,
        phone,
        service,
        message,
        timestamp,
      });

      return res.status(200).json({
        success: true,
        message: result.message,
        data: {
          emailSent: true,
          timestamp,
        },
      });
    } catch (error) {
      next(error);
    }
  }
}
