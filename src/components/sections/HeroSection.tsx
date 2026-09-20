"use client";

import React from "react";
import dynamic from "next/dynamic";
import { motion } from "framer-motion";
import { ArrowRight, Calendar, Award, ChevronDown } from "lucide-react";

// Client-only dynamic import for the 3D Canvas
const HeroCanvas = dynamic(
  () => import("../3d/HeroCanvas").then((mod) => mod.HeroCanvas),
  {
    ssr: false,
    loading: () => (
      <div className="w-full h-[380px] sm:h-[480px] md:h-[550px] lg:h-[620px] flex items-center justify-center">
        <div className="relative w-16 h-16 flex items-center justify-center">
          <div className="w-12 h-12 rounded-full border-2 border-slate-200 border-t-[#3B33FF] animate-spin" />
        </div>
      </div>
    ),
  }
);

interface HeroSectionProps {
  onOpenApply: () => void;
}

export const HeroSection: React.FC<HeroSectionProps> = ({ onOpenApply }) => {
  return (
    <section className="relative min-h-[92vh] pt-32 sm:pt-36 pb-16 sm:pb-24 flex flex-col justify-center overflow-hidden">
      {/* Background Soft Atmospheric Glows */}
      <div className="absolute top-1/4 -left-32 w-80 sm:w-96 h-80 sm:h-96 rounded-full bg-[#3B33FF]/05 blur-[120px] pointer-events-none" />
      <div className="absolute bottom-1/4 right-0 w-[350px] sm:w-[500px] h-[350px] sm:h-[500px] rounded-full bg-[#8B3EE1]/05 blur-[140px] pointer-events-none" />

      {/* Adaptive Margins with Expansive Spacing */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-6 items-center">
          {/* Left Column: Razor-Sharp Deep Midnight Navy-Black Copywriting & CTAs */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
            className="lg:col-span-6 flex flex-col items-start z-10 w-full"
          >
            {/* Pill Badge: Warm Cream Canvas Pill */}
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.2 }}
              className="inline-flex items-center gap-2.5 px-3.5 sm:px-4 py-1.5 rounded-full bg-[#FEFCF7] border border-[#E4DAC8] shadow-xs mb-5 sm:mb-6"
            >
              <span className="flex h-2 w-2 rounded-full bg-[#F97316] animate-pulse" />
              <span className="text-[11px] sm:text-xs font-black uppercase tracking-wider text-[#0A0F24]">
                Club Médical New Era
              </span>
              <span className="text-[#C8BCAB]">·</span>
              <span className="text-[11px] sm:text-xs font-bold text-transparent bg-clip-text bg-gradient-to-r from-[#8B3EE1] to-[#E53888]">
                2026 Academic Society
              </span>
            </motion.div>

            {/* Fluid Typography Headline in razor-sharp deep midnight navy-black font */}
            <h1 className="text-[clamp(2.2rem,5vw,4.4rem)] font-black text-[#0A0F24] tracking-tight leading-[1.08] mb-5 sm:mb-6">
              Pioneering the{" "}
              <span className="text-gradient-brand">Future of Medicine</span>, One Student at a Time.
            </h1>

            {/* Expansive descriptive body text covering clinical simulation, medical congresses, and elite mentorship */}
            <p className="text-base sm:text-lg text-slate-700 leading-relaxed max-w-xl mb-8 font-normal">
              Club Médical New Era is the premier academic society empowering future physicians through immersive <strong className="font-semibold text-[#0A0F24]">clinical simulation</strong>, keynote <strong className="font-semibold text-[#0A0F24]">medical congresses</strong>, and direct <strong className="font-semibold text-[#0A0F24]">elite mentorship</strong> from top residency clinicians.
            </p>

            {/* Dual CTAs: Sunset orange pill button + warm cream glass button */}
            <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3.5 sm:gap-4 w-full sm:w-auto">
              <motion.button
                whileHover={{ scale: 1.04, y: -2 }}
                whileTap={{ scale: 0.96 }}
                onClick={onOpenApply}
                className="w-full sm:w-auto min-h-[48px] px-8 py-3.5 sm:py-4 rounded-full text-sm font-black text-slate-950 bg-gradient-to-r from-[#F97316] to-[#FACC15] shadow-sunset-glow hover:shadow-[0_0_30px_rgba(249,115,22,0.4)] transition-all duration-300 flex items-center justify-center gap-3 group"
              >
                <span>Join the New Era</span>
                <ArrowRight className="w-4 h-4 text-slate-950 group-hover:translate-x-1.5 transition-transform" />
              </motion.button>

              <motion.a
                whileHover={{ scale: 1.03, y: -2 }}
                whileTap={{ scale: 0.97 }}
                href="#events"
                className="w-full sm:w-auto min-h-[48px] px-7 py-3.5 sm:py-4 rounded-full text-sm font-bold text-[#0A0F24] bg-[#FEFCF7] hover:bg-[#F6EFE4] border border-[#E4DAC8] shadow-xs transition-all duration-300 flex items-center justify-center gap-2.5 hover:border-[#D8CEBA]"
              >
                <Calendar className="w-4 h-4 text-[#8B3EE1]" />
                <span>Explore Events</span>
              </motion.a>
            </div>

            {/* Proof Counters in Warm Cream Styling */}
            <div className="mt-10 sm:mt-12 pt-6 sm:pt-8 border-t border-[#E4DAC8]/80 grid grid-cols-3 gap-4 sm:gap-10 w-full max-w-lg">
              <div>
                <div className="text-xl sm:text-3xl font-black text-transparent bg-clip-text bg-gradient-to-r from-[#3B33FF] to-[#8B3EE1] tracking-tight">
                  500+
                </div>
                <div className="text-[10px] sm:text-xs font-bold text-slate-600 uppercase tracking-wide mt-0.5">
                  Medical Members
                </div>
              </div>
              <div>
                <div className="text-xl sm:text-3xl font-black text-transparent bg-clip-text bg-gradient-to-r from-[#8B3EE1] to-[#E53888] tracking-tight">
                  45+
                </div>
                <div className="text-[10px] sm:text-xs font-bold text-slate-600 uppercase tracking-wide mt-0.5">
                  Scientific Events
                </div>
              </div>
              <div>
                <div className="text-xl sm:text-3xl font-black text-transparent bg-clip-text bg-gradient-to-r from-[#E53888] to-[#F97316] tracking-tight">
                  98%
                </div>
                <div className="text-[10px] sm:text-xs font-bold text-slate-600 uppercase tracking-wide mt-0.5">
                  Residency Match
                </div>
              </div>
            </div>
          </motion.div>

          {/* Right Column: Architectural 3D Matte-Clay Composition (Large-Scale Assembly) */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1, delay: 0.2 }}
            className="lg:col-span-6 relative flex items-center justify-center w-full mt-2 lg:mt-0"
          >
            {/* Soft Diffused Shadow Backdrop */}
            <div className="absolute inset-0 bg-gradient-to-tr from-[#3B33FF]/08 via-[#8B3EE1]/06 to-[#F97316]/06 rounded-full blur-3xl -z-10 transform scale-95" />

            {/* Central 3D Interactive Stage: Architectural Assembly of Shield, Capsules, Instruments */}
            <HeroCanvas />

            {/* Accreditation Badge Floating Pill (Warm Organic Cream) */}
            <motion.div
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.8 }}
              className="absolute -bottom-2 left-2 sm:left-4 glass-panel px-3.5 sm:px-4 py-2.5 sm:py-3 rounded-2xl shadow-sm border border-[#E4DAC8] hidden sm:flex items-center gap-3 bg-[#FEFCF7]/95"
            >
              <div className="w-9 sm:w-10 h-9 sm:h-10 rounded-xl bg-gradient-to-tr from-[#3B33FF] via-[#8B3EE1] to-[#E53888] flex items-center justify-center text-white shadow-xs">
                <Award className="w-4 sm:w-5 h-4 sm:h-5" />
              </div>
              <div>
                <p className="text-xs font-black text-[#0A0F24]">Official Scientific Chapter</p>
                <p className="text-[10px] text-slate-600">Medical Student Association · 2026</p>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </div>

      {/* Discover More Scroll Prompt */}
      <div className="w-full flex justify-center mt-10 sm:mt-14 relative z-10">
        <a
          href="#about"
          className="flex flex-col items-center text-slate-400 hover:text-slate-800 transition-colors text-[11px] font-bold uppercase tracking-widest gap-1.5 group min-h-[48px] justify-center"
        >
          <span className="group-hover:tracking-[0.2em] transition-all">Discover New Era</span>
          <ChevronDown className="w-4 h-4 text-[#8B3EE1] animate-bounce" />
        </a>
      </div>
    </section>
  );
};
