import path from "path";
import fs from "fs/promises";
import { CustomError } from "../../utils/customError";

export default class EbookService {
  // Path to ebooks directory
  private static EBOOKS_DIR = path.join(__dirname, "../../public/ebooks");

  /**
   * Get the full path to an ebook file
   */
  static async getEbookPath(filename: string): Promise<string> {
    const filePath = path.join(this.EBOOKS_DIR, filename);

    try {
      // Check if file exists
      await fs.access(filePath);
      return filePath;
    } catch (error) {
      throw new CustomError(`Ebook not found: ${filename}`, 404);
    }
  }

  /**
   * List all available ebooks
   */
  static async listAllEbooks(): Promise<string[]> {
    try {
      const files = await fs.readdir(this.EBOOKS_DIR);

      // Filter only PDF files
      const pdfFiles = files.filter((file) => file.endsWith(".pdf"));

      return pdfFiles;
    } catch (error) {
      console.error("Error listing ebooks:", error);
      throw new CustomError("Failed to list ebooks", 500);
    }
  }

  /**
   * Get full download URL for an ebook
   */
  static getDownloadUrl(filename: string, baseUrl: string): string {
    return `${baseUrl}/api/ebooks/${filename}`;
  }
}
