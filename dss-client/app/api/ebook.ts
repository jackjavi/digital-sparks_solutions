import axios from "axios";

const API_BASE_URL =
  process.env.NEXT_PUBLIC_API_URL || "https://digitalsparkssolutions.com";

export const ebookAPI = {
  /**
   * Get download URL for an ebook
   */
  getDownloadUrl: (filename: string): string => {
    return `${API_BASE_URL}/api/ebooks/${filename}`;
  },

  /**
   * Get list of all available ebooks
   */
  listEbooks: async (): Promise<string[]> => {
    try {
      const response = await axios.get(`${API_BASE_URL}/api/ebooks`);
      return response.data.data;
    } catch (error) {
      console.error("Error fetching ebooks:", error);
      throw error;
    }
  },
};
