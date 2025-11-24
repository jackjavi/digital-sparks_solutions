"use client";

import React from "react";
import { Facebook, Instagram, Music2, Link2 } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";

const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();
  const pathname = usePathname();

  const footerLinks = {
    company: [
      { name: "About Us", href: "#about" },
      { name: "Our Services", href: "#services" },
      { name: "Testimonials", href: "#testimonials" },
      {
        name: "Book A Consultation",
        href: "/services/book-a-consultation",
      },
    ],
    services: [
      {
        name: "Social Media Management & Website Development",
        href: "#services",
      },
      { name: "CV Tailoring for UK Jobs", href: "#services" },
      { name: "Business Start-Up & Growth Support", href: "#services" },
      { name: "Cleaning Business Coaching", href: "#services" },
      { name: "Healthcare Consultancy", href: "#services" },
    ],
    resources: [
      { name: "Immigration & Self-Sponsorship Guidance", href: "#services" },
      { name: "Support for African Entrepreneurs", href: "#services" },
      { name: "Digital Guides", href: "#services" },
      { name: "Contact Us", href: "#contact" },
    ],
  };

  const socialLinks = [
    {
      name: "Instagram",
      href: "https://www.instagram.com/_digital_sparks_solutions?igsh=MWJ4ZDB4Y2t1ZDZmZg==",
      icon: Instagram,
    },
    {
      name: "Facebook",
      href: "https://www.facebook.com/share/1CYGuWrS21/?mibextid=wwXIfr",
      icon: Facebook,
    },
    {
      name: "TikTok",
      href: "https://www.tiktok.com/@digital.sparks.so?_r=1&_t=ZN-919jz6y8jOI",
      icon: Music2,
    },
    {
      name: "Linktree",
      href: "https://linktr.ee/Digital_Sparks_Solutions?utm_source=linktree_profile_share&ltsid=1f867e4d-292c-4c2b-b420-c108d2692717",
      icon: Link2,
    },
  ];

  const handleClick = (
    e: React.MouseEvent<HTMLAnchorElement>,
    href: string
  ) => {
    // Only handle hash links
    if (href.startsWith("#")) {
      // If we're not on homepage, let Next.js handle navigation
      if (pathname !== "/") {
        return;
      }

      // If we're on homepage, handle smooth scroll
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
    }
  };

  return (
    <footer className="bg-slate-100 dark:bg-slate-950 border-t border-slate-200 dark:border-slate-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 lg:py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8 lg:gap-12">
          {/* Brand Section */}
          <div className="lg:col-span-2">
            <Link href="/">
              <Image
                src="https://res.cloudinary.com/popit/image/upload/v1762382982/dss-logo-removebg-preview_ndpw4b.png"
                alt="Digital Sparks Solutions"
                width={200}
                height={64}
                className="h-16 w-auto mb-4 hover:opacity-80 transition-opacity duration-300"
              />
            </Link>
            <p className="text-slate-600 dark:text-gray-400 text-sm mb-6 max-w-sm font-nunito">
              Empowering your UK business and career journey from start-up to
              success!
            </p>

            {/* Social Links */}
            <div className="flex space-x-4">
              {socialLinks.map((social) => {
                const Icon = social.icon;
                return (
                  <a
                    key={social.name}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-2 rounded-lg bg-slate-200 dark:bg-slate-800/50 text-slate-600 dark:text-gray-400 hover:text-cyan-600 dark:hover:text-cyan-400 hover:bg-cyan-100 dark:hover:bg-cyan-500/10 transition-all duration-300 hover:scale-110"
                    aria-label={social.name}
                  >
                    <Icon className="h-5 w-5" />
                  </a>
                );
              })}
            </div>
          </div>

          {/* Company Links */}
          <div>
            <h3 className="text-slate-800 dark:text-white font-semibold text-sm uppercase tracking-wider mb-4 font-nunito">
              Company
            </h3>
            <ul className="space-y-3">
              {footerLinks.company.map((link) => (
                <li key={link.name}>
                  <Link
                    href={
                      link.href.startsWith("#") ? `/${link.href}` : link.href
                    }
                    onClick={(e) => handleClick(e, link.href)}
                    className="text-slate-600 dark:text-gray-400 hover:text-cyan-600 dark:hover:text-cyan-400 text-sm transition-colors duration-300 font-nunito block"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Services Links */}
          <div>
            <h3 className="text-slate-800 dark:text-white font-semibold text-sm uppercase tracking-wider mb-4 font-nunito">
              Services
            </h3>
            <ul className="space-y-3">
              {footerLinks.services.map((link) => (
                <li key={link.name}>
                  <Link
                    href={
                      link.href.startsWith("#") ? `/${link.href}` : link.href
                    }
                    onClick={(e) => handleClick(e, link.href)}
                    className="text-slate-600 dark:text-gray-400 hover:text-cyan-600 dark:hover:text-cyan-400 text-sm transition-colors duration-300 font-nunito block"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Resources Links */}
          <div>
            <h3 className="text-slate-800 dark:text-white font-semibold text-sm uppercase tracking-wider mb-4 font-nunito">
              Resources
            </h3>
            <ul className="space-y-3">
              {footerLinks.resources.map((link) => (
                <li key={link.name}>
                  <Link
                    href={
                      link.href.startsWith("#") ? `/${link.href}` : link.href
                    }
                    onClick={(e) => handleClick(e, link.href)}
                    className="text-slate-600 dark:text-gray-400 hover:text-cyan-600 dark:hover:text-cyan-400 text-sm transition-colors duration-300 font-nunito block"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 mt-8 border-t border-slate-200 dark:border-slate-800">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <p className="text-slate-600 dark:text-gray-400 text-sm font-nunito">
              © {currentYear} Digital Sparks Solutions. All rights reserved.
            </p>
            <div className="flex space-x-6">
              <Link
                href="#privacy"
                className="text-slate-600 dark:text-gray-400 hover:text-cyan-600 dark:hover:text-cyan-400 text-sm transition-colors duration-300 font-nunito"
              >
                Privacy Policy
              </Link>

              <Link
                href="#terms"
                className="text-slate-600 dark:text-gray-400 hover:text-cyan-600 dark:hover:text-cyan-400 text-sm transition-colors duration-300 font-nunito"
              >
                Terms of Service
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
