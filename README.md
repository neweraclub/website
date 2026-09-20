# Club Médical New Era (NE Club) — Official Platform

An award-level, high-end 3D biotechnology-academic website for **Club Médical New Era** built with Next.js (App Router, TypeScript), Tailwind CSS, Framer Motion, React Three Fiber, and Lenis Smooth Scroll.

---

## 🚀 Quick Start

### 1. Installation
```bash
npm install
```

### 2. Local Development Server
```bash
npm run dev
```
Open [http://localhost:3000](http://localhost:3000) with your browser.

### 3. Production Build & Verification
```bash
npx tsc --noEmit
npm run build
```

---

## 🎨 3D Model Optimization Pipeline (Draco Compression)

All clinical 3D assets in `public/models/*.glb` have been optimized and compressed using `@gltf-transform/cli` with Google Draco mesh compression. The asset weight was reduced from over 50+ MB to **under 6.5 MB total**, loading within milliseconds.

To re-compress or optimize new `.glb` models, run:

```bash
# Install gltf-transform CLI globally or via npx
npx @gltf-transform/cli draco public/models/raw_model.glb public/models/optimized_model.glb
```

### Exact Draco compression commands used for each asset:

```bash
# 1. Checklist (Reduced from 5.44 MB -> 0.67 MB)
npx @gltf-transform/cli draco public/models/checklist.glb public/models/checklist.glb

# 2. ECG / Stethoscope (Reduced from 6.96 MB -> 0.72 MB)
npx @gltf-transform/cli draco public/models/ecg.glb public/models/ecg.glb

# 3. Pill / Capsule (Reduced from 12.31 MB -> 1.18 MB)
npx @gltf-transform/cli draco public/models/pill.glb public/models/pill.glb

# 4. Medical Shield (Reduced from 9.23 MB -> 0.93 MB)
npx @gltf-transform/cli draco public/models/shield.glb public/models/shield.glb

# 5. Syringe (Reduced from 6.48 MB -> 0.70 MB)
npx @gltf-transform/cli draco public/models/syringe.glb public/models/syringe.glb

# 6. Digital Thermometer (Reduced from 3.39 MB -> 0.42 MB)
npx @gltf-transform/cli draco public/models/thermometer.glb public/models/thermometer.glb

# 7. Virus / Biomedical Helix (Reduced from 17.44 MB -> 1.79 MB)
npx @gltf-transform/cli draco public/models/virus.glb public/models/virus.glb
```

---

## 🔄 What to Swap (Customization & Real Content)

All content is cleanly separated into typed data files in `src/data/` for easy editing:

### 1. Team Photos & Member Profiles
- **File**: [`src/data/teamData.ts`](src/data/teamData.ts)
- **Images**: Place actual high-resolution team headshots in `public/team/` and update `image: "/team/your-photo.jpg"`.
- **Social Links**: Update `linkedin`, `researchgate`, `github`, and `portfolio` URLs. Cards automatically hide icons that are not provided.

### 2. Real Events & Congresses
- **File**: [`src/data/eventsData.ts`](src/data/eventsData.ts)
- **What to edit**:
  - `FEATURED_EVENT`: Hero countdown target date, registration links, seat capacity, keynote speakers.
  - `FUTURE_EVENTS`: Upcoming symposiums, dates, and locations.
  - `EVENT_PORTFOLIO`: Past congress milestone microsites, archive links, and metrics.

### 3. Medical Training Workshops
- **File**: [`src/data/workshopsData.ts`](src/data/workshopsData.ts)
- **What to edit**: Surgical bootcamps, emergency triage drills, ECG interpretation workshops, available seats, and registration modal status.

### 4. Announcements & Opportunities
- **File**: [`src/data/announcementsData.ts`](src/data/announcementsData.ts)
- **What to edit**: Clinical clerkship openings, student research grants, call for executive board members.

### 5. Academic Hub & Research Papers
- **File**: [`src/components/sections/ResearchSection.tsx`](src/components/sections/ResearchSection.tsx)
- **What to edit**:
  - `PUBLISHED_PAPERS`: Real DOIs, journal names, citation counts, and PubMed links.
  - `RESOURCES`: Downloadable clinical clerkship guides, OSCE rubrics, and PDFs in `public/resources/`.
  - `RESEARCH_TEAMS`: Active laboratory groups and student leads.

### 6. Organization Details & Socials
- **File**: [`src/data/clubData.ts`](src/data/clubData.ts)
- **What to edit**: Headquarters address, phone, contact email (`contact@new-era-club.com`), and official social media handles (LinkedIn, Instagram, YouTube, Twitter).

---

## 🌐 Tech Stack & Architectural Highlights

- **Framework**: Next.js 14 App Router (`src/app/`)
- **3D Engine**: React Three Fiber (`@react-three/fiber`), Drei (`@react-three/drei`), Three.js
- **Aesthetic**: Warm organic cream/eggshell light mode (`#FAF6EE` fading into `#F0E8DB`), unglazed matte-clay 3D materials (zero gloss, zero gold, native colors preserved).
- **Preloader**: Full-screen overlay (`z-[99999]`) showing `public/loading.gif` with real-time `useProgress()` asset tracking.
- **Smooth Scroll**: Lenis (`lenis`) with automatic `prefers-reduced-motion` detection.
- **Custom Cursor**: Spring-physics pointer with reactive hover states for links and buttons.
- **Deployment**: Configured for Vercel via [`vercel.json`](vercel.json).
