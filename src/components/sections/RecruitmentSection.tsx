"use client";

import React from "react";
import { motion } from "framer-motion";
import { RECRUITMENT_STEPS, COMMITTEES } from "@/data/clubData";
import {
  Sparkles,
  ArrowRight,
  CheckCircle2,
  FileText,
  UserCheck,
  MessagesSquare,
  Trophy,
} from "lucide-react";

interface RecruitmentSectionProps {
  onOpenApply: () => void;
}

export const RecruitmentSection: React.FC<RecruitmentSectionProps> = ({ onOpenApply }) => {
  const stepIcons = [
    <FileText key="1" className="w-5 h-5" />,
    <UserCheck key="2" className="w-5 h-5" />,
    <MessagesSquare key="3" className="w-5 h-5" />,
    <Trophy key="4" className="w-5 h-5" />,
  ];

  return (
    <section id="recruitment" className="relative py-24 sm:py-32 overflow-hidden">
      {/* Background Subtle Tints */}
      <div className="absolute top-1/4 right-0 w-[500px] h-[500px] rounded-full bg-[#F97316]/03 blur-[150px] pointer-events-none" />
      <div className="absolute bottom-10 left-0 w-[500px] h-[500px] rounded-full bg-[#3B33FF]/03 blur-[150px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[#FEFCF7] border border-[#E4DAC8] shadow-xs text-xs font-bold uppercase tracking-widest text-[#F97316] mb-4"
          >
            <Sparkles className="w-3.5 h-3.5 text-[#FACC15]" />
            <span>Recruitment & Admissions</span>
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-3xl sm:text-4xl lg:text-5xl font-black text-[#0A0F24] tracking-tight"
          >
            Become Part of the <span className="text-gradient-brand">Next Generation</span>
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="text-base sm:text-lg text-slate-700 mt-4 leading-relaxed font-normal"
          >
            We don't just assess grades; we look for collaborative ambition, clinical enthusiasm,
            and leadership potential. Discover our transparent 4-stage interview process.
          </motion.p>
        </div>

        {/* 4-Step Interactive Timeline in Warm Cream Mode */}
        <div className="relative mb-20">
          {/* Subtle Connecting Line */}
          <div className="hidden lg:block absolute top-1/2 left-10 right-10 h-0.5 bg-gradient-to-r from-[#3B33FF] via-[#E53888] to-[#F97316] -translate-y-12 z-0 opacity-20" />

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 relative z-10">
            {RECRUITMENT_STEPS.map((step, index) => (
              <motion.div
                key={step.step}
                initial={{ opacity: 0, y: 25 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: index * 0.1 }}
                className="h-full"
              >
                <div className="h-full glass-panel-hover rounded-3xl p-7 border border-[#E4DAC8] flex flex-col justify-between group bg-[#FEFCF7] shadow-xs">
                  <div>
                    {/* Step Badge & Icon */}
                    <div className="flex items-center justify-between mb-6">
                      <div className="w-12 h-12 rounded-2xl bg-[#0A0F24] text-white flex items-center justify-center shadow-xs group-hover:scale-110 transition-transform">
                        {stepIcons[index]}
                      </div>
                      <span className="text-xs font-black uppercase tracking-widest text-[#F97316] bg-orange-50 border border-orange-200 px-3 py-1 rounded-full">
                        {step.duration}
                      </span>
                    </div>

                    <span className="text-[10px] font-black uppercase tracking-widest text-slate-500 mb-1 block">
                      Phase 0{step.step}
                    </span>
                    <h3 className="text-xl font-black text-[#0A0F24] mb-3 group-hover:text-[#3B33FF] transition-colors">
                      {step.title}
                    </h3>
                    <p className="text-xs text-slate-600 leading-relaxed font-normal mb-5">
                      {step.description}
                    </p>

                    <div className="space-y-2 pt-3 border-t border-[#E8DFD1]">
                      {step.details.map((detail, dIdx) => (
                        <div key={dIdx} className="flex items-start gap-2 text-xs text-slate-600">
                          <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600 shrink-0 mt-0.5" />
                          <span>{detail}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Committee Divisions */}
        <div className="mb-20">
          <div className="text-center max-w-2xl mx-auto mb-10">
            <h3 className="text-2xl font-black text-[#0A0F24] mb-2">Admissions by Committee</h3>
            <p className="text-xs text-slate-600 font-normal">
              Four specialized committees driving New Era's scientific and public presence
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
            {COMMITTEES.map((c, i) => (
              <div
                key={i}
                className="p-6 rounded-2xl bg-[#FEFCF7] border border-[#E4DAC8] hover:border-[#D8CEBA] transition-all group shadow-xs"
              >
                <div className="w-8 h-8 rounded-lg bg-[#3B33FF]/10 text-[#3B33FF] flex items-center justify-center text-xs font-bold mb-3">
                  0{i + 1}
                </div>
                <h4 className="text-sm font-bold text-slate-900 group-hover:text-[#3B33FF] transition-colors mb-1.5">
                  {c.name}
                </h4>
                <p className="text-xs text-slate-600 leading-relaxed font-normal">{c.description}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Dynamic CTA Banner in Clean Light/Gradient Mode */}
        <motion.div
          initial={{ opacity: 0, scale: 0.98 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          className="relative rounded-3xl p-8 sm:p-14 overflow-hidden text-center bg-gradient-to-r from-[#0A0F24] to-[#1E1B4B] text-white shadow-xl"
        >
          {/* Subtle Ambient Orbs */}
          <div className="absolute top-0 right-1/4 w-80 h-80 rounded-full bg-[#3B33FF]/25 blur-[100px] pointer-events-none" />
          <div className="absolute bottom-0 left-1/4 w-80 h-80 rounded-full bg-[#E53888]/20 blur-[100px] pointer-events-none" />

          <div className="relative z-10 max-w-2xl mx-auto space-y-6">
            <span className="inline-flex items-center gap-1.5 px-4 py-1.5 rounded-full bg-white/10 backdrop-blur-md text-xs font-black uppercase tracking-widest text-[#FACC15] border border-white/15">
              <Sparkles className="w-3.5 h-3.5" />
              <span>Applications Open for 2026 Academic Season</span>
            </span>

            <h3 className="text-2xl sm:text-4xl font-black tracking-tight leading-tight text-white">
              Ready to Shape the Future of Academic Medicine?
            </h3>

            <p className="text-sm sm:text-base text-slate-300 leading-relaxed font-normal">
              Take the first step towards building hands-on clinical acumen, co-authoring scientific
              research, and organizing the most celebrated medical congresses of the year.
            </p>

            <div className="pt-2 flex flex-col sm:flex-row items-center justify-center gap-4">
              <motion.button
                whileHover={{ scale: 1.04, y: -2 }}
                whileTap={{ scale: 0.96 }}
                onClick={onOpenApply}
                className="w-full sm:w-auto min-h-[48px] px-9 py-4 rounded-full text-sm font-black text-slate-950 bg-gradient-to-r from-[#F97316] to-[#FACC15] shadow-sunset-glow hover:shadow-[0_0_30px_rgba(249,115,22,0.5)] transition-all flex items-center justify-center gap-2 group"
              >
                <span>Apply for Membership Now</span>
                <ArrowRight className="w-4 h-4 text-slate-950 group-hover:translate-x-1.5 transition-transform" />
              </motion.button>

              <a
                href="#contact"
                className="w-full sm:w-auto min-h-[48px] px-7 py-4 rounded-full text-sm font-bold text-slate-200 bg-white/10 hover:bg-white/20 border border-white/15 transition-all hover:text-white flex items-center justify-center"
              >
                Contact Admissions Desk
              </a>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};
