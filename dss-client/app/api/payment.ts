import axios from "axios";

const API_BASE_URL =
  process.env.NEXT_PUBLIC_API_BASE_URL || "https://digitalsparkssolutions.com";

interface PaymentConfirmationData {
  userEmail: string;
  userName?: string;
  sessionId: string;
  downloadLink?: string;
}

export interface WhopPaymentConfirmationData {
  userEmail: string;
  userName?: string;
  paymentId: string;
  productTitle?: string;
  amount?: string;
  currency?: string;
  membershipStatus?: string;
  downloadLink?: string;
}

interface PaymentConfirmationResponse {
  success: boolean;
  message: string;
  data: {
    emailSent: boolean;
    timestamp: string;
  };
}

export interface WhopPaymentData {
  id: string;
  status: string | null;
  substatus: string;
  refundable: boolean;
  retryable: boolean;
  voidable: boolean;
  created_at: string;
  paid_at: string | null;
  last_payment_attempt: string | null;
  dispute_alerted_at: string | null;
  refunded_at: string | null;
  plan: { id: string } | null;
  product: { id: string; title: string; route: string } | null;
  user: {
    id: string;
    name: string | null;
    username: string | null;
    email: string;
  } | null;
  membership: { id: string; status: string } | null;
  member: { id: string; phone: string | null } | null;
  company: { id: string; title: string; route: string } | null;
  promo_code: {
    id: string;
    code: string;
    amount_off: number;
    base_currency: string;
    promo_type: string;
    number_of_intervals: number;
  } | null;
  currency: string | null;
  total: string;
  subtotal: string;
  usd_total: string;
  refunded_amount: string;
  auto_refunded: boolean;
  amount_after_fees: string;
  card_brand: string | null;
  card_last4: string | null;
  billing_address: {
    name: string;
    line1: string;
    line2: string;
    city: string;
    state: string;
    postal_code: string;
    country: string;
  } | null;
  payment_method_type: string | null;
  billing_reason: string | null;
  failure_message: string | null;
  metadata: Record<string, any> | null;
}

interface WhopPaymentResponse {
  success: boolean;
  data: WhopPaymentData;
}

export const paymentAPI = {
  /**
   * Send payment confirmation emails
   */
  confirmPayment: async (
    data: PaymentConfirmationData,
  ): Promise<PaymentConfirmationResponse> => {
    try {
      const response = await axios.post(
        `${API_BASE_URL}/api/payment/confirm`,
        data,
        {
          headers: {
            "Content-Type": "application/json",
          },
        },
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

  /**
   * Send Whop payment confirmation emails
   */
  confirmPaymentWhop: async (
    data: WhopPaymentConfirmationData,
  ): Promise<PaymentConfirmationResponse> => {
    try {
      const response = await axios.post(
        `${API_BASE_URL}/api/payment/whop/confirm`,
        data,
        {
          headers: {
            "Content-Type": "application/json",
          },
        },
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

  /**
   * Retrieve and verify Whop payment
   */
  retrieveWhopPayment: async (
    receiptId: string,
  ): Promise<WhopPaymentResponse> => {
    try {
      const response = await axios.post(
        `${API_BASE_URL}/api/whop/payment/retrieve`,
        { receiptId },
        {
          headers: {
            "Content-Type": "application/json",
          },
        },
      );
      return response.data;
    } catch (error) {
      if (axios.isAxiosError(error)) {
        const errorMessage =
          error.response?.data?.error?.message || "Failed to verify payment";
        throw new Error(errorMessage);
      }
      throw new Error("An unexpected error occurred");
    }
  },
};
