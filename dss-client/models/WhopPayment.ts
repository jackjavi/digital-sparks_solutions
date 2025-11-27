import mongoose, { Schema, Document } from "mongoose";

export interface IWhopPayment extends Document {
  // Payment identifiers
  paymentId: string;
  status: string;
  substatus: string;

  // Financial data
  currency: string;
  total: number;
  subtotal: number;
  usdTotal: number;
  amountAfterFees: number;
  refundedAmount?: number;

  // User information
  userId: string;
  userEmail: string;
  userName?: string;
  userUsername?: string;

  // Membership & Product
  membershipId: string;
  membershipStatus: string;
  planId: string;
  productId: string;
  productTitle?: string;

  // Company
  companyId: string;
  companyTitle?: string;

  // Payment method details
  paymentMethodType?: string;
  cardBrand?: string;
  cardLast4?: string;

  // Billing
  billingReason?: string;
  billingAddress?: {
    name?: string;
    line1?: string;
    line2?: string;
    city?: string;
    state?: string;
    postalCode?: string;
    country?: string;
  };

  // Promo code
  promoCode?: {
    id: string;
    code: string;
    amountOff?: number;
    promoType?: string;
  };

  // Status flags
  refundable: boolean;
  autoRefunded: boolean;

  // Timestamps
  createdAt: Date;
  paidAt?: Date;
  refundedAt?: Date;

  // Metadata
  metadata?: Record<string, any>;

  // Webhook metadata
  webhookId: string;
  webhookTimestamp: Date;
}

const WhopPaymentSchema = new Schema<IWhopPayment>(
  {
    // Payment identifiers
    paymentId: { type: String, required: true, unique: true, index: true },
    status: { type: String, required: true },
    substatus: { type: String, required: true },

    // Financial data
    currency: { type: String, required: true },
    total: { type: Number, required: true },
    subtotal: { type: Number, required: true },
    usdTotal: { type: Number, required: true },
    amountAfterFees: { type: Number, required: true },
    refundedAmount: { type: Number, default: 0 },

    // User information
    userId: { type: String, required: true, index: true },
    userEmail: { type: String, required: true, index: true },
    userName: { type: String },
    userUsername: { type: String },

    // Membership & Product
    membershipId: { type: String, required: true, index: true },
    membershipStatus: { type: String, required: true },
    planId: { type: String, required: true, index: true },
    productId: { type: String, required: true },
    productTitle: { type: String },

    // Company
    companyId: { type: String, required: true },
    companyTitle: { type: String },

    // Payment method details
    paymentMethodType: { type: String },
    cardBrand: { type: String },
    cardLast4: { type: String },

    // Billing
    billingReason: { type: String },
    billingAddress: {
      name: String,
      line1: String,
      line2: String,
      city: String,
      state: String,
      postalCode: String,
      country: String,
    },

    // Promo code
    promoCode: {
      id: String,
      code: String,
      amountOff: Number,
      promoType: String,
    },

    // Status flags
    refundable: { type: Boolean, required: true },
    autoRefunded: { type: Boolean, required: true },

    // Timestamps
    createdAt: { type: Date, required: true },
    paidAt: { type: Date },
    refundedAt: { type: Date },

    // Metadata
    metadata: { type: Schema.Types.Mixed },

    // Webhook metadata
    webhookId: { type: String, required: true },
    webhookTimestamp: { type: Date, required: true },
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

export const WhopPayment =
  mongoose.models.WhopPayment ||
  mongoose.model<IWhopPayment>("WhopPayment", WhopPaymentSchema);
