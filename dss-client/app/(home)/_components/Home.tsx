"use client";

import React, { useEffect, useState } from "react";
import { ArrowRight, CheckCircle, Sparkles } from "lucide-react";

const Home: React.FC = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  const handleScroll = (
    e: React.MouseEvent<HTMLAnchorElement>,
    href: string,
  ) => {
    e.preventDefault();
    const targetId = href.substring(1);
    const element = document.getElementById(targetId);

    if (element) {
      const offset = 80;
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - offset;

      window.scrollTo({
        top: offsetPosition,
        behavior: "smooth",
      });
    }
  };

  const trustIndicators = [
    { label: "UK Business Registration" },
    { label: "CQC Compliance" },
    { label: "Job Sponsorship Solutions" },
  ];

  return (
    <section
      id="home"
      className="relative min-h-screen overflow-hidden pt-20 xl:pt-26 xl:pb-4 bg-white dark:bg-slate-900"
    >
      {/* Hero Section with Cover Image - Constrained like PostHeader */}
      <div className="relative h-[90vh] xl:h-[85vh] overflow-hidden">
        {/* Background container with max-width constraint */}
        <div className="absolute inset-0 flex items-center justify-center  ">
          <div className="relative w-full max-w-7xl h-full mx-auto px-4 sm:px-6 lg:px-8">
            {/* Cover Image */}
            <div
              className="absolute inset-0 bg-cover bg-center rounded-none md:rounded-2xl sm:mx-6 lg:mx-8"
              style={{
                backgroundImage:
                  "url('https://images.unsplash.com/photo-1542744173-8e7e53415bb0?q=80&w=2070')",
              }}
            />

            {/* Gradient Overlay - Dark to transparent for text readability */}
            <div className="absolute inset-0 bg-gradient-to-t from-black via-black/70 to-black/40 rounded-none md:rounded-2xl sm:mx-6 lg:mx-8" />

            {/* Animated Pattern Overlay */}
            <div
              className="absolute inset-0 opacity-10 rounded-none md:rounded-2xl"
              style={{
                backgroundImage: `radial-gradient(circle, rgba(34, 211, 238, 0.3) 1px, transparent 1px)`,
                backgroundSize: "40px 40px",
              }}
            />
          </div>
        </div>

        {/* Content Overlay */}
        <div className="absolute inset-0 flex items-center ">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full  flex items-center">
            <div className="max-w-5xl flex flex-col justify-around py-4 space-y-4 md:space-y-6 lg:space-y-6 px-4 sm:px-6 lg:px-8 h-[80vh]">
              {/* Badge */}
              <div
                className={`inline-flex self-start items-center gap-2 px-4 py-2 bg-gradient-to-r from-cyan-600 to-blue-600 text-white text-sm font-bold rounded-full shadow-lg transition-all duration-1000 ${
                  isVisible
                    ? "opacity-100 translate-y-0"
                    : "opacity-0 translate-y-4"
                }`}
              >
                <Sparkles className="h-4 w-4 animate-pulse" />
                Your UK Success Partner
              </div>

              {/* Main Heading */}
              <div
                className={`transition-all duration-1000 delay-200 ${
                  isVisible
                    ? "opacity-100 translate-y-0"
                    : "opacity-0 translate-y-4"
                }`}
              >
                <h1 className="text-2xl sm:text-3xl 2xl:text-5xl font-black text-white leading-normal sm:leading-tight font-lilita-one">
                  Expert Consulting for{" "}
                  <span className="bg-gradient-to-r from-cyan-400 via-blue-400 to-cyan-400 bg-clip-text text-transparent">
                    UK Business Registration
                  </span>
                  , Healthcare CQC Compliance, Job Sponsorship & Career Growth
                </h1>
              </div>

              {/* CTA Buttons */}
              <div
                className={`flex flex-col sm:flex-row gap-3 sm:gap-4 pt-3 md:pt-4 transition-all duration-1000 delay-400 ${
                  isVisible
                    ? "opacity-100 translate-y-0"
                    : "opacity-0 translate-y-4"
                }`}
              >
                <a
                  href="/services/book-a-consultation"
                  className="group relative inline-flex items-center justify-center gap-2 px-5 md:px-6 py-2.5 md:py-3 bg-gradient-to-r from-cyan-500 to-blue-600 text-white rounded-full overflow-hidden transition-all duration-300 shadow-2xl shadow-cyan-500/50 hover:shadow-cyan-500/70 hover:scale-105 font-nunito font-bold text-sm xl:text-base"
                >
                  <span className="relative z-10">Book a Consultation</span>
                  <ArrowRight className="h-4 w-4 md:h-5 md:w-5 relative z-10 group-hover:translate-x-1 transition-transform" />
                  <div className="absolute inset-0 bg-gradient-to-r from-cyan-400 to-blue-500 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                </a>

                <a
                  href="#services"
                  onClick={(e) => handleScroll(e, "#services")}
                  className="inline-flex items-center justify-center gap-2 px-5 md:px-6 py-2.5 md:py-3 bg-white/20 backdrop-blur-md text-white rounded-full border-2 border-white/30 hover:bg-white/30 hover:border-white/50 transition-all duration-300 font-nunito font-bold text-sm md:text-base group shadow-xl"
                >
                  View Our Services
                  <ArrowRight className="h-4 w-4 md:h-5 md:w-5 group-hover:translate-x-1 transition-transform" />
                </a>
              </div>

              {/* Trust Indicators - Hidden on small screens to save space */}
              <div
                className={`block pt-4 lg:pt-6 transition-all duration-1000 delay-600 ${
                  isVisible
                    ? "opacity-100 translate-y-0"
                    : "opacity-0 translate-y-4"
                }`}
              >
                <div className="flex flex-wrap gap-4 lg:gap-6 items-center border-t border-white/20 pt-4 lg:pt-6">
                  {trustIndicators.map((item, index) => (
                    <div
                      key={index}
                      className="hidden md:flex items-center gap-2 text-white font-nunito"
                    >
                      <CheckCircle className="h-4 w-4 lg:h-5 lg:w-5 text-cyan-400 flex-shrink-0" />
                      <span className="text-xs lg:text-sm font-semibold">
                        {item.label}
                      </span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Stats Section */}
              <div
                className={`hidden sm:grid grid-cols-2 md:grid-cols-4 gap-3 md:gap-4 pt-4 md:pt-6 transition-all duration-1000 delay-800 ${
                  isVisible
                    ? "opacity-100 translate-y-0"
                    : "opacity-0 translate-y-4"
                }`}
              >
                {[
                  { number: "500+", label: "Successful Clients" },
                  { number: "1000+", label: "Projects Completed" },
                  { number: "15+", label: "Industries Served" },
                  { number: "95%", label: "Success Rate" },
                ].map((stat, index) => (
                  <div
                    key={index}
                    className="text-center p-1.5 md:p-2 lg:p-2.5 bg-white/10 backdrop-blur-md rounded-lg border border-white/20 hover:bg-white/20 transition-all duration-300"
                  >
                    <div className="text-sm md:text-md lg:text-lg font-black text-cyan-400 font-lilita-one">
                      {stat.number}
                    </div>
                    <div className="text-xs lg:text-sm text-white font-nunito mt-0.5 md:mt-1">
                      {stat.label}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Scroll Indicator */}
        <div className="absolute bottom-6 md:bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
          <div className="w-6 h-10 border-2 border-white/50 rounded-full flex items-start justify-center p-2">
            <div className="w-1 h-3 bg-white/70 rounded-full animate-pulse" />
          </div>
        </div>
      </div>

      <style jsx>{`
        @keyframes gradient {
          0%,
          100% {
            background-position: 0% 50%;
          }
          50% {
            background-position: 100% 50%;
          }
        }

        .animate-gradient {
          background-size: 200% auto;
          animation: gradient 3s ease infinite;
        }
      `}</style>
    </section>
  );
};

export default Home;
