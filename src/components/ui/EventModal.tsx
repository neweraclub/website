"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X, Calendar, Clock, MapPin, Users, CheckCircle2, Ticket } from "lucide-react";
import { MedicalEvent } from "@/data/eventsData";

interface EventModalProps {
  event: MedicalEvent | null;
  onClose: () => void;
}

export const EventModal: React.FC<EventModalProps> = ({ event, onClose }) => {
  const [reserved, setReserved] = useState(false);

  if (!event) return null;

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
          className="relative w-full max-w-2xl max-h-[92vh] sm:max-h-[88vh] bg-[#FEFCF7] rounded-t-[32px] sm:rounded-3xl shadow-2xl border-t sm:border border-[#E4DAC8] overflow-y-auto z-10"
        >
          {/* Mobile Drag Handle Bar for thumb navigation */}
          <div className="pt-3 pb-1 flex justify-center sm:hidden">
            <div className="w-12 h-1.5 bg-slate-300 rounded-full" />
          </div>

          {/* Header Banner */}
          <div
            className="relative px-6 sm:px-8 py-6 sm:py-8 text-white border-b border-white/20"
            style={{
              background: `linear-gradient(135deg, ${event.badgeColor} 0%, #0A0F24 100%)`,
            }}
          >
            <button
              onClick={onClose}
              className="absolute top-4 sm:top-5 right-4 sm:right-5 min-w-[48px] min-h-[48px] p-2.5 rounded-full bg-white/20 hover:bg-white/30 text-white transition-colors border border-white/20 flex items-center justify-center"
              aria-label="Close modal"
            >
              <X className="w-5 h-5" />
            </button>
            <div className="inline-block px-3 py-1 rounded-full text-[11px] font-black uppercase tracking-wider bg-white/20 border border-white/20 backdrop-blur-md mb-3 text-white">
              {event.category}
            </div>
            <h3 className="text-xl sm:text-2xl font-black leading-tight max-w-lg text-white">
              {event.title}
            </h3>

            {/* Quick Metadata Bar */}
            <div className="flex flex-wrap gap-4 sm:gap-6 mt-4 text-xs text-white/90">
              <span className="flex items-center gap-1.5">
                <Calendar className="w-4 h-4 text-[#FACC15]" />
                {event.date}
              </span>
              <span className="flex items-center gap-1.5">
                <Clock className="w-4 h-4 text-[#FACC15]" />
                {event.time}
              </span>
              <span className="flex items-center gap-1.5">
                <MapPin className="w-4 h-4 text-[#FACC15]" />
                <span className="truncate">{event.location}</span>
              </span>
            </div>
          </div>

          <div className="p-6 sm:p-8 space-y-6">
            <div>
              <h4 className="text-xs font-black uppercase tracking-widest text-[#F97316] mb-2">
                Overview & Scientific Focus
              </h4>
              <p className="text-sm text-slate-700 leading-relaxed font-normal">{event.summary}</p>
            </div>

            <div>
              <h4 className="text-xs font-black uppercase tracking-widest text-slate-500 mb-3">
                Key Curriculum & Interactive Stations
              </h4>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                {event.highlights.map((h, i) => (
                  <div
                    key={i}
                    className="flex items-start gap-2.5 p-3 rounded-xl bg-slate-50 border border-slate-200/80 text-xs text-slate-800"
                  >
                    <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                    <span>{h}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Keynote / Instructor */}
            <div className="p-4 rounded-2xl bg-slate-50 border border-slate-200/80 flex flex-col sm:flex-row sm:items-center justify-between gap-3">
              <div>
                <p className="text-[10px] font-black uppercase tracking-wider text-slate-500">
                  Lead Instructor / Speaker
                </p>
                <p className="text-sm font-bold text-slate-900">{event.instructorOrSpeaker}</p>
                <p className="text-xs text-slate-500">{event.speakerTitle}</p>
              </div>
              <div className="sm:text-right">
                <span className="text-xs font-black text-[#3B33FF] flex items-center gap-1.5 sm:justify-end">
                  <Users className="w-4 h-4" />
                  {event.attendeesCount} / {event.maxCapacity} Attending
                </span>
                <span className="text-[10px] text-slate-500">
                  {event.maxCapacity - event.attendeesCount} seats remaining
                </span>
              </div>
            </div>

            {/* Action with 48px touch target */}
            <div className="pt-2 flex flex-col sm:flex-row items-center justify-between gap-4 pb-6 sm:pb-0">
              <span className="text-xs text-slate-500 text-center sm:text-left">
                Free for all registered Medical Students · Limited Capacity
              </span>
              {reserved ? (
                <div className="w-full sm:w-auto min-h-[48px] flex items-center justify-center gap-2 px-6 py-3 rounded-full bg-emerald-100 border border-emerald-300 text-emerald-800 text-xs font-bold shadow-xs">
                  <CheckCircle2 className="w-4 h-4" />
                  <span>Pass Reserved! See you there.</span>
                </div>
              ) : (
                <button
                  onClick={() => setReserved(true)}
                  className="w-full sm:w-auto min-h-[48px] px-8 py-3.5 rounded-full text-xs font-black text-slate-950 bg-gradient-to-r from-[#F97316] to-[#FACC15] shadow-sunset-glow hover:scale-105 active:scale-95 transition-all flex items-center justify-center gap-2"
                >
                  <Ticket className="w-4 h-4 text-slate-950" />
                  <span>Reserve Student Pass</span>
                </button>
              )}
            </div>
          </div>
        </motion.div>
      </div>
    </AnimatePresence>
  );
};
