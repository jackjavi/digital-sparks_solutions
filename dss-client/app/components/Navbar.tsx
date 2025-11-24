"use client";

import React, { useState, useEffect } from "react";
import { Menu, X, ChevronDown } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { ThemeButtons } from "./theme-buttons";

interface NavLink {
  name: string;
  href: string;
}

const Navbar: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("home");
  const [isVisible, setIsVisible] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);
  const pathname = usePathname();

  const navLinks: NavLink[] = [
    { name: "Home", href: "#home" },
    { name: "Our Services", href: "#services" },
    { name: "About Us", href: "#about" },
    { name: "Why Choose Us", href: "#why-choose" },
    { name: "Testimonials", href: "#testimonials" },
    {
      name: "Book A Consultation",
      href: "/services/book-a-consultation",
    },
  ];

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;

      // Hide navbar on scroll down, show on scroll up
      if (currentScrollY > lastScrollY && currentScrollY > 80) {
        setIsVisible(false);
      } else {
        setIsVisible(true);
      }

      setLastScrollY(currentScrollY);
      setIsScrolled(currentScrollY > 20);

      // Update active section only for hash navigation
      const sections = navLinks
        .filter((link) => link.href.startsWith("#"))
        .map((link) => link.href.substring(1));
      const current = sections.find((section) => {
        const element = document.getElementById(section);
        if (element) {
          const rect = element.getBoundingClientRect();
          return rect.top <= 100 && rect.bottom >= 100;
        }
        return false;
      });

      if (current) {
        setActiveSection(current);
      }
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, [lastScrollY]);

  const handleNavClick = (
    e: React.MouseEvent<HTMLAnchorElement>,
    href: string
  ) => {
    // If it's a hash link and we're not on homepage, navigate to homepage first
    if (href.startsWith("#")) {
      if (pathname !== "/") {
        // Let Next.js handle navigation to homepage with hash
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

      setIsMobileMenuOpen(false);
      setActiveSection(targetId);
    } else {
      // For non-hash links, close mobile menu
      setIsMobileMenuOpen(false);
    }
  };

  const isActiveLink = (href: string) => {
    if (href.startsWith("#")) {
      return activeSection === href.substring(1) && pathname === "/";
    }
    return pathname === href;
  };

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        isVisible ? "translate-y-0" : "-translate-y-full"
      } ${
        isScrolled
          ? "bg-white/95 dark:bg-slate-900/95 backdrop-blur-xl shadow-lg shadow-slate-200/50 dark:shadow-slate-900/50"
          : "bg-white/80 dark:bg-slate-950/80 backdrop-blur-sm"
      }`}
    >
      {/* Top accent line */}
      <div className="h-0.5 bg-gradient-to-r from-transparent via-cyan-500 to-transparent" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <div className="shrink-0 group">
            <Link href="/" className="flex items-center relative">
              <div className="absolute -inset-2 bg-gradient-to-r from-cyan-500/20 to-blue-500/20 rounded-lg blur opacity-0 group-hover:opacity-100 transition duration-500" />
              <Image
                src="https://res.cloudinary.com/popit/image/upload/v1762382982/dss-logo-removebg-preview_ndpw4b.png"
                alt="Digital Sparks Solutions"
                width={200}
                height={64}
                className="h-16 w-auto lg:h-18 transition-all duration-300 group-hover:scale-105 relative z-10"
                priority
              />
            </Link>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex lg:items-center lg:space-x-1">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                href={link.href.startsWith("#") ? `/${link.href}` : link.href}
                onClick={(e) => handleNavClick(e, link.href)}
                className={`relative px-4 py-2 rounded-lg text-sm font-medium transition-all duration-300 font-nunito group ${
                  isActiveLink(link.href)
                    ? "text-cyan-600 dark:text-cyan-400"
                    : "text-slate-700 dark:text-gray-200 hover:text-cyan-600 dark:hover:text-cyan-400"
                }`}
              >
                {/* Active indicator */}
                {isActiveLink(link.href) && (
                  <span className="absolute inset-0 bg-cyan-500/10 rounded-lg" />
                )}
                {/* Hover effect */}
                <span className="absolute inset-0 bg-slate-100 dark:bg-slate-800/50 rounded-lg scale-0 group-hover:scale-100 transition-transform duration-300" />
                <span className="relative">{link.name}</span>

                {/* Bottom accent line for active state */}
                {isActiveLink(link.href) && (
                  <span className="absolute bottom-0 left-1/2 -translate-x-1/2 w-1/2 h-0.5 bg-gradient-to-r from-cyan-500 to-blue-500 rounded-full" />
                )}
              </Link>
            ))}

            {/* Theme Toggle - Desktop */}
            <div className="ml-2">
              <ThemeButtons />
            </div>

            {/* CTA Button */}
            <Link
              href="/#contact"
              onClick={(e) => handleNavClick(e, "#contact")}
              className="relative ml-4 px-6 py-2.5 bg-gradient-to-r from-cyan-500 to-blue-600 text-white rounded-lg font-semibold overflow-hidden group font-nunito"
            >
              <span className="absolute inset-0 bg-gradient-to-r from-cyan-400 to-blue-500 translate-y-full group-hover:translate-y-0 transition-transform duration-300" />
              <span className="relative flex items-center gap-2">
                Contact Us
                <ChevronDown className="h-4 w-4 -rotate-90 group-hover:translate-x-1 transition-transform duration-300" />
              </span>
            </Link>
          </div>

          {/* Mobile Menu Button and Theme Toggle */}
          <div className="lg:hidden flex items-center gap-2">
            {/* Theme Toggle - Mobile */}
            <ThemeButtons />

            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="relative p-2 rounded-lg text-slate-700 dark:text-gray-200 hover:text-cyan-600 dark:hover:text-cyan-400 hover:bg-slate-100 dark:hover:bg-slate-800/50 transition-all duration-300 group"
              aria-label="Toggle menu"
            >
              <span className="absolute inset-0 bg-cyan-500/10 rounded-lg scale-0 group-hover:scale-100 transition-transform duration-300" />
              <span className="relative">
                {isMobileMenuOpen ? (
                  <X className="h-6 w-6 rotate-0 transition-transform duration-300" />
                ) : (
                  <Menu className="h-6 w-6 rotate-0 transition-transform duration-300" />
                )}
              </span>
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      <div
        className={`lg:hidden transition-all duration-500 ease-in-out ${
          isMobileMenuOpen
            ? "max-h-[600px] opacity-100"
            : "max-h-0 opacity-0 overflow-hidden"
        }`}
      >
        <div className="px-4 pt-2 pb-6 space-y-2 bg-white/98 dark:bg-slate-900/98 backdrop-blur-xl border-t border-slate-200 dark:border-slate-800/50">
          {navLinks.map((link, index) => (
            <Link
              key={link.name}
              href={link.href.startsWith("#") ? `/${link.href}` : link.href}
              onClick={(e) => handleNavClick(e, link.href)}
              className={`block px-4 py-3 rounded-lg text-base font-medium transition-all duration-300 font-nunito ${
                isActiveLink(link.href)
                  ? "text-cyan-600 dark:text-cyan-400 bg-cyan-500/10 border-l-2 border-cyan-600 dark:border-cyan-400"
                  : "text-slate-700 dark:text-gray-200 hover:text-cyan-600 dark:hover:text-cyan-400 hover:bg-slate-100 dark:hover:bg-slate-800/50 hover:translate-x-1"
              }`}
              style={{ animationDelay: `${index * 50}ms` }}
            >
              {link.name}
            </Link>
          ))}

          {/* Mobile CTA Button */}
          <Link
            href="/#contact"
            onClick={(e) => handleNavClick(e, "#contact")}
            className="block mt-4 px-4 py-3 bg-gradient-to-r from-cyan-500 to-blue-600 text-white text-center rounded-lg font-semibold hover:from-cyan-400 hover:to-blue-500 transition-all duration-300 shadow-lg shadow-cyan-500/20 hover:scale-[1.02] font-nunito"
          >
            Contact Us
          </Link>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
