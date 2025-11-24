import axios from "axios";
import { CustomError } from "./customError";

export interface DownloadedFile {
  filename: string;
  content: Buffer;
  contentType: string;
}

/**
 * Download a file from a URL and return it as a Buffer
 */
export async function downloadFile(url: string): Promise<DownloadedFile> {
  try {
    // Validate URL
    if (!url || typeof url !== "string") {
      throw new CustomError("Invalid download URL provided", 400);
    }

    // Make request to download the file
    const response = await axios.get(url, {
      responseType: "arraybuffer",
      timeout: 30000, // 30 second timeout
      maxContentLength: 50 * 1024 * 1024, // 50MB max file size
    });

    // Extract filename from URL or Content-Disposition header
    let filename = "ebook.pdf";

    // Try to get filename from Content-Disposition header
    const contentDisposition = response.headers["content-disposition"];
    if (contentDisposition) {
      const filenameMatch = contentDisposition.match(/filename="?(.+)"?/i);
      if (filenameMatch) {
        filename = filenameMatch[1];
      }
    } else {
      // Extract from URL
      const urlParts = url.split("/");
      const lastPart = urlParts[urlParts.length - 1];
      if (lastPart && lastPart.includes(".")) {
        filename = decodeURIComponent(lastPart.split("?")[0]);
      }
    }

    // Get content type
    const contentType =
      response.headers["content-type"] || "application/octet-stream";

    // Convert to Buffer
    const content = Buffer.from(response.data);

    return {
      filename,
      content,
      contentType,
    };
  } catch (error) {
    console.error("Error downloading file:", error);

    if (axios.isAxiosError(error)) {
      if (error.response?.status === 404) {
        throw new CustomError("File not found at the provided URL", 404);
      }
      if (error.code === "ECONNABORTED") {
        throw new CustomError("Download timeout - file may be too large", 408);
      }
    }

    throw new CustomError(
      `Failed to download file: ${
        error instanceof Error ? error.message : "Unknown error"
      }`,
      500
    );
  }
}

/**
 * Validate if a URL is accessible
 */
export async function validateFileUrl(url: string): Promise<boolean> {
  try {
    const response = await axios.head(url, {
      timeout: 5000,
    });
    return response.status === 200;
  } catch (error) {
    return false;
  }
}
