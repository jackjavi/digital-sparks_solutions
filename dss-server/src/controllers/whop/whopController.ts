import { Request, Response, NextFunction } from "express";
import WhopService from "../../services/whop/whopService";
import { CustomError } from "../../utils/customError";

export default class WhopController {
  /**
   * Handle Whop payment.succeeded webhook
   */
  static async handlePaymentSucceeded(
    req: Request,
    res: Response,
    next: NextFunction
  ) {
    try {
      const webhookData = req.body;

      console.log("[WHOP CONTROLLER] Webhook received:", {
        id: webhookData.id,
        type: webhookData.type,
        paymentId: webhookData.data?.id,
      });

      // Validate webhook structure
      if (!webhookData.id || !webhookData.type || !webhookData.data) {
        throw new CustomError("Invalid webhook payload structure", 400);
      }

      // Validate webhook type
      if (webhookData.type !== "payment.succeeded") {
        throw new CustomError(
          `Unsupported webhook type: ${webhookData.type}`,
          400
        );
      }

      // Process the payment
      const result = await WhopService.processPaymentSucceeded(webhookData);

      console.log("[WHOP CONTROLLER] Webhook processed successfully:", {
        paymentId: result.paymentId,
        duplicate: result.duplicate,
      });

      return res.status(200).json({
        success: true,
        message: result.message,
        data: {
          paymentId: result.paymentId,
          dbId: result.dbId,
          duplicate: result.duplicate,
        },
      });
    } catch (error) {
      console.error("[WHOP CONTROLLER] Webhook processing failed:", error);
      next(error);
    }
  }

  /**
   * Health check endpoint
   */
  static async healthCheck(req: Request, res: Response, next: NextFunction) {
    try {
      return res.status(200).json({
        success: true,
        message: "Whop webhook endpoint is healthy",
        timestamp: new Date().toISOString(),
      });
    } catch (error) {
      next(error);
    }
  }
}
