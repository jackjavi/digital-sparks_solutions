"use client";

import React, { useEffect, useState } from "react";
import { ArrowRight, Sparkles, CheckCircle } from "lucide-react";

const Home: React.FC = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  const handleScroll = (
    e: React.MouseEvent<HTMLAnchorElement>,
    href: string
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
      className="relative flex items-center justify-center min-h-screen md:h-screen pt-32 lg:pt-36 pb-16 md:py-24 overflow-hidden bg-gradient-to-br from-slate-50 via-white to-cyan-50 dark:from-slate-950 dark:via-slate-900 dark:to-slate-950"
    >
      {/* Background Pattern */}
      <div
        className="absolute inset-0 opacity-[0.03] dark:opacity-[0.08]"
        style={{
          backgroundImage: `radial-gradient(circle, rgba(34, 211, 238, 0.3) 1px, transparent 1px)`,
          backgroundSize: "40px 40px",
        }}
      />

      {/* Background Image Container with max-w-7xl and padding */}
      <div className="absolute inset-0 z-0 max-w-7xl mx-auto flex items-center justify-center px-4 sm:px-6 lg:px-8 pt-24 md:pt-28 pb-4 md:pb-8">
        <div className="relative w-full  h-full">
          {/* Background Image */}
          <div
            className="absolute inset-0 rounded-3xl  overflow-hidden shadow-2xl"
            style={{
              backgroundImage:
                "url('https://images.unsplash.com/photo-1542744173-8e7e53415bb0?q=80&w=2070')",
              backgroundSize: "cover",
              backgroundPosition: "center center",
              backgroundRepeat: "no-repeat",
            }}
          >
            {/* Very Light Overlay for Subtle Effect */}
            <div className="absolute inset-0 bg-white/20 dark:bg-slate-900/20"></div>
          </div>
        </div>
      </div>

      {/* Accent Gradient Elements */}
      <div className="absolute top-0 left-0 w-96 h-96 bg-cyan-500/10 dark:bg-cyan-500/5 rounded-full blur-3xl" />
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-blue-500/10 dark:bg-blue-500/5 rounded-full blur-3xl" />

      {/* Main Content Container */}
      <div className="relative z-10 max-w-7xl mx-auto  px-4 sm:px-6 lg:px-8 w-full">
        {/* Badge */}
        <div className="max-w-5xl mx-auto sm:flex sm:flex-col sm:items-center sm:justify-center pb-12">
          <div
            className={`inline-flex gap-2 mx-4 sm:mx-8 px-2 md:px-4 sm:w-[80vw] lg:w-[70vw] 2xl:w-[50vw] py-2 md:py-2 bg-white/95 dark:bg-slate-900/95 backdrop-blur-xl shadow-lg transition-all duration-1000 ${
              isVisible
                ? "opacity-100 translate-y-0"
                : "opacity-0 -translate-y-4"
            }`}
          >
            <Sparkles className="h-4 w-4 text-cyan-600 dark:text-cyan-400" />
            <span className="text-cyan-700 dark:text-cyan-300 text-xs md:text-sm font-light font-nunito uppercase tracking-wider">
              Your UK Success Partner
            </span>
          </div>
        </div>

        <div className=" max-w-5xl mx-auto sm:flex sm:flex-col sm:items-center sm:justify-center space-y-8 sm:space-y-12">
          {/* Main Heading */}
          <div
            className={`transition-all duration-1000 delay-200 ${
              isVisible
                ? "opacity-100 translate-y-0"
                : "opacity-0 -translate-y-4"
            }`}
          >
            <div className="inline-block sm:w-[80vw] lg:w-[70vw] 2xl:w-[50vw] mx-4 bg-white dark:bg-slate-900 backdrop-blur-xl  shadow-2xl px-2 py-2">
              <h1 className="text-start text-2xl sm:text-3xl lg:text-4xl 2xl:text-6xl font-bold text-slate-900 dark:text-white leading-tight font-lilita-one">
                Navigate UK business with <br className="hidden sm:block" />
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-600 via-blue-600 to-cyan-600 dark:from-cyan-400 dark:via-blue-400 dark:to-cyan-400">
                  expert consulting
                </span>
              </h1>
            </div>
          </div>

          {/* Description */}
          <div
            className={`transition-all duration-1000 delay-400 ${
              isVisible
                ? "opacity-100 translate-y-0"
                : "opacity-0 -translate-y-4"
            }`}
          >
            <div className="inline-block sm:w-[80vw] lg:w-[70vw] 2xl:w-[50vw] mx-4 bg-white  dark:bg-slate-900  backdrop-blur-xl  shadow-xl px-2 py-2">
              <p className="text-start text-sm sm:text-lg lg:text-xl 2xl:text-2xl text-slate-700 dark:text-gray-300 leading-relaxed font-nunito">
                From business registration to CQC compliance, job sponsorship,
                and strategic growth. We deliver tailored solutions for your UK
                business success.
              </p>
            </div>
          </div>

          {/* CTA Buttons */}
          <div
            className={`flex flex-col md:flex-row gap-4 md:gap-20 sm:w-[80vw] lg:w-[70vw] 2xl:w-[50vw] mx-4 tracking-tighter text-sm font-light uppercase justify-start items-center pt-4 transition-all duration-1000 delay-600 ${
              isVisible
                ? "opacity-100 translate-y-0"
                : "opacity-0 -translate-y-4"
            }`}
          >
            <a
              href="/services/book-a-consultation"
              className="group relative inline-flex items-center justify-center gap-2 px-6 2xl:px-6 py-2 2xl:py-4 bg-gradient-to-r from-cyan-500 to-blue-600 text-white rounded-full overflow-hidden transition-all duration-300 shadow-lg shadow-cyan-500/30 hover:shadow-cyan-500/50 hover:scale-105 font-nunito w-full sm:w-auto"
            >
              <span className="relative z-10">Book a Consultation</span>
              <ArrowRight className="h-5 w-5 relative z-10 group-hover:translate-x-1 transition-transform" />
              <div className="absolute inset-0 bg-gradient-to-r from-cyan-400 to-blue-500 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
            </a>

            <a
              href="#services"
              onClick={(e) => handleScroll(e, "#services")}
              className="inline-flex items-center justify-center gap-2 px-6 2xl:px-6 py-2 2xl:py-4 bg-white/95 dark:bg-slate-900/95 backdrop-blur-xl border-2 border-slate-300 dark:border-slate-700 text-slate-800 dark:text-white rounded-full hover:bg-white dark:hover:bg-slate-800 hover:border-cyan-500 dark:hover:border-cyan-500 transition-all duration-300 font-nunito group w-full sm:w-auto shadow-lg"
            >
              View Our Services
              <ArrowRight className="h-5 w-5 group-hover:translate-x-1 transition-transform" />
            </a>
          </div>

          {/* Trust Indicators */}
          <div
            className={`pt-8 transition-all duration-1000 delay-800 ${
              isVisible
                ? "opacity-100 translate-y-0"
                : "opacity-0 -translate-y-4"
            }`}
          >
            <div className="hidden md:inline-block sm:w-[80vw] lg:w-[70vw] 2xl:w-[50vw] mx-4 bg-white/75 dark:bg-slate-900/75 backdrop-blur-xl shadow-lg px-2 py-2 border-t-2 border-slate-200/75 dark:border-slate-700/75">
              <div className="flex flex-col sm:flex-row gap-4 sm:gap-12 justify-start items-center flex-wrap">
                {trustIndicators.map((item, index) => (
                  <div
                    key={index}
                    className="flex items-center gap-2 text-slate-800 dark:text-gray-200 font-nunito"
                  >
                    <CheckCircle className="h-5 w-5 text-cyan-600 dark:text-cyan-400 flex-shrink-0" />
                    <span className="text-xs sm:text-sm font-small">
                      {item.label}
                    </span>
                  </div>
                ))}
              </div>
            </div>
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

        .bg-gradient-radial {
          background: radial-gradient(
            circle at center,
            var(--tw-gradient-stops)
          );
        }
      `}</style>
    </section>
  );
};

export default Home;
