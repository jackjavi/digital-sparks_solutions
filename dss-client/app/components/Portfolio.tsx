"use client";

import React, { useEffect, useRef, useState } from "react";
import {
  Briefcase,
  Users,
  TrendingUp,
  Globe,
  Award,
  Sparkles,
  ArrowRight,
  CheckCircle,
  Building2,
  GraduationCap,
  HeartPulse,
  Plane,
} from "lucide-react";
import Image from "next/image";

const Portfolio: React.FC = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [visibleProjects, setVisibleProjects] = useState<number[]>([]);
  const [activeCategory, setActiveCategory] = useState("All");
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
            setVisibleProjects((prev) => [...new Set([...prev, index])]);
          }
        });
      },
      { threshold: 0.1 }
    );

    const projects = document.querySelectorAll(".portfolio-card");
    projects.forEach((project) => {
      observerRef.current?.observe(project);
    });

    return () => {
      observerRef.current?.disconnect();
    };
  }, [activeCategory]);

  const categories = [
    "All",
    "Business Growth",
    "Education",
    "Healthcare",
    "Immigration",
    "Digital Services",
  ];

  const portfolioItems = [
    {
      title: "Tech Start-Up Success Story",
      category: "Business Growth",
      description:
        "Helped a Nigerian entrepreneur establish and scale a UK tech start-up from £0 to £500K revenue in 18 months.",
      image:
        "https://images.unsplash.com/photo-1559136555-9303baea8ebd?w=800&q=80",
      icon: TrendingUp,
      metrics: [
        { label: "Revenue Growth", value: "£500K" },
        { label: "Team Size", value: "15 Staff" },
        { label: "Time Frame", value: "18 Months" },
      ],
      gradient: "from-cyan-500 to-blue-600",
    },
    {
      title: "University Placement Program",
      category: "Education",
      description:
        "Successfully placed 50+ international students in top UK universities with scholarship support totaling £200K+.",
      image:
        "https://images.unsplash.com/photo-1523050854058-8df90110c9f1?w=800&q=80",
      icon: GraduationCap,
      metrics: [
        { label: "Students Placed", value: "50+" },
        { label: "Scholarships", value: "£200K+" },
        { label: "Success Rate", value: "98%" },
      ],
      gradient: "from-purple-500 to-pink-600",
    },
    {
      title: "Healthcare Business Launch",
      category: "Healthcare",
      description:
        "Guided a healthcare professional from initial concept to fully operational CQC-registered care agency serving 100+ clients.",
      image:
        "https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?w=800&q=80",
      icon: HeartPulse,
      metrics: [
        { label: "Clients Served", value: "100+" },
        { label: "Staff Employed", value: "25" },
        { label: "Monthly Revenue", value: "£80K" },
      ],
      gradient: "from-rose-500 to-red-600",
    },
    {
      title: "Self-Sponsorship Success",
      category: "Immigration",
      description:
        "Helped 30+ entrepreneurs secure UK Skilled Worker visas through self-sponsorship, enabling them to relocate and grow their businesses.",
      image:
        "https://images.unsplash.com/photo-1436491865332-7a61a109cc05?w=800&q=80",
      icon: Plane,
      metrics: [
        { label: "Visas Secured", value: "30+" },
        { label: "Success Rate", value: "95%" },
        { label: "Countries", value: "12" },
      ],
      gradient: "from-indigo-500 to-violet-600",
    },
    {
      title: "Cleaning Business Empire",
      category: "Business Growth",
      description:
        "Transformed a solo cleaner into a multi-location cleaning business generating £300K annually with 40+ employees.",
      image:
        "https://images.unsplash.com/photo-1581578731548-c64695cc6952?w=800&q=80",
      icon: Sparkles,
      metrics: [
        { label: "Annual Revenue", value: "£300K" },
        { label: "Locations", value: "5" },
        { label: "Team Size", value: "40+" },
      ],
      gradient: "from-amber-500 to-orange-600",
    },
    {
      title: "Digital Transformation Project",
      category: "Digital Services",
      description:
        "Delivered complete digital overhaul for a retail business, increasing online sales by 450% and customer engagement by 300%.",
      image:
        "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=800&q=80",
      icon: Globe,
      metrics: [
        { label: "Sales Increase", value: "450%" },
        { label: "Engagement", value: "300%" },
        { label: "ROI", value: "5x" },
      ],
      gradient: "from-green-500 to-emerald-600",
    },
  ];

  const filteredProjects =
    activeCategory === "All"
      ? portfolioItems
      : portfolioItems.filter((item) => item.category === activeCategory);

  const stats = [
    {
      icon: Briefcase,
      value: "1000+",
      label: "Projects Completed",
      color: "text-cyan-400",
    },
    {
      icon: Users,
      value: "500+",
      label: "Satisfied Clients",
      color: "text-purple-400",
    },
    {
      icon: Award,
      value: "15+",
      label: "Industries Served",
      color: "text-green-400",
    },
    {
      icon: TrendingUp,
      value: "95%",
      label: "Success Rate",
      color: "text-amber-400",
    },
  ];

  return (
    <section
      id="portfolio"
      ref={sectionRef}
      className="relative py-20 lg:py-28 bg-slate-950 overflow-hidden"
    >
      {/* Animated background elements */}
      <div className="absolute inset-0 bg-linear-to-b from-slate-900 via-slate-950 to-slate-900 opacity-50" />
      <div className="absolute top-0 right-1/4 w-96 h-96 bg-purple-500/5 rounded-full blur-3xl animate-pulse" />
      <div className="absolute bottom-0 left-1/4 w-96 h-96 bg-cyan-500/5 rounded-full blur-3xl animate-pulse delay-1000" />
      <div className="absolute top-1/2 right-1/3 w-64 h-64 bg-green-500/5 rounded-full blur-3xl animate-pulse delay-2000" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="text-center mb-16">
          <div
            className={`inline-flex items-center gap-2 px-4 py-2 bg-cyan-500/10 border border-cyan-500/20 rounded-full mb-6 transition-all duration-1000 ${
              isVisible
                ? "opacity-100 translate-y-0"
                : "opacity-0 translate-y-4"
            }`}
          >
            <Building2 className="h-4 w-4 text-cyan-400 animate-pulse" />
            <span className="text-cyan-400 text-sm font-semibold font-nunito">
              Our Success Stories
            </span>
          </div>

          <h2
            className={`text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6 font-lilita-one transition-all duration-1000 delay-200 ${
              isVisible
                ? "opacity-100 translate-y-0"
                : "opacity-0 translate-y-4"
            }`}
          >
            <span className="bg-linear-to-r from-white via-cyan-200 to-white bg-clip-text text-transparent">
              Portfolio & Case Studies
            </span>
          </h2>

          <div className="w-24 h-1 bg-linear-to-r from-cyan-500 to-blue-600 mx-auto mb-6 rounded-full" />

          <p
            className={`text-xl text-gray-400 max-w-3xl mx-auto font-nunito leading-relaxed transition-all duration-1000 delay-400 ${
              isVisible
                ? "opacity-100 translate-y-0"
                : "opacity-0 translate-y-4"
            }`}
          >
            Real results from real clients—discover how we've transformed
            businesses and careers across the UK
          </p>
        </div>

        {/* Stats Section */}
        <div
          className={`grid grid-cols-2 lg:grid-cols-4 gap-6 mb-16 transition-all duration-1000 delay-600 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
          }`}
        >
          {stats.map((stat, index) => {
            const Icon = stat.icon;
            return (
              <div
                key={index}
                className="bg-slate-800/30 backdrop-blur-sm border border-slate-700/50 rounded-xl p-6 text-center hover:border-cyan-500/50 transition-all duration-300 hover:scale-105"
              >
                <Icon className={`h-8 w-8 ${stat.color} mx-auto mb-3`} />
                <div className="text-3xl font-bold text-white mb-2 font-lilita-one">
                  {stat.value}
                </div>
                <div className="text-sm text-gray-400 font-nunito">
                  {stat.label}
                </div>
              </div>
            );
          })}
        </div>

        {/* Category Filter */}
        <div
          className={`flex flex-wrap justify-center gap-3 mb-12 transition-all duration-1000 delay-800 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
          }`}
        >
          {categories.map((category) => (
            <button
              key={category}
              onClick={() => setActiveCategory(category)}
              className={`px-6 py-3 rounded-lg font-semibold font-nunito transition-all duration-300 ${
                activeCategory === category
                  ? "bg-linear-to-r from-cyan-500 to-blue-600 text-white shadow-lg shadow-cyan-500/30"
                  : "bg-slate-800/50 text-gray-400 hover:bg-slate-700 hover:text-white border border-slate-700/50"
              }`}
            >
              {category}
            </button>
          ))}
        </div>

        {/* Portfolio Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-20">
          {filteredProjects.map((project, index) => {
            const Icon = project.icon;
            const isProjectVisible = visibleProjects.includes(index);

            return (
              <div
                key={index}
                data-index={index}
                className={`portfolio-card group relative bg-slate-800/40 backdrop-blur-sm rounded-2xl overflow-hidden border border-slate-700/50 hover:border-cyan-500/50 transition-all duration-700 hover:shadow-2xl hover:shadow-cyan-500/20 ${
                  isProjectVisible
                    ? "opacity-100 translate-y-0"
                    : "opacity-0 translate-y-8"
                }`}
                style={{
                  transitionDelay: `${1000 + index * 100}ms`,
                }}
              >
                {/* Gradient overlay on hover */}
                <div
                  className={`absolute inset-0 bg-linear-to-br ${project.gradient} opacity-0 group-hover:opacity-10 transition-opacity duration-500 z-0`}
                />

                {/* Image Section */}
                <div className="relative h-56 w-full overflow-hidden">
                  <Image
                    src={project.image}
                    alt={project.title}
                    fill
                    className="object-cover transition-transform duration-700 group-hover:scale-110"
                    sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
                  />
                  {/* Image overlay gradient */}
                  <div className="absolute inset-0 bg-linear-to-t from-slate-900 via-slate-900/60 to-transparent" />

                  {/* Icon overlay */}
                  <div className="absolute top-4 right-4 z-10">
                    <div
                      className={`inline-flex p-3 rounded-xl bg-linear-to-br ${project.gradient} group-hover:scale-110 transition-all duration-500 shadow-lg`}
                    >
                      <Icon className="h-5 w-5 text-white" />
                    </div>
                  </div>

                  {/* Category Badge */}
                  <div className="absolute bottom-4 left-4 z-10">
                    <span className="px-3 py-1 bg-slate-900/80 backdrop-blur-sm border border-slate-700/50 rounded-full text-xs font-semibold text-cyan-400 font-nunito">
                      {project.category}
                    </span>
                  </div>
                </div>

                {/* Shine effect */}
                <div className="absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none z-20">
                  <div className="absolute inset-0 bg-linear-to-r from-transparent via-white/5 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1000" />
                </div>

                {/* Content Section */}
                <div className="relative z-10 p-6">
                  <h3 className="text-xl font-bold text-white mb-3 font-nunito group-hover:text-cyan-400 transition-colors duration-300">
                    {project.title}
                  </h3>

                  <p className="text-gray-400 mb-6 leading-relaxed font-nunito text-sm">
                    {project.description}
                  </p>

                  {/* Metrics */}
                  <div className="space-y-3 mb-6">
                    {project.metrics.map((metric, idx) => (
                      <div
                        key={idx}
                        className="flex items-center justify-between text-sm"
                      >
                        <span className="text-gray-400 font-nunito">
                          {metric.label}
                        </span>
                        <span className="font-bold text-white font-nunito">
                          {metric.value}
                        </span>
                      </div>
                    ))}
                  </div>

                  {/* View Details Button */}
                  <button
                    className={`w-full py-3 px-6 bg-linear-to-r ${project.gradient} text-white rounded-lg font-semibold hover:shadow-lg hover:shadow-cyan-500/30 transition-all duration-300 group-hover:scale-105 font-nunito flex items-center justify-center gap-2`}
                  >
                    View Case Study
                    <ArrowRight className="h-4 w-4 group-hover:translate-x-1 transition-transform duration-300" />
                  </button>
                </div>
              </div>
            );
          })}
        </div>

        {/* Bottom CTA */}
        <div className="text-center relative">
          <div className="absolute inset-0 bg-linear-to-r from-cyan-500/5 via-blue-500/5 to-cyan-500/5 blur-3xl" />
          <div className="relative bg-slate-800/30 backdrop-blur-sm border border-slate-700/50 rounded-2xl p-8 md:p-12">
            <div className="flex items-center justify-center gap-2 mb-4">
              <CheckCircle className="h-6 w-6 text-cyan-400" />
              <h3 className="text-2xl md:text-3xl font-bold text-white font-lilita-one">
                Ready to Write Your Success Story?
              </h3>
            </div>
            <p className="text-gray-400 mb-8 text-lg font-nunito max-w-2xl mx-auto">
              Join hundreds of satisfied clients who've transformed their
              businesses and careers with our expert guidance
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
              className="inline-flex items-center gap-2 px-8 py-4 bg-linear-to-r from-cyan-500 to-blue-600 text-white rounded-lg font-semibold hover:from-cyan-400 hover:to-blue-500 transition-all duration-300 shadow-lg shadow-cyan-500/30 hover:shadow-cyan-500/50 hover:scale-105 font-nunito group"
            >
              Start Your Journey Today
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

export default Portfolio;
