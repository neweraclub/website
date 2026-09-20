"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X, CheckCircle2, Sparkles, Send, GraduationCap } from "lucide-react";
import confetti from "canvas-confetti";
import { COMMITTEES } from "@/data/clubData";

interface ApplyModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const ApplyModal: React.FC<ApplyModalProps> = ({ isOpen, onClose }) => {
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    phone: "",
    academicYear: "3rd Year Medicine",
    committee: COMMITTEES[0].name,
    motivation: "",
  });

  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);

    setTimeout(() => {
      setLoading(false);
      setSubmitted(true);
      try {
        confetti({
          particleCount: 80,
          spread: 70,
          origin: { y: 0.6 },
          colors: ["#3B33FF", "#8B3EE1", "#E53888", "#F97316", "#FACC15"],
        });
      } catch {
        // Fallback gracefully
      }
    }, 800);
  };

  const handleReset = () => {
    setSubmitted(false);
    onClose();
  };

  if (!isOpen) return null;

  return (
    <AnimatePresence>
      <div className="fixed inset-0 z-50 flex items-end sm:items-center justify-center p-0 sm:p-6 overflow-y-auto">
        {/* Backdrop */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={onClose}
          className="fixed inset-0 bg-slate-900/40 backdrop-blur-md"
        />

        {/* Modal Window: Bottom-sheet on mobile (<640px), centered dialog on tablet/desktop */}
        <motion.div
          initial={{ opacity: 0, y: "100%" }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: "100%" }}
          transition={{ type: "spring", damping: 28, stiffness: 300 }}
          className="relative w-full max-w-xl max-h-[92vh] sm:max-h-[88vh] bg-[#FEFCF7] rounded-t-[32px] sm:rounded-3xl shadow-2xl border-t sm:border border-[#E4DAC8] overflow-y-auto z-10"
        >
          {/* Mobile Drag Handle Bar for thumb reach */}
          <div className="pt-3 pb-1 flex justify-center sm:hidden">
            <div className="w-12 h-1.5 bg-slate-300 rounded-full" />
          </div>

          {/* Header Banner */}
          <div className="relative px-6 sm:px-8 py-6 sm:py-7 bg-gradient-to-r from-[#0A0F24] via-[#1E1B4B] to-[#3B33FF] text-white border-b border-slate-200">
            <button
              onClick={onClose}
              className="absolute top-4 sm:top-5 right-4 sm:right-5 min-w-[48px] min-h-[48px] p-2.5 rounded-full bg-white/15 hover:bg-white/25 text-white transition-colors flex items-center justify-center border border-white/20"
              aria-label="Close application modal"
            >
              <X className="w-5 h-5" />
            </button>
            <div className="flex items-center gap-2 text-xs font-black tracking-widest text-[#FACC15] uppercase mb-1">
              <Sparkles className="w-4 h-4" />
              <span>2026 Academic Season</span>
            </div>
            <h3 className="text-xl sm:text-2xl font-black tracking-tight text-white">
              Apply for Club Membership
            </h3>
            <p className="text-xs text-slate-200 mt-1">
              Join an elite collective of ambitious medical students shaping future medicine.
            </p>
          </div>

          <div className="p-6 sm:p-8">
            {submitted ? (
              <div className="text-center py-6">
                <div className="w-16 h-16 rounded-full bg-emerald-100 border border-emerald-300 text-emerald-700 flex items-center justify-center mx-auto mb-4 shadow-xs">
                  <CheckCircle2 className="w-10 h-10" />
                </div>
                <h4 className="text-xl font-black text-slate-900">Application Received!</h4>
                <p className="text-xs sm:text-sm text-slate-600 mt-2 max-w-md mx-auto leading-relaxed">
                  Thank you, <span className="font-bold text-slate-900">{formData.fullName}</span>.
                  Our bureau has received your candidate profile for the{" "}
                  <span className="font-bold text-[#3B33FF]">{formData.committee}</span>.
                </p>
                <div className="mt-6 p-4 rounded-2xl bg-slate-50 border border-slate-200 text-left text-xs text-slate-700 space-y-2">
                  <p className="font-bold text-slate-900 flex items-center gap-1.5">
                    <GraduationCap className="w-4 h-4 text-[#3B33FF]" />
                    Next Steps:
                  </p>
                  <p>1. Check your inbox for candidate interview scheduling.</p>
                  <p>2. Prepare your portfolio or clinical focus statement.</p>
                  <p>3. Attend our incoming members orientation briefing.</p>
                </div>
                <button
                  onClick={handleReset}
                  className="mt-6 min-h-[48px] px-8 py-3 rounded-full text-xs font-black text-slate-950 bg-gradient-to-r from-[#F97316] to-[#FACC15] shadow-sunset-glow transition-all"
                >
                  Return to Landing Page
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-4 pb-4 sm:pb-0">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-[11px] font-black text-slate-700 uppercase tracking-wider mb-1.5">
                      Full Name *
                    </label>
                    <input
                      type="text"
                      required
                      placeholder="e.g. Amine Rahmani"
                      value={formData.fullName}
                      onChange={(e) => setFormData({ ...formData, fullName: e.target.value })}
                      className="w-full min-h-[48px] px-4 py-2.5 rounded-xl bg-slate-50 border border-slate-200 text-sm text-slate-900 placeholder-slate-400 focus:outline-none focus:border-[#3B33FF] transition-colors"
                    />
                  </div>
                  <div>
                    <label className="block text-[11px] font-black text-slate-700 uppercase tracking-wider mb-1.5">
                      Email Address *
                    </label>
                    <input
                      type="email"
                      required
                      placeholder="amine@med-student.edu"
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      className="w-full min-h-[48px] px-4 py-2.5 rounded-xl bg-slate-50 border border-slate-200 text-sm text-slate-900 placeholder-slate-400 focus:outline-none focus:border-[#3B33FF] transition-colors"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-[11px] font-black text-slate-700 uppercase tracking-wider mb-1.5">
                      Phone / WhatsApp *
                    </label>
                    <input
                      type="tel"
                      required
                      placeholder="+213 555 019283"
                      value={formData.phone}
                      onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                      className="w-full min-h-[48px] px-4 py-2.5 rounded-xl bg-slate-50 border border-slate-200 text-sm text-slate-900 placeholder-slate-400 focus:outline-none focus:border-[#3B33FF] transition-colors"
                    />
                  </div>
                  <div>
                    <label className="block text-[11px] font-black text-slate-700 uppercase tracking-wider mb-1.5">
                      Academic Year
                    </label>
                    <select
                      value={formData.academicYear}
                      onChange={(e) => setFormData({ ...formData, academicYear: e.target.value })}
                      className="w-full min-h-[48px] px-4 py-2.5 rounded-xl bg-slate-50 border border-slate-200 text-sm text-slate-900 focus:outline-none focus:border-[#3B33FF]"
                    >
                      <option>1st Year Pre-Clinical</option>
                      <option>2nd Year Pre-Clinical</option>
                      <option>3rd Year Clinical</option>
                      <option>4th Year Clinical Extern</option>
                      <option>5th Year Extern</option>
                      <option>6th Year Intern</option>
                      <option>Medical Resident</option>
                    </select>
                  </div>
                </div>

                <div>
                  <label className="block text-[11px] font-black text-slate-700 uppercase tracking-wider mb-1.5">
                    Preferred Committee *
                  </label>
                  <select
                    value={formData.committee}
                    onChange={(e) => setFormData({ ...formData, committee: e.target.value })}
                    className="w-full min-h-[48px] px-4 py-2.5 rounded-xl bg-slate-50 border border-slate-200 text-sm text-slate-900 focus:outline-none focus:border-[#3B33FF]"
                  >
                    {COMMITTEES.map((c) => (
                      <option key={c.name} value={c.name}>
                        {c.name}
                      </option>
                    ))}
                  </select>
                  <p className="text-[11px] text-slate-500 mt-1">
                    {COMMITTEES.find((c) => c.name === formData.committee)?.description}
                  </p>
                </div>

                <div>
                  <label className="block text-[11px] font-black text-slate-700 uppercase tracking-wider mb-1.5">
                    Why do you want to join New Era? *
                  </label>
                  <textarea
                    rows={3}
                    required
                    placeholder="Tell us about your medical interests, extracurricular passion, or scientific projects you want to build..."
                    value={formData.motivation}
                    onChange={(e) => setFormData({ ...formData, motivation: e.target.value })}
                    className="w-full px-4 py-2.5 rounded-xl bg-slate-50 border border-slate-200 text-sm text-slate-900 placeholder-slate-400 focus:outline-none focus:border-[#3B33FF] resize-none"
                  />
                </div>

                <div className="pt-3 flex flex-col sm:flex-row items-center justify-end gap-3">
                  <button
                    type="button"
                    onClick={onClose}
                    className="w-full sm:w-auto min-h-[48px] px-6 py-2.5 rounded-full text-xs font-bold text-slate-500 hover:text-slate-900 transition-colors"
                  >
                    Cancel
                  </button>
                  <button
                    type="submit"
                    disabled={loading}
                    className="w-full sm:w-auto min-h-[48px] px-8 py-3 rounded-full text-xs font-black text-slate-950 bg-gradient-to-r from-[#F97316] to-[#FACC15] shadow-sunset-glow hover:scale-105 active:scale-95 transition-all flex items-center justify-center gap-2"
                  >
                    {loading ? (
                      <span>Processing Application...</span>
                    ) : (
                      <>
                        <span>Submit Application</span>
                        <Send className="w-3.5 h-3.5 text-slate-950" />
                      </>
                    )}
                  </button>
                </div>
              </form>
            )}
          </div>
        </motion.div>
      </div>
    </AnimatePresence>
  );
};
