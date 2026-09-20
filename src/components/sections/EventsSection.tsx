"use client";

import React, { useState, useEffect, useMemo } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { EVENTS_DATA, MedicalEvent } from "@/data/eventsData";
import { EventModal } from "../ui/EventModal";
import {
  Calendar,
  Clock,
  MapPin,
  Sparkles,
  ArrowUpRight,
  Award,
  Flame,
  CheckCircle2,
  FileCheck2,
  Users2,
  ShieldCheck,
} from "lucide-react";

interface PastCongress {
  id: string;
  year: string;
  title: string;
  theme: string;
  delegates: string;
  workshopsCount: string;
  abstractsPublished: string;
  badgeColor: string;
}

const PAST_CONGRESSES: PastCongress[] = [
  {
    id: "congress-2025",
    year: "2025",
    title: "National Medical Congress III",
    theme: "Precision Diagnostics & Interventional Cardiology",
    delegates: "520+ Attendees",
    workshopsCount: "14 Bootcamps",
    abstractsPublished: "28 Papers",
    badgeColor: "#8B3EE1",
  },
  {
    id: "congress-2024",
    year: "2024",
    title: "Surgical Innovations Congress II",
    theme: "Minimally Invasive Surgery & Robotic Horizons",
    delegates: "410+ Attendees",
    workshopsCount: "10 Bootcamps",
    abstractsPublished: "22 Papers",
    badgeColor: "#E53888",
  },
  {
    id: "congress-2023",
    year: "2023",
    title: "Emergency Medicine Symposium I",
    theme: "Disaster Triage, Trauma Life Support & POCUS",
    delegates: "340+ Attendees",
    workshopsCount: "8 Bootcamps",
    abstractsPublished: "15 Papers",
    badgeColor: "#F97316",
  },
];

