"use client";

import React, { useState } from "react";
import { motion } from "framer-motion";
import { SITE_STATS } from "@/data/clubData";
import {
  Microscope,
  Stethoscope,
  GraduationCap,
  Users,
  Sparkles,
  CheckCircle2,
  Activity,
  ArrowRight,
} from "lucide-react";

const ACADEMIC_DIVISIONS = [
  {
    id: "simulation",
    title: "Clinical Simulations",
    subtitle: "Hands-on Procedural Mastery",
    description: "Equipping medical students with high-stakes practical competence in surgical suturing, point-of-care ultrasound, vital triage, and ACLS algorithms.",
    icon: <Stethoscope className="w-6 h-6 text-[#3B33FF]" />,
    badgeColor: "bg-[#3B33FF]/10 text-[#3B33FF]",
    stat: "14+ Annual Bootcamps",
  },
  {
    id: "congresses",
    title: "Medical Congresses",
    subtitle: "National Scientific Symposiums",
    description: "Convening world-renowned clinicians, university professors, and ambitious student delegates for keynote lectures, oral abstract presentations, and workshops.",
    icon: <GraduationCap className="w-6 h-6 text-[#8B3EE1]" />,
    badgeColor: "bg-[#8B3EE1]/10 text-[#8B3EE1]",
    stat: "500+ Attendees Each Year",
  },
  {
    id: "mentorship",
    title: "Elite Mentorship",
    subtitle: "Peer-to-Peer Clinical Guidance",
    description: "Bridging the gap between hospital textbooks and actual clinical clerkships through dedicated resident doctor mentorship and residency matching preparation.",
    icon: <Users className="w-6 h-6 text-[#E53888]" />,
    badgeColor: "bg-[#E53888]/10 text-[#E53888]",
    stat: "98% Match Rate",
  },
  {
    id: "research",
    title: "Scientific Inquiry",
    subtitle: "Biomedical Literature & Publishing",
    description: "Training undergraduate investigators in evidence-based medicine, IRB research ethics, clinical epidemiology, and peer-reviewed journal publishing.",
    icon: <Microscope className="w-6 h-6 text-[#F97316]" />,
    badgeColor: "bg-[#F97316]/10 text-[#F97316]",
    stat: "18+ Published Papers",
  },
];

