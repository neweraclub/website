"use client";

import React, { useState } from "react";
import { motion } from "framer-motion";
import {
  BookOpen,
  FileText,
  Users,
  Sparkles,
  Download,
  ExternalLink,
  Search,
  CheckCircle2,
  Atom,
  TrendingUp,
} from "lucide-react";

interface PaperItem {
  id: string;
  title: string;
  journal: string;
  year: string;
  authors: string;
  citations: number;
  doi: string;
  category: string;
}

interface ResourceItem {
  id: string;
  title: string;
  type: string;
  pages: string;
  format: string;
  updated: string;
  downloads: string;
}

interface ResearchTeamItem {
  id: string;
  name: string;
  lead: string;
  focus: string;
  membersCount: number;
  status: string;
  activeProjects: string;
}

const PUBLISHED_PAPERS: PaperItem[] = [
  {
    id: "p1",
    title: "Machine Learning Triaging in Acute Coronary Syndrome: A Multicenter Student Study",
    journal: "International Journal of Medical Informatics",
    year: "2025",
    authors: "Amara Y., Cherif M., Benali K., New Era Cardiology Group",
    citations: 34,
    doi: "10.1016/j.ijmedinf.2025.104921",
    category: "AI & Cardiology",
  },
  {
    id: "p2",
    title: "Post-Operative Suture Tensile Strength Under Variable Mechanical Stress: In-Vitro Model",
    journal: "Annals of Student Surgical Science",
    year: "2024",
    authors: "Mansouri S., Boukhatem R., Club Médical New Era Suture Lab",
    citations: 21,
    doi: "10.1097/JS9.0000000000001182",
    category: "Surgery & Biomaterials",
  },
  {
    id: "p3",
    title: "Burnout Prevalence and Sleep Hygiene Among Medical Interns During Night Rotations",
    journal: "North African Medical Journal of Education",
    year: "2024",
    authors: "Khelifi R., Larbi F., New Era Public Health Cohort",
    citations: 18,
    doi: "10.4103/education.med.2024.912",
    category: "Medical Education",
  },
  {
    id: "p4",
    title: "Point-of-Care Ultrasound vs Chest Radiography in Rapid Diagnosis of Pneumothorax",
    journal: "Clinical Simulation in Emergency Medicine",
    year: "2023",
    authors: "Slimani H., New Era Emergency Medicine Group",
    citations: 29,
    doi: "10.1016/j.ajem.2023.08.019",
    category: "Emergency & Ultrasound",
  },
];

const STUDY_RESOURCES: ResourceItem[] = [
  {
    id: "r1",
    title: "Comprehensive Clinical OSCE Survival Compendium (2026 Edition)",
    type: "Clinical Checklist Handbook",
    pages: "148 Pages",
    format: "PDF (Color)",
    updated: "September 2026",
    downloads: "2.8k Downloads",
  },
  {
    id: "r2",
    title: "The Systematic 12-Lead ECG Pocket Handbook for Clerkship",
    type: "Diagnostic Atlas",
    pages: "86 Pages",
    format: "PDF & Mobile",
    updated: "August 2026",
    downloads: "4.1k Downloads",
  },
  {
    id: "r3",
    title: "Surgical Instrument Handling & Suture Knot Mastery Guide",
    type: "Procedure Manual",
    pages: "64 Pages",
    format: "Illustrated PDF",
    updated: "July 2026",
    downloads: "3.2k Downloads",
  },
  {
    id: "r4",
    title: "Antimicrobial Stewardship & Empiric Therapy Protocol",
    type: "Pharmacology Guide",
    pages: "92 Pages",
    format: "Pocket PDF",
    updated: "June 2026",
    downloads: "1.9k Downloads",
  },
];

