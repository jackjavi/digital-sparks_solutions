"use client";

import React, { useEffect, useState } from "react";
import { ArrowRight, Sparkles, TrendingUp, Award } from "lucide-react";

const Home: React.FC = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [animatedText, setAnimatedText] = useState("");
  const fullText = "Making your brand genuine.";

  useEffect(() => {
    setIsVisible(true);

    // Animate tagline text
    let currentIndex = 0;
    const textInterval = setInterval(() => {
      if (currentIndex <= fullText.length) {
        setAnimatedText(fullText.slice(0, currentIndex));
        currentIndex++;
      } else {
        clearInterval(textInterval);
      }
    }, 200);

    return () => clearInterval(textInterval);
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

  const stats = [
    { icon: Award, value: "500+", label: "Happy Clients" },
    { icon: TrendingUp, value: "95%", label: "Success Rate" },
    { icon: Sparkles, value: "8+", label: "Services" },
  ];

  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center justify-center bg-gradient-to-br from-slate-50 via-white to-cyan-50 dark:from-slate-950 dark:via-slate-900 dark:to-slate-950 pt-24 lg:pt-28 pb-10 lg:pb-20 overflow-hidden"
    >
      {/* Enhanced Background Elements */}
      <div
        className="absolute inset-0 opacity-[0.08] dark:opacity-[0.15]"
        style={{
          backgroundImage: `radial-gradient(circle, rgba(34, 211, 238, 0.3) 1px, transparent 1px)`,
          backgroundSize: "50px 50px",
        }}
      />

      {/* Multiple Gradient Orbs for depth */}
      <div className="absolute top-0 left-0 w-[600px] h-[600px] bg-cyan-400/20 dark:bg-cyan-500/10 rounded-full blur-[150px] animate-pulse" />
      <div
        className="absolute top-1/4 left-1/4 w-[400px] h-[400px] bg-blue-300/20 dark:bg-blue-400/10 rounded-full blur-[100px] animate-pulse"
        style={{ animationDelay: "0.5s" }}
      />
      <div
        className="absolute bottom-0 right-0 w-[600px] h-[600px] bg-blue-400/20 dark:bg-blue-500/10 rounded-full blur-[150px] animate-pulse"
        style={{ animationDelay: "1s" }}
      />
      <div
        className="absolute bottom-1/4 right-1/4 w-[400px] h-[400px] bg-cyan-300/20 dark:bg-cyan-400/10 rounded-full blur-[100px] animate-pulse"
        style={{ animationDelay: "1.5s" }}
      />

      {/* 3D Cube Elements - Background on mobile only */}
      <div className="absolute inset-0 lg:hidden flex items-center justify-center opacity-10 dark:opacity-30">
        <div className="relative h-[550px] w-full flex items-center justify-center">
          <div className="relative w-full h-full flex items-center justify-center perspective-1000">
            {/* Main large cube */}
            <div
              className="absolute w-52 h-52"
              style={{
                transform: "rotateX(-25deg) rotateY(45deg)",
                transformStyle: "preserve-3d",
                animation: "float 6s ease-in-out infinite",
              }}
            >
              <div
                className="absolute inset-0 bg-gradient-to-br from-cyan-400 to-blue-600 opacity-90 rounded-3xl shadow-2xl shadow-cyan-500/50"
                style={{ transform: "translateZ(0px)" }}
              />
              <div
                className="absolute inset-0 bg-gradient-to-br from-cyan-500 to-blue-700 opacity-70 rounded-3xl"
                style={{ transform: "rotateY(90deg) translateZ(104px)" }}
              />
              <div
                className="absolute inset-0 bg-gradient-to-br from-blue-600 to-cyan-500 opacity-50 rounded-3xl"
                style={{ transform: "rotateX(90deg) translateZ(104px)" }}
              />
            </div>

            {/* Smaller cubes */}
            <div
              className="absolute w-36 h-36 top-4 right-8"
              style={{
                transform: "rotateX(-25deg) rotateY(45deg)",
                transformStyle: "preserve-3d",
                animation: "float 6s ease-in-out infinite 1s",
              }}
            >
              <div
                className="absolute inset-0 bg-gradient-to-br from-yellow-400 to-yellow-600 opacity-85 rounded-2xl shadow-xl shadow-yellow-500/40"
                style={{ transform: "translateZ(0px)" }}
              />
            </div>

            <div
              className="absolute w-28 h-28 bottom-12 right-16"
              style={{
                transform: "rotateX(-25deg) rotateY(45deg)",
                transformStyle: "preserve-3d",
                animation: "float 6s ease-in-out infinite 2s",
              }}
            >
              <div
                className="absolute inset-0 bg-gradient-to-br from-cyan-300 to-cyan-500 opacity-80 rounded-2xl shadow-xl shadow-cyan-500/40"
                style={{ transform: "translateZ(0px)" }}
              />
            </div>
          </div>
        </div>
      </div>

      {/* Main Content Container */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-12 gap-8 xl:gap-12 items-center">
          {/* Left Content */}
          <div className="lg:col-span-6 text-left">
            {/* Enhanced Badge */}
            <div
              className={`inline-flex items-center gap-2 px-5 py-2.5 bg-gradient-to-r from-cyan-100 to-blue-100 dark:from-cyan-500/10 dark:to-blue-500/10 border border-cyan-300 dark:border-cyan-500/30 rounded-full mb-8 transition-all duration-1000 backdrop-blur-sm ${
                isVisible
                  ? "opacity-100 translate-x-0"
                  : "opacity-0 -translate-x-4"
              }`}
            >
              <Sparkles className="h-4 w-4 text-cyan-600 dark:text-cyan-400 animate-pulse" />
              <span className="text-cyan-700 dark:text-cyan-400 text-sm font-semibold font-nunito">
                Your UK Success Partner
              </span>
            </div>

            {/* 3D Company Name */}
            <div
              className={`mb-6 transition-all duration-1000 delay-200 ${
                isVisible
                  ? "opacity-100 translate-x-0"
                  : "opacity-0 -translate-x-4"
              }`}
            >
              <h1 className="font-bold font-lilita-one leading-none">
                {/* DIGITAL */}
                <div className="relative inline-block mb-2">
                  <div className="text-3xl sm:text-4xl lg:text-5xl xl:text-6xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-cyan-600 via-blue-600 to-cyan-600 dark:from-cyan-400 dark:via-blue-500 dark:to-cyan-400 animate-gradient relative z-10 drop-shadow-[0_0_20px_rgba(34,211,238,0.3)] dark:drop-shadow-[0_0_30px_rgba(34,211,238,0.5)]">
                    DIGITAL
                  </div>
                  <div className="absolute top-1 left-1 text-3xl sm:text-4xl lg:text-5xl xl:text-6xl font-bold text-blue-300/40 dark:text-blue-600/40 -z-10">
                    DIGITAL
                  </div>
                  <div className="absolute top-2 left-2 text-3xl sm:text-4xl lg:text-5xl xl:text-6xl font-bold text-cyan-200/30 dark:text-cyan-900/30 -z-20">
                    DIGITAL
                  </div>
                </div>

                {/* SPARKS */}
                <div className="relative inline-block mb-2 ml-3">
                  <div className="text-3xl sm:text-4xl lg:text-5xl xl:text-6xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-blue-600 via-cyan-600 to-blue-600 dark:from-blue-500 dark:via-cyan-400 dark:to-blue-500 animate-gradient relative z-10 drop-shadow-[0_0_20px_rgba(59,130,246,0.3)] dark:drop-shadow-[0_0_30px_rgba(59,130,246,0.5)]">
                    SPARKS
                  </div>
                  <div className="absolute top-1 left-1 text-3xl sm:text-4xl lg:text-5xl xl:text-6xl font-bold text-cyan-300/40 dark:text-cyan-600/40 -z-10">
                    SPARKS
                  </div>
                  <div className="absolute top-2 left-2 text-3xl sm:text-4xl lg:text-5xl xl:text-6xl font-bold text-blue-200/30 dark:text-blue-900/30 -z-20">
                    SPARKS
                  </div>
                </div>

                {/* SOLUTIONS */}
                <div className="relative inline-block">
                  <div className="text-3xl sm:text-4xl lg:text-5xl xl:text-6xl font-bold text-slate-800 dark:text-white relative z-10 drop-shadow-[0_0_15px_rgba(15,23,42,0.2)] dark:drop-shadow-[0_0_20px_rgba(255,255,255,0.3)]">
                    SOLUTIONS
                  </div>
                  <div className="absolute top-1 left-1 text-3xl sm:text-4xl lg:text-5xl xl:text-6xl font-bold text-slate-300/50 dark:text-slate-400/40 -z-10">
                    SOLUTIONS
                  </div>
                  <div className="absolute top-2 left-2 text-3xl sm:text-4xl lg:text-5xl xl:text-6xl font-bold text-slate-200/40 dark:text-slate-700/30 -z-20">
                    SOLUTIONS
                  </div>
                </div>
              </h1>

              {/* Animated Tagline */}
              <div className="mt-6 md:mt-8 h-6 md:h-8 flex items-center">
                <p className="text-2xl sm:text-3xl lg:text-4xl font-semibold text-cyan-600 dark:text-cyan-400 font-nunito italic">
                  {animatedText}
                  <span className="inline-block w-0.5 h-6 md:h-8 bg-cyan-600 dark:bg-cyan-400 ml-1 animate-blink"></span>
                </p>
              </div>
            </div>

            {/* Description */}
            <p
              className={`text-lg sm:text-xl text-slate-600 dark:text-gray-300 mb-5 md:mb-10 leading-relaxed max-w-xl font-nunito transition-all duration-1000 delay-400 ${
                isVisible
                  ? "opacity-100 translate-x-0"
                  : "opacity-0 -translate-x-4"
              }`}
            >
              Navigate UK business registration, CQC compliance, job
              sponsorship, and growth strategies with expert consulting built
              for results.
            </p>

            {/* Stats Pills */}
            <div
              className={`flex flex-wrap gap-2 sm:gap-4 mb-5 md:mb-10 transition-all duration-1000 delay-500 ${
                isVisible
                  ? "opacity-100 translate-x-0"
                  : "opacity-0 -translate-x-4"
              }`}
            >
              {stats.map((stat, index) => {
                const Icon = stat.icon;
                return (
                  <div
                    key={index}
                    className="flex items-center gap-1.5 sm:gap-2 px-2.5 sm:px-4 py-1.5 sm:py-2 bg-white/80 dark:bg-slate-800/60 backdrop-blur-sm border border-slate-200 dark:border-slate-700/50 rounded-full hover:border-cyan-500 dark:hover:border-cyan-500/50 transition-all duration-300 group shadow-sm"
                  >
                    <Icon className="h-3.5 w-3.5 sm:h-4 sm:w-4 text-cyan-600 dark:text-cyan-400 group-hover:scale-110 transition-transform shrink-0" />
                    <span className="text-slate-800 dark:text-white font-bold text-xs sm:text-sm whitespace-nowrap">
                      {stat.value}
                    </span>
                    <span className="text-slate-600 dark:text-gray-300 text-xs sm:text-sm whitespace-nowrap">
                      {stat.label}
                    </span>
                  </div>
                );
              })}
            </div>

            {/* CTA Buttons */}
            <div
              className={`flex flex-col sm:flex-row gap-4 transition-all duration-1000 delay-600 ${
                isVisible
                  ? "opacity-100 translate-x-0"
                  : "opacity-0 -translate-x-4"
              }`}
            >
              <a
                href="/services/book-a-consultation"
                className="group relative inline-flex items-center justify-center gap-2 px-8 py-4 bg-gradient-to-r from-cyan-500 to-blue-600 text-white rounded-xl font-bold overflow-hidden transition-all duration-300 shadow-lg shadow-cyan-500/30 hover:shadow-cyan-500/50 hover:scale-105 font-nunito text-base"
              >
                <span className="relative z-10">Book a Consultation</span>
                <ArrowRight className="h-5 w-5 relative z-10 group-hover:translate-x-1 transition-transform" />
                <div className="absolute inset-0 bg-gradient-to-r from-cyan-400 to-blue-500 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              </a>
              <a
                href="#services"
                onClick={(e) => handleScroll(e, "#services")}
                className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-white dark:bg-slate-800/60 backdrop-blur-sm border-2 border-slate-300 dark:border-slate-700 text-slate-700 dark:text-white rounded-xl font-semibold hover:border-cyan-500 dark:hover:border-cyan-500/50 hover:bg-slate-50 dark:hover:bg-slate-800 transition-all duration-300 font-nunito text-base group shadow-md"
              >
                View Our Services
                <ArrowRight className="h-5 w-5 group-hover:translate-x-1 transition-transform" />
              </a>
            </div>

            {/* Trust Indicators */}
            <div
              className={`flex items-center gap-6 mt-10 transition-all duration-1000 delay-700 ${
                isVisible
                  ? "opacity-100 translate-x-0"
                  : "opacity-0 -translate-x-4"
              }`}
            >
              <div className="flex -space-x-2">
                {[1, 2, 3, 4].map((i) => (
                  <div
                    key={i}
                    className="w-10 h-10 rounded-full bg-gradient-to-br from-cyan-400 to-blue-600 border-2 border-white dark:border-slate-950 flex items-center justify-center text-white text-xs font-bold shadow-md"
                  >
                    {String.fromCharCode(64 + i)}
                  </div>
                ))}
              </div>
              <div>
                <p className="text-sm text-slate-600 dark:text-gray-300 font-nunito">
                  Trusted by{" "}
                  <span className="text-cyan-600 dark:text-cyan-400 font-semibold">
                    500+
                  </span>{" "}
                  businesses across the UK
                </p>
              </div>
            </div>
          </div>

          {/* Right Content - Enhanced 3D Visual (Desktop Only) */}
          <div
            className={`hidden lg:block lg:col-span-6 relative transition-all duration-1000 delay-400 ${
              isVisible
                ? "opacity-100 translate-x-0"
                : "opacity-0 translate-x-4"
            }`}
          >
            <div className="relative h-[600px] w-full flex items-center justify-center">
              <div className="relative w-full h-full flex items-center justify-center perspective-1000">
                {/* Main large cube with enhanced effects */}
                <div
                  className="absolute w-56 h-56"
                  style={{
                    transform: "rotateX(-25deg) rotateY(45deg)",
                    transformStyle: "preserve-3d",
                    animation: "float 6s ease-in-out infinite",
                  }}
                >
                  <div
                    className="absolute inset-0 bg-gradient-to-br from-cyan-400 to-blue-600 opacity-95 rounded-3xl shadow-2xl shadow-cyan-500/60"
                    style={{ transform: "translateZ(0px)" }}
                  />
                  <div
                    className="absolute inset-0 bg-gradient-to-br from-cyan-500 to-blue-700 opacity-75 rounded-3xl"
                    style={{ transform: "rotateY(90deg) translateZ(112px)" }}
                  />
                  <div
                    className="absolute inset-0 bg-gradient-to-br from-blue-600 to-cyan-500 opacity-60 rounded-3xl"
                    style={{ transform: "rotateX(90deg) translateZ(112px)" }}
                  />
                </div>

                {/* Yellow cube */}
                <div
                  className="absolute w-40 h-40 top-4 right-8"
                  style={{
                    transform: "rotateX(-25deg) rotateY(45deg)",
                    transformStyle: "preserve-3d",
                    animation: "float 6s ease-in-out infinite 1s",
                  }}
                >
                  <div
                    className="absolute inset-0 bg-gradient-to-br from-yellow-400 to-yellow-600 opacity-90 rounded-2xl shadow-xl shadow-yellow-500/50"
                    style={{ transform: "translateZ(0px)" }}
                  />
                  <div
                    className="absolute inset-0 bg-gradient-to-br from-yellow-500 to-yellow-700 opacity-70 rounded-2xl"
                    style={{ transform: "rotateY(90deg) translateZ(80px)" }}
                  />
                </div>

                {/* Small cyan cube */}
                <div
                  className="absolute w-32 h-32 bottom-12 right-16"
                  style={{
                    transform: "rotateX(-25deg) rotateY(45deg)",
                    transformStyle: "preserve-3d",
                    animation: "float 6s ease-in-out infinite 2s",
                  }}
                >
                  <div
                    className="absolute inset-0 bg-gradient-to-br from-cyan-300 to-cyan-500 opacity-85 rounded-2xl shadow-xl shadow-cyan-500/50"
                    style={{ transform: "translateZ(0px)" }}
                  />
                  <div
                    className="absolute inset-0 bg-gradient-to-br from-cyan-400 to-cyan-600 opacity-65 rounded-2xl"
                    style={{ transform: "rotateY(90deg) translateZ(64px)" }}
                  />
                </div>

                {/* Logo cube with circuit board design */}
                <div
                  className="absolute w-36 h-36"
                  style={{
                    transform: "rotateX(-25deg) rotateY(45deg)",
                    transformStyle: "preserve-3d",
                    animation: "float 6s ease-in-out infinite 0.5s",
                    left: "32%",
                    top: "48%",
                  }}
                >
                  <div
                    className="absolute inset-0 bg-gradient-to-br from-teal-500 to-teal-700 opacity-98 rounded-2xl shadow-2xl shadow-teal-500/60 flex items-center justify-center overflow-hidden"
                    style={{ transform: "translateZ(0px)" }}
                  >
                    {/* Circuit pattern overlay */}
                    <div className="absolute inset-0 opacity-20">
                      <div className="absolute top-1/4 left-1/4 w-8 h-0.5 bg-white"></div>
                      <div className="absolute top-1/4 left-1/4 w-0.5 h-8 bg-white"></div>
                      <div className="absolute bottom-1/4 right-1/4 w-8 h-0.5 bg-white"></div>
                      <div className="absolute bottom-1/4 right-1/4 w-0.5 h-8 bg-white"></div>
                    </div>
                    <div className="text-white text-5xl font-bold relative z-10 drop-shadow-lg">
                      D
                    </div>
                  </div>
                  <div
                    className="absolute inset-0 bg-gradient-to-br from-teal-600 to-teal-800 opacity-75 rounded-2xl"
                    style={{ transform: "rotateY(90deg) translateZ(72px)" }}
                  />
                </div>
              </div>

              {/* Enhanced Glow effects */}
              <div className="absolute top-1/4 right-1/4 w-72 h-72 bg-cyan-400/30 dark:bg-cyan-500/25 rounded-full blur-3xl animate-pulse"></div>
              <div
                className="absolute bottom-1/3 left-1/4 w-64 h-64 bg-blue-400/30 dark:bg-blue-500/25 rounded-full blur-3xl animate-pulse"
                style={{ animationDelay: "1s" }}
              ></div>

              {/* Floating particles */}
              <div className="absolute top-10 right-10 w-2 h-2 bg-cyan-500 dark:bg-cyan-400 rounded-full animate-ping"></div>
              <div
                className="absolute bottom-20 left-10 w-2 h-2 bg-blue-500 dark:bg-blue-400 rounded-full animate-ping"
                style={{ animationDelay: "0.5s" }}
              ></div>
              <div
                className="absolute top-1/2 right-20 w-2 h-2 bg-yellow-500 dark:bg-yellow-400 rounded-full animate-ping"
                style={{ animationDelay: "1s" }}
              ></div>
            </div>
          </div>
        </div>
      </div>

      <style jsx>{`
        @keyframes pulse {
          0%,
          100% {
            opacity: 0.4;
          }
          50% {
            opacity: 0.6;
          }
        }

        @keyframes float {
          0%,
          100% {
            transform: translateY(0px) rotateX(-25deg) rotateY(45deg);
          }
          50% {
            transform: translateY(-20px) rotateX(-25deg) rotateY(45deg);
          }
        }

        @keyframes gradient {
          0%,
          100% {
            background-position: 0% 50%;
          }
          50% {
            background-position: 100% 50%;
          }
        }

        @keyframes blink {
          0%,
          49% {
            opacity: 1;
          }
          50%,
          100% {
            opacity: 0;
          }
        }

        .perspective-1000 {
          perspective: 1000px;
        }

        .animate-gradient {
          background-size: 200% auto;
          animation: gradient 3s ease infinite;
        }

        .animate-blink {
          animation: blink 1s step-end infinite;
        }
      `}</style>
    </section>
  );
};

export default Home;
