import express from "express";
import EbookController from "../../controllers/ebooks/ebookController";

const router = express.Router();

// GET /api/ebooks/:filename - Download ebook
router.get("/:filename", EbookController.downloadEbook);

// GET /api/ebooks/list - Get list of available ebooks (optional, for admin)
router.get("/", EbookController.listEbooks);

export default router;
