"use client";

import React, { useState } from "react";
import { Navbar } from "@/components/ui/Navbar";
import { HeroSection } from "@/components/sections/HeroSection";
import { AboutSection } from "@/components/sections/AboutSection";
import { EventsSection } from "@/components/sections/EventsSection";
import { WorkshopsSection } from "@/components/sections/WorkshopsSection";
import { AnnouncementsSection } from "@/components/sections/AnnouncementsSection";
import { ResearchSection } from "@/components/sections/ResearchSection";
import { TeamSection } from "@/components/sections/TeamSection";
import { RecruitmentSection } from "@/components/sections/RecruitmentSection";
import { Footer } from "@/components/sections/Footer";
import { BackgroundOrbs } from "@/components/3d/BackgroundOrbs";
import { ApplyModal } from "@/components/ui/ApplyModal";
import { Preloader } from "@/components/ui/Preloader";
import { CustomCursor } from "@/components/ui/CustomCursor";
import { SmoothScroll } from "@/components/providers/SmoothScroll";

export default function Home() {
  const [isApplyModalOpen, setIsApplyModalOpen] = useState(false);
  const [isLoadingComplete, setIsLoadingComplete] = useState(false);

  return (
    <SmoothScroll>
      {/* Custom Soft Spring Interactive Cursor */}
      <CustomCursor />

      {/* Luxury Loading Screen with Branded loading.gif & Real-Time 3D Sync Progress */}
      <Preloader onComplete={() => setIsLoadingComplete(true)} />

      <main className="relative min-h-screen bg-gradient-to-b from-[#FAF6EE] via-[#F6EFE4] to-[#F0E8DB] text-[#0A0F24] selection:bg-[#E53888] selection:text-white">
        {/* Pristine Light-Mode Soft Ambient Glows & Subtle Dust */}
        <BackgroundOrbs />

        {/* Light-Mode Glassmorphism Navigation Header */}
        <Navbar onOpenApply={() => setIsApplyModalOpen(true)} />

        {/* Hero Section: Matte-Clay 3D Composition (Shield, Pill Cascade, Instruments Cluster, DNA Helix) */}
        <HeroSection onOpenApply={() => setIsApplyModalOpen(true)} />

        {/* About & Academic Leadership Divisions (Simulations, Congresses, Mentorship, Research) */}
        <AboutSection />

        {/* Upcoming & Future Events: Bento-grid & Live Congress Countdown Clock */}
        <EventsSection />

        {/* Medical Training Workshops: Hands-on Surgical Bootcamps & Triage Drills */}
        <WorkshopsSection />

        {/* Announcements & Opportunities Feed */}
        <AnnouncementsSection />

        {/* Academic Hub & Research: Tabbed Document Matrix */}
        <ResearchSection />

        {/* Our Team: Circular Avatars & Direct Professional Profiles */}
        <TeamSection />

        {/* Recruitment & Admissions Roadmap */}
        <RecruitmentSection onOpenApply={() => setIsApplyModalOpen(true)} />

        {/* Footer: Headquarters, Domain new-era-club.com, Chapter Accreditation */}
        <Footer />

        {/* Global Application Modal with Bottom-Sheet Navigation */}
        <ApplyModal
          isOpen={isApplyModalOpen}
          onClose={() => setIsApplyModalOpen(false)}
        />
      </main>
    </SmoothScroll>
  );
}
