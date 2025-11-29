"use client";

import React, { useEffect, useRef, useState } from "react";
import Link from "next/link";
import Image from "next/image";
import {
  Globe,
  FileText,
  TrendingUp,
  Sparkles,
  HeartPulse,
  Plane,
  Users,
  ArrowRight,
  Check,
  GraduationCap,
  Calendar,
} from "lucide-react";
import { servicesData } from "../../lib/service-data";

interface Service {
  title: string;
  description: string;
  icon: React.ElementType;
  productCount: number;
  color: string;
  gradient: string;
  slug: string;
  gridImageUrl: string;
  priceRange: string;
}

const iconMap = {
  Globe,
  FileText,
  TrendingUp,
  Sparkles,
  HeartPulse,
  Plane,
  Users,
  GraduationCap,
  Calendar,
};

// Grid-specific images
const gridImages: { [key: string]: string } = {
  "healthcare-consultancy":
    "https://images.unsplash.com/photo-1584982751601-97dcc096659c?w=800&q=80",
  "study-in-uk-education-guidance":
    "https://images.unsplash.com/photo-1541339907198-e08756dedf3f?w=800&q=80",
  "cv-tailoring-uk-jobs":
    "https://images.unsplash.com/photo-1484480974693-6ca0a78fb36b?w=800&q=80",
  "social-media-management-website-development":
    "https://images.unsplash.com/photo-1557838923-2985c318be48?w=800&q=80",
  "business-startup-growth-support":
    "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?w=800&q=80",
  "cleaning-business-coaching":
    "https://images.unsplash.com/photo-1628177142898-93e36e4e3a50?w=800&q=80",
  "book-a-consultation":
    "https://images.unsplash.com/photo-1556761175-b413da4baf72?w=800&q=80",
};

