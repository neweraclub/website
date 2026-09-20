"use client";

import React, { useState } from "react";
import { motion } from "framer-motion";
import {
  Sparkles,
  ArrowRight,
  Stethoscope,
  Building2,
  Users2,
  TrendingUp,
  Award,
  BookOpen,
} from "lucide-react";

interface Pillar {
  number: string;
  title: string;
  subtitle: string;
  tagline: string;
  accentColor: string;
  icon: React.ReactNode;
}

const PILLARS: Pillar[] = [
  {
    number: "01",
    title: "Clinical Simulation",
    subtitle: "Hands-on Mastery",
    tagline:
      "Standardized surgical suturing, emergency triage protocols, ultrasound diagnostics, and OSCE preparation.",
    accentColor: "#3B33FF",
    icon: <Stethoscope className="w-5 h-5 text-[#3B33FF]" />,
  },
  {
    number: "02",
    title: "Medical Congresses",
    subtitle: "Academic Leadership",
    tagline:
      "National scientific symposiums convening renowned hospital physicians, surgeons, and biomedical researchers.",
    accentColor: "#8B3EE1",
    icon: <Building2 className="w-5 h-5 text-[#8B3EE1]" />,
  },
  {
    number: "03",
    title: "Elite Mentorship",
    subtitle: "Clerkship Guidance",
    tagline:
      "One-on-one direct career coaching and residency readiness from senior hospital residents and fellows.",
    accentColor: "#F97316",
    icon: <Users2 className="w-5 h-5 text-[#F97316]" />,
  },
];

const STATS = [
  { label: "Active Members", value: "500+", subtitle: "Medical Students Across Faculties" },
  { label: "Scientific Congresses", value: "45+", subtitle: "National & Regional Symposia" },
  { label: "Hands-on Workshops", value: "30+", subtitle: "Surgical & Trauma Drills" },
  { label: "Residency Match", value: "98%", subtitle: "Specialty Hospital Placements" },
];

export const AboutSection: React.FC = () => {
  const [hoveredPillar, setHoveredPillar] = useState<string | null>(null);

  return (
    <section id="about" className="relative py-20 sm:py-28 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Minimal Section Header */}
        <div className="mb-14 sm:mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[#FEFCF7] border border-[#E4DAC8] shadow-xs text-xs font-bold uppercase tracking-widest text-[#8B3EE1] mb-4">
            <Sparkles className="w-3.5 h-3.5 text-[#F97316]" />
            <span>Academic Pillars</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-[#0B0B1A] tracking-tight">
            Built on Three Pillars of <span className="text-gradient-brand">Clinical Excellence</span>.
          </h2>
        </div>

        {/* Three Academic Pillars: One Big Numbered Row (01/02/03) - No Boxed Cards */}
        <div className="border-t border-[#E8DFD1] divide-y divide-[#E8DFD1] mb-20">
          {PILLARS.map((pillar) => {
            const isHovered = hoveredPillar === pillar.number;

            return (
              <motion.div
                key={pillar.number}
                onMouseEnter={() => setHoveredPillar(pillar.number)}
                onMouseLeave={() => setHoveredPillar(null)}
                className="group py-8 sm:py-10 transition-colors cursor-pointer relative"
              >
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-4 lg:gap-8 items-center">
                  {/* Big Number */}
                  <div className="lg:col-span-2 flex items-center gap-4">
                    <span className="font-mono text-3xl sm:text-4xl lg:text-5xl font-black text-slate-300 group-hover:text-[#0B0B1A] transition-colors">
                      {pillar.number}
                    </span>
                    <div className="w-9 h-9 rounded-xl bg-[#F6EFE4] flex items-center justify-center border border-[#E4DAC8] lg:hidden">
                      {pillar.icon}
                    </div>
                  </div>

                  {/* Title & Subtitle */}
                  <div className="lg:col-span-4">
                    <span
                      className="text-[10px] font-black uppercase tracking-widest font-mono"
                      style={{ color: pillar.accentColor }}
                    >
                      {pillar.subtitle}
                    </span>
                    <h3 className="text-2xl sm:text-3xl font-black text-[#0B0B1A] group-hover:text-[#3B33FF] transition-colors mt-0.5">
                      {pillar.title}
                    </h3>
                  </div>

                  {/* One-Line Description */}
                  <div className="lg:col-span-5">
                    <p className="text-sm sm:text-base text-slate-700 leading-relaxed font-normal">
                      {pillar.tagline}
                    </p>
                  </div>

                  {/* Dynamic Arrow Indicator */}
                  <div className="lg:col-span-1 flex justify-end">
                    <div className="w-10 h-10 rounded-full border border-[#E4DAC8] flex items-center justify-center text-slate-400 group-hover:text-slate-900 group-hover:border-slate-800 group-hover:translate-x-1.5 transition-all">
                      <ArrowRight className="w-4 h-4" />
                    </div>
                  </div>
                </div>

                {/* Subtle Left Accent Line on Hover */}
                {isHovered && (
                  <motion.div
                    layoutId="pillarAccent"
                    className="absolute left-0 top-0 bottom-0 w-1 rounded-full"
                    style={{ backgroundColor: pillar.accentColor }}
                  />
                )}
              </motion.div>
            );
          })}
        </div>

        {/* Live Stats Strip: Animated Counters */}
        <div className="rounded-3xl p-8 sm:p-10 bg-[#FEFCF7] border border-[#E4DAC8] shadow-xs">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 divide-y lg:divide-y-0 lg:divide-x divide-[#E8DFD1]">
            {STATS.map((stat, i) => (
              <div key={stat.label} className="pt-6 lg:pt-0 lg:px-6 first:pl-0">
                <div
                  className={`text-4xl sm:text-5xl font-black tracking-tight mb-1.5 ${
                    i === 0
                      ? "text-transparent bg-clip-text bg-gradient-to-r from-[#3B33FF] to-[#8B3EE1]"
                      : i === 1
                      ? "text-transparent bg-clip-text bg-gradient-to-r from-[#8B3EE1] to-[#E53888]"
                      : i === 2
                      ? "text-transparent bg-clip-text bg-gradient-to-r from-[#E53888] to-[#F97316]"
                      : "text-transparent bg-clip-text bg-gradient-to-r from-[#F97316] to-[#FACC15]"
                  }`}
                >
                  {stat.value}
                </div>
                <div className="text-sm font-bold text-[#0B0B1A] tracking-wide">
                  {stat.label}
                </div>
                <div className="text-xs text-slate-500 mt-0.5">
                  {stat.subtitle}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
