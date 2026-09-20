"use client";

import React, { useState, useEffect } from "react";
import { BrandLogo } from "./BrandLogo";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowRight, Sparkles, ChevronRight, Globe, Award } from "lucide-react";

interface NavbarProps {
  onOpenApply: () => void;
}

export const Navbar: React.FC<NavbarProps> = ({ onOpenApply }) => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Prevent background scrolling when full-screen mobile drawer is open
  useEffect(() => {
    if (mobileMenuOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }
  }, [mobileMenuOpen]);

  const navLinks = [
    { label: "About", href: "#about", desc: "Our academic vision & clinical pillars" },
    { label: "Events", href: "#events", desc: "Scientific congresses & countdown" },
    { label: "Workshops", href: "#workshops", desc: "Hands-on surgical & diagnostic bootcamps" },
    { label: "Academic Hub", href: "#academic-hub", desc: "Peer-reviewed research & clerkship guides" },
    { label: "Our Team", href: "#team", desc: "Executive board & research directors" },
    { label: "Contact", href: "#contact", desc: "Official campus headquarters" },
  ];

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled || mobileMenuOpen
          ? "bg-[#FAF6EE]/90 backdrop-blur-[16px] border-b border-[#E8DFD1]/90 shadow-sm py-3"
          : "bg-[#FAF6EE]/75 backdrop-blur-[16px] py-4 sm:py-5 border-b border-[#E8DFD1]/60"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between">
        {/* Brand Logo on warm organic cream background */}
        <a
          href="#"
          className="focus:outline-none min-h-[48px] flex items-center"
          aria-label="Club Médical New Era Home"
        >
          <BrandLogo size="md" inverted={false} />
        </a>

        {/* Desktop Navigation Links: Warm Cream Frosted Capsule */}
        <nav className="hidden lg:flex items-center gap-1 bg-[#F5EFE4]/80 backdrop-blur-xl px-4 py-1.5 rounded-full border border-[#E8DFD1]/90 shadow-xs">
          {navLinks.map((link) => (
            <a
              key={link.label}
              href={link.href}
              className="px-3.5 py-1.5 rounded-full text-xs font-semibold text-slate-700 hover:text-[#3B33FF] hover:bg-slate-100/80 transition-all duration-200 tracking-wide"
            >
              {link.label}
            </a>
          ))}
        </nav>

        {/* Desktop Action Button: Warm Sunset Orange to Golden Yellow */}
        <div className="hidden lg:flex items-center gap-3">
          <motion.button
            whileHover={{ scale: 1.04 }}
            whileTap={{ scale: 0.96 }}
            onClick={onOpenApply}
            className="group relative inline-flex items-center gap-2 min-h-[44px] px-5 py-2.5 rounded-full text-xs font-black text-slate-950 bg-gradient-to-r from-[#F97316] to-[#FACC15] shadow-sunset-glow transition-all duration-300 hover:shadow-[0_0_25px_rgba(249,115,22,0.4)]"
          >
            <Sparkles className="w-3.5 h-3.5 text-slate-950 group-hover:rotate-12 transition-transform" />
            <span>Join Club</span>
            <ArrowRight className="w-3.5 h-3.5 text-slate-950 group-hover:translate-x-1 transition-transform" />
          </motion.button>
        </div>

        {/* Mobile Animated Custom Hamburger Button (Minimum 48x48px touch target) */}
        <div className="flex lg:hidden items-center">
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="min-w-[48px] min-h-[48px] p-2.5 rounded-2xl bg-white border border-slate-200 text-slate-800 hover:bg-slate-50 flex flex-col items-center justify-center gap-1.5 transition-colors focus:outline-none shadow-xs"
            aria-label={mobileMenuOpen ? "Close navigation menu" : "Open navigation menu"}
          >
            {/* Custom Animated 3-Line Hamburger Icon */}
            <span
              className={`w-5 h-0.5 bg-slate-800 rounded-full transition-all duration-300 transform origin-center ${
                mobileMenuOpen ? "rotate-45 translate-y-2" : ""
              }`}
            />
            <span
              className={`w-5 h-0.5 bg-[#F97316] rounded-full transition-all duration-300 ${
                mobileMenuOpen ? "opacity-0 scale-0" : "opacity-100"
              }`}
            />
            <span
              className={`w-5 h-0.5 bg-slate-800 rounded-full transition-all duration-300 transform origin-center ${
                mobileMenuOpen ? "-rotate-45 -translate-y-2" : ""
              }`}
            />
          </button>
        </div>
      </div>

      {/* Full-Screen Sleek Slide-Out Mobile Drawer (Light Mode) */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.3 }}
            className="lg:hidden fixed inset-x-0 top-[65px] sm:top-[73px] bottom-0 bg-white/98 backdrop-blur-2xl border-t border-slate-200 z-40 flex flex-col justify-between overflow-y-auto px-6 py-8 shadow-xl"
          >
            {/* Navigation Links with 48px min touch target and descriptions */}
            <div className="flex flex-col gap-2">
              <span className="text-[10px] font-black uppercase tracking-widest text-[#F97316] mb-2 px-3">
                Navigation Directory
              </span>

              {navLinks.map((link, idx) => (
                <motion.a
                  key={link.label}
                  href={link.href}
                  onClick={() => setMobileMenuOpen(false)}
                  initial={{ opacity: 0, x: -15 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: idx * 0.05 }}
                  className="min-h-[52px] px-4 py-3 rounded-2xl bg-slate-50 border border-slate-200/70 hover:bg-slate-100 text-slate-800 transition-all flex items-center justify-between group"
                >
                  <div>
                    <span className="text-base font-bold text-slate-900 group-hover:text-[#3B33FF] transition-colors">
                      {link.label}
                    </span>
                    <p className="text-[11px] text-slate-500 font-normal">
                      {link.desc}
                    </p>
                  </div>
                  <ChevronRight className="w-4 h-4 text-slate-400 group-hover:text-[#3B33FF] group-hover:translate-x-1 transition-transform" />
                </motion.a>
              ))}
            </div>

            {/* Bottom Drawer Actions */}
            <div className="pt-6 mt-6 border-t border-slate-200 space-y-4">
              <button
                onClick={() => {
                  setMobileMenuOpen(false);
                  onOpenApply();
                }}
                className="w-full min-h-[52px] py-3.5 rounded-2xl text-sm font-black text-slate-950 bg-gradient-to-r from-[#F97316] to-[#FACC15] shadow-sunset-glow flex items-center justify-center gap-2.5 active:scale-95 transition-transform"
              >
                <Sparkles className="w-4 h-4 text-slate-950" />
                <span>Apply for Membership (2026 Season)</span>
                <ArrowRight className="w-4 h-4 text-slate-950" />
              </button>

              <div className="flex items-center justify-between text-xs text-slate-500 px-2 pt-2">
                <span className="flex items-center gap-1.5">
                  <Globe className="w-3.5 h-3.5 text-[#F97316]" />
                  new-era-club.com
                </span>
                <span className="flex items-center gap-1.5">
                  <Award className="w-3.5 h-3.5 text-[#3B33FF]" />
                  Official Chapter
                </span>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
};
