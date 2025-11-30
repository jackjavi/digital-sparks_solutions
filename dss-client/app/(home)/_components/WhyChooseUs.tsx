"use client";

import React, { useEffect, useRef, useState } from "react";
import {
  Shield,
  Target,
  Zap,
  Users,
  Award,
  TrendingUp,
  Heart,
  Sparkles,
  CheckCircle,
  Globe,
  Clock,
  Lightbulb,
} from "lucide-react";

const WhyChooseUs: React.FC = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [visibleCards, setVisibleCards] = useState<number[]>([]);
  const sectionRef = useRef<HTMLDivElement>(null);
  const observerRef = useRef<IntersectionObserver | null>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setIsVisible(true);
          }
        });
      },
      { threshold: 0.1 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    observerRef.current = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const index = parseInt(
              entry.target.getAttribute("data-index") || "0"
            );
            setVisibleCards((prev) => [...new Set([...prev, index])]);
          }
        });
      },
      { threshold: 0.1 }
    );

    const cards = document.querySelectorAll(".why-card");
    cards.forEach((card) => {
      observerRef.current?.observe(card);
    });

    return () => {
      observerRef.current?.disconnect();
    };
  }, []);

  const reasons = [
    {
      icon: Target,
      title: "UK Market Expertise",
      description:
        "Deep understanding of UK business landscape, regulations, and cultural nuances ensures your success from day one.",
      color: "from-cyan-500 to-blue-600",
      bgColor: "bg-cyan-500/10",
    },
    {
      icon: Users,
      title: "Personalized Approach",
      description:
        "No cookie-cutter solutions. Every strategy is tailored specifically to your unique goals, challenges, and circumstances.",
      color: "from-purple-500 to-pink-600",
      bgColor: "bg-purple-500/10",
    },
    {
      icon: Shield,
      title: "Proven Track Record",
      description:
        "500+ successful clients and 1000+ completed projects demonstrate our commitment to delivering real, measurable results.",
      color: "from-green-500 to-emerald-600",
      bgColor: "bg-green-500/10",
    },
    {
      icon: Zap,
      title: "End-to-End Support",
      description:
        "From initial consultation to long-term growth, we're with you every step of your journey - you're never alone.",
      color: "from-amber-500 to-orange-600",
      bgColor: "bg-amber-500/10",
    },
    {
      icon: Globe,
      title: "Cultural Understanding",
      description:
        "Specialized support for African entrepreneurs and international professionals navigating the UK business environment.",
      color: "from-rose-500 to-red-600",
      bgColor: "bg-rose-500/10",
    },
    {
      icon: Award,
      title: "Industry Recognition",
      description:
        "Trusted partner across 15+ industries with a 95% success rate—our reputation speaks for itself.",
      color: "from-indigo-500 to-violet-600",
      bgColor: "bg-indigo-500/10",
    },
  ];

  const highlights = [
    {
      icon: CheckCircle,
      text: "Comprehensive service portfolio covering all your business needs",
    },
    {
      icon: Clock,
      text: "Rapid response times and flexible scheduling to match your pace",
    },
    {
      icon: Lightbulb,
      text: "Innovative solutions combining traditional wisdom with cutting-edge strategies",
    },
    {
      icon: Heart,
      text: "Genuine care for your success - your wins are our wins",
    },
  ];

  return (
    <section
      id="why-choose"
      ref={sectionRef}
      className="relative py-10 lg:py-20 bg-white dark:bg-slate-900 overflow-hidden"
    >
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
        {/* Section Header */}
        <div className="text-center mb-16">
          <div
            className={`inline-flex items-center gap-2 px-4 py-2 bg-cyan-100 dark:bg-cyan-500/10 border border-cyan-300 dark:border-cyan-500/20 rounded-full mb-6 transition-all duration-1000 ${
              isVisible
                ? "opacity-100 translate-y-0"
                : "opacity-0 translate-y-4"
            }`}
          >
            <Sparkles className="h-4 w-4 text-cyan-600 dark:text-cyan-400 animate-pulse" />
            <span className="text-cyan-700 dark:text-cyan-400 text-sm font-semibold font-nunito">
              What Sets Us Apart
            </span>
          </div>

          <h2
            className={`text-4xl md:text-5xl lg:text-6xl font-bold text-slate-800 dark:text-white mb-6 font-lilita-one transition-all duration-1000 delay-200 ${
              isVisible
                ? "opacity-100 translate-y-0"
                : "opacity-0 translate-y-4"
            }`}
          >
            <span className="bg-gradient-to-r from-slate-800 via-slate-600 to-slate-800 dark:from-white dark:via-cyan-200 dark:to-white bg-clip-text text-transparent">
              Why Choose Digital Sparks Solutions?
            </span>
          </h2>

          <div className="w-24 h-1 bg-gradient-to-r from-cyan-500 to-blue-600 mx-auto mb-6 rounded-full" />

          <p
            className={`text-xl text-slate-600 dark:text-gray-400 max-w-3xl mx-auto font-nunito leading-relaxed transition-all duration-1000 delay-400 ${
              isVisible
                ? "opacity-100 translate-y-0"
                : "opacity-0 translate-y-4"
            }`}
          >
            We're not just another consultancy. We're your dedicated partner in
            building a thriving future in the UK
          </p>
        </div>

        {/* Main Reasons Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-20">
          {reasons.map((reason, index) => {
            const Icon = reason.icon;
            const isCardVisible = visibleCards.includes(index);

            return (
              <div
                key={index}
                data-index={index}
                className={`why-card group relative bg-white/80 dark:bg-slate-800/40 backdrop-blur-sm rounded-2xl p-8 border border-slate-200 dark:border-slate-700/50 hover:border-cyan-500 dark:hover:border-cyan-500/50 transition-all duration-700 hover:shadow-2xl hover:shadow-cyan-500/20 hover:-translate-y-2 ${
                  isCardVisible
                    ? "opacity-100 translate-y-0"
                    : "opacity-0 translate-y-8"
                }`}
                style={{
                  transitionDelay: `${600 + index * 100}ms`,
                }}
              >
                {/* Gradient overlay on hover */}
                <div
                  className={`absolute inset-0 bg-gradient-to-br ${reason.color} opacity-0 group-hover:opacity-5 rounded-2xl transition-opacity duration-500`}
                />

                {/* Shine effect on hover */}
                <div className="absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none">
                  <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 dark:via-white/5 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1000" />
                </div>

                <div className="relative">
                  {/* Icon */}
                  <div
                    className={`inline-flex p-4 rounded-xl bg-gradient-to-br ${reason.color} mb-6 group-hover:scale-110 group-hover:rotate-6 transition-all duration-500 shadow-lg`}
                  >
                    <Icon className="h-8 w-8 text-white" />
                  </div>

                  {/* Title */}
                  <h3 className="text-2xl font-bold text-slate-800 dark:text-white mb-4 font-nunito group-hover:text-cyan-600 dark:group-hover:text-cyan-400 transition-colors duration-300">
                    {reason.title}
                  </h3>

                  {/* Description */}
                  <p className="text-slate-600 dark:text-gray-400 leading-relaxed font-nunito">
                    {reason.description}
                  </p>
                </div>
              </div>
            );
          })}
        </div>

        {/* Additional Highlights Section */}
        <div
          className={`relative transition-all duration-1000 delay-1200 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
          }`}
        >
          <div className="absolute inset-0 bg-gradient-to-r from-cyan-500/5 via-blue-500/5 to-cyan-500/5 blur-3xl" />
          <div className="relative bg-white/80 dark:bg-slate-800/30 backdrop-blur-sm border border-slate-200 dark:border-slate-700/50 rounded-2xl p-8 md:p-12 shadow-lg">
            <div className="text-center mb-10">
              <h3 className="text-3xl md:text-4xl font-bold text-slate-800 dark:text-white mb-4 font-lilita-one">
                More Reasons to Partner With Us
              </h3>
              <p className="text-slate-600 dark:text-gray-400 text-lg font-nunito max-w-2xl mx-auto">
                Every detail of our service is designed with your success in
                mind
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {highlights.map((highlight, index) => {
                const Icon = highlight.icon;
                return (
                  <div
                    key={index}
                    className="group flex items-start gap-4 bg-white/80 dark:bg-slate-800/40 backdrop-blur-sm rounded-xl p-6 border border-slate-200 dark:border-slate-700/50 hover:border-cyan-500 dark:hover:border-cyan-500/50 transition-all duration-300 hover:scale-105 shadow-md"
                  >
                    <div className="shrink-0">
                      <div className="inline-flex p-3 rounded-lg bg-gradient-to-br from-cyan-500 to-blue-600 group-hover:scale-110 transition-transform duration-300">
                        <Icon className="h-5 w-5 text-white" />
                      </div>
                    </div>
                    <p className="text-slate-700 dark:text-gray-300 font-nunito leading-relaxed pt-2">
                      {highlight.text}
                    </p>
                  </div>
                );
              })}
            </div>

            {/* CTA */}
            <div className="text-center mt-10">
              <a
                href="#contact"
                onClick={(e) => {
                  e.preventDefault();
                  const element = document.getElementById("contact");
                  if (element) {
                    const offset = 80;
                    const elementPosition = element.getBoundingClientRect().top;
                    const offsetPosition =
                      elementPosition + window.pageYOffset - offset;
                    window.scrollTo({
                      top: offsetPosition,
                      behavior: "smooth",
                    });
                  }
                }}
                className="inline-flex items-center gap-2 px-8 py-4 bg-gradient-to-r from-cyan-500 to-blue-600 text-white rounded-lg font-semibold hover:from-cyan-400 hover:to-blue-500 transition-all duration-300 shadow-lg shadow-cyan-500/30 hover:shadow-cyan-500/50 hover:scale-105 font-nunito group"
              >
                Experience the Difference
                <TrendingUp className="h-5 w-5 group-hover:translate-x-1 transition-transform duration-300" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhyChooseUs;
