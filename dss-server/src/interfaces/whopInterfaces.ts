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

// Webhook payload structure
export interface WhopWebhookPayload {
  id: string;
  api_version: string;
  timestamp: string;
  type: "payment.succeeded";
  data: WhopPaymentData;
}

// Payment retrieve response
export interface WhopPaymentRetrieveResponse {
  success: boolean;
  data: WhopPaymentData;
}

// Payment retrieve error response
export interface WhopErrorResponse {
  error: {
    type: string;
    message: string;
  };
}
