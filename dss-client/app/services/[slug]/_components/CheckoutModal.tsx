"use client";

import React, { useState } from "react";
import { X, Loader2, CheckCircle, AlertCircle } from "lucide-react";
import { WhopCheckoutEmbed } from "@whop/checkout/react";
import { paymentAPI, WhopPaymentData } from "../../../api/payment";
import { getProductByPlanId } from "../../../../lib/service-data";
import CalendlyEmbed from "./CalendlyEmbed";
import { EbookDownload } from "./EbookDownload";

interface CheckoutModalProps {
  planId: string;
  isOpen: boolean;
  onClose: () => void;
  productName?: string;
}

const CheckoutModal: React.FC<CheckoutModalProps> = ({
  planId,
  isOpen,
  onClose,
  productName = "Product",
}) => {
  const [isProcessing, setIsProcessing] = useState(false);
  const [paymentStatus, setPaymentStatus] = useState<
    "idle" | "success" | "error"
  >("idle");
  const [errorMessage, setErrorMessage] = useState<string>("");
  const [paymentData, setPaymentData] = useState<WhopPaymentData | null>(null);
  const [purchasedProduct, setPurchasedProduct] = useState<{
    name: string;
    isConsultation: boolean;
    downloadLink?: string;
  } | null>(null);

  const handleComplete = async (
    completedPlanId: string,
    receiptId: string | undefined,
  ) => {
    console.log("[CHECKOUT] Payment completed:", {
      completedPlanId,
      receiptId,
    });

    if (!receiptId) {
      setPaymentStatus("error");
      setErrorMessage("No receipt ID provided");
      return;
    }

    setIsProcessing(true);
    setPaymentStatus("idle");
    setErrorMessage("");

    try {
      const response = await paymentAPI.retrieveWhopPayment(receiptId);

      setPaymentData(response.data);

      // Extract the plan ID from the payment data
      const paidPlanId = response.data.plan?.id;

      if (!paidPlanId) {
        throw new Error("Plan ID not found in payment data");
      }

      // Find the product that matches the plan ID
      const product = getProductByPlanId(paidPlanId);

      if (!product) {
        throw new Error("Product not found for the given plan ID");
      }

      // Store the product details
      setPurchasedProduct({
        name: product.name,
        isConsultation: product.isConsultation || false,
        downloadLink: product.downloadLink || undefined,
      });

      // Send confirmation emails via new endpoint
      try {
        await paymentAPI.confirmPaymentWhop({
          userEmail: response.data.user?.email || "",
          userName: response.data.user?.name || undefined,
          paymentId: response.data.id,
          productTitle: response.data.product?.title || product.name,
          amount: response.data.total,
          currency: response.data.currency || undefined,
          membershipStatus: response.data.membership?.status || undefined,
          downloadLink: product.downloadLink || undefined,
        });

        // console.log("[CHECKOUT] Confirmation emails sent successfully");
      } catch (emailError) {
        console.error(
          "[CHECKOUT] Failed to send confirmation emails:",
          emailError,
        );
        // Don't fail the entire process if emails fail
      }

      setPaymentStatus("success");

      // Don't auto-close if it's a consultation or ebook download
      // Let the user manually close after booking/downloading
    } catch (error) {
      console.error("[CHECKOUT] Payment verification failed:", error);
      setPaymentStatus("error");
      setErrorMessage(
        error instanceof Error ? error.message : "Payment verification failed",
      );
      setIsProcessing(false);
    }
  };

  const handleClose = () => {
    onClose();
    // Reset states
    setPaymentStatus("idle");
    setIsProcessing(false);
    setPaymentData(null);
    setPurchasedProduct(null);
    setErrorMessage("");
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-black/60 backdrop-blur-sm z-50 flex items-center justify-center p-4">
      <div className="relative bg-white dark:bg-slate-900 rounded-2xl max-w-4xl w-full max-h-[90vh] overflow-hidden shadow-2xl">
        {/* Close Button */}
        <button
          onClick={handleClose}
          disabled={isProcessing && paymentStatus === "idle"}
          className="absolute top-4 right-4 z-20 p-2 bg-slate-100 dark:bg-slate-800 hover:bg-slate-200 dark:hover:bg-slate-700 rounded-full transition-colors duration-300 disabled:opacity-50 disabled:cursor-not-allowed"
          aria-label="Close checkout"
        >
          <X className="h-6 w-6 text-slate-600 dark:text-slate-400" />
        </button>

        {/* Checkout Content */}
        <div className="p-8 overflow-y-auto max-h-[90vh]">
          {/* Show checkout embed only when payment is not successful */}
          {paymentStatus !== "success" && (
            <>
              <h3 className="text-2xl font-bold text-slate-800 dark:text-white mb-2 font-lilita-one pr-12">
                Complete Your Purchase
              </h3>
              <p className="text-slate-600 dark:text-gray-400 mb-6 font-nunito">
                {productName}
              </p>
            </>
          )}

          {/* Payment Status Messages */}
          {paymentStatus === "success" && purchasedProduct && (
            <div className="mb-6">
              <div className="p-4 bg-green-100 dark:bg-green-500/10 border border-green-300 dark:border-green-500/30 rounded-xl flex items-start gap-3 mb-6">
                <CheckCircle className="h-5 w-5 text-green-600 dark:text-green-400 flex-shrink-0 mt-0.5" />
                <div>
                  <p className="text-green-800 dark:text-green-300 font-semibold font-nunito">
                    Payment Successful!
                  </p>
                  <p className="text-green-700 dark:text-green-400 text-sm font-nunito mt-1">
                    Your payment has been processed successfully.
                  </p>
                </div>
              </div>

              {/* Render appropriate component based on product type */}
              {purchasedProduct.isConsultation ? (
                <div>
                  <h3 className="text-2xl font-bold text-slate-800 dark:text-white mb-4 font-lilita-one">
                    Book Your Consultation
                  </h3>
                  <p className="text-slate-600 dark:text-gray-400 mb-6 font-nunito">
                    Select a convenient time for your personalized consultation
                    session.
                  </p>
                  <CalendlyEmbed
                    url={
                      process.env.NEXT_PUBLIC_CALENDLY_EVENT_LINK ||
                      "https://calendly.com/digitalsparkssolutions-info/30min"
                    }
                  />
                </div>
              ) : (
                purchasedProduct.downloadLink && (
                  <EbookDownload
                    downloadLink={purchasedProduct.downloadLink}
                    productName={purchasedProduct.name}
                  />
                )
              )}
            </div>
          )}

          {paymentStatus === "error" && (
            <div className="mb-6 p-4 bg-red-100 dark:bg-red-500/10 border border-red-300 dark:border-red-500/30 rounded-xl flex items-start gap-3">
              <AlertCircle className="h-5 w-5 text-red-600 dark:text-red-400 flex-shrink-0 mt-0.5" />
              <div>
                <p className="text-red-800 dark:text-red-300 font-semibold font-nunito">
                  Payment Verification Failed
                </p>
                <p className="text-red-700 dark:text-red-400 text-sm font-nunito mt-1">
                  {errorMessage ||
                    "Something went wrong. Please contact support."}
                </p>
              </div>
            </div>
          )}

          {/* Processing Overlay */}
          {isProcessing && paymentStatus === "idle" && (
            <div className="absolute inset-0 bg-white/80 dark:bg-slate-900/80 backdrop-blur-sm z-10 flex items-center justify-center">
              <div className="text-center">
                <Loader2 className="h-12 w-12 animate-spin text-cyan-600 dark:text-cyan-400 mx-auto mb-4" />
                <p className="text-slate-800 dark:text-white font-semibold font-nunito">
                  Verifying your payment...
                </p>
                <p className="text-slate-600 dark:text-gray-400 text-sm font-nunito mt-2">
                  Please wait while we confirm your transaction
                </p>
              </div>
            </div>
          )}

          {/* Whop Checkout Embed - Only show when payment is not successful */}
          {paymentStatus !== "success" && (
            <div className="min-h-[500px]">
              <WhopCheckoutEmbed
                onComplete={handleComplete}
                fallback={
                  <div className="flex items-center justify-center min-h-[500px]">
                    <div className="text-center">
                      <Loader2 className="h-10 w-10 animate-spin text-cyan-600 dark:text-cyan-400 mx-auto mb-3" />
                      <p className="text-slate-600 dark:text-gray-400 font-nunito">
                        Loading secure checkout...
                      </p>
                    </div>
                  </div>
                }
                planId={planId}
                theme="light"
                hidePrice={false}
              />
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default CheckoutModal;