export const EventsSection: React.FC = () => {
  const [selectedCategory, setSelectedCategory] = useState<string>("All");
  const [activeEvent, setActiveEvent] = useState<MedicalEvent | null>(null);

  // Live Countdown to Upcoming Flagship Congress (Target date: Nov 14, 2026)
  const [timeLeft, setTimeLeft] = useState({
    days: 48,
    hours: 14,
    minutes: 32,
    seconds: 19,
  });

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft((prev) => {
        if (prev.seconds > 0) {
          return { ...prev, seconds: prev.seconds - 1 };
        }
        if (prev.minutes > 0) {
          return { ...prev, minutes: prev.minutes - 1, seconds: 59 };
        }
        if (prev.hours > 0) {
          return { ...prev, hours: prev.hours - 1, minutes: 59, seconds: 59 };
        }
        if (prev.days > 0) {
          return { ...prev, days: prev.days - 1, hours: 23, minutes: 59, seconds: 59 };
        }
        return prev;
      });
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  const categories = ["All", "Conference", "Workshop", "Medical Day", "Simulation"];

  const filteredEvents = useMemo(() => {
    if (selectedCategory === "All") return EVENTS_DATA;
    return EVENTS_DATA.filter((e) => e.category === selectedCategory);
  }, [selectedCategory]);

  const flagshipEvent = EVENTS_DATA[0];

  return (
    <section id="events" className="relative py-24 sm:py-32 overflow-hidden">
      {/* Background Subtle Tints */}
      <div className="absolute top-20 right-10 w-[500px] h-[500px] rounded-full bg-[#3B33FF]/03 blur-[140px] pointer-events-none" />
      <div className="absolute bottom-20 left-10 w-[500px] h-[500px] rounded-full bg-[#E53888]/03 blur-[140px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="flex flex-col lg:flex-row lg:items-end justify-between mb-16 gap-6">
          <div className="max-w-2xl">
            <motion.div
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[#FEFCF7] border border-[#E4DAC8] shadow-xs text-xs font-bold uppercase tracking-widest text-[#F97316] mb-4"
            >
              <Sparkles className="w-3.5 h-3.5 text-[#FACC15]" />
              <span>Scientific Events & Congresses</span>
            </motion.div>
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-3xl sm:text-4xl lg:text-5xl font-black text-[#0A0F24] tracking-tight"
            >
              Upcoming Scientific Events & <span className="text-gradient-brand">Medical Days</span>
            </motion.h2>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-base text-slate-700 mt-3 font-normal"
            >
              Immerse yourself in surgical suture bootcamps, emergency trauma simulations, and
              accredited national medical congresses.
            </motion.p>
          </div>

          {/* Category Filter Pills in Warm Cream Mode */}
          <div className="flex flex-wrap gap-2">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setSelectedCategory(cat)}
                className={`px-4 py-2 rounded-full text-xs font-bold transition-all duration-200 ${
                  selectedCategory === cat
                    ? "bg-[#0A0F24] text-white shadow-sm scale-105"
                    : "bg-[#FEFCF7] text-slate-800 border border-[#E4DAC8] hover:border-[#D8CEBA] hover:text-[#0A0F24]"
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>

        {/* Bento-Grid Interface in Warm Cream Mode */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 mb-16">
          {/* Bento Item 1: Featured Flagship Event with Live Countdown */}
          <div className="lg:col-span-7 glass-bento rounded-3xl p-7 sm:p-10 border border-[#E4DAC8] flex flex-col justify-between relative overflow-hidden group bg-[#FEFCF7] shadow-sm">
            <div>
              <div className="flex items-center justify-between gap-3 mb-6">
                <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-[11px] font-black uppercase tracking-wider bg-gradient-to-r from-[#E53888] to-[#F97316] text-white shadow-xs">
                  <Flame className="w-3.5 h-3.5" />
                  Flagship Congress
                </span>
                <span className="text-xs font-bold text-slate-600 bg-slate-100 border border-slate-200 px-3 py-1 rounded-full">
                  Accredited CME Hours
                </span>
              </div>

              <h3 className="text-2xl sm:text-3xl lg:text-4xl font-black text-[#0A0F24] leading-tight mb-4 group-hover:text-[#3B33FF] transition-colors">
                {flagshipEvent.title}
              </h3>

              <p className="text-sm text-slate-600 leading-relaxed max-w-xl mb-8 font-normal">
                {flagshipEvent.summary}
              </p>

              {/* Live Countdown Timer Grid in Light Mode */}
              <div className="mb-8">
                <p className="text-[11px] font-black uppercase tracking-widest text-[#F97316] mb-3 flex items-center gap-2">
                  <Clock className="w-3.5 h-3.5 text-[#FACC15]" />
                  <span>Congress Countdown Clock:</span>
                </p>
                <div className="grid grid-cols-4 gap-2 sm:gap-3 max-w-md">
                  <div className="bg-slate-50 border border-slate-200 rounded-2xl p-2.5 sm:p-3 text-center shadow-xs">
                    <span className="text-xl sm:text-2xl lg:text-3xl font-black text-slate-900 font-mono">
                      {String(timeLeft.days).padStart(2, "0")}
                    </span>
                    <span className="block text-[9px] sm:text-[10px] font-bold uppercase text-slate-500 mt-0.5">
                      Days
                    </span>
                  </div>
                  <div className="bg-slate-50 border border-slate-200 rounded-2xl p-2.5 sm:p-3 text-center shadow-xs">
                    <span className="text-xl sm:text-2xl lg:text-3xl font-black text-slate-900 font-mono">
                      {String(timeLeft.hours).padStart(2, "0")}
                    </span>
                    <span className="block text-[9px] sm:text-[10px] font-bold uppercase text-slate-500 mt-0.5">
                      Hours
                    </span>
                  </div>
                  <div className="bg-slate-50 border border-slate-200 rounded-2xl p-2.5 sm:p-3 text-center shadow-xs">
                    <span className="text-xl sm:text-2xl lg:text-3xl font-black text-slate-900 font-mono">
                      {String(timeLeft.minutes).padStart(2, "0")}
                    </span>
                    <span className="block text-[9px] sm:text-[10px] font-bold uppercase text-slate-500 mt-0.5">
                      Mins
                    </span>
                  </div>
                  <div className="bg-slate-50 border border-slate-200 rounded-2xl p-2.5 sm:p-3 text-center shadow-xs">
                    <span className="text-xl sm:text-2xl lg:text-3xl font-black text-[#F97316] font-mono animate-pulse">
                      {String(timeLeft.seconds).padStart(2, "0")}
                    </span>
                    <span className="block text-[9px] sm:text-[10px] font-bold uppercase text-slate-500 mt-0.5">
                      Secs
                    </span>
                  </div>
                </div>
              </div>
            </div>

            {/* Bottom Meta & Action */}
            <div className="pt-6 border-t border-slate-100 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
              <div className="flex items-center gap-4 text-xs text-slate-600">
                <span className="flex items-center gap-1.5 font-medium">
                  <Calendar className="w-4 h-4 text-[#8B3EE1]" />
                  {flagshipEvent.date}
                </span>
                <span className="flex items-center gap-1.5 font-medium">
                  <MapPin className="w-4 h-4 text-[#E53888]" />
                  {flagshipEvent.location}
                </span>
              </div>

              <button
                onClick={() => setActiveEvent(flagshipEvent)}
                className="w-full sm:w-auto min-h-[48px] px-8 py-3.5 rounded-full text-xs font-black text-slate-950 bg-gradient-to-r from-[#F97316] to-[#FACC15] shadow-sunset-glow hover:scale-105 active:scale-95 transition-all flex items-center justify-center gap-2"
              >
                <span>Register for Congress</span>
                <ArrowUpRight className="w-4 h-4 text-slate-950" />
              </button>
            </div>
          </div>

          {/* Bento Item 2: Clinical Protocol & Live Seat Allocation Quota (Warm Cream Mode) */}
          <div className="lg:col-span-5 glass-bento rounded-3xl p-7 border border-[#E4DAC8] flex flex-col justify-between relative overflow-hidden bg-[#FEFCF7] shadow-sm">
            <div>
              <div className="flex items-center justify-between mb-4">
                <span className="text-[10px] font-black uppercase tracking-widest text-[#F97316]">
                  Live Registration Counter
                </span>
                <span className="flex items-center gap-1 text-[11px] font-bold text-emerald-800 bg-emerald-50/80 px-2.5 py-0.5 rounded-full border border-emerald-200">
                  <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-ping" />
                  Live Sync
                </span>
              </div>

              <h4 className="text-xl font-black text-[#0A0F24] mb-2">
                Clinical Exam Protocol & Student Quotas
              </h4>
              <p className="text-xs text-slate-700 font-normal leading-relaxed mb-6">
                Standardized surgical checklists, high-fidelity scenario access, and residency candidate evaluation.
              </p>

              {/* Protocol Highlights Matrix */}
              <div className="space-y-3 mb-6">
                <div className="flex items-center gap-3 p-3 rounded-2xl bg-[#F6EFE4] border border-[#E4DAC8]">
                  <div className="w-9 h-9 rounded-xl bg-[#3B33FF]/10 text-[#3B33FF] flex items-center justify-center shrink-0">
                    <FileCheck2 className="w-4 h-4" />
                  </div>
                  <div>
                    <h5 className="text-xs font-bold text-[#0A0F24]">Standardized OSCE Rubric</h5>
                    <p className="text-[11px] text-slate-600">Graded by hospital surgical attendings</p>
                  </div>
                </div>

                <div className="flex items-center gap-3 p-3 rounded-2xl bg-[#F6EFE4] border border-[#E4DAC8]">
                  <div className="w-9 h-9 rounded-xl bg-[#8B3EE1]/10 text-[#8B3EE1] flex items-center justify-center shrink-0">
                    <Users2 className="w-4 h-4" />
                  </div>
                  <div>
                    <h5 className="text-xs font-bold text-[#0A0F24]">1:4 Resident Instructor Ratio</h5>
                    <p className="text-[11px] text-slate-600">Immediate hands-on knot & procedural correction</p>
                  </div>
                </div>

                <div className="flex items-center gap-3 p-3 rounded-2xl bg-[#F6EFE4] border border-[#E4DAC8]">
                  <div className="w-9 h-9 rounded-xl bg-[#10B981]/10 text-emerald-600 flex items-center justify-center shrink-0">
                    <ShieldCheck className="w-4 h-4" />
                  </div>
                  <div>
                    <h5 className="text-xs font-bold text-[#0A0F24]">Official CME Certificate</h5>
                    <p className="text-[11px] text-slate-600">Recognized accreditation across medical faculties</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Live Progress Allocation Bar */}
            <div className="space-y-2.5 pt-2 border-t border-[#E8DFD1]">
              <div className="flex justify-between items-center text-xs">
                <span className="text-slate-800 font-bold">Total Student Quota</span>
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#F97316] to-[#E53888] font-black">
                  92% Reserved (230 / 250)
                </span>
              </div>
              <div className="h-2.5 w-full bg-[#EFE8DC] rounded-full overflow-hidden border border-[#E4DAC8]">
                <div
                  className="h-full rounded-full bg-gradient-to-r from-[#3B33FF] via-[#E53888] to-[#F97316]"
                  style={{ width: "92%" }}
                />
              </div>
              <div className="flex justify-between text-[11px] text-slate-600">
                <span>Phase: Priority Open</span>
                <span className="text-[#F97316] font-bold">20 seats remaining</span>
              </div>
            </div>
          </div>
        </div>

        {/* Secondary Events Grid (Filterable, Warm Cream Mode) */}
        <motion.div layout className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-20">
          <AnimatePresence>
            {filteredEvents.slice(1).map((event) => {
              const capacityPct = Math.round((event.attendeesCount / event.maxCapacity) * 100);

              return (
                <motion.div
                  key={event.id}
                  layout
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.95 }}
                  transition={{ duration: 0.3 }}
                >
                  <div className="h-full glass-panel-hover rounded-3xl p-6 sm:p-7 border border-[#E4DAC8] flex flex-col justify-between group bg-[#FEFCF7] shadow-xs relative overflow-hidden">
                    {/* Top Accent Line */}
                    <div
                      className="absolute top-0 left-0 right-0 h-1"
                      style={{
                        background: `linear-gradient(90deg, ${event.badgeColor}, #F97316)`,
                      }}
                    />

                    <div>
                      {/* Status & Category Bar */}
                      <div className="flex items-center justify-between gap-2 mb-4">
                        <span
                          className="px-3 py-1 rounded-full text-[10px] font-black uppercase tracking-wider text-white shadow-xs"
                          style={{ backgroundColor: `${event.badgeColor}` }}
                        >
                          {event.category}
                        </span>

                        <span className="text-[10px] font-bold text-slate-600 bg-slate-100 border border-slate-200 px-2.5 py-0.5 rounded-full">
                          {event.status}
                        </span>
                      </div>

                      {/* Title */}
                      <h3 className="text-lg font-black text-slate-900 group-hover:text-[#3B33FF] transition-colors leading-snug mb-3">
                        {event.title}
                      </h3>

                      {/* Summary */}
                      <p className="text-xs text-slate-600 line-clamp-2 mb-5 leading-relaxed font-normal">
                        {event.summary}
                      </p>

                      {/* Date, Time, Location details in Light Box */}
                      <div className="space-y-2 text-xs text-slate-600 mb-6 bg-slate-50 p-3.5 rounded-2xl border border-slate-200/70">
                        <div className="flex items-center gap-2">
                          <Calendar className="w-3.5 h-3.5 text-[#8B3EE1] shrink-0" />
                          <span className="font-semibold text-slate-800">{event.date}</span>
                        </div>
                        <div className="flex items-center gap-2">
                          <Clock className="w-3.5 h-3.5 text-[#F97316] shrink-0" />
                          <span>{event.time}</span>
                        </div>
                        <div className="flex items-center gap-2">
                          <MapPin className="w-3.5 h-3.5 text-[#E53888] shrink-0" />
                          <span className="truncate">{event.location}</span>
                        </div>
                      </div>
                    </div>

                    <div>
                      {/* Attendance Progress Bar */}
                      <div className="mb-4">
                        <div className="flex justify-between text-[11px] font-semibold text-slate-500 mb-1">
                          <span>Capacity Filled</span>
                          <span className="text-slate-800 font-bold">{capacityPct}%</span>
                        </div>
                        <div className="h-1.5 w-full bg-slate-100 rounded-full overflow-hidden border border-slate-200/80">
                          <div
                            className="h-full rounded-full transition-all duration-500"
                            style={{
                              width: `${capacityPct}%`,
                              background: `linear-gradient(90deg, #3B33FF, #8B3EE1, #E53888, #F97316)`,
                            }}
                          />
                        </div>
                      </div>

                      {/* Card Footer CTA Button with 48px min height */}
                      <button
                        onClick={() => setActiveEvent(event)}
                        className="w-full min-h-[48px] py-3 rounded-2xl text-xs font-bold text-slate-800 bg-slate-100 hover:bg-slate-900 hover:text-white transition-all duration-300 flex items-center justify-center gap-2 border border-slate-200 group/btn"
                      >
                        <span>View Syllabus & Reserve</span>
                        <ArrowUpRight className="w-3.5 h-3.5 group-hover/btn:translate-x-0.5 group-hover/btn:-translate-y-0.5 transition-transform" />
                      </button>
                    </div>
                  </div>
                </motion.div>
              );
            })}
          </AnimatePresence>
        </motion.div>

        {/* Embedded Mini-Portfolios of Past Congresses in Warm Cream Mode */}
        <div id="events-portfolio" className="glass-panel rounded-3xl p-8 sm:p-12 border border-[#E4DAC8] shadow-sm bg-[#FEFCF7] relative overflow-hidden">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between mb-8 pb-6 border-b border-[#E8DFD1] gap-4">
            <div>
              <span className="text-xs font-black uppercase tracking-widest text-[#F97316]">
                Archive of Scientific Milestones
              </span>
              <h3 className="text-2xl sm:text-3xl font-black text-[#0A0F24] mt-1">
                Past Congresses & Symposiums Portfolio
              </h3>
            </div>
            <div className="flex items-center gap-2 text-xs font-bold text-slate-600">
              <Award className="w-4 h-4 text-[#FACC15]" />
              <span>Accredited Academic Record</span>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {PAST_CONGRESSES.map((congress) => (
              <div
                key={congress.id}
                className="p-6 rounded-2xl bg-[#F6EFE4]/80 border border-[#E4DAC8] hover:border-[#D8CEBA] transition-all group"
              >
                <div className="flex items-center justify-between mb-3">
                  <span
                    className="px-2.5 py-0.5 rounded-full text-[10px] font-black tracking-wider text-white"
                    style={{ backgroundColor: congress.badgeColor }}
                  >
                    Edition {congress.year}
                  </span>
                  <span className="text-xs font-semibold text-slate-400">Archived</span>
                </div>

                <h4 className="text-base font-bold text-slate-900 mb-1 group-hover:text-[#3B33FF] transition-colors">
                  {congress.title}
                </h4>
                <p className="text-xs text-slate-500 mb-4">{congress.theme}</p>

                <div className="grid grid-cols-3 gap-2 pt-3 border-t border-slate-200/60 text-center">
                  <div>
                    <span className="block text-xs font-black text-slate-900">{congress.delegates.split(" ")[0]}</span>
                    <span className="text-[9px] text-slate-400 uppercase">Delegates</span>
                  </div>
                  <div>
                    <span className="block text-xs font-black text-[#8B3EE1]">{congress.workshopsCount.split(" ")[0]}</span>
                    <span className="text-[9px] text-slate-400 uppercase">Bootcamps</span>
                  </div>
                  <div>
                    <span className="block text-xs font-black text-[#E53888]">{congress.abstractsPublished.split(" ")[0]}</span>
                    <span className="text-[9px] text-slate-400 uppercase">Abstracts</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Event Details & Registration Modal */}
      <EventModal event={activeEvent} onClose={() => setActiveEvent(null)} />
    </section>
  );
};
