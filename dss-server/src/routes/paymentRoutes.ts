import express from "express";
import PaymentController from "../controllers/paymentController";

const router = express.Router();

// POST /api/payment/confirm - Send payment confirmation emails
router.post("/confirm", PaymentController.confirmPayment);

export default router;
