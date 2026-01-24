import { Request, Response, NextFunction } from "express";
import EbookService from "../../services/ebooks/ebookService";
import { CustomError } from "../../utils/customError";

export default class EbookController {
  /**
   * Download an ebook by filename (supports PDF and CSV)
   */
  static async downloadEbook(req: Request, res: Response, next: NextFunction) {
    try {
      const { filename } = req.params;

      // Validate filename
      if (!filename) {
        throw new CustomError("Filename is required", 400);
      }

      // Validate file extension (PDF or CSV only)
      const isPdf = filename.endsWith(".pdf");
      const isCsv = filename.endsWith(".csv");

      if (!isPdf && !isCsv) {
        throw new CustomError("Only PDF and CSV files are allowed", 400);
      }

      // Security: Prevent directory traversal attacks
      if (
        filename.includes("..") ||
        filename.includes("/") ||
        filename.includes("\\")
      ) {
        throw new CustomError("Invalid filename", 400);
      }

      // Get the file path
      const filePath = await EbookService.getEbookPath(filename);

      // Set appropriate headers based on file type
      if (isPdf) {
        res.setHeader("Content-Type", "application/pdf");
        res.setHeader(
          "Content-Disposition",
          `attachment; filename="${filename}"`,
        );
      } else if (isCsv) {
        res.setHeader("Content-Type", "text/csv");
        res.setHeader(
          "Content-Disposition",
          `attachment; filename="${filename}"`,
        );
      }

      // Send the file
      return res.sendFile(filePath);
    } catch (error) {
      next(error);
    }
  }

  /**
   * List all available ebooks (optional - for admin purposes)
   */
  static async listEbooks(req: Request, res: Response, next: NextFunction) {
    try {
      const ebooks = await EbookService.listAllEbooks();

      return res.status(200).json({
        success: true,
        count: ebooks.length,
        data: ebooks,
      });
    } catch (error) {
      next(error);
    }
  }
}
