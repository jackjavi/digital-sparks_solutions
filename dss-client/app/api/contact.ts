import axios from "axios";

const API_BASE_URL =
  process.env.NEXT_PUBLIC_API_URL || "https://digitalsparkssolutions.com";

interface ContactFormData {
  firstName: string;
  lastName: string;
  email: string;
  phone: string;
  service: string;
  message: string;
}

interface ContactResponse {
  success: boolean;
  message: string;
  data: {
    emailSent: boolean;
    timestamp: string;
  };
}

export const contactAPI = {
  /**
   * Send contact form submission
   */
  submitContact: async (data: ContactFormData): Promise<ContactResponse> => {
    try {
      const response = await axios.post(
        `${API_BASE_URL}/api/contact/submit`,
        data,
        {
          headers: {
            "Content-Type": "application/json",
          },
        }
      );
      return response.data;
    } catch (error) {
      if (axios.isAxiosError(error)) {
        const errorMessage =
          error.response?.data?.error?.message ||
          "Failed to submit contact form";
        throw new Error(errorMessage);
      }
      throw new Error("An unexpected error occurred");
    }
  },
};
