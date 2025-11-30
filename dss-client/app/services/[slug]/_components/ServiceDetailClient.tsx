"use client";

import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import {
  ArrowLeft,
  Check,
  Sparkles,
  Target,
  Lightbulb,
  Users,
  TrendingUp,
  ShoppingCart,
  Download,
} from "lucide-react";
import { ServiceData } from "../../../../lib/service-data";
import CheckoutModal from "./CheckoutModal";

interface ServiceDetailClientProps {
  service: ServiceData;
}

const ServiceDetailClient: React.FC<ServiceDetailClientProps> = ({
  service,
}) => {
  const [selectedProduct, setSelectedProduct] = useState<{
    planId: string;
    name: string;
  } | null>(null);

  const handleBuyNow = (planId: string, productName: string) => {
    setSelectedProduct({ planId, name: productName });
  };

  const closeCheckout = () => {
    setSelectedProduct(null);
  };

  return (
    <div className="min-h-screen bg-white dark:bg-slate-950">
      {/* Hero Section */}
      <section className="relative py-24 lg:py-28 overflow-hidden">
        {/* Animated Dot Grid Background */}
        <div
          className="absolute inset-0 opacity-[0.08] dark:opacity-[0.15]"
          style={{
            backgroundImage: `radial-gradient(circle, rgba(34, 211, 238, 0.4) 1px, transparent 1px)`,
            backgroundSize: "40px 40px",
          }}
        />

        {/* Gradient Orbs */}
        <div className="absolute top-0 left-0 w-[500px] h-[500px] bg-cyan-400/20 dark:bg-cyan-500/20 rounded-full blur-[120px] animate-pulse" />
        <div
          className="absolute bottom-0 right-0 w-[500px] h-[500px] bg-blue-400/20 dark:bg-blue-500/20 rounded-full blur-[120px] animate-pulse"
          style={{ animationDelay: "1s" }}
        />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          {/* Back Button */}
          <Link
            href="/#services"
            className="inline-flex items-center gap-2 text-cyan-600 dark:text-cyan-400 hover:text-cyan-700 dark:hover:text-cyan-300 transition-colors duration-300 mb-8 group"
          >
            <ArrowLeft className="h-5 w-5 group-hover:-translate-x-1 transition-transform duration-300" />
            <span className="font-nunito font-semibold">Back to Services</span>
          </Link>

          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Left: Content */}
            <div>
              <div className="inline-flex items-center gap-2 px-4 py-2 bg-cyan-100 dark:bg-cyan-500/10 border border-cyan-300 dark:border-cyan-500/20 rounded-full mb-6">
                <Sparkles className="h-4 w-4 text-cyan-600 dark:text-cyan-400 animate-pulse" />
                <span className="text-cyan-700 dark:text-cyan-400 text-sm font-semibold font-nunito">
                  Expert Resources
                </span>
              </div>

              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-slate-800 dark:text-white mb-6 font-lilita-one leading-tight">
                <span className="bg-gradient-to-r from-slate-800 via-slate-600 to-slate-800 dark:from-white dark:via-cyan-200 dark:to-white bg-clip-text text-transparent">
                  {service.title}
                </span>
              </h1>

              <p className="text-xl text-slate-600 dark:text-gray-300 mb-8 leading-relaxed font-nunito">
                {service.description}
              </p>

              {/* Product count badge */}
              <div className="inline-flex items-center gap-2 px-4 py-2 bg-slate-100 dark:bg-slate-800/60 rounded-full mb-8">
                <Download className="h-4 w-4 text-slate-600 dark:text-slate-400" />
                <span className="text-slate-700 dark:text-slate-300 text-sm font-semibold font-nunito">
                  {service.products.length}{" "}
                  {service.products.length === 1
                    ? "Digital Guide"
                    : "Digital Guides"}{" "}
                  Available
                </span>
              </div>
            </div>

            {/* Right: Image */}
            <div className="relative">
              <div className="absolute inset-0 bg-gradient-to-br from-cyan-500/20 to-blue-500/20 rounded-3xl blur-3xl" />
              <div className="relative rounded-3xl overflow-hidden border-4 border-slate-300 dark:border-slate-700/50 shadow-2xl transform hover:scale-105 transition-transform duration-500">
                <Image
                  src={service.imageUrl}
                  alt={service.title}
                  width={800}
                  height={600}
                  className="w-full h-auto object-cover"
                  priority
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Products Section */}
      <section className="py-16 bg-slate-50 dark:bg-slate-900/50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-slate-800 dark:text-white mb-4 font-lilita-one">
              Choose Your Guide
            </h2>
            <p className="text-slate-600 dark:text-gray-400 text-lg font-nunito max-w-2xl mx-auto">
              Select the perfect resource for your needs. Each guide is packed
              with actionable insights and real-world strategies.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {service.products.map((product, idx) => (
              <div
                key={idx}
                className="group relative bg-white dark:bg-slate-800/40 rounded-2xl border border-slate-200 dark:border-slate-700/50 hover:border-cyan-500 dark:hover:border-cyan-500/50 transition-all duration-500 hover:shadow-2xl hover:shadow-cyan-500/20 overflow-hidden"
              >
                {/* Gradient overlay on hover */}
                <div
                  className={`absolute inset-0 ${service.gradient} opacity-0 group-hover:opacity-100 transition-opacity duration-500`}
                />

                <div className="relative z-10 p-6">
                  {/* Product Title */}
                  <h3 className="text-xl font-bold text-slate-800 dark:text-white mb-3 font-nunito group-hover:text-cyan-600 dark:group-hover:text-cyan-400 transition-colors duration-300 min-h-[3.5rem]">
                    {product.name}
                  </h3>

                  {/* Product Description */}
                  <p className="text-slate-600 dark:text-gray-400 mb-6 leading-relaxed font-nunito text-sm line-clamp-3 min-h-[4rem]">
                    {product.description}
                  </p>

                  {/* Price */}
                  <div className="mb-6 flex items-baseline gap-2">
                    <span
                      className={`text-3xl font-bold bg-gradient-to-r ${service.color} bg-clip-text text-transparent font-nunito`}
                    >
                      ${product.price}
                    </span>
                    <span className="text-sm text-slate-500 dark:text-slate-400 font-nunito">
                      USD
                    </span>
                  </div>

                  {/* Buy Now Button */}
                  <button
                    onClick={() => handleBuyNow(product.planId, product.name)}
                    className={`w-full py-3 px-6 bg-gradient-to-r ${service.color} text-white rounded-lg font-semibold hover:shadow-lg hover:shadow-cyan-500/30 transition-all duration-300 group-hover:scale-105 font-nunito flex items-center justify-center gap-2 relative overflow-hidden`}
                  >
                    <span className="relative z-10 flex items-center gap-2">
                      <ShoppingCart className="h-4 w-4" />
                      Get This Guide
                    </span>
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Overview Section */}
      <section className="py-16 bg-white dark:bg-slate-950">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto">
            <div className="flex items-center gap-3 mb-6">
              <div className="p-3 bg-cyan-100 dark:bg-cyan-500/10 rounded-lg">
                <Lightbulb className="h-6 w-6 text-cyan-600 dark:text-cyan-400" />
              </div>
              <h2 className="text-3xl font-bold text-slate-800 dark:text-white font-lilita-one">
                What You'll Learn
              </h2>
            </div>
            <p className="text-lg text-slate-600 dark:text-gray-300 leading-relaxed font-nunito">
              {service.detailedContent.overview}
            </p>
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-16 bg-slate-50 dark:bg-slate-900/50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto">
            <div className="flex items-center gap-3 mb-8">
              <div className="p-3 bg-green-100 dark:bg-green-500/10 rounded-lg">
                <TrendingUp className="h-6 w-6 text-green-600 dark:text-green-400" />
              </div>
              <h2 className="text-3xl font-bold text-slate-800 dark:text-white font-lilita-one">
                Key Benefits
              </h2>
            </div>
            <div className="grid md:grid-cols-2 gap-6">
              {service.detailedContent.benefits.map((benefit, idx) => (
                <div
                  key={idx}
                  className="flex items-start gap-4 p-4 bg-white dark:bg-slate-800/40 rounded-xl border border-slate-200 dark:border-slate-700/50 hover:border-cyan-500 dark:hover:border-cyan-500/30 transition-all duration-300 group"
                >
                  <div
                    className={`shrink-0 w-6 h-6 rounded-full bg-gradient-to-br ${service.color} flex items-center justify-center group-hover:scale-110 transition-transform duration-300`}
                  >
                    <Check className="h-4 w-4 text-white" />
                  </div>
                  <p className="text-slate-600 dark:text-gray-300 font-nunito leading-relaxed">
                    {benefit}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Who Is This For Section */}
      <section className="py-16 bg-white dark:bg-slate-950">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto">
            <div className="flex items-center gap-3 mb-8">
              <div className="p-3 bg-blue-100 dark:bg-blue-500/10 rounded-lg">
                <Users className="h-6 w-6 text-blue-600 dark:text-blue-400" />
              </div>
              <h2 className="text-3xl font-bold text-slate-800 dark:text-white font-lilita-one">
                Perfect For
              </h2>
            </div>
            <div className="grid md:grid-cols-2 gap-4">
              {service.detailedContent.whoIsThisFor.map((audience, idx) => (
                <div
                  key={idx}
                  className="flex items-center gap-3 p-4 bg-slate-50 dark:bg-slate-800/40 rounded-xl border border-slate-200 dark:border-slate-700/50 hover:border-blue-500 dark:hover:border-blue-500/30 transition-all duration-300 group"
                >
                  <Target className="h-5 w-5 text-blue-600 dark:text-blue-400 flex-shrink-0 group-hover:scale-110 transition-transform duration-300" />
                  <p className="text-slate-600 dark:text-gray-300 font-nunito">
                    {audience}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Final CTA Section */}
      <section className="py-20 bg-slate-50 dark:bg-slate-900/50 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-cyan-500/5 via-blue-500/5 to-cyan-500/5 blur-3xl" />
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
          <h2 className="text-3xl md:text-4xl font-bold text-slate-800 dark:text-white mb-6 font-lilita-one">
            Ready to Get Started?
          </h2>
          <p className="text-xl text-slate-600 dark:text-gray-300 mb-10 font-nunito max-w-2xl mx-auto">
            Choose your guide above and gain instant access to expert knowledge
            that will accelerate your success.
          </p>
          <div className="flex items-center justify-center gap-2 text-slate-600 dark:text-gray-400 font-nunito">
            <Check className="h-5 w-5 text-green-600 dark:text-green-400" />
            <span>Instant digital download</span>
            <span className="mx-2">•</span>
            <Check className="h-5 w-5 text-green-600 dark:text-green-400" />
            <span>Lifetime access</span>
          </div>
        </div>
      </section>

      {/* Checkout Modal */}
      {selectedProduct && (
        <CheckoutModal
          planId={selectedProduct.planId}
          isOpen={!!selectedProduct}
          onClose={closeCheckout}
          productName={selectedProduct.name}
        />
      )}
    </div>
  );
};

export default ServiceDetailClient;
