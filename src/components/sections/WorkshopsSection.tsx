"use client";

import React from "react";
import { motion } from "framer-motion";
import {
  Sparkles,
  Scissors,
  Activity,
  HeartPulse,
  Pill,
  Clock,
  Users,
  CheckCircle2,
  ArrowRight,
  ShieldCheck,
  Zap,
} from "lucide-react";

interface WorkshopItem {
  id: string;
  title: string;
  subtitle: string;
  category: string;
  level: string;
  duration: string;
  cohortSize: string;
  color: string;
  badgeGradient: string;
  icon: React.ReactNode;
  curriculum: string[];
  mentor: string;
}

const WORKSHOPS: WorkshopItem[] = [
  {
    id: "suturing-bootcamp",
    title: "Surgical Suturing & Knot Tying Mastery",
    subtitle: "From simple interrupted to deep subcuticular running stitches.",
    category: "Surgical Simulation",
    level: "Core Clinical",
    duration: "6 Intensive Hours",
    cohortSize: "1:4 Instructor Ratio",
    color: "#E53888",
    badgeGradient: "from-[#8B3EE1] to-[#E53888]",
    icon: <Scissors className="w-5 h-5 text-[#E53888]" />,
    curriculum: [
      "Instrument grip & needle holder ergonomics",
      "Mattress sutures, Donati & continuous intradermal",
      "Tension management on synthetic tissue pads",
      "Aseptic field preparation & glove-change drills",
    ],
    mentor: "Dr. K. Benali, General Surgery Resident",
  },
  {
    id: "diagnostics-triage",
    title: "Clinical Diagnostics & Rapid Triage",
    subtitle: "Systematic ABCDE primary survey and vital signs triage.",
    category: "Emergency Medicine",
    level: "All Clinical Years",
    duration: "4 Intensive Hours",
    cohortSize: "16 Students per Lab",
    color: "#F97316",
    badgeGradient: "from-[#E53888] to-[#F97316]",
    icon: <Activity className="w-5 h-5 text-[#F97316]" />,
    curriculum: [
      "Vital signs pattern recognition & early warning score (NEWS2)",
      "Arterial blood gas (ABG) sampling on simulation arm",
      "Peripheral intravenous cannulation under pressure",
      "Emergency shock recognition & fluid protocol",
    ],
    mentor: "Dr. S. Mansouri, ER Attending",
  },
  {
    id: "pocus-cardio",
    title: "Point-of-Care Ultrasound (POCUS) & ECG",
    subtitle: "Real-time ultrasound guidance and rhythm interpretation.",
    category: "Diagnostic Radiology",
    level: "Intermediate / Advanced",
    duration: "8 Hours Over 2 Days",
    cohortSize: "12 Students Max",
    color: "#3B33FF",
    badgeGradient: "from-[#3B33FF] to-[#8B3EE1]",
    icon: <HeartPulse className="w-5 h-5 text-[#3B33FF]" />,
    curriculum: [
      "FAST exam for abdominal & pleural trauma",
      "Cardiac window ultrasound (ejection fraction & effusion)",
      "12-Lead ECG STEMI & arrhythmia interpretation",
      "Ultrasound-guided vascular catheterization",
    ],
    mentor: "Dr. M. Cherif, Cardiology Fellow",
  },
  {
    id: "pharmacology-simulation",
    title: "Acute Pharmacotherapy & Code Blue Drills",
    subtitle: "Critical care medications and emergency resuscitation.",
    category: "Critical Care",
    level: "Externs & Interns",
    duration: "5 Intensive Hours",
    cohortSize: "14 Students Max",
    color: "#8B3EE1",
    badgeGradient: "from-[#F97316] to-[#8B3EE1]",
    icon: <Pill className="w-5 h-5 text-[#8B3EE1]" />,
    curriculum: [
      "ACLS cardiac arrest algorithms & defibrillation",
      "Vasopressor and inotrope infusion calculations",
      "Anaphylaxis & acute asthma management drills",
      "Interprofessional closed-loop communication",
    ],
    mentor: "Dr. Y. Amara, ICU Specialist",
  },
];

