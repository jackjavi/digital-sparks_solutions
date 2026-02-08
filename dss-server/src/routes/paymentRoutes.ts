import express from "express";
import PaymentController from "../controllers/paymentController";

const router = express.Router();

// POST /api/payment/confirm - Send payment confirmation emails (Stripe)
router.post("/confirm", PaymentController.confirmPayment);

// POST /api/payment/whop/confirm - Send payment confirmation emails (Whop)
router.post("/whop/confirm", PaymentController.confirmPaymentWhop);

export default router;
