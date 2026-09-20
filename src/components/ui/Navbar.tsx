"use client";

import React, { useState, useEffect } from "react";
import { BrandLogo } from "./BrandLogo";
import { motion, AnimatePresence } from "framer-motion";
import {
  ArrowRight,
  Sparkles,
  ChevronDown,
  Calendar,
  Layers,
  GraduationCap,
  BookOpen,
  FileText,
  Users,
  Compass,
  Bell,
  Stethoscope,
  X,
  Menu,
} from "lucide-react";

interface NavbarProps {
  onOpenApply: () => void;
}

export const Navbar: React.FC<NavbarProps> = ({ onOpenApply }) => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    if (mobileMenuOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }
  }, [mobileMenuOpen]);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? "py-3 bg-[#FAF6EE]/92 backdrop-blur-md border-b border-[#E8DFD1]/80 shadow-xs"
          : "py-4 sm:py-5 bg-transparent"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between">
        {/* Brand Logo left */}
        <a
          href="#home"
          className="focus:outline-none min-h-[44px] flex items-center shrink-0"
          aria-label="Club Médical New Era Home"
        >
          <BrandLogo size="md" inverted={false} />
        </a>

        {/* Floating Cream Tinted Pill Bar (Desktop) */}
        <nav
          aria-label="Primary Navigation"
          className="hidden xl:flex items-center gap-1 bg-[#FEFCF7]/95 px-3 py-1.5 rounded-full border border-[#E4DAC8] shadow-xs text-xs font-semibold text-[#0B0B1A]"
        >
          {/* 1. Home */}
          <a
            href="#home"
            className="px-3.5 py-1.5 rounded-full text-slate-700 hover:text-[#3B33FF] hover:bg-[#F6EFE4] transition-all"
          >
            Home
          </a>

          {/* 2. Upcoming Events (Dropdown) */}
          <div
            className="relative"
            onMouseEnter={() => setActiveDropdown("events")}
            onMouseLeave={() => setActiveDropdown(null)}
          >
            <button
              className="flex items-center gap-1 px-3.5 py-1.5 rounded-full text-slate-700 hover:text-[#3B33FF] hover:bg-[#F6EFE4] transition-all"
              onClick={() =>
                setActiveDropdown(activeDropdown === "events" ? null : "events")
              }
            >
              <span>Upcoming Events</span>
              <ChevronDown className="w-3.5 h-3.5 opacity-60" />
            </button>

            <AnimatePresence>
              {activeDropdown === "events" && (
                <motion.div
                  initial={{ opacity: 0, y: 8, scale: 0.98 }}
                  animate={{ opacity: 1, y: 0, scale: 1 }}
                  exit={{ opacity: 0, y: 6, scale: 0.98 }}
                  transition={{ duration: 0.18 }}
                  className="absolute top-full left-0 mt-2 w-64 p-2 bg-[#FEFCF7] rounded-2xl border border-[#E4DAC8] shadow-lg flex flex-col gap-1 z-50"
                >
                  <a
                    href="#events"
                    className="flex items-center gap-3 p-2.5 rounded-xl hover:bg-[#F6EFE4] transition-all group"
                    onClick={() => setActiveDropdown(null)}
                  >
                    <div className="w-8 h-8 rounded-lg bg-[#F97316]/10 text-[#F97316] flex items-center justify-center shrink-0">
                      <Calendar className="w-4 h-4" />
                    </div>
                    <div>
                      <div className="font-bold text-[#0B0B1A] group-hover:text-[#3B33FF]">
                        Future Events & Registration
                      </div>
                      <div className="text-[10px] text-slate-500 font-normal">
                        Upcoming congresses & signups
                      </div>
                    </div>
                  </a>

                  <a
                    href="#events-portfolio"
                    className="flex items-center gap-3 p-2.5 rounded-xl hover:bg-[#F6EFE4] transition-all group"
                    onClick={() => setActiveDropdown(null)}
                  >
                    <div className="w-8 h-8 rounded-lg bg-[#8B3EE1]/10 text-[#8B3EE1] flex items-center justify-center shrink-0">
                      <Layers className="w-4 h-4" />
                    </div>
                    <div>
                      <div className="font-bold text-[#0B0B1A] group-hover:text-[#8B3EE1]">
                        Event Websites Portfolio
                      </div>
                      <div className="text-[10px] text-slate-500 font-normal">
                        Past congress milestone microsites
                      </div>
                    </div>
                  </a>
                </motion.div>
              )}
            </AnimatePresence>
          </div>

          {/* 3. Medical Training Workshops */}
          <a
            href="#workshops"
            className="px-3.5 py-1.5 rounded-full text-slate-700 hover:text-[#3B33FF] hover:bg-[#F6EFE4] transition-all flex items-center gap-1.5"
          >
            <Stethoscope className="w-3.5 h-3.5 text-[#E53888]" />
            <span>Workshops</span>
          </a>

          {/* 4. Announcements & Opportunities */}
          <a
            href="#announcements"
            className="px-3.5 py-1.5 rounded-full text-slate-700 hover:text-[#3B33FF] hover:bg-[#F6EFE4] transition-all flex items-center gap-1.5"
          >
            <Bell className="w-3.5 h-3.5 text-[#F97316]" />
            <span>Announcements</span>
          </a>

          {/* 5. Academic Hub (Mega-Dropdown) */}
          <div
            className="relative"
            onMouseEnter={() => setActiveDropdown("academic")}
            onMouseLeave={() => setActiveDropdown(null)}
          >
            <button
              className="flex items-center gap-1 px-3.5 py-1.5 rounded-full text-slate-700 hover:text-[#3B33FF] hover:bg-[#F6EFE4] transition-all"
              onClick={() =>
                setActiveDropdown(activeDropdown === "academic" ? null : "academic")
              }
            >
              <span>Academic Hub</span>
              <ChevronDown className="w-3.5 h-3.5 opacity-60" />
            </button>

            <AnimatePresence>
              {activeDropdown === "academic" && (
                <motion.div
                  initial={{ opacity: 0, y: 8, scale: 0.98 }}
                  animate={{ opacity: 1, y: 0, scale: 1 }}
                  exit={{ opacity: 0, y: 6, scale: 0.98 }}
                  transition={{ duration: 0.18 }}
                  className="absolute top-full -left-20 mt-2 w-[420px] p-3 bg-[#FEFCF7] rounded-3xl border border-[#E4DAC8] shadow-xl grid grid-cols-2 gap-2 z-50"
                >
                  <a
                    href="#academic-resources"
                    className="flex flex-col p-3 rounded-2xl hover:bg-[#F6EFE4] transition-all group"
                    onClick={() => setActiveDropdown(null)}
                  >
                    <BookOpen className="w-4 h-4 text-[#3B33FF] mb-2" />
                    <div className="font-bold text-xs text-[#0B0B1A] group-hover:text-[#3B33FF]">
                      Study Resources
                    </div>
                    <div className="text-[10px] text-slate-500 mt-0.5">
                      Clerkship survival guides & OSCE rubrics
                    </div>
                  </a>

                  <a
                    href="#academic-research"
                    className="flex flex-col p-3 rounded-2xl hover:bg-[#F6EFE4] transition-all group"
                    onClick={() => setActiveDropdown(null)}
                  >
                    <Compass className="w-4 h-4 text-[#8B3EE1] mb-2" />
                    <div className="font-bold text-xs text-[#0B0B1A] group-hover:text-[#8B3EE1]">
                      Research & Publications
                    </div>
                    <div className="text-[10px] text-slate-500 mt-0.5">
                      Student epidemiology fellowships
                    </div>
                  </a>

                  <a
                    href="#academic-papers"
                    className="flex flex-col p-3 rounded-2xl hover:bg-[#F6EFE4] transition-all group"
                    onClick={() => setActiveDropdown(null)}
                  >
                    <FileText className="w-4 h-4 text-[#E53888] mb-2" />
                    <div className="font-bold text-xs text-[#0B0B1A] group-hover:text-[#E53888]">
                      Published Papers
                    </div>
                    <div className="text-[10px] text-slate-500 mt-0.5">
                      Peer-reviewed indexed journals
                    </div>
                  </a>

                  <a
                    href="#academic-teams"
                    className="flex flex-col p-3 rounded-2xl hover:bg-[#F6EFE4] transition-all group"
                    onClick={() => setActiveDropdown(null)}
                  >
                    <Users className="w-4 h-4 text-[#F97316] mb-2" />
                    <div className="font-bold text-xs text-[#0B0B1A] group-hover:text-[#F97316]">
                      Research Teams
                    </div>
                    <div className="text-[10px] text-slate-500 mt-0.5">
                      Join active laboratory working groups
                    </div>
                  </a>
                </motion.div>
              )}
            </AnimatePresence>
          </div>

          {/* 6. Our Team */}
          <a
            href="#team"
            className="px-3.5 py-1.5 rounded-full text-slate-700 hover:text-[#3B33FF] hover:bg-[#F6EFE4] transition-all"
          >
            Our Team
          </a>

          {/* 7. Contact */}
          <a
            href="#contact"
            className="px-3.5 py-1.5 rounded-full text-slate-700 hover:text-[#3B33FF] hover:bg-[#F6EFE4] transition-all"
          >
            Contact
          </a>
        </nav>

        {/* Right CTA Button: Join Us */}
        <div className="hidden sm:flex items-center gap-3">
          <motion.button
            whileHover={{ scale: 1.04, y: -1 }}
            whileTap={{ scale: 0.96 }}
            onClick={onOpenApply}
            className="inline-flex items-center gap-2 px-6 py-2.5 rounded-full text-xs font-black text-slate-950 bg-gradient-to-r from-[#F97316] to-[#FACC15] shadow-sunset-glow hover:shadow-[0_0_25px_rgba(249,115,22,0.4)] transition-all min-h-[44px]"
          >
            <Sparkles className="w-3.5 h-3.5 text-slate-950" />
            <span>Join Club</span>
            <ArrowRight className="w-3.5 h-3.5 text-slate-950" />
          </motion.button>
        </div>

        {/* Mobile Hamburger Toggle */}
        <div className="flex xl:hidden items-center gap-2">
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="w-11 h-11 rounded-2xl bg-[#FEFCF7] border border-[#E4DAC8] text-[#0B0B1A] flex items-center justify-center transition-colors"
            aria-label="Toggle menu"
          >
            {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>
      </div>

      {/* Full-Screen Animated Mobile Menu */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.3 }}
            className="xl:hidden fixed inset-x-0 top-[68px] bottom-0 bg-[#FAF6EE] border-t border-[#E8DFD1] z-40 flex flex-col justify-between overflow-y-auto px-6 py-8"
          >
            <div className="space-y-4">
              <a
                href="#home"
                onClick={() => setMobileMenuOpen(false)}
                className="block text-2xl font-black text-[#0B0B1A] hover:text-[#3B33FF]"
              >
                Home
              </a>
              <div className="border-t border-[#E8DFD1] pt-3">
                <span className="text-xs font-mono uppercase tracking-widest text-[#F97316] font-bold">
                  Events & Congresses
                </span>
                <div className="pl-3 mt-2 space-y-2">
                  <a
                    href="#events"
                    onClick={() => setMobileMenuOpen(false)}
                    className="block text-lg font-bold text-slate-800"
                  >
                    Future Events & Registration
                  </a>
                  <a
                    href="#events-portfolio"
                    onClick={() => setMobileMenuOpen(false)}
                    className="block text-lg font-bold text-slate-800"
                  >
                    Event Websites Portfolio
                  </a>
                </div>
              </div>

              <a
                href="#workshops"
                onClick={() => setMobileMenuOpen(false)}
                className="block text-2xl font-black text-[#0B0B1A] hover:text-[#E53888]"
              >
                Medical Training Workshops
              </a>

              <a
                href="#announcements"
                onClick={() => setMobileMenuOpen(false)}
                className="block text-2xl font-black text-[#0B0B1A] hover:text-[#F97316]"
              >
                Announcements & Opportunities
              </a>

              <div className="border-t border-[#E8DFD1] pt-3">
                <span className="text-xs font-mono uppercase tracking-widest text-[#8B3EE1] font-bold">
                  Academic Hub
                </span>
                <div className="pl-3 mt-2 space-y-2">
                  <a
                    href="#academic-resources"
                    onClick={() => setMobileMenuOpen(false)}
                    className="block text-lg font-bold text-slate-800"
                  >
                    Study Resources
                  </a>
                  <a
                    href="#academic-research"
                    onClick={() => setMobileMenuOpen(false)}
                    className="block text-lg font-bold text-slate-800"
                  >
                    Research & Publications
                  </a>
                  <a
                    href="#academic-papers"
                    onClick={() => setMobileMenuOpen(false)}
                    className="block text-lg font-bold text-slate-800"
                  >
                    Published Papers
                  </a>
                  <a
                    href="#academic-teams"
                    onClick={() => setMobileMenuOpen(false)}
                    className="block text-lg font-bold text-slate-800"
                  >
                    Research Teams
                  </a>
                </div>
              </div>

              <a
                href="#team"
                onClick={() => setMobileMenuOpen(false)}
                className="block text-2xl font-black text-[#0B0B1A] hover:text-[#3B33FF]"
              >
                Our Team
              </a>

              <a
                href="#contact"
                onClick={() => setMobileMenuOpen(false)}
                className="block text-2xl font-black text-[#0B0B1A] hover:text-[#8B3EE1]"
              >
                Contact
              </a>
            </div>

            <div className="pt-8">
              <button
                onClick={() => {
                  setMobileMenuOpen(false);
                  onOpenApply();
                }}
                className="w-full py-4 rounded-full text-center font-black text-slate-950 bg-gradient-to-r from-[#F97316] to-[#FACC15] shadow-sunset-glow"
              >
                Join the New Era Club
              </button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
};
