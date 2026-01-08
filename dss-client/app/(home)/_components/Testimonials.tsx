"use client";

import React, { useEffect, useRef, useState } from "react";
import {
  Star,
  Quote,
  Sparkles,
  ArrowLeft,
  ArrowRight,
  CheckCircle,
  TrendingUp,
  Award,
  Users,
} from "lucide-react";
import Image from "next/image";

const Testimonials: React.FC = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);
  const sectionRef = useRef<HTMLDivElement>(null);
  const autoPlayRef = useRef<NodeJS.Timeout | null>(null);

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

  // Auto-play functionality
  useEffect(() => {
    if (isAutoPlaying) {
      autoPlayRef.current = setInterval(() => {
        setCurrentIndex((prev) => (prev + 1) % testimonials.length);
      }, 5000);
    }

    return () => {
      if (autoPlayRef.current) {
        clearInterval(autoPlayRef.current);
      }
    };
  }, [isAutoPlaying]);

  const testimonials = [
    {
      name: "Sarah Mitchell",
      role: "Tech Entrepreneur",
      company: "InnovateTech UK",
      image:
        "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=400&q=80",
      content:
        "Digital Sparks Solutions transformed my business dream into reality. From helping me navigate the self-sponsorship visa process to developing a comprehensive business plan, they were with me every step. Today, my tech start-up is generating £500K annually with a team of 15. I couldn't have done this without their expertise and genuine support.",
      rating: 5,
      service: "Business Start-Up & Immigration Support",
      result: "£500K Annual Revenue",
      gradient: "from-cyan-500 to-blue-600",
    },
    {
      name: "Michael Thompson",
      role: "Care Home Manager",
      company: "ComfortCare Solutions",
      image:
        "https://res.cloudinary.com/popit/image/upload/v1767901289/Screenshot_from_2026-01-08_22-40-43_zvkrxa.png",
      content:
        "I was overwhelmed trying to navigate CQC registration and compliance. The healthcare consultancy team guided me through every requirement with patience and expertise. Within 8 months, I had a fully operational care home serving 30 residents. Their ongoing support has been invaluable for maintaining quality standards.",
      rating: 5,
      service: "Healthcare Consultancy",
      result: "CQC Registered Care Home",
      gradient: "from-rose-500 to-red-600",
    },
    {
      name: "Emma Roberts",
      role: "International Student",
      company: "University of Manchester",
      image:
        "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=400&q=80",
      content:
        "Getting into my dream UK university seemed impossible until I found Digital Sparks Solutions. They helped me craft a compelling personal statement, navigate the application process, and even secured a £15,000 scholarship for me. I'm now studying Computer Science at one of the UK's top universities. Forever grateful!",
      rating: 5,
      service: "Study in the UK Guidance",
      result: "£15K Scholarship + Top University",
      gradient: "from-purple-500 to-pink-600",
    },
    {
      name: "David Collins",
      role: "Marketing Manager",
      company: "BrightFuture Retail",
      image:
        "https://res.cloudinary.com/popit/image/upload/v1767901477/Screenshot_from_2026-01-08_22-44-20_jsric9.png",
      content:
        "After months of job applications with no success, I invested in their CV tailoring service. The difference was night and day! Within two weeks, I had three interview invitations. The team understood exactly what UK employers look for and positioned my experience perfectly. I landed my dream role with a 30% salary increase!",
      rating: 5,
      service: "CV Tailoring for UK Jobs",
      result: "Dream Job + 30% Salary Increase",
      gradient: "from-green-500 to-emerald-600",
    },
    {
      name: "Rebecca Anderson",
      role: "Cleaning Business Manager",
      company: "SparkleClean Services",
      image:
        "https://images.unsplash.com/photo-1487412720507-e7ab37603c6f?w=400&q=80",
      content:
        "I started as a solo cleaner and thanks to the cleaning business coaching program, I now run a thriving company with 40 employees across 5 locations. The systems, pricing strategies, and client acquisition methods they taught me were game-changers. My annual revenue has grown to £300K and I finally have the freedom I dreamed of.",
      rating: 5,
      service: "Cleaning Business Coaching",
      result: "£300K Revenue + 40 Employees",
      gradient: "from-amber-500 to-orange-600",
    },
    {
      name: "James Patterson",
      role: "E-commerce Entrepreneur",
      company: "AfroStyle London",
      image:
        "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&q=80",
      content:
        "The social media management and website development service took my business from invisible to unmissable. Our online sales increased by 450% in just six months! The team created a stunning website and managed our social media with content that truly resonates with our audience. Best investment I've ever made for my business.",
      rating: 5,
      service: "Digital Services",
      result: "450% Sales Increase",
      gradient: "from-indigo-500 to-violet-600",
    },
  ];

  const handlePrevious = () => {
    setIsAutoPlaying(false);
    setCurrentIndex((prev) =>
      prev === 0 ? testimonials.length - 1 : prev - 1
    );
  };

  const handleNext = () => {
    setIsAutoPlaying(false);
    setCurrentIndex((prev) => (prev + 1) % testimonials.length);
  };

  const handleDotClick = (index: number) => {
    setIsAutoPlaying(false);
    setCurrentIndex(index);
  };

  const currentTestimonial = testimonials[currentIndex];

  const trustMetrics = [
    {
      icon: Users,
      value: "500+",
      label: "Happy Clients",
      color: "text-cyan-400",
    },
    {
      icon: Star,
      value: "4.9/5",
      label: "Average Rating",
      color: "text-amber-400",
    },
    {
      icon: Award,
      value: "98%",
      label: "Would Recommend",
      color: "text-green-400",
    },
    {
      icon: TrendingUp,
      value: "95%",
      label: "Success Rate",
      color: "text-purple-400",
    },
  ];

  return (
    <section
      id="testimonials"
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
              Client Success Stories
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
              What Our Clients Say
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
            Don't just take our word for it—hear from the people whose lives and
            businesses we've transformed
          </p>
        </div>

        {/* Trust Metrics */}
        <div
          className={`grid grid-cols-2 lg:grid-cols-4 gap-6 mb-16 transition-all duration-1000 delay-600 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
          }`}
        >
          {trustMetrics.map((metric, index) => {
            const Icon = metric.icon;
            return (
              <div
                key={index}
                className="bg-white/80 dark:bg-slate-800/30 backdrop-blur-sm border border-slate-200 dark:border-slate-700/50 rounded-xl p-6 text-center hover:border-cyan-500 dark:hover:border-cyan-500/50 transition-all duration-300 hover:scale-105 shadow-md"
              >
                <Icon className={`h-8 w-8 ${metric.color} mx-auto mb-3`} />
                <div className="text-3xl font-bold text-slate-800 dark:text-white mb-2 font-lilita-one">
                  {metric.value}
                </div>
                <div className="text-sm text-slate-600 dark:text-gray-400 font-nunito">
                  {metric.label}
                </div>
              </div>
            );
          })}
        </div>

        {/* Main Testimonial Carousel */}
        <div
          className={`relative transition-all duration-1000 delay-800 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
          }`}
        >
          <div className="absolute inset-0 bg-gradient-to-r from-cyan-500/5 via-blue-500/5 to-cyan-500/5 blur-3xl" />

          <div className="relative bg-white/80 dark:bg-slate-800/40 backdrop-blur-sm border border-slate-200 dark:border-slate-700/50 rounded-3xl p-8 md:p-12 overflow-hidden group shadow-lg">
            {/* Gradient overlay */}
            <div
              className={`absolute inset-0 bg-gradient-to-br ${currentTestimonial.gradient} opacity-5 transition-opacity duration-500`}
            />

            {/* Quote icon */}
            <div className="absolute top-8 right-8 opacity-10">
              <Quote className="h-32 w-32 text-cyan-600 dark:text-cyan-400" />
            </div>

            <div className="relative grid grid-cols-1 lg:grid-cols-3 gap-8 items-center">
              {/* Left: Client Info */}
              <div className="text-center lg:text-left">
                <div className="relative inline-block mb-6">
                  {/* Image with gradient border */}
                  <div
                    className={`absolute inset-0 bg-gradient-to-br ${currentTestimonial.gradient} rounded-full blur-md opacity-50`}
                  />
                  <div className="relative w-32 h-32 mx-auto lg:mx-0 rounded-full overflow-hidden border-4 border-white dark:border-slate-800">
                    <Image
                      src={currentTestimonial.image}
                      alt={currentTestimonial.name}
                      fill
                      className="object-cover"
                      sizes="128px"
                    />
                  </div>
                  {/* Verification badge */}
                  <div
                    className={`absolute bottom-0 right-0 bg-gradient-to-br ${currentTestimonial.gradient} rounded-full p-2 border-2 border-white dark:border-slate-800`}
                  >
                    <CheckCircle className="h-5 w-5 text-white" />
                  </div>
                </div>

                <h3 className="text-2xl font-bold text-slate-800 dark:text-white mb-2 font-nunito">
                  {currentTestimonial.name}
                </h3>
                <p className="text-cyan-600 dark:text-cyan-400 font-semibold mb-1 font-nunito">
                  {currentTestimonial.role}
                </p>
                <p className="text-slate-600 dark:text-gray-400 text-sm mb-4 font-nunito">
                  {currentTestimonial.company}
                </p>

                {/* Star Rating */}
                <div className="flex gap-1 justify-center lg:justify-start mb-4">
                  {[...Array(currentTestimonial.rating)].map((_, i) => (
                    <Star
                      key={i}
                      className="h-5 w-5 text-amber-400 fill-amber-400"
                    />
                  ))}
                </div>

                {/* Service Badge */}
                <div className="inline-block px-4 py-2 bg-slate-100 dark:bg-slate-800/50 border border-slate-300 dark:border-slate-700/50 rounded-lg">
                  <p className="text-xs text-slate-600 dark:text-gray-400 font-nunito">
                    Service Used
                  </p>
                  <p className="text-sm text-cyan-600 dark:text-cyan-400 font-semibold font-nunito">
                    {currentTestimonial.service}
                  </p>
                </div>
              </div>

              {/* Middle & Right: Testimonial Content */}
              <div className="lg:col-span-2 space-y-6">
                <blockquote className="text-lg md:text-xl text-slate-700 dark:text-gray-300 leading-relaxed font-nunito italic">
                  "{currentTestimonial.content}"
                </blockquote>

                {/* Result Highlight */}
                <div
                  className={`inline-flex items-center gap-3 px-6 py-4 bg-gradient-to-r ${currentTestimonial.gradient} bg-opacity-10 border border-slate-300 dark:border-slate-700/50 rounded-xl shadow-md`}
                >
                  <TrendingUp className="h-6 w-6 text-cyan-600 dark:text-cyan-400" />
                  <div>
                    <p className="text-xs text-slate-600 dark:text-gray-400 font-nunito">
                      Result Achieved
                    </p>
                    <p className="text-lg font-bold text-slate-800 dark:text-white font-nunito">
                      {currentTestimonial.result}
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Navigation Arrows */}
            <div className="flex gap-4 justify-center mt-8">
              <button
                onClick={handlePrevious}
                className="group/btn p-3 bg-slate-100 dark:bg-slate-800/50 hover:bg-slate-200 dark:hover:bg-slate-700 border border-slate-300 dark:border-slate-700/50 hover:border-cyan-500 dark:hover:border-cyan-500/50 rounded-lg transition-all duration-300 hover:scale-110"
                aria-label="Previous testimonial"
              >
                <ArrowLeft className="h-5 w-5 text-slate-600 dark:text-gray-400 group-hover/btn:text-cyan-600 dark:group-hover/btn:text-cyan-400 transition-colors duration-300" />
              </button>
              <button
                onClick={handleNext}
                className="group/btn p-3 bg-slate-100 dark:bg-slate-800/50 hover:bg-slate-200 dark:hover:bg-slate-700 border border-slate-300 dark:border-slate-700/50 hover:border-cyan-500 dark:hover:border-cyan-500/50 rounded-lg transition-all duration-300 hover:scale-110"
                aria-label="Next testimonial"
              >
                <ArrowRight className="h-5 w-5 text-slate-600 dark:text-gray-400 group-hover/btn:text-cyan-600 dark:group-hover/btn:text-cyan-400 transition-colors duration-300" />
              </button>
            </div>

            {/* Dot Indicators */}
            <div className="flex gap-2 justify-center mt-6">
              {testimonials.map((_, index) => (
                <button
                  key={index}
                  onClick={() => handleDotClick(index)}
                  className={`transition-all duration-300 rounded-full ${
                    index === currentIndex
                      ? "w-8 h-2 bg-gradient-to-r from-cyan-500 to-blue-600"
                      : "w-2 h-2 bg-slate-300 dark:bg-slate-700 hover:bg-slate-400 dark:hover:bg-slate-600"
                  }`}
                  aria-label={`Go to testimonial ${index + 1}`}
                />
              ))}
            </div>
          </div>
        </div>

        {/* Bottom CTA */}
        <div className="mt-20 text-center">
          <div className="relative bg-white/80 dark:bg-slate-800/30 backdrop-blur-sm border border-slate-200 dark:border-slate-700/50 rounded-2xl p-8 md:p-12 shadow-lg">
            <h3 className="text-2xl md:text-3xl font-bold text-slate-800 dark:text-white mb-4 font-lilita-one">
              Ready to Become Our Next Success Story?
            </h3>
            <p className="text-slate-600 dark:text-gray-400 mb-8 text-lg font-nunito max-w-2xl mx-auto">
              Join hundreds of satisfied clients who've achieved their UK
              business and career goals with our expert support
            </p>
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
              Get Started Today
              <ArrowRight className="h-5 w-5 group-hover:translate-x-1 transition-transform duration-300" />
            </a>
          </div>
        </div>
      </div>

      <style jsx>{`
        .delay-1000 {
          animation-delay: 1s;
        }
        .delay-2000 {
          animation-delay: 2s;
        }
      `}</style>
    </section>
  );
};

export default Testimonials;
