"use client";

import React from "react";
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
} from "lucide-react";
import { ServiceData } from "../../lib/service-data";
import ServiceCTA from "../components/ServiceCTA";

interface ServiceDetailClientProps {
  service: ServiceData;
}

const ServiceDetailClient: React.FC<ServiceDetailClientProps> = ({
  service,
}) => {
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
                  Professional Service
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

              {/* Quick Features */}
              <div className="flex flex-wrap gap-3 mb-8">
                {service.features.map((feature, idx) => (
                  <span
                    key={idx}
                    className={`px-4 py-2 bg-gradient-to-br ${service.color} bg-opacity-10 border border-cyan-300 dark:border-cyan-500/20 rounded-full text-cyan-700 dark:text-cyan-300 text-sm font-semibold font-nunito`}
                  >
                    {feature}
                  </span>
                ))}
              </div>

              <ServiceCTA
                priceId={service.price_id}
                quantity={service.quantity}
              />
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

      {/* Overview Section */}
      <section className="py-16 bg-slate-100 dark:bg-slate-900/50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto">
            <div className="flex items-center gap-3 mb-6">
              <div className="p-3 bg-cyan-100 dark:bg-cyan-500/10 rounded-lg">
                <Lightbulb className="h-6 w-6 text-cyan-600 dark:text-cyan-400" />
              </div>
              <h2 className="text-3xl font-bold text-slate-800 dark:text-white font-lilita-one">
                Overview
              </h2>
            </div>
            <p className="text-lg text-slate-600 dark:text-gray-300 leading-relaxed font-nunito">
              {service.detailedContent.overview}
            </p>
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-16 bg-white dark:bg-slate-950">
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
                  className="flex items-start gap-4 p-4 bg-slate-50 dark:bg-slate-800/40 rounded-xl border border-slate-200 dark:border-slate-700/50 hover:border-cyan-500 dark:hover:border-cyan-500/30 transition-all duration-300 group"
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

      {/* What You Get Section */}
      <section className="py-16 bg-slate-100 dark:bg-slate-900/50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto">
            <div className="flex items-center gap-3 mb-8">
              <div className="p-3 bg-purple-100 dark:bg-purple-500/10 rounded-lg">
                <Sparkles className="h-6 w-6 text-purple-600 dark:text-purple-400" />
              </div>
              <h2 className="text-3xl font-bold text-slate-800 dark:text-white font-lilita-one">
                What You Get
              </h2>
            </div>
            <div className="space-y-4">
              {service.detailedContent.whatYouGet.map((item, idx) => (
                <div
                  key={idx}
                  className="flex items-start gap-4 p-5 bg-white dark:bg-slate-800/40 rounded-xl border border-slate-200 dark:border-slate-700/50 hover:border-purple-500 dark:hover:border-purple-500/30 hover:translate-x-2 transition-all duration-300 shadow-sm"
                >
                  <span
                    className={`shrink-0 w-8 h-8 rounded-lg bg-gradient-to-br ${service.color} flex items-center justify-center font-bold text-white text-sm`}
                  >
                    {idx + 1}
                  </span>
                  <p className="text-slate-600 dark:text-gray-300 font-nunito leading-relaxed pt-1">
                    {item}
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
                Who Is This For?
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

      {/* Process Section */}
      <section className="py-16 bg-slate-100 dark:bg-slate-900/50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold text-slate-800 dark:text-white mb-4 font-lilita-one text-center">
              Our Process
            </h2>
            <p className="text-slate-600 dark:text-gray-400 text-center mb-12 font-nunito text-lg">
              Here's how we'll work together to achieve your goals
            </p>

            <div className="space-y-8">
              {service.detailedContent.process.map((step, idx) => (
                <div
                  key={idx}
                  className="relative pl-12 pb-8 border-l-2 border-slate-300 dark:border-slate-700 last:border-l-0 last:pb-0"
                >
                  {/* Step Number Circle */}
                  <div
                    className={`absolute left-0 -translate-x-1/2 w-10 h-10 rounded-full bg-gradient-to-br ${service.color} flex items-center justify-center font-bold text-white shadow-lg`}
                  >
                    {step.step}
                  </div>

                  {/* Step Content */}
                  <div className="bg-white dark:bg-slate-800/40 rounded-xl p-6 border border-slate-200 dark:border-slate-700/50 hover:border-cyan-500 dark:hover:border-cyan-500/30 transition-all duration-300 shadow-sm">
                    <h3 className="text-xl font-bold text-slate-800 dark:text-white mb-3 font-nunito">
                      {step.title}
                    </h3>
                    <p className="text-slate-600 dark:text-gray-300 leading-relaxed font-nunito">
                      {step.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Final CTA Section */}
      <section className="py-20 bg-white dark:bg-slate-950 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-cyan-500/5 via-blue-500/5 to-cyan-500/5 blur-3xl" />
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
          <h2 className="text-3xl md:text-4xl font-bold text-slate-800 dark:text-white mb-6 font-lilita-one">
            Ready to Get Started?
          </h2>
          <p className="text-xl text-slate-600 dark:text-gray-300 mb-10 font-nunito max-w-2xl mx-auto">
            Take the first step towards achieving your goals. Invest in your
            success today.
          </p>
          <ServiceCTA priceId={service.price_id} quantity={service.quantity} />
        </div>
      </section>
    </div>
  );
};

export default ServiceDetailClient;
