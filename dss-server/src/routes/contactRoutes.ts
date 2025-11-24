import express from "express";
import ContactController from "../controllers/contactController";

const router = express.Router();

// POST /api/contact/submit - Submit contact form
router.post("/submit", ContactController.submitContact);

export default router;
