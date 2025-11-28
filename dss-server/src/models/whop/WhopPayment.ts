import mongoose, { Schema, Document } from "mongoose";

export interface IWhopPayment extends Document {
  // Payment identifiers
  paymentId: string;
  status: string | null;
  substatus: string;

  // Financial data (Whop sends these as strings sometimes)
  currency: string | null;
  total: string;
  subtotal: string;
  usdTotal: string;
  amountAfterFees: string;
  refundedAmount: string;

  // User information
  userId: string;
  userEmail: string;
  userName: string | null;
  userUsername: string | null;

  // Membership & Product
  membershipId: string;
  membershipStatus: string;
  planId: string;
  productId: string;
  productTitle: string | null;

  // Member
  memberId: string;
  memberPhone: string | null;

  // Company
  companyId: string;
  companyTitle: string | null;

  // Payment method details
  paymentMethodType: string | null;
  cardBrand: string | null;
  cardLast4: string | null;

  // Billing
  billingReason: string | null;
  billingAddress: {
    name: string | null;
    line1: string | null;
    line2: string | null;
    city: string | null;
    state: string | null;
    postalCode: string | null;
    country: string | null;
  } | null;

  // Promo code
  promoCode: {
    id: string;
    code: string;
    amountOff: number;
    promoType: string;
  } | null;

  // Status flags
  refundable: boolean;
  autoRefunded: boolean;
  retryable: boolean;
  voidable: boolean;

  // Timestamps
  createdAt: Date;
  paidAt: Date | null;
  refundedAt: Date | null;
  lastPaymentAttempt: Date | null;
  disputeAlertedAt: Date | null;

  // Metadata
  metadata: Record<string, any> | null;
  failureMessage: string | null;

  // Webhook metadata
  webhookId: string;
  webhookTimestamp: Date;
  webhookApiVersion: string;
}

const WhopPaymentSchema = new Schema<IWhopPayment>(
  {
    // Payment identifiers
    paymentId: { type: String, required: true, unique: true, index: true },
    status: { type: String, default: null },
    substatus: { type: String, required: true },

    // Financial data
    currency: { type: String, default: null },
    total: { type: String, required: true },
    subtotal: { type: String, required: true },
    usdTotal: { type: String, required: true },
    amountAfterFees: { type: String, required: true },
    refundedAmount: { type: String, required: true },

    // User information
    userId: { type: String, required: true, index: true },
    userEmail: { type: String, required: true, index: true },
    userName: { type: String, default: null },
    userUsername: { type: String, default: null },

    // Membership & Product
    membershipId: { type: String, required: true, index: true },
    membershipStatus: { type: String, required: true },
    planId: { type: String, required: true, index: true },
    productId: { type: String, required: true },
    productTitle: { type: String, default: null },

    // Member
    memberId: { type: String, required: true },
    memberPhone: { type: String, default: null },

    // Company
    companyId: { type: String, required: true },
    companyTitle: { type: String, default: null },

    // Payment method details
    paymentMethodType: { type: String, default: null },
    cardBrand: { type: String, default: null },
    cardLast4: { type: String, default: null },

    // Billing
    billingReason: { type: String, default: null },
    billingAddress: {
      type: {
        name: { type: String, default: null },
        line1: { type: String, default: null },
        line2: { type: String, default: null },
        city: { type: String, default: null },
        state: { type: String, default: null },
        postalCode: { type: String, default: null },
        country: { type: String, default: null },
      },
      default: null,
    },

    // Promo code
    promoCode: {
      type: {
        id: String,
        code: String,
        amountOff: Number,
        promoType: String,
      },
      default: null,
    },

    // Status flags
    refundable: { type: Boolean, required: true },
    autoRefunded: { type: Boolean, required: true },
    retryable: { type: Boolean, required: true },
    voidable: { type: Boolean, required: true },

    // Timestamps
    createdAt: { type: Date, required: true },
    paidAt: { type: Date, default: null },
    refundedAt: { type: Date, default: null },
    lastPaymentAttempt: { type: Date, default: null },
    disputeAlertedAt: { type: Date, default: null },

    // Metadata
    metadata: { type: Schema.Types.Mixed, default: null },
    failureMessage: { type: String, default: null },

    // Webhook metadata
    webhookId: { type: String, required: true },
    webhookTimestamp: { type: Date, required: true },
    webhookApiVersion: { type: String, required: true },
  },
  {
    timestamps: true, // Adds createdAt and updatedAt automatically
  }
);

// Create indexes for efficient querying
WhopPaymentSchema.index({ userId: 1, createdAt: -1 });
WhopPaymentSchema.index({ membershipId: 1, createdAt: -1 });
WhopPaymentSchema.index({ companyId: 1, createdAt: -1 });
WhopPaymentSchema.index({ status: 1, substatus: 1 });
WhopPaymentSchema.index({ webhookTimestamp: -1 });

const WhopPayment = mongoose.model<IWhopPayment>(
  "WhopPayment",
  WhopPaymentSchema
);

export default WhopPayment;
