"use client";

import React, { useState } from "react";
import { BrandLogo } from "../ui/BrandLogo";
import { CLUB_INFO } from "@/data/clubData";
import {
  Mail,
  Phone,
  MapPin,
  Globe,
  Send,
  CheckCircle2,
  Linkedin,
  Instagram,
  Youtube,
  Twitter,
  ExternalLink,
  Award,
} from "lucide-react";

export const Footer: React.FC = () => {
  const [subscribed, setSubscribed] = useState(false);
  const [email, setEmail] = useState("");

  const handleSubscribe = (e: React.FormEvent) => {
    e.preventDefault();
    if (email) {
      setSubscribed(true);
      setEmail("");
    }
  };

  const navLinks = [
    { label: "About Club", href: "#about" },
    { label: "Scientific Events", href: "#events" },
    { label: "Clinical Workshops", href: "#workshops" },
    { label: "Academic Hub & Research", href: "#academic-hub" },
    { label: "Our Team", href: "#team" },
    { label: "Admissions & Recruitment", href: "#recruitment" },
  ];

  return (
    <footer id="contact" className="bg-slate-50 text-slate-800 pt-20 pb-12 relative overflow-hidden border-t border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-12 pb-16 border-b border-slate-200">
          {/* Brand & Mission Column */}
          <div className="lg:col-span-4 space-y-4">
            <BrandLogo size="lg" inverted={false} />
            <p className="text-xs sm:text-sm text-slate-600 leading-relaxed max-w-sm font-normal">
              Club Médical New Era is an elite medical student organization committed to clinical
              simulation, surgical skills, and high-impact scientific congresses.
            </p>

            {/* Official Domain Pill */}
            <div className="pt-2">
              <a
                href={`https://${CLUB_INFO.officialDomain}`}
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-[#FEFCF7] hover:bg-[#F6EFE4] border border-[#E4DAC8] text-xs font-mono text-[#0A0F24] transition-all shadow-xs"
              >
                <Globe className="w-3.5 h-3.5 text-[#F97316]" />
                <span>{CLUB_INFO.officialDomain}</span>
                <ExternalLink className="w-3 h-3 text-slate-400" />
              </a>
            </div>

            {/* Official Chapter Accreditation */}
            <div className="pt-1 flex items-center gap-2 text-xs text-slate-500">
              <Award className="w-4 h-4 text-[#3B33FF]" />
              <span>Accredited Medical Student Chapter · 2026</span>
            </div>
          </div>

          {/* Quick Navigation Links */}
          <div className="lg:col-span-2 space-y-3">
            <h4 className="text-xs font-black uppercase tracking-widest text-slate-900">
              Navigation
            </h4>
            <ul className="space-y-2.5 text-xs text-slate-600">
              {navLinks.map((link) => (
                <li key={link.label}>
                  <a href={link.href} className="hover:text-[#3B33FF] transition-colors">
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Details */}
          <div className="lg:col-span-3 space-y-3">
            <h4 className="text-xs font-black uppercase tracking-widest text-slate-900">
              Official Headquarters
            </h4>
            <ul className="space-y-3 text-xs text-slate-600">
              <li className="flex items-start gap-2.5">
                <MapPin className="w-4 h-4 text-[#F97316] shrink-0 mt-0.5" />
                <span>{CLUB_INFO.location}</span>
              </li>
              <li className="flex items-center gap-2.5">
                <Mail className="w-4 h-4 text-[#E53888] shrink-0" />
                <a
                  href={`mailto:${CLUB_INFO.contactEmail}`}
                  className="hover:underline text-slate-800"
                >
                  {CLUB_INFO.contactEmail}
                </a>
              </li>
              <li className="flex items-center gap-2.5">
                <Phone className="w-4 h-4 text-[#3B33FF] shrink-0" />
                <span>{CLUB_INFO.phone}</span>
              </li>
            </ul>
          </div>

          {/* Scientific Digest Newsletter */}
          <div className="lg:col-span-3 space-y-3">
            <h4 className="text-xs font-black uppercase tracking-widest text-slate-900">
              Scientific Newsletter
            </h4>
            <p className="text-xs text-slate-600 leading-relaxed font-normal">
              Receive updates on upcoming CME conferences, surgical workshops, and journal club papers.
            </p>

            {subscribed ? (
              <div className="p-3 rounded-xl bg-emerald-50 border border-emerald-200 text-emerald-700 text-xs flex items-center gap-2 shadow-xs">
                <CheckCircle2 className="w-4 h-4 shrink-0" />
                <span>Subscribed to New Era Dispatch!</span>
              </div>
            ) : (
              <form onSubmit={handleSubscribe} className="space-y-2">
                <div className="relative">
                  <input
                    type="email"
                    required
                    placeholder="doctor@medical.edu"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    className="w-full pl-3.5 pr-10 py-2.5 rounded-xl bg-[#FEFCF7] border border-[#E4DAC8] text-xs text-[#0A0F24] placeholder-slate-400 focus:outline-none focus:border-[#3B33FF] transition-colors shadow-xs"
                  />
                  <button
                    type="submit"
                    className="absolute right-1.5 top-1/2 -translate-y-1/2 p-1.5 rounded-lg bg-[#0A0F24] text-white hover:bg-slate-800 transition-all shadow-xs"
                    aria-label="Subscribe"
                  >
                    <Send className="w-3.5 h-3.5" />
                  </button>
                </div>
              </form>
            )}

            {/* Social Channels with warm cream styling */}
            <div className="pt-2 flex items-center gap-3">
              <a
                href="https://linkedin.com"
                target="_blank"
                rel="noreferrer"
                className="w-9 h-9 rounded-full bg-[#FEFCF7] border border-[#E4DAC8] text-slate-700 hover:text-white hover:bg-[#0A0F24] flex items-center justify-center transition-all shadow-xs"
                aria-label="LinkedIn"
              >
                <Linkedin className="w-4 h-4" />
              </a>
              <a
                href="https://instagram.com"
                target="_blank"
                rel="noreferrer"
                className="w-9 h-9 rounded-full bg-[#FEFCF7] border border-[#E4DAC8] text-slate-700 hover:text-white hover:bg-[#0A0F24] flex items-center justify-center transition-all shadow-xs"
                aria-label="Instagram"
              >
                <Instagram className="w-4 h-4" />
              </a>
              <a
                href="https://youtube.com"
                target="_blank"
                rel="noreferrer"
                className="w-9 h-9 rounded-full bg-[#FEFCF7] border border-[#E4DAC8] text-slate-700 hover:text-white hover:bg-[#0A0F24] flex items-center justify-center transition-all shadow-xs"
                aria-label="YouTube"
              >
                <Youtube className="w-4 h-4" />
              </a>
              <a
                href="https://twitter.com"
                target="_blank"
                rel="noreferrer"
                className="w-9 h-9 rounded-full bg-[#FEFCF7] border border-[#E4DAC8] text-slate-700 hover:text-white hover:bg-[#0A0F24] flex items-center justify-center transition-all shadow-xs"
                aria-label="Twitter"
              >
                <Twitter className="w-4 h-4" />
              </a>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-slate-500">
          <p>© {new Date().getFullYear()} Club Médical New Era. All rights reserved.</p>
          <div className="flex items-center gap-6">
            <span>Official Domain: <span className="text-slate-900 font-mono font-bold">{CLUB_INFO.officialDomain}</span></span>
            <a href="#" className="hover:text-slate-900 transition-colors">Privacy Policy</a>
            <a href="#" className="hover:text-slate-900 transition-colors">Constitution & Bylaws</a>
          </div>
        </div>
      </div>
    </footer>
  );
};
