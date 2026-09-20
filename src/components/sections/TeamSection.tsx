"use client";

import React from "react";
import { motion } from "framer-motion";
import {
  Linkedin,
  Github,
  Globe,
  FileText,
  Sparkles,
  Award,
  BookOpen,
} from "lucide-react";

interface TeamMember {
  id: string;
  name: string;
  role: string;
  subRole: string;
  committee: string;
  initials: string;
  gradient: string;
  bio: string;
  researchFocus: string;
  links: {
    linkedin?: string;
    researchgate?: string;
    github?: string;
    portfolio?: string;
  };
}

const TEAM_MEMBERS: TeamMember[] = [
  {
    id: "m1",
    name: "Dr. Rayan Khelifi",
    role: "President & Founder",
    subRole: "Surgery Resident",
    committee: "Executive Bureau",
    initials: "RK",
    gradient: "from-[#3B33FF] via-[#8B3EE1] to-[#E53888]",
    bio: "Pioneering the strategic vision of Club Médical New Era, national medical congress coordination, and international clinical affiliations.",
    researchFocus: "Minimally invasive trauma surgery & student simulation models.",
    links: {
      linkedin: "https://linkedin.com",
      researchgate: "https://researchgate.net",
      github: "https://github.com",
      portfolio: "https://new-era-club.com",
    },
  },
  {
    id: "m2",
    name: "Dr. Sarah Mansouri",
    role: "VP & Academic Director",
    subRole: "Emergency Medicine Lead",
    committee: "Clinical Training Board",
    initials: "SM",
    gradient: "from-[#8B3EE1] via-[#E53888] to-[#F97316]",
    bio: "Directs surgical suturing bootcamps, emergency triage stations, and OSCE procedural training for hundreds of medical students.",
    researchFocus: "High-fidelity simulation in emergency procedural competence.",
    links: {
      linkedin: "https://linkedin.com",
      researchgate: "https://researchgate.net",
      portfolio: "https://new-era-club.com",
    },
  },
  {
    id: "m3",
    name: "Dr. Mehdi Cherif",
    role: "Head of Scientific Affairs",
    subRole: "Cardiology Fellow",
    committee: "Research Committee",
    initials: "MC",
    gradient: "from-[#E53888] via-[#F97316] to-[#FACC15]",
    bio: "Leads clinical journal clubs, peer-reviewed abstract reviews, and biostatistics workshops for undergraduate medical investigators.",
    researchFocus: "Cardiovascular telemetry & ischemic pattern recognition.",
    links: {
      linkedin: "https://linkedin.com",
      researchgate: "https://researchgate.net",
      github: "https://github.com",
    },
  },
  {
    id: "m4",
    name: "Dr. Yasmine Amara",
    role: "Director of Biomedical Tech & AI",
    subRole: "Informatics & ICU Specialist",
    committee: "Innovation Incubator",
    initials: "YA",
    gradient: "from-[#3B33FF] to-[#8B3EE1]",
    bio: "Engineers machine learning pipelines for point-of-care ultrasound diagnostic assistance and healthcare hackathons.",
    researchFocus: "Algorithmic decision support in septic shock triaging.",
    links: {
      linkedin: "https://linkedin.com",
      github: "https://github.com",
      researchgate: "https://researchgate.net",
      portfolio: "https://new-era-club.com",
    },
  },
  {
    id: "m5",
    name: "Dr. Karim Benali",
    role: "Head of External Affairs",
    subRole: "Internal Medicine Registrar",
    committee: "Hospital Relations & Sponsorship",
    initials: "KB",
    gradient: "from-[#F97316] to-[#FACC15]",
    bio: "Fosters institutional partnerships with teaching hospitals, faculty boards, and medical society sponsorships.",
    researchFocus: "Medical education policy & clinical clerkship satisfaction.",
    links: {
      linkedin: "https://linkedin.com",
      researchgate: "https://researchgate.net",
      portfolio: "https://new-era-club.com",
    },
  },
  {
    id: "m6",
    name: "Lyna Boukhatem",
    role: "Creative Director & Medical Media",
    subRole: "Medical Visual Communicator",
    committee: "Media & Brand Bureau",
    initials: "LB",
    gradient: "from-[#8B3EE1] via-[#E53888] to-[#FACC15]",
    bio: "Oversees 3D interactive anatomical rendering, congress digital experiences, brand identity, and medical storytelling.",
    researchFocus: "Cognitive retention through 3D spatial medical visualization.",
    links: {
      linkedin: "https://linkedin.com",
      github: "https://github.com",
      portfolio: "https://new-era-club.com",
    },
  },
];

