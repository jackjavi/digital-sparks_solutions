import { Request, Response, NextFunction } from "express";
import PaymentService from "../services/paymentService";
import { CustomError } from "../utils/customError";

export default class PaymentController {
  /**
   * Handle payment confirmation request
   */
  static async confirmPayment(req: Request, res: Response, next: NextFunction) {
    try {
      const { userEmail, userName, sessionId, downloadLink } = req.body;

      // Validate required fields
      if (!userEmail || !sessionId) {
        throw new CustomError(
          "Missing required fields: userEmail and sessionId are required",
          400,
        );
      }

      // Validate email format
      const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      if (!emailRegex.test(userEmail)) {
        throw new CustomError("Invalid email format", 400);
      }

      // Create timestamp
      const timestamp = new Date().toLocaleString("en-US", {
        timeZone: "Africa/Nairobi",
        dateStyle: "full",
        timeStyle: "long",
      });

      // Send confirmation emails
      const result = await PaymentService.sendPaymentConfirmation({
        userEmail,
        userName,
        sessionId,
        timestamp,
        downloadLink, // Pass download link to service
      });

      return res.status(200).json({
        success: true,
        message: result.message,
        data: {
          emailSent: true,
          ebookAttached: result.ebookAttached,
          timestamp,
        },
      });
    } catch (error) {
      next(error);
    }
  }

  static async confirmPaymentWhop(
    req: Request,
    res: Response,
    next: NextFunction,
  ) {
    try {
      const {
        userEmail,
        userName,
        paymentId,
        productTitle,
        amount,
        currency,
        membershipStatus,
        downloadLink,
      } = req.body;

      // Validate required fields
      if (!userEmail || !paymentId) {
        throw new CustomError(
          "Missing required fields: userEmail and paymentId are required",
          400,
        );
      }

      // Validate email format
      const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      if (!emailRegex.test(userEmail)) {
        throw new CustomError("Invalid email format", 400);
      }

      // Create timestamp
      const timestamp = new Date().toLocaleString("en-US", {
        timeZone: "Africa/Nairobi",
        dateStyle: "full",
        timeStyle: "long",
      });

      // Send confirmation emails
      const result = await PaymentService.sendPaymentConfirmationWhop({
        userEmail,
        userName,
        paymentId,
        productTitle,
        amount,
        currency,
        membershipStatus,
        timestamp,
        downloadLink,
      });

      return res.status(200).json({
        success: true,
        message: result.message,
        data: {
          emailSent: true,
          ebookAttached: result.ebookAttached,
          timestamp,
        },
      });
    } catch (error) {
      next(error);
    }
  }
}