export const AboutSection: React.FC = () => {
  const [activeTab, setActiveTab] = useState<"mission" | "vision" | "values">("mission");

  const tabContent = {
    mission: {
      title: "Our Scientific Mission",
      lead: "Bridging the critical transition from medical theory to confident clinical excellence.",
      description:
        "Club Médical New Era was founded with a singular conviction: future healthcare leaders deserve world-class scientific training, early research mentorship, and rigorous simulation before stepping onto the hospital floor.",
      points: [
        "Democratize access to hands-on surgical and diagnostic workshops",
        "Empower undergraduate medical students to publish peer-reviewed papers",
        "Foster inter-university collaboration across medical faculties",
      ],
    },
    vision: {
      title: "Our Long-term Vision",
      lead: "Shaping an internationally competitive generation of academic clinicians and researchers.",
      description:
        "We envision a thriving ecosystem where every medical student is equipped with critical reasoning, compassionate patient communication, and proficiency in emerging biomedical technologies like AI diagnostics.",
      points: [
        "Create the premier student-led medical congress in the region",
        "Establish an ongoing fellowship exchange with international hospitals",
        "Pioneer medical technology incubators for healthcare innovation",
      ],
    },
    values: {
      title: "Our Core Principles",
      lead: "Integrity, academic precision, fraternal solidarity, and relentless curiosity.",
      description:
        "Every event, workshop, and clinical simulation we organize is guided by our dedication to ethical medicine and mutual support among peers.",
      points: [
        "Commitment to Evidence-Based Clinical Practice",
        "Inclusivity & peer-to-peer knowledge transfer",
        "Relentless pursuit of academic excellence without elitism",
      ],
    },
  };

  return (
    <section id="about" className="relative py-24 sm:py-32 overflow-hidden">
      {/* Background Subtle Pastel Glows */}
      <div className="absolute top-1/3 left-0 w-96 h-96 rounded-full bg-[#3B33FF]/03 blur-[120px] pointer-events-none" />
      <div className="absolute bottom-10 right-0 w-96 h-96 rounded-full bg-[#8B3EE1]/03 blur-[130px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[#FEFCF7] border border-[#E4DAC8] shadow-xs text-xs font-bold uppercase tracking-widest text-[#8B3EE1] mb-4"
          >
            <Sparkles className="w-3.5 h-3.5 text-[#F97316]" />
            <span>Academic Leadership</span>
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-3xl sm:text-4xl lg:text-5xl font-black text-[#0A0F24] tracking-tight"
          >
            Elevating Medical Education into a{" "}
            <span className="text-gradient-brand">New Scientific Era</span>
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="text-base sm:text-lg text-slate-700 mt-4 leading-relaxed font-normal"
          >
            Founded by medical students for medical students, Club Médical New Era bridges the gap
            between textbooks and high-stake clinical practice.
          </motion.p>
        </div>

        {/* Clean Academic Divisions Matrix */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-20">
          {ACADEMIC_DIVISIONS.map((div) => (
            <div
              key={div.id}
              className="glass-panel-hover p-7 rounded-3xl border border-[#E4DAC8] flex flex-col justify-between group bg-[#FEFCF7] shadow-xs"
            >
              <div>
                <div className="w-13 h-13 rounded-2xl bg-[#F6EFE4] border border-[#E4DAC8] flex items-center justify-center mb-5 group-hover:scale-110 transition-transform shadow-xs">
                  {div.icon}
                </div>

                <span className={`inline-block px-2.5 py-0.5 rounded-full text-[10px] font-black uppercase tracking-wider mb-2 ${div.badgeColor}`}>
                  {div.subtitle}
                </span>

                <h3 className="text-xl font-black text-[#0A0F24] group-hover:text-[#3B33FF] transition-colors mb-2">
                  {div.title}
                </h3>

                <p className="text-xs text-slate-600 leading-relaxed font-normal">
                  {div.description}
                </p>
              </div>

              <div className="pt-5 mt-5 border-t border-slate-100 flex items-center justify-between text-xs font-bold text-slate-500 group-hover:text-[#0A0F24] transition-colors">
                <span>{div.stat}</span>
                <span className="text-[#3B33FF] group-hover:translate-x-1 transition-transform">→</span>
              </div>
            </div>
          ))}
        </div>

        {/* Interactive Mission / Vision / Values Explorer in Light Mode */}
        <div className="mb-20">
          {/* Tab Selector */}
          <div className="flex justify-center mb-8">
            <div className="inline-flex p-1.5 rounded-full bg-slate-100 border border-slate-200 shadow-inner">
              {(["mission", "vision", "values"] as const).map((tab) => (
                <button
                  key={tab}
                  onClick={() => setActiveTab(tab)}
                  className={`px-6 py-2.5 rounded-full text-xs sm:text-sm font-bold capitalize transition-all duration-300 ${
                    activeTab === tab
                      ? "bg-[#FEFCF7] text-[#0A0F24] shadow-sm"
                      : "text-slate-600 hover:text-[#0A0F24]"
                  }`}
                >
                  {tab}
                </button>
              ))}
            </div>
          </div>

          {/* Tab Content Display */}
          <motion.div
            key={activeTab}
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4 }}
            className="glass-panel p-8 sm:p-12 rounded-3xl max-w-4xl mx-auto border border-[#E4DAC8] shadow-sm relative overflow-hidden bg-[#FEFCF7]"
          >
            <div className="grid grid-cols-1 md:grid-cols-12 gap-8 items-center relative z-10">
              <div className="md:col-span-7 space-y-4">
                <span className="text-xs font-bold uppercase tracking-widest text-[#F97316]">
                  Club Médical New Era
                </span>
                <h3 className="text-2xl sm:text-3xl font-black text-[#0A0F24] leading-snug">
                  {tabContent[activeTab].title}
                </h3>
                <p className="text-sm sm:text-base font-semibold text-[#3B33FF]">
                  {tabContent[activeTab].lead}
                </p>
                <p className="text-sm text-slate-700 leading-relaxed font-normal">
                  {tabContent[activeTab].description}
                </p>
              </div>

              <div className="md:col-span-5 bg-[#F6EFE4] p-6 rounded-2xl border border-[#E4DAC8] space-y-3">
                <h4 className="text-xs font-bold uppercase tracking-wider text-[#0A0F24] mb-2">
                  Key Directives:
                </h4>
                {tabContent[activeTab].points.map((pt, i) => (
                  <div key={i} className="flex items-start gap-2.5 text-xs text-slate-800">
                    <CheckCircle2 className="w-4 h-4 text-[#E53888] shrink-0 mt-0.5" />
                    <span className="leading-relaxed">{pt}</span>
                  </div>
                ))}
              </div>
            </div>
          </motion.div>
        </div>

        {/* Impact Numbers & Stat Counters in Warm Cream Styling */}
        <div className="glass-panel rounded-3xl p-8 sm:p-12 border border-[#E4DAC8] shadow-sm bg-[#FEFCF7] relative overflow-hidden">
          <div className="relative z-10 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 divide-y sm:divide-y-0 sm:divide-x divide-[#E8DFD1]">
            {SITE_STATS.map((stat, i) => (
              <div key={stat.id} className="pt-6 sm:pt-0 sm:px-6 first:pl-0">
                <div className={`text-4xl sm:text-5xl font-black tracking-tight mb-2 ${
                  i === 0 ? "text-transparent bg-clip-text bg-gradient-to-r from-[#3B33FF] to-[#8B3EE1]" :
                  i === 1 ? "text-transparent bg-clip-text bg-gradient-to-r from-[#8B3EE1] to-[#E53888]" :
                  i === 2 ? "text-transparent bg-clip-text bg-gradient-to-r from-[#E53888] to-[#F97316]" :
                  "text-transparent bg-clip-text bg-gradient-to-r from-[#F97316] to-[#FACC15]"
                }`}>
                  {stat.value}
                </div>
                <div className="text-sm font-bold text-slate-900 tracking-wide">
                  {stat.label}
                </div>
                <div className="text-xs text-slate-500 mt-1 leading-relaxed">
                  {stat.description}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