export const TeamSection: React.FC = () => {
  return (
    <section id="team" className="relative py-24 sm:py-32 overflow-hidden">
      {/* Background Subtle Tints */}
      <div className="absolute top-1/4 right-0 w-[550px] h-[550px] rounded-full bg-[#3B33FF]/03 blur-[150px] pointer-events-none" />
      <div className="absolute bottom-1/4 left-0 w-[550px] h-[550px] rounded-full bg-[#E53888]/03 blur-[150px] pointer-events-none" />

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
            <span>Executive Board & Leadership</span>
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-3xl sm:text-4xl lg:text-5xl font-black text-[#0A0F24] tracking-tight"
          >
            The Visionary Minds Behind the{" "}
            <span className="text-gradient-brand">New Era</span>
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="text-base sm:text-lg text-slate-700 mt-4 leading-relaxed font-normal"
          >
            A dedicated collective of resident doctors, medical students, and clinical researchers
            united to advance healthcare training.
          </motion.p>
        </div>

        {/* Member Grid: 4 columns desktop, 2 tablet, 1 mobile */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
          {TEAM_MEMBERS.map((member) => (
            <div
              key={member.id}
              className="relative rounded-3xl p-6 border border-[#E4DAC8] bg-[#FEFCF7] shadow-xs flex flex-col justify-between group text-center transition-all duration-300 hover:-translate-y-2 hover:shadow-xl hover:border-transparent hover:ring-2 hover:ring-[#8B3EE1]/50"
            >
              <div className="flex flex-col items-center">
                {/* Circular Avatar with Brand Gradient Ring */}
                <div className="relative mb-4">
                  <div
                    className={`w-20 h-20 rounded-full p-1 bg-gradient-to-tr ${member.gradient} shadow-sm transition-transform group-hover:scale-105 duration-300`}
                  >
                    <div className="w-full h-full rounded-full bg-[#F6EFE4] flex items-center justify-center text-lg font-black text-[#0B0B1A] tracking-wider">
                      {member.initials}
                    </div>
                  </div>
                  <div className="absolute -bottom-1 -right-1 p-1 rounded-full bg-[#FEFCF7] border border-[#E4DAC8] text-[#F97316] shadow-xs">
                    <Award className="w-3 h-3" />
                  </div>
                </div>

                {/* Member Names & Role */}
                <span className="text-[9px] font-black uppercase tracking-widest text-[#F97316] mb-0.5">
                  {member.committee}
                </span>
                <h3 className="text-lg font-black text-[#0B0B1A] group-hover:text-[#3B33FF] transition-colors leading-snug">
                  {member.name}
                </h3>
                <p className="text-xs font-semibold text-[#8B3EE1] mt-0.5">
                  {member.role}
                </p>
                <p className="text-[11px] text-slate-500">
                  {member.subRole}
                </p>

                {/* Bio */}
                <p className="text-xs text-slate-600 mt-3 leading-relaxed font-normal line-clamp-3">
                  {member.bio}
                </p>
              </div>

              {/* Social Links (only show icons that exist) */}
              <div className="pt-4 mt-4 border-t border-[#E8DFD1] flex items-center justify-center gap-2">
                {member.links.linkedin && (
                  <a
                    href={member.links.linkedin}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-9 h-9 rounded-full bg-[#F6EFE4] border border-[#E4DAC8] text-slate-700 hover:text-white hover:bg-[#3B33FF] transition-all flex items-center justify-center shadow-xs"
                    title="LinkedIn Profile"
                  >
                    <Linkedin className="w-3.5 h-3.5" />
                  </a>
                )}

                {member.links.researchgate && (
                  <a
                    href={member.links.researchgate}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-9 h-9 rounded-full bg-[#F6EFE4] border border-[#E4DAC8] text-slate-700 hover:text-white hover:bg-[#8B3EE1] transition-all flex items-center justify-center shadow-xs"
                    title="ResearchGate Publications"
                  >
                    <FileText className="w-3.5 h-3.5" />
                  </a>
                )}

                {member.links.github && (
                  <a
                    href={member.links.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-9 h-9 rounded-full bg-[#F6EFE4] border border-[#E4DAC8] text-slate-700 hover:text-white hover:bg-[#0B0B1A] transition-all flex items-center justify-center shadow-xs"
                    title="GitHub"
                  >
                    <Github className="w-3.5 h-3.5" />
                  </a>
                )}

                {member.links.portfolio && (
                  <a
                    href={member.links.portfolio}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-9 h-9 rounded-full bg-[#F6EFE4] border border-[#E4DAC8] text-slate-700 hover:text-white hover:bg-[#E53888] transition-all flex items-center justify-center shadow-xs"
                    title="Portfolio"
                  >
                    <Globe className="w-3.5 h-3.5" />
                  </a>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