const RESEARCH_TEAMS: ResearchTeamItem[] = [
  {
    id: "t1",
    name: "Cardiovascular Clinical Epidemiology Group",
    lead: "Lead: Dr. M. Cherif (Cardiology Fellow)",
    focus: "Early coronary syndrome biomarkers and student ECG interpretation accuracy.",
    membersCount: 12,
    status: "Active Data Collection",
    activeProjects: "2 Active Clinical Trials",
  },
  {
    id: "t2",
    name: "AI & Medical Image Computing Incubator",
    lead: "Lead: Dr. Y. Amara (Biomedical Informatics)",
    focus: "Deep learning models for automated pneumonia detection on bedside ultrasound.",
    membersCount: 8,
    status: "Manuscript Under Review",
    activeProjects: "1 Algorithmic Study",
  },
  {
    id: "t3",
    name: "Surgical Simulation & Ergonomics Lab",
    lead: "Lead: Dr. K. Benali (General Surgery)",
    focus: "Objective structured assessment of laparoscopic knot tying under simulated stress.",
    membersCount: 10,
    status: "Recruiting Investigators",
    activeProjects: "3 Simulation Drills",
  },
];

export const ResearchSection: React.FC = () => {
  const [activeTab, setActiveTab] = useState<"papers" | "resources" | "teams">("papers");
  const [searchQuery, setSearchQuery] = useState("");

  // Sync with anchor hash from navbar mega-dropdown
  React.useEffect(() => {
    const handleHash = () => {
      const hash = window.location.hash;
      if (hash === "#academic-resources") setActiveTab("resources");
      else if (hash === "#academic-papers") setActiveTab("papers");
      else if (hash === "#academic-teams") setActiveTab("teams");
    };
    handleHash();
    window.addEventListener("hashchange", handleHash);
    return () => window.removeEventListener("hashchange", handleHash);
  }, []);

  const filteredPapers = PUBLISHED_PAPERS.filter(
    (p) =>
      p.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      p.category.toLowerCase().includes(searchQuery.toLowerCase()) ||
      p.journal.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <section id="academic-hub" className="relative py-24 sm:py-32 overflow-hidden">
      {/* Background Subtle Tints */}
      <div className="absolute top-1/3 left-1/4 w-[600px] h-[600px] rounded-full bg-[#3B33FF]/03 blur-[160px] pointer-events-none" />
      <div className="absolute bottom-10 right-10 w-[500px] h-[500px] rounded-full bg-[#8B3EE1]/03 blur-[150px] pointer-events-none" />

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
            <span>Academic Hub & Scientific Research</span>
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-3xl sm:text-4xl lg:text-5xl font-black text-[#0A0F24] tracking-tight"
          >
            Evidence-Based Inquiry & <span className="text-gradient-brand">Document Matrix</span>
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="text-base sm:text-lg text-slate-700 mt-4 leading-relaxed font-normal"
          >
            Explore student-led peer-reviewed papers, downloadable clinical clerkship survival manuals,
            and specialized academic research working groups.
          </motion.p>
        </div>

        {/* Flagship Research Spotlight Banner in Warm Cream Mode */}
        <div className="glass-bento rounded-3xl p-7 sm:p-10 border border-[#E4DAC8] mb-12 bg-[#FEFCF7] shadow-sm relative overflow-hidden">
          <div className="flex items-center gap-2 mb-3">
            <Atom className="w-4 h-4 text-[#E53888]" />
            <span className="text-[11px] font-black uppercase tracking-widest text-[#F97316]">
              Flagship Research Program · 2026 Academic Season
            </span>
          </div>
          <h3 className="text-2xl sm:text-3xl font-black text-[#0A0F24] mb-3">
            Genomic Epidemiology & Emerging Pathogen Diagnostics
          </h3>
          <p className="text-sm text-slate-700 leading-relaxed max-w-3xl mb-6 font-normal">
            Club Médical New Era maintains an active student research fellowship investigating molecular diagnostics, point-of-care viral detection, and antimicrobial stewardship in academic hospital wards.
          </p>
          <div className="flex flex-wrap gap-4 text-xs text-slate-600">
            <div className="flex items-center gap-2 bg-[#F6EFE4] px-3.5 py-1.5 rounded-full border border-[#E4DAC8]">
              <TrendingUp className="w-3.5 h-3.5 text-emerald-600" />
              <span className="font-bold text-slate-900">92 Citations</span> across indexed medical journals
            </div>
            <div className="flex items-center gap-2 bg-[#F6EFE4] px-3.5 py-1.5 rounded-full border border-[#E4DAC8]">
              <CheckCircle2 className="w-3.5 h-3.5 text-[#3B33FF]" />
              <span>IRB Ethics Board Approved Protocols</span>
            </div>
          </div>
        </div>

        {/* Clean Warm-Cream Tabbed Document Matrix */}
        <div className="glass-panel rounded-3xl p-6 sm:p-10 border border-[#E4DAC8] matrix-grid relative overflow-hidden bg-[#FEFCF7] shadow-sm">
          {/* Top Tabs Bar */}
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-8 pb-6 border-b border-[#E8DFD1]">
            <div className="inline-flex p-1.5 rounded-full bg-[#F6EFE4] border border-[#E4DAC8]">
              <button
                onClick={() => setActiveTab("papers")}
                className={`flex items-center gap-2 px-4 sm:px-5 py-2 rounded-full text-xs font-bold transition-all duration-300 ${
                  activeTab === "papers"
                    ? "bg-[#FEFCF7] text-[#0A0F24] shadow-sm"
                    : "text-slate-600 hover:text-[#0A0F24]"
                }`}
              >
                <FileText className="w-3.5 h-3.5 text-[#3B33FF]" />
                <span>Published Papers ({PUBLISHED_PAPERS.length})</span>
              </button>

              <button
                onClick={() => setActiveTab("resources")}
                className={`flex items-center gap-2 px-4 sm:px-5 py-2 rounded-full text-xs font-bold transition-all duration-300 ${
                  activeTab === "resources"
                    ? "bg-[#FEFCF7] text-[#0A0F24] shadow-sm"
                    : "text-slate-600 hover:text-[#0A0F24]"
                }`}
              >
                <BookOpen className="w-3.5 h-3.5 text-[#8B3EE1]" />
                <span>Study Resources ({STUDY_RESOURCES.length})</span>
              </button>

              <button
                onClick={() => setActiveTab("teams")}
                className={`flex items-center gap-2 px-4 sm:px-5 py-2 rounded-full text-xs font-bold transition-all duration-300 ${
                  activeTab === "teams"
                    ? "bg-[#FEFCF7] text-[#0A0F24] shadow-sm"
                    : "text-slate-600 hover:text-[#0A0F24]"
                }`}
              >
                <Users className="w-3.5 h-3.5 text-[#E53888]" />
                <span>Research Teams ({RESEARCH_TEAMS.length})</span>
              </button>
            </div>

            {/* Quick Search */}
            <div className="relative">
              <Search className="w-4 h-4 text-slate-400 absolute left-3.5 top-1/2 -translate-y-1/2" />
              <input
                type="text"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                placeholder="Search matrix records..."
                className="pl-9 pr-4 py-2 rounded-full bg-slate-50 border border-slate-200 text-xs text-slate-800 placeholder-slate-400 focus:outline-none focus:border-[#3B33FF] transition-colors w-full sm:w-64"
              />
            </div>
          </div>

          {/* Tab 1: Published Papers Data Table */}
          {activeTab === "papers" && (
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.3 }}
              className="overflow-x-auto"
            >
              <table className="w-full text-left border-collapse">
                <thead>
                  <tr className="border-b border-slate-200 text-[10px] font-black uppercase tracking-wider text-slate-500">
                    <th className="py-3.5 px-4">Publication Title</th>
                    <th className="py-3.5 px-4">Journal & Year</th>
                    <th className="py-3.5 px-4">Category</th>
                    <th className="py-3.5 px-4 text-center">Citations</th>
                    <th className="py-3.5 px-4 text-right">Access</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-slate-100 text-xs text-slate-700">
                  {filteredPapers.map((paper) => (
                    <tr key={paper.id} className="hover:bg-slate-50 transition-colors group">
                      <td className="py-4 px-4 font-semibold text-slate-900 max-w-sm">
                        <div className="group-hover:text-[#3B33FF] transition-colors">{paper.title}</div>
                        <div className="text-[11px] text-slate-500 font-normal mt-0.5">{paper.authors}</div>
                      </td>
                      <td className="py-4 px-4">
                        <span className="font-bold text-slate-800">{paper.journal}</span>
                        <div className="text-[11px] text-slate-500">{paper.year}</div>
                      </td>
                      <td className="py-4 px-4">
                        <span className="px-2.5 py-0.5 rounded-full text-[10px] font-bold bg-slate-100 text-[#8B3EE1] border border-slate-200">
                          {paper.category}
                        </span>
                      </td>
                      <td className="py-4 px-4 text-center font-bold text-slate-900 font-mono">
                        {paper.citations}
                      </td>
                      <td className="py-4 px-4 text-right">
                        <a
                          href={`https://doi.org/${paper.doi}`}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="inline-flex items-center gap-1 min-h-[36px] px-3.5 py-1.5 rounded-full text-[11px] font-bold text-slate-700 bg-slate-100 hover:bg-slate-900 hover:text-white transition-all border border-slate-200"
                        >
                          <span>DOI</span>
                          <ExternalLink className="w-3 h-3" />
                        </a>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </motion.div>
          )}

          {/* Tab 2: Study Resources Data Matrix */}
          {activeTab === "resources" && (
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.3 }}
              className="grid grid-cols-1 md:grid-cols-2 gap-6"
            >
              {STUDY_RESOURCES.map((res) => (
                <div
                  key={res.id}
                  className="p-6 rounded-2xl bg-slate-50 border border-slate-200 hover:border-slate-300 transition-all flex items-start justify-between gap-4 group"
                >
                  <div className="space-y-1.5">
                    <span className="text-[10px] font-black uppercase tracking-wider text-[#F97316]">
                      {res.type}
                    </span>
                    <h4 className="text-base font-bold text-slate-900 group-hover:text-[#3B33FF] transition-colors">
                      {res.title}
                    </h4>
                    <div className="flex flex-wrap gap-3 text-[11px] text-slate-500 pt-1">
                      <span>{res.pages}</span>
                      <span>·</span>
                      <span>{res.format}</span>
                      <span>·</span>
                      <span>{res.downloads}</span>
                    </div>
                  </div>
                  <button
                    onClick={() => alert(`Downloading: ${res.title}`)}
                    className="p-3 rounded-2xl bg-white hover:bg-slate-900 text-slate-700 hover:text-white transition-all shrink-0 border border-slate-200 shadow-xs min-w-[44px] min-h-[44px] flex items-center justify-center"
                    title="Download Resource PDF"
                  >
                    <Download className="w-4 h-4" />
                  </button>
                </div>
              ))}
            </motion.div>
          )}

          {/* Tab 3: Active Research Teams */}
          {activeTab === "teams" && (
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.3 }}
              className="grid grid-cols-1 md:grid-cols-3 gap-6"
            >
              {RESEARCH_TEAMS.map((team) => (
                <div
                  key={team.id}
                  className="p-6 rounded-2xl bg-slate-50 border border-slate-200 hover:border-slate-300 transition-all flex flex-col justify-between group"
                >
                  <div>
                    <div className="flex items-center justify-between mb-3">
                      <span className="text-[10px] font-black uppercase tracking-wider px-2.5 py-0.5 rounded-full bg-emerald-50 text-emerald-700 border border-emerald-200">
                        {team.status}
                      </span>
                      <span className="text-xs text-slate-500">{team.membersCount} Researchers</span>
                    </div>
                    <h4 className="text-base font-bold text-slate-900 group-hover:text-[#3B33FF] transition-colors mb-2">
                      {team.name}
                    </h4>
                    <p className="text-xs text-slate-600 mb-4 leading-relaxed font-normal">
                      {team.focus}
                    </p>
                  </div>

                  <div className="pt-4 border-t border-slate-200 text-xs text-slate-600">
                    <p className="font-semibold text-slate-900">{team.lead}</p>
                    <p className="text-[11px] text-slate-500 mt-0.5">{team.activeProjects}</p>
                  </div>
                </div>
              ))}
            </motion.div>
          )}
        </div>
      </div>
    </section>
  );
};
