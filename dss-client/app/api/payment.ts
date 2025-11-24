import axios from "axios";

const API_BASE_URL =
  process.env.NEXT_PUBLIC_API_URL || "https://digitalsparkssolutions.com";

interface PaymentConfirmationData {
  userEmail: string;
  userName?: string;
  sessionId: string;
  downloadLink?: string; // Add this field
}

interface PaymentConfirmationResponse {
  success: boolean;
  message: string;
  data: {
    emailSent: boolean;
    timestamp: string;
  };
}

export const paymentAPI = {
  /**
   * Send payment confirmation emails
   */
  confirmPayment: async (
    data: PaymentConfirmationData
  ): Promise<PaymentConfirmationResponse> => {
    try {
      const response = await axios.post(
        `${API_BASE_URL}/api/payment/confirm`,
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
          error.response?.data?.error?.message || "Failed to send confirmation";
        throw new Error(errorMessage);
      }
      throw new Error("An unexpected error occurred");
    }
  },
};
