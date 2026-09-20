"use client";

import React, { useState } from "react";
import { motion } from "framer-motion";
import {
  Sparkles,
  Send,
  CheckCircle2,
  Linkedin,
  Instagram,
  Youtube,
  Twitter,
  Mail,
  ArrowRight,
} from "lucide-react";
import confetti from "canvas-confetti";
import { CLUB_INFO } from "@/data/clubData";
import { ContactCanvas } from "@/components/3d/ContactCanvas";

export const ContactSection: React.FC = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    yearOfStudy: "3rd Year Medicine",
    message: "",
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
          particleCount: 70,
          spread: 60,
          origin: { y: 0.7 },
          colors: ["#3B33FF", "#8B3EE1", "#E53888", "#F97316", "#FACC15"],
        });
      } catch {
        // Fallback
      }
    }, 700);
  };

  const years = [
    "1st Year Pre-Med",
    "2nd Year Medicine",
    "3rd Year Medicine",
    "4th Year Externship",
    "5th Year Externship",
    "6th Year Intern",
    "Resident Physician",
  ];

  return (
    <section id="contact" className="relative py-24 sm:py-32 overflow-hidden border-t border-[#E8DFD1]/60">
      {/* Background Soft Glows */}
      <div className="absolute top-1/3 left-10 w-[500px] h-[500px] rounded-full bg-[#3B33FF]/04 blur-[160px] pointer-events-none" />
      <div className="absolute bottom-10 right-10 w-[500px] h-[500px] rounded-full bg-[#F97316]/04 blur-[160px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          {/* Left Column: Minimal Form & Social Links (7 cols) */}
          <div className="lg:col-span-7 space-y-8">
            <div>
              <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[#FEFCF7] border border-[#E4DAC8] shadow-xs text-xs font-bold uppercase tracking-widest text-[#3B33FF] mb-4">
                <Sparkles className="w-3.5 h-3.5 text-[#8B3EE1]" />
                <span>Join Us & Contact</span>
              </div>

              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-[#0B0B1A] tracking-tight leading-tight">
                Initiate Your <span className="text-gradient-brand">Clinical Future.</span>
              </h2>

              <p className="text-sm sm:text-base text-slate-700 mt-4 leading-relaxed font-normal max-w-xl">
                Whether you wish to register as a student member, propose a scientific symposium, or co-author clinical papers with our research working groups, reach out directly.
              </p>
            </div>

            {/* Minimal Form */}
            {submitted ? (
              <motion.div
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                className="p-8 rounded-3xl bg-[#FEFCF7] border border-[#E4DAC8] shadow-sm text-center space-y-4 max-w-lg"
              >
                <div className="w-16 h-16 rounded-full bg-emerald-50 text-emerald-600 flex items-center justify-center mx-auto">
                  <CheckCircle2 className="w-8 h-8" />
                </div>
                <h3 className="text-xl font-black text-[#0B0B1A]">Transmission Received</h3>
                <p className="text-xs sm:text-sm text-slate-600 font-normal leading-relaxed">
                  Thank you, <strong className="text-slate-900">{formData.name}</strong>. Our admissions committee will review your inquiry and respond within 24–48 hours.
                </p>
                <button
                  onClick={() => setSubmitted(false)}
                  className="px-6 py-2.5 rounded-full text-xs font-bold text-slate-700 bg-[#F6EFE4] hover:bg-[#E8DFD1] transition-all"
                >
                  Send Another Inquiry
                </button>
              </motion.div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-4 max-w-xl">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  {/* Name */}
                  <div>
                    <label className="block text-xs font-bold uppercase tracking-wider text-slate-700 mb-1.5">
                      Full Name
                    </label>
                    <input
                      type="text"
                      required
                      placeholder="Dr. / Med. Sarah Benali"
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      className="w-full px-4 py-3 rounded-2xl bg-[#FEFCF7] border border-[#E4DAC8] text-sm text-[#0B0B1A] placeholder:text-slate-400 focus:outline-none focus:border-[#3B33FF] focus:ring-2 focus:ring-[#3B33FF]/15 transition-all"
                    />
                  </div>

                  {/* Email */}
                  <div>
                    <label className="block text-xs font-bold uppercase tracking-wider text-slate-700 mb-1.5">
                      Academic Email
                    </label>
                    <input
                      type="email"
                      required
                      placeholder="sarah.benali@univ-med.edu"
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      className="w-full px-4 py-3 rounded-2xl bg-[#FEFCF7] border border-[#E4DAC8] text-sm text-[#0B0B1A] placeholder:text-slate-400 focus:outline-none focus:border-[#3B33FF] focus:ring-2 focus:ring-[#3B33FF]/15 transition-all"
                    />
                  </div>
                </div>

                {/* Year of Study */}
                <div>
                  <label className="block text-xs font-bold uppercase tracking-wider text-slate-700 mb-1.5">
                    Year of Medical Study
                  </label>
                  <select
                    value={formData.yearOfStudy}
                    onChange={(e) => setFormData({ ...formData, yearOfStudy: e.target.value })}
                    className="w-full px-4 py-3 rounded-2xl bg-[#FEFCF7] border border-[#E4DAC8] text-sm text-[#0B0B1A] focus:outline-none focus:border-[#3B33FF] focus:ring-2 focus:ring-[#3B33FF]/15 transition-all cursor-pointer"
                  >
                    {years.map((y) => (
                      <option key={y} value={y}>
                        {y}
                      </option>
                    ))}
                  </select>
                </div>

                {/* Message */}
                <div>
                  <label className="block text-xs font-bold uppercase tracking-wider text-slate-700 mb-1.5">
                    Inquiry or Motivation
                  </label>
                  <textarea
                    rows={3}
                    required
                    placeholder="Briefly state your clinical interests or inquiry..."
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    className="w-full px-4 py-3 rounded-2xl bg-[#FEFCF7] border border-[#E4DAC8] text-sm text-[#0B0B1A] placeholder:text-slate-400 focus:outline-none focus:border-[#3B33FF] focus:ring-2 focus:ring-[#3B33FF]/15 transition-all resize-none"
                  />
                </div>

                {/* Submit CTA */}
                <div className="pt-2 flex flex-col sm:flex-row items-center gap-4">
                  <motion.button
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                    disabled={loading}
                    type="submit"
                    className="w-full sm:w-auto min-h-[48px] px-8 py-3.5 rounded-full text-xs font-bold text-white bg-[#0B0B1A] hover:bg-slate-800 shadow-md hover:shadow-lg transition-all flex items-center justify-center gap-2"
                  >
                    {loading ? (
                      <span className="animate-spin text-sm">⏳</span>
                    ) : (
                      <>
                        <span>Submit Inquiry</span>
                        <Send className="w-3.5 h-3.5 text-[#FACC15]" />
                      </>
                    )}
                  </motion.button>
                  <span className="text-xs text-slate-500 font-normal">
                    Or direct email: <a href={`mailto:${CLUB_INFO.email}`} className="text-[#3B33FF] underline">{CLUB_INFO.email}</a>
                  </span>
                </div>
              </form>
            )}

            {/* Social Links */}
            <div className="pt-4 border-t border-[#E8DFD1]/80 flex flex-wrap items-center gap-3">
              <span className="text-xs font-bold text-slate-600 uppercase tracking-wider mr-2">
                Connect:
              </span>

              <a
                href={CLUB_INFO.socials.linkedin}
                target="_blank"
                rel="noreferrer"
                className="w-9 h-9 rounded-full bg-[#FEFCF7] hover:bg-[#3B33FF] text-slate-700 hover:text-white border border-[#E4DAC8] flex items-center justify-center transition-all shadow-xs"
                aria-label="LinkedIn"
              >
                <Linkedin className="w-4 h-4" />
              </a>

              <a
                href={CLUB_INFO.socials.instagram}
                target="_blank"
                rel="noreferrer"
                className="w-9 h-9 rounded-full bg-[#FEFCF7] hover:bg-[#E53888] text-slate-700 hover:text-white border border-[#E4DAC8] flex items-center justify-center transition-all shadow-xs"
                aria-label="Instagram"
              >
                <Instagram className="w-4 h-4" />
              </a>

              <a
                href={CLUB_INFO.socials.youtube}
                target="_blank"
                rel="noreferrer"
                className="w-9 h-9 rounded-full bg-[#FEFCF7] hover:bg-red-600 text-slate-700 hover:text-white border border-[#E4DAC8] flex items-center justify-center transition-all shadow-xs"
                aria-label="YouTube"
              >
                <Youtube className="w-4 h-4" />
              </a>

              <a
                href={CLUB_INFO.socials.twitter}
                target="_blank"
                rel="noreferrer"
                className="w-9 h-9 rounded-full bg-[#FEFCF7] hover:bg-sky-500 text-slate-700 hover:text-white border border-[#E4DAC8] flex items-center justify-center transition-all shadow-xs"
                aria-label="Twitter"
              >
                <Twitter className="w-4 h-4" />
              </a>
            </div>
          </div>

          {/* Right Column: Big 3D Cluster beside the form (5 cols) */}
          <div className="lg:col-span-5 relative">
            <div className="w-full rounded-3xl bg-[#FEFCF7] border border-[#E4DAC8] shadow-sm relative overflow-hidden p-2">
              <div className="absolute top-4 left-4 z-10 inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#FAF6EE]/90 backdrop-blur-md border border-[#E4DAC8] text-[10px] font-bold text-slate-700">
                <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
                <span>Tactile Clay Cluster · 360° Drag</span>
              </div>

              <ContactCanvas />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