export const WorkshopsSection: React.FC = () => {
  return (
    <section id="workshops" className="relative py-24 sm:py-32 overflow-hidden bg-slate-50/60">
      {/* Soft Pastel Atmospheric Glows */}
      <div className="absolute top-1/4 -left-40 w-[550px] h-[550px] rounded-full bg-[#8B3EE1]/03 blur-[160px] pointer-events-none" />
      <div className="absolute bottom-1/4 right-0 w-[550px] h-[550px] rounded-full bg-[#F97316]/03 blur-[160px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[#FEFCF7] border border-[#E4DAC8] shadow-xs text-xs font-bold uppercase tracking-widest text-[#E53888] mb-4"
          >
            <Sparkles className="w-3.5 h-3.5 text-[#F97316]" />
            <span>Hands-on Clinical Simulation</span>
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-3xl sm:text-4xl lg:text-5xl font-black text-[#0A0F24] tracking-tight"
          >
            Medical Training Workshops &{" "}
            <span className="text-gradient-brand">Surgical Bootcamps</span>
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="text-base sm:text-lg text-slate-700 mt-4 leading-relaxed font-normal"
          >
            Master procedural precision and life-saving clinical interventions on high-fidelity
            simulators before stepping into clinical clerkships.
          </motion.p>
        </div>

        {/* Clean Light-Mode Workshops Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
          {WORKSHOPS.map((workshop) => (
            <div
              key={workshop.id}
              className="glass-panel-hover rounded-3xl p-7 sm:p-8 border border-[#E4DAC8] flex flex-col justify-between group bg-[#FEFCF7] shadow-xs"
            >
              <div>
                {/* Top Tags */}
                <div className="flex items-center justify-between gap-2 mb-4">
                  <div className="flex items-center gap-2">
                    <div className="w-8 h-8 rounded-xl bg-slate-50 border border-slate-200 flex items-center justify-center">
                      {workshop.icon}
                    </div>
                    <span
                      className={`px-3 py-1 rounded-full text-[10px] font-black uppercase tracking-wider text-white bg-gradient-to-r ${workshop.badgeGradient} shadow-xs`}
                    >
                      {workshop.category}
                    </span>
                  </div>
                  <span className="text-[11px] font-bold text-slate-500 bg-slate-100 border border-slate-200 px-3 py-0.5 rounded-full">
                    {workshop.level}
                  </span>
                </div>

                {/* Title */}
                <h3 className="text-xl sm:text-2xl font-black text-slate-900 group-hover:text-[#3B33FF] transition-colors leading-tight mb-2">
                  {workshop.title}
                </h3>
                <p className="text-xs text-slate-600 mb-6 font-normal leading-relaxed">
                  {workshop.subtitle}
                </p>

                {/* Curriculum Bullet Points in Clean Box */}
                <div className="space-y-2.5 mb-6 p-4 rounded-2xl bg-slate-50 border border-slate-100">
                  <p className="text-[10px] font-black uppercase tracking-widest text-[#F97316]">
                    Core Competencies Covered:
                  </p>
                  {workshop.curriculum.map((item, idx) => (
                    <div key={idx} className="flex items-start gap-2 text-xs text-slate-700">
                      <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                      <span>{item}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Bottom Meta & Action with 48px touch targets */}
              <div className="pt-4 border-t border-slate-100 space-y-3">
                <div className="flex items-center justify-between text-xs text-slate-500">
                  <span className="flex items-center gap-1.5 font-medium">
                    <Clock className="w-3.5 h-3.5 text-[#8B3EE1]" />
                    {workshop.duration}
                  </span>
                  <span className="flex items-center gap-1.5 font-medium">
                    <Users className="w-3.5 h-3.5 text-[#E53888]" />
                    {workshop.cohortSize}
                  </span>
                </div>

                <div className="flex flex-col sm:flex-row items-stretch sm:items-center justify-between gap-3 pt-1">
                  <div className="text-[11px] text-slate-500">
                    <span>Lead Mentor: </span>
                    <span className="text-slate-900 font-bold">{workshop.mentor.split(",")[0]}</span>
                  </div>
                  <a
                    href="#events"
                    className="inline-flex items-center justify-center gap-1.5 min-h-[44px] px-5 py-2.5 rounded-full text-xs font-bold text-slate-800 bg-slate-100 hover:bg-slate-900 hover:text-white transition-all duration-300 border border-slate-200 group/btn"
                  >
                    <span>Check Sessions</span>
                    <ArrowRight className="w-3.5 h-3.5 group-hover/btn:translate-x-1 transition-transform" />
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Quality Standard Guarantee Banner in Warm Cream Mode */}
        <div className="glass-panel rounded-3xl p-8 sm:p-10 border border-[#E4DAC8] shadow-sm bg-[#FEFCF7] relative overflow-hidden">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 divide-y md:divide-y-0 md:divide-x divide-[#E8DFD1] text-center sm:text-left">
            <div className="flex items-center gap-4 sm:pr-6">
              <div className="w-12 h-12 rounded-2xl bg-[#3B33FF]/10 text-[#3B33FF] flex items-center justify-center shrink-0">
                <ShieldCheck className="w-6 h-6" />
              </div>
              <div>
                <h4 className="text-sm font-bold text-slate-900">OSCE-Compliant Simulation</h4>
                <p className="text-xs text-slate-500 mt-0.5">
                  Standardized stations following European medical exam protocols.
                </p>
              </div>
            </div>

            <div className="pt-6 md:pt-0 flex items-center gap-4 sm:px-6">
              <div className="w-12 h-12 rounded-2xl bg-[#8B3EE1]/10 text-[#8B3EE1] flex items-center justify-center shrink-0">
                <Users className="w-6 h-6" />
              </div>
              <div>
                <h4 className="text-sm font-bold text-slate-900">Resident-Led Mentorship</h4>
                <p className="text-xs text-slate-500 mt-0.5">
                  Direct hands-on 1-on-1 correction by practicing hospital physicians.
                </p>
              </div>
            </div>

            <div className="pt-6 md:pt-0 flex items-center gap-4 sm:pl-6">
              <div className="w-12 h-12 rounded-2xl bg-[#F97316]/10 text-[#F97316] flex items-center justify-center shrink-0">
                <Zap className="w-6 h-6" />
              </div>
              <div>
                <h4 className="text-sm font-bold text-slate-900">Accredited Certificate</h4>
                <p className="text-xs text-slate-500 mt-0.5">
                  Official verifiable digital credential recognized for residency CVs.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