const Services: React.FC = () => {
  const [visibleCards, setVisibleCards] = useState<number[]>([]);
  const observerRef = useRef<IntersectionObserver | null>(null);

  // Map services data to include icon components and grid images
  const services: Service[] = servicesData.map((service) => {
    const prices = service.products.map((p) => p.price);
    const minPrice = Math.min(...prices);
    const maxPrice = Math.max(...prices);
    const priceRange =
      minPrice === maxPrice ? `$${minPrice}` : `$${minPrice} - $${maxPrice}`;

    return {
      title: service.title,
      description: service.shortDescription,
      icon: iconMap[service.icon as keyof typeof iconMap],
      productCount: service.products.length,
      color: service.color,
      gradient: service.gradient,
      slug: service.slug,
      gridImageUrl: gridImages[service.slug] || service.imageUrl,
      priceRange,
    };
  });

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

    const cards = document.querySelectorAll(".service-card");
    cards.forEach((card) => {
      observerRef.current?.observe(card);
    });

    return () => {
      observerRef.current?.disconnect();
    };
  }, []);

  const handleScroll = (e: React.MouseEvent<HTMLAnchorElement>) => {
    e.preventDefault();
    const element = document.getElementById("contact");
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

  return (
    <section
      id="services"
      className="py-10 lg:py-20 bg-slate-50 dark:bg-slate-900 relative overflow-hidden"
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
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-cyan-100 dark:bg-cyan-500/10 border border-cyan-300 dark:border-cyan-500/20 rounded-full mb-6">
            <Sparkles className="h-4 w-4 text-cyan-600 dark:text-cyan-400 animate-pulse" />
            <span className="text-cyan-700 dark:text-cyan-400 text-sm font-semibold font-nunito">
              What We Offer
            </span>
          </div>

          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-slate-800 dark:text-white mb-4 font-lilita-one">
            <span className="bg-gradient-to-r from-slate-800 via-slate-600 to-slate-800 dark:from-white dark:via-cyan-200 dark:to-white bg-clip-text text-transparent">
              Our Services
            </span>
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-cyan-500 to-blue-600 mx-auto mb-6 rounded-full" />
          <p className="text-xl text-slate-600 dark:text-gray-400 max-w-3xl mx-auto font-nunito leading-relaxed">
            Comprehensive digital guides and expert resources to empower your UK
            business and career journey
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => {
            const Icon = service.icon;
            const isVisible = visibleCards.includes(index);

            return (
              <div
                key={index}
                data-index={index}
                className={`service-card group relative bg-white/80 dark:bg-slate-800/40 backdrop-blur-sm rounded-2xl overflow-hidden border border-slate-200 dark:border-slate-700/50 hover:border-cyan-500 dark:hover:border-cyan-500/50 transition-all duration-700 hover:shadow-2xl hover:shadow-cyan-500/20 ${
                  isVisible
                    ? "opacity-100 translate-y-0"
                    : "opacity-0 translate-y-8"
                }`}
                style={{
                  transitionDelay: `${index * 100}ms`,
                }}
              >
                {/* Gradient overlay on hover */}
                <div
                  className={`absolute inset-0 ${service.gradient} opacity-0 group-hover:opacity-100 transition-opacity duration-500 z-0`}
                />

                {/* Image Section */}
                <div className="relative h-48 w-full overflow-hidden">
                  <Image
                    src={service.gridImageUrl}
                    alt={service.title}
                    fill
                    className="object-cover transition-transform duration-700 group-hover:scale-110"
                    sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
                  />
                  {/* Image overlay gradient */}
                  <div className="absolute inset-0 bg-gradient-to-t from-white dark:from-slate-900 via-white/60 dark:via-slate-900/60 to-transparent" />

                  {/* Icon overlay on image */}
                  <div className="absolute bottom-4 left-4 z-10">
                    <div
                      className={`inline-flex p-3 rounded-xl bg-gradient-to-br ${service.color} group-hover:scale-110 transition-all duration-500 group-hover:rotate-6 shadow-lg`}
                    >
                      <Icon className="h-6 w-6 text-white" />
                    </div>
                  </div>

                  {/* Product count badge */}
                  <div className="absolute top-4 right-4 z-10">
                    <div className="px-3 py-1 bg-white/90 dark:bg-slate-800/90 backdrop-blur-sm rounded-full border border-slate-200 dark:border-slate-700">
                      <span className="text-xs font-semibold text-slate-700 dark:text-slate-300 font-nunito">
                        {service.productCount}{" "}
                        {service.productCount === 1 ? "Guide" : "Guides"}
                      </span>
                    </div>
                  </div>
                </div>

                {/* Shine effect on hover */}
                <div className="absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none z-20">
                  <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 dark:via-white/5 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1000" />
                </div>

                {/* Content Section */}
                <div className="relative z-10 p-6">
                  {/* Title */}
                  <h3 className="text-xl font-bold text-slate-800 dark:text-white mb-3 font-nunito group-hover:text-cyan-600 dark:group-hover:text-cyan-400 transition-colors duration-300 line-clamp-2 min-h-[3.5rem]">
                    {service.title}
                  </h3>

                  {/* Description */}
                  <p className="text-slate-600 dark:text-gray-400 mb-4 leading-relaxed font-nunito text-sm line-clamp-3">
                    {service.description}
                  </p>

                  {/* Price Range */}
                  <div className="mb-6 flex items-center gap-2">
                    <span className="text-sm text-slate-500 dark:text-slate-400 font-nunito">
                      Starting from
                    </span>
                    <span
                      className={`text-lg font-bold bg-gradient-to-r ${service.color} bg-clip-text text-transparent font-nunito`}
                    >
                      {service.priceRange}
                    </span>
                  </div>

                  {/* CTA Button */}
                  <Link href={`/services/${service.slug}`}>
                    <button
                      className={`w-full py-3 px-6 bg-gradient-to-r ${service.color} text-white rounded-lg font-semibold hover:shadow-lg hover:shadow-cyan-500/30 transition-all duration-300 group-hover:scale-105 font-nunito flex items-center justify-center gap-2 relative overflow-hidden`}
                    >
                      <span className="relative z-10 flex items-center gap-2">
                        Explore Guides
                        <ArrowRight className="h-4 w-4 group-hover:translate-x-1 transition-transform duration-300" />
                      </span>
                      <span
                        className={`absolute inset-0 bg-gradient-to-r ${service.color
                          .replace("from-", "from-")
                          .replace(
                            "to-",
                            "via-"
                          )} opacity-0 group-hover:opacity-100 transition-opacity duration-300`}
                      />
                    </button>
                  </Link>
                </div>
              </div>
            );
          })}
        </div>

        {/* Bottom CTA */}
        <div className="mt-8 md:mt-16 text-center relative">
          <div className="absolute inset-0 bg-gradient-to-r from-cyan-500/5 via-blue-500/5 to-cyan-500/5 blur-3xl" />
          <div className="relative bg-white/80 dark:bg-slate-800/30 backdrop-blur-sm border border-slate-200 dark:border-slate-700/50 rounded-2xl p-8 md:p-12 shadow-lg">
            <h3 className="text-2xl md:text-3xl font-bold text-slate-800 dark:text-white mb-4 font-lilita-one">
              Need Personalized Guidance?
            </h3>
            <p className="text-slate-600 dark:text-gray-400 mb-8 text-lg font-nunito max-w-2xl mx-auto">
              Book a one-on-one consultation to get expert advice tailored
              specifically to your unique situation and goals.
            </p>
            <a
              href="#contact"
              onClick={handleScroll}
              className="inline-flex items-center gap-2 px-8 py-4 bg-gradient-to-r from-cyan-500 to-blue-600 text-white rounded-lg font-semibold hover:from-cyan-400 hover:to-blue-500 transition-all duration-300 shadow-lg shadow-cyan-500/30 hover:shadow-cyan-500/50 hover:scale-105 font-nunito group"
            >
              Get in Touch
              <ArrowRight className="h-5 w-5 group-hover:translate-x-1 transition-transform duration-300" />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Services;
