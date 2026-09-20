"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ANNOUNCEMENTS, AnnouncementItem } from "@/data/announcementsData";
import { Bell, ArrowUpRight, Sparkles, Calendar, Clock } from "lucide-react";

export const AnnouncementsSection: React.FC = () => {
  const [selectedTag, setSelectedTag] = useState<string>("All");

  const tags = ["All", "Opportunity", "Announcement", "Call for members"];

  const filtered =
    selectedTag === "All"
      ? ANNOUNCEMENTS
      : ANNOUNCEMENTS.filter((item) => item.category === selectedTag);

  return (
    <section id="announcements" className="relative py-20 sm:py-28 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-6">
          <div>
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[#FEFCF7] border border-[#E4DAC8] shadow-xs text-xs font-bold uppercase tracking-widest text-[#F97316] mb-4">
              <Sparkles className="w-3.5 h-3.5 text-[#FACC15]" />
              <span>Announcements & Opportunities</span>
            </div>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-[#0B0B1A] tracking-tight">
              Latest Academic <span className="text-gradient-brand">Opportunities</span>
            </h2>
          </div>

          {/* Tag Filter Pills */}
          <div className="flex flex-wrap gap-2">
            {tags.map((tag) => (
              <button
                key={tag}
                onClick={() => setSelectedTag(tag)}
                className={`px-4 py-2 rounded-full text-xs font-bold transition-all ${
                  selectedTag === tag
                    ? "bg-[#0B0B1A] text-white shadow-xs scale-105"
                    : "bg-[#FEFCF7] text-slate-700 border border-[#E4DAC8] hover:border-[#D8CEBA]"
                }`}
              >
                {tag}
              </button>
            ))}
          </div>
        </div>

        {/* Clean Feed */}
        <motion.div layout className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <AnimatePresence>
            {filtered.map((item) => (
              <motion.div
                key={item.id}
                layout
                initial={{ opacity: 0, y: 15 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, scale: 0.96 }}
                transition={{ duration: 0.25 }}
                className="glass-panel-hover rounded-3xl p-7 border border-[#E4DAC8] bg-[#FEFCF7] shadow-xs flex flex-col justify-between group"
              >
                <div>
                  {/* Category Pill & Date */}
                  <div className="flex items-center justify-between mb-4">
                    <span
                      className="px-3 py-1 rounded-full text-[10px] font-black uppercase tracking-wider text-white"
                      style={{ backgroundColor: item.tagColor }}
                    >
                      {item.category}
                    </span>

                    {item.deadline && (
                      <span className="flex items-center gap-1 text-[11px] font-mono text-slate-500">
                        <Clock className="w-3 h-3 text-[#F97316]" />
                        <span>Deadline: {item.deadline}</span>
                      </span>
                    )}
                  </div>

                  {/* Title */}
                  <h3 className="text-xl font-black text-[#0B0B1A] group-hover:text-[#3B33FF] transition-colors leading-snug mb-3">
                    {item.title}
                  </h3>

                  {/* Summary */}
                  <p className="text-xs text-slate-600 leading-relaxed font-normal mb-6">
                    {item.summary}
                  </p>
                </div>

                {/* Footer Link */}
                <div className="pt-4 border-t border-[#E8DFD1] flex items-center justify-between">
                  <span className="text-[11px] font-bold text-slate-400">
                    Posted {item.date}
                  </span>
                  <a
                    href={item.actionHref || "#"}
                    className="inline-flex items-center gap-1.5 text-xs font-bold text-[#0B0B1A] hover:text-[#3B33FF] transition-colors"
                  >
                    <span>{item.actionText}</span>
                    <ArrowUpRight className="w-3.5 h-3.5 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
                  </a>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>
      </div>
    </section>
  );
};
