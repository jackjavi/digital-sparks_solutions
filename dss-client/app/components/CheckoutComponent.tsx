"use client";

import React, { useState } from "react";
import { ShoppingCart, Loader2, ArrowRight } from "lucide-react";

interface CheckoutComponentProps {
  priceId: string;
  quantity: number;
  searchParams?: Record<string, string | string[] | undefined>;
}

export default function CheckoutComponent({
  priceId,
  quantity,
  searchParams,
}: CheckoutComponentProps) {
  const [isLoading, setIsLoading] = useState(false);
  const canceled = searchParams?.canceled;

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsLoading(true);

    try {
      const formData = new FormData();
      formData.append("price_id", priceId);
      formData.append("quantity", quantity.toString());

      const response = await fetch("/api/checkout_sessions", {
        method: "POST",
        body: formData,
      });

      const data = await response.json();

      if (!response.ok) {
        throw new Error(data.error || "Checkout failed");
      }

      // Redirect to Stripe Checkout
      if (data.url) {
        window.location.href = data.url;
      } else {
        throw new Error("No checkout URL received");
      }
    } catch (error) {
      console.error("Checkout error:", error);
      alert("Something went wrong. Please try again.");
      setIsLoading(false);
    }
  };

  if (canceled) {
    return (
      <div className="p-6 bg-yellow-100 dark:bg-yellow-500/10 border border-yellow-300 dark:border-yellow-500/30 rounded-xl max-w-md mx-auto">
        <p className="text-yellow-800 dark:text-yellow-300 font-nunito text-center">
          Order canceled — continue to explore our services and checkout when
          you're ready.
        </p>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="w-full">
      <button
        type="submit"
        disabled={isLoading}
        className="group relative inline-flex items-center justify-center gap-3 px-8 py-4 bg-gradient-to-r from-cyan-500 to-blue-600 text-white rounded-xl font-semibold hover:from-cyan-400 hover:to-blue-500 transition-all duration-300 shadow-lg shadow-cyan-500/30 hover:shadow-cyan-500/50 hover:scale-105 font-nunito disabled:opacity-50 disabled:cursor-not-allowed disabled:hover:scale-100 overflow-hidden"
      >
        {/* Animated background on hover */}
        <span className="absolute inset-0 bg-gradient-to-r from-blue-600 to-cyan-500 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

        {/* Button content */}
        <span className="relative z-10 flex items-center gap-3">
          {isLoading ? (
            <>
              <Loader2 className="h-5 w-5 animate-spin" />
              Processing...
            </>
          ) : (
            <>
              <ShoppingCart className="h-5 w-5" />
              Get Started Now
              <ArrowRight className="h-5 w-5 group-hover:translate-x-1 transition-transform duration-300" />
            </>
          )}
        </span>

        {/* Shine effect */}
        <span className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none">
          <span className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1000" />
        </span>
      </button>
    </form>
  );
}
