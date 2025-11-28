import { Router } from "express";
import WhopController from "../../controllers/whop/whopController";

const router = Router();

/**
 * POST /api/whop/payment-succeeded
 * Webhook endpoint for Whop payment.succeeded events
 */
router.post("/payment-succeeded", WhopController.handlePaymentSucceeded);

/**
 * GET /api/whop/health
 * Health check endpoint
 */
router.get("/health", WhopController.healthCheck);

export default router;
