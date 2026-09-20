export interface StatItem {
  id: string;
  value: string;
  number: number;
  suffix: string;
  label: string;
  description: string;
}

export interface ClubPillar {
  id: string;
  title: string;
  description: string;
  iconName: string;
  color: string;
}

export interface RecruitmentStep {
  step: number;
  title: string;
  duration: string;
  description: string;
  details: string[];
}

export const CLUB_INFO = {
  name: "Club Médical New Era",
  shortName: "NEW ERA CLUB",
  tagline: "Advancing Medical Student Excellence & Scientific Innovation",
  officialDomain: "new-era-club.com",
  contactEmail: "contact@new-era-club.com",
  recruitmentEmail: "join@new-era-club.com",
  phone: "+213 555 123 456",
  location: "Faculty of Medicine, Academic Hospital Campus",
  description:
    "Club Médical New Era is an elite, dynamic medical student organization dedicated to elevating academic standards, fostering clinical acumen, organizing premier scientific conferences, and leading clinical simulation workshops.",
};

export const SITE_STATS: StatItem[] = [
  {
    id: "members",
    value: "500+",
    number: 500,
    suffix: "+",
    label: "Active Medical Members",
    description: "Ambitious medical students and interns across all clinical years.",
  },
  {
    id: "events",
    value: "45+",
    number: 45,
    suffix: "+",
    label: "Scientific Events & Days",
    description: "National medical congresses, clinical simulation days, and skill bootcamps.",
  },
  {
    id: "research",
    value: "18+",
    number: 18,
    suffix: "+",
    label: "Research Projects",
    description: "Peer-reviewed scientific abstracts, journals, and clinical surveys.",
  },
  {
    id: "success",
    value: "98%",
    number: 98,
    suffix: "%",
    label: "Mentorship Success Rate",
    description: "Graduates matched into top specialty residencies and hospital rotations.",
  },
];

export const CLUB_PILLARS: ClubPillar[] = [
  {
    id: "scientific-rigor",
    title: "Scientific Rigor",
    description: "Championing evidence-based clinical medicine, biomedical research, and peer-reviewed scientific publishing.",
    iconName: "Microscope",
    color: "#3629D2",
  },
  {
    id: "clinical-skills",
    title: "Clinical Simulation",
    description: "Hands-on mastery in basic surgical suturing, emergency triage, ultrasound protocols, and ECG reading.",
    iconName: "Stethoscope",
    color: "#C0278A",
  },
  {
    id: "academic-conferences",
    title: "Medical Congresses",
    description: "Convening world-renowned physicians, surgeons, and academic professors for keynote medical symposiums.",
    iconName: "GraduationCap",
    color: "#F26C4F",
  },
  {
    id: "peer-mentorship",
    title: "Elite Mentorship",
    description: "Direct guidance from resident doctors and senior mentors to prepare every student for medical residency.",
    iconName: "Users",
    color: "#F8AF41",
  },
];

export const RECRUITMENT_STEPS: RecruitmentStep[] = [
  {
    step: 1,
    title: "Online Application",
    duration: "Step 01",
    description: "Submit your student credentials, area of medical interest, and statement of purpose.",
    details: [
      "Choose your preferred committee (Scientific, Events, Media, Logistics)",
      "Share your passion for medicine and academic leadership",
      "Attach CV or past extracurricular highlights",
    ],
  },
  {
    step: 2,
    title: "Portfolio & Academic Review",
    duration: "Step 02",
    description: "Our board evaluates your commitment, academic dedication, and organizational enthusiasm.",
    details: [
      "Holistic assessment by the Executive Bureau",
      "Review of technical or interpersonal skills",
      "Email notification for shortlisted applicants",
    ],
  },
  {
    step: 3,
    title: "The New Era Interview",
    duration: "Step 03",
    description: "An engaging 20-minute conversation with committee heads to assess culture fit and creativity.",
    details: [
      "Dynamic case-study scenario or teamwork challenge",
      "Discussion of your vision for the medical student community",
      "Constructive feedback from senior residents",
    ],
  },
  {
    step: 4,
    title: "Induction & Onboarding",
    duration: "Step 04",
    description: "Receive your official New Era Club badge, access to resources, and launch into active committees.",
    details: [
      "Exclusive welcome package & club merchandise",
      "Access to internal scientific research database",
      "Immediate assignment to upcoming medical conferences",
    ],
  },
];

export const COMMITTEES = [
  {
    name: "Scientific & Research Committee",
    description: "Leads clinical journal clubs, research papers, and academic conference curricula.",
  },
  {
    name: "Events & Medical Days Committee",
    description: "Coordinates large-scale congress logistics, hospital visits, and clinical simulation rooms.",
  },
  {
    name: "Media, Brand & Visual Arts",
    description: "Produces high-end medical design, 3D anatomical animations, video recaps, and web content.",
  },
  {
    name: "External Relations & Sponsorship",
    description: "Builds partnerships with pharmaceutical sponsors, medical faculties, and medical societies.",
  },
];
