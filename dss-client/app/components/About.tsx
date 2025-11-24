"use client";

import React, { useEffect, useRef, useState } from "react";
import {
  Target,
  Heart,
  Lightbulb,
  Users,
  Award,
  Globe,
  TrendingUp,
  Zap,
} from "lucide-react";
import Image from "next/image";

const About: React.FC = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [visibleStats, setVisibleStats] = useState<number[]>([]);
  const sectionRef = useRef<HTMLDivElement>(null);

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
    if (isVisible) {
      const timer = setInterval(() => {
        setVisibleStats((prev) => {
          if (prev.length < 4) {
            return [...prev, prev.length];
          }
          clearInterval(timer);
          return prev;
        });
      }, 200);
      return () => clearInterval(timer);
    }
  }, [isVisible]);

  const values = [
    {
      icon: Target,
      title: "Mission-Driven",
      description:
        "We are committed to empowering UK businesses and professionals with innovative solutions that drive real results.",
      color: "from-cyan-500 to-blue-600",
    },
    {
      icon: Heart,
      title: "Client-Centric",
      description:
        "Your success is our success. We build lasting relationships through personalized service and dedicated support.",
      color: "from-purple-500 to-pink-600",
    },
    {
      icon: Lightbulb,
      title: "Innovation First",
      description:
        "We stay ahead of industry trends, bringing you cutting-edge strategies and tools to stay competitive.",
      color: "from-green-500 to-emerald-600",
    },
    {
      icon: Users,
      title: "Community Focus",
      description:
        "We believe in building strong communities, especially supporting African entrepreneurs in their UK journey.",
      color: "from-amber-500 to-orange-600",
    },
  ];

  const stats = [
    {
      icon: Users,
      value: "500+",
      label: "Happy Clients",
      color: "text-cyan-600 dark:text-cyan-400",
    },
    {
      icon: Award,
      value: "1000+",
      label: "Projects Completed",
      color: "text-purple-600 dark:text-purple-400",
    },
    {
      icon: Globe,
      value: "15+",
      label: "Industries Served",
      color: "text-green-600 dark:text-green-400",
    },
    {
      icon: TrendingUp,
      value: "95%",
      label: "Success Rate",
      color: "text-amber-600 dark:text-amber-400",
    },
  ];

  const timeline = [
    {
      year: "2020",
      title: "The Beginning",
      description:
        "Founded with a vision to empower UK businesses and career professionals.",
    },
    {
      year: "2021",
      title: "Growth & Expansion",
      description:
        "Expanded services to include specialized support for African entrepreneurs.",
    },
    {
      year: "2022",
      title: "Milestone Achievement",
      description:
        "Reached 500+ satisfied clients and established key industry partnerships.",
    },
    {
      year: "2024",
      title: "Innovation Leader",
      description:
        "Became a trusted partner for businesses from start-up to success.",
    },
  ];

  return (
    <section
      id="about"
      ref={sectionRef}
      className="relative py-10 lg:py-20 bg-white dark:bg-slate-950 overflow-hidden"
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
            <Zap className="h-4 w-4 text-cyan-600 dark:text-cyan-400 animate-pulse" />
            <span className="text-cyan-700 dark:text-cyan-400 text-sm font-semibold font-nunito">
              Who We Are
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
              About Digital Sparks Solutions
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
            We're more than just a consultancy – we're your dedicated partner in
            building a successful future in the UK, from start-up to sustained
            growth.
          </p>
        </div>

        {/* Story Section */}
        <div
          className={`grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-20 transition-all duration-1000 delay-600 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
          }`}
        >
          {/* Image Side */}
          <div className="relative group">
            <div className="absolute -inset-4 bg-gradient-to-r from-cyan-500/20 to-blue-500/20 rounded-2xl blur-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
            <div className="relative bg-white/80 dark:bg-slate-800/50 backdrop-blur-sm rounded-2xl p-8 border border-slate-200 dark:border-slate-700/50 group-hover:border-cyan-500 dark:group-hover:border-cyan-500/50 transition-all duration-500 shadow-lg">
              <div className="relative h-64 lg:h-96 rounded-xl overflow-hidden bg-gradient-to-br from-cyan-500/20 to-blue-500/20 flex items-center justify-center">
                <Image
                  src="https://res.cloudinary.com/popit/image/upload/v1762382982/dss-logo-removebg-preview_ndpw4b.png"
                  alt="Digital Sparks Solutions"
                  width={400}
                  height={400}
                  className="w-full h-full object-contain p-8 group-hover:scale-110 transition-transform duration-500"
                />
              </div>
            </div>
          </div>

          {/* Content Side */}
          <div className="space-y-6">
            <h3 className="text-3xl md:text-4xl font-bold text-slate-800 dark:text-white font-lilita-one">
              Our Story
            </h3>
            <p className="text-slate-600 dark:text-gray-400 leading-relaxed font-nunito">
              Digital Sparks Solutions was born from a passion to bridge the gap
              between ambition and achievement. We recognized that many
              businesses and professionals in the UK needed more than just
              services – they needed a partner who truly understood their
              journey.
            </p>
            <p className="text-slate-600 dark:text-gray-400 leading-relaxed font-nunito">
              Today, we're proud to serve a diverse community of clients, from
              aspiring entrepreneurs to established businesses, offering
              specialized support that transforms challenges into opportunities.
            </p>
            <p className="text-slate-600 dark:text-gray-400 leading-relaxed font-nunito">
              Our commitment goes beyond business – we're dedicated to
              empowering African entrepreneurs and professionals navigating the
              UK landscape, providing culturally-aware guidance and unwavering
              support.
            </p>

            {/* Quick Stats */}
            <div className="grid grid-cols-2 gap-4 pt-6">
              {stats.slice(0, 2).map((stat, index) => {
                const Icon = stat.icon;
                return (
                  <div
                    key={index}
                    className="bg-white/80 dark:bg-slate-800/30 backdrop-blur-sm border border-slate-200 dark:border-slate-700/50 rounded-xl p-4 hover:border-cyan-500 dark:hover:border-cyan-500/50 transition-all duration-300 hover:scale-105 shadow-md"
                  >
                    <Icon className={`h-6 w-6 ${stat.color} mb-2`} />
                    <div className="text-2xl font-bold text-slate-800 dark:text-white font-lilita-one">
                      {stat.value}
                    </div>
                    <div className="text-sm text-slate-600 dark:text-gray-400 font-nunito">
                      {stat.label}
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>

        {/* Values Section */}
        <div className="mb-20">
          <h3
            className={`text-3xl md:text-4xl font-bold text-slate-800 dark:text-white text-center mb-12 font-lilita-one transition-all duration-1000 delay-800 ${
              isVisible
                ? "opacity-100 translate-y-0"
                : "opacity-0 translate-y-4"
            }`}
          >
            Our Core Values
          </h3>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {values.map((value, index) => {
              const Icon = value.icon;
              return (
                <div
                  key={index}
                  className={`group relative bg-white/80 dark:bg-slate-800/40 backdrop-blur-sm rounded-2xl p-6 border border-slate-200 dark:border-slate-700/50 hover:border-cyan-500 dark:hover:border-cyan-500/50 transition-all duration-700 hover:shadow-2xl hover:shadow-cyan-500/20 hover:-translate-y-2 ${
                    isVisible
                      ? "opacity-100 translate-y-0"
                      : "opacity-0 translate-y-8"
                  }`}
                  style={{ transitionDelay: `${1000 + index * 100}ms` }}
                >
                  <div
                    className={`absolute inset-0 bg-gradient-to-br ${value.color} opacity-0 group-hover:opacity-5 rounded-2xl transition-opacity duration-500`}
                  />

                  <div className="relative">
                    <div
                      className={`inline-flex p-3 rounded-xl bg-gradient-to-br ${value.color} mb-4 group-hover:scale-110 transition-transform duration-300`}
                    >
                      <Icon className="h-6 w-6 text-white" />
                    </div>

                    <h4 className="text-xl font-bold text-slate-800 dark:text-white mb-3 font-nunito group-hover:text-cyan-600 dark:group-hover:text-cyan-400 transition-colors duration-300">
                      {value.title}
                    </h4>

                    <p className="text-slate-600 dark:text-gray-400 text-sm leading-relaxed font-nunito">
                      {value.description}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        {/* Stats Section */}
        <div className="mb-8 md:mb-16">
          <div className="bg-white/80 dark:bg-slate-800/30 backdrop-blur-sm border border-slate-200 dark:border-slate-700/50 rounded-2xl p-8 md:p-12 shadow-lg">
            <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
              {stats.map((stat, index) => {
                const Icon = stat.icon;
                const isStatVisible = visibleStats.includes(index);
                return (
                  <div
                    key={index}
                    className={`text-center transition-all duration-1000 ${
                      isStatVisible
                        ? "opacity-100 scale-100"
                        : "opacity-0 scale-75"
                    }`}
                  >
                    <Icon
                      className={`h-10 w-10 ${stat.color} mx-auto mb-3 animate-pulse`}
                    />
                    <div className="text-4xl font-bold text-slate-800 dark:text-white mb-2 font-lilita-one">
                      {stat.value}
                    </div>
                    <div className="text-sm text-slate-600 dark:text-gray-400 font-nunito">
                      {stat.label}
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>

        {/* Timeline Section */}
        <div>
          <h3 className="text-3xl md:text-4xl font-bold text-slate-800 dark:text-white text-center mb-12 font-lilita-one">
            Our Journey
          </h3>

          <div className="relative">
            {/* Timeline line */}
            <div className="absolute left-1/2 transform -translate-x-1/2 h-full w-0.5 bg-gradient-to-b from-cyan-500 via-blue-500 to-cyan-500 hidden lg:block" />

            <div className="space-y-12">
              {timeline.map((item, index) => (
                <div
                  key={index}
                  className={`relative transition-all duration-1000 ${
                    isVisible
                      ? "opacity-100 translate-x-0"
                      : index % 2 === 0
                      ? "opacity-0 -translate-x-8"
                      : "opacity-0 translate-x-8"
                  }`}
                  style={{ transitionDelay: `${1400 + index * 200}ms` }}
                >
                  <div
                    className={`flex flex-col lg:flex-row items-center gap-8 ${
                      index % 2 === 0 ? "lg:flex-row-reverse" : ""
                    }`}
                  >
                    {/* Content */}
                    <div className="flex-1 lg:text-right">
                      <div
                        className={`bg-white/80 dark:bg-slate-800/40 backdrop-blur-sm rounded-2xl p-6 border border-slate-200 dark:border-slate-700/50 hover:border-cyan-500 dark:hover:border-cyan-500/50 transition-all duration-300 hover:scale-105 shadow-md ${
                          index % 2 === 0 ? "lg:ml-auto" : "lg:mr-auto"
                        }`}
                      >
                        <div className="text-cyan-600 dark:text-cyan-400 font-bold text-2xl mb-2 font-lilita-one">
                          {item.year}
                        </div>
                        <h4 className="text-xl font-bold text-slate-800 dark:text-white mb-2 font-nunito">
                          {item.title}
                        </h4>
                        <p className="text-slate-600 dark:text-gray-400 font-nunito">
                          {item.description}
                        </p>
                      </div>
                    </div>

                    {/* Timeline dot */}
                    <div className="relative flex-shrink-0 hidden lg:block">
                      <div className="w-4 h-4 bg-gradient-to-r from-cyan-500 to-blue-600 rounded-full border-4 border-white dark:border-slate-950" />
                      <div className="absolute inset-0 bg-gradient-to-r from-cyan-500 to-blue-600 rounded-full animate-ping opacity-75" />
                    </div>

                    {/* Spacer */}
                    <div className="flex-1 hidden lg:block" />
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
