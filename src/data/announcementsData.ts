export interface AnnouncementItem {
  id: string;
  category: "Opportunity" | "Announcement" | "Call for members";
  title: string;
  date: string;
  deadline?: string;
  summary: string;
  actionText: string;
  actionHref?: string;
  tagColor: string;
}

export const ANNOUNCEMENTS: AnnouncementItem[] = [
  {
    id: "ann-1",
    category: "Call for members",
    title: "Executive Committee Recruitment · 2026 Academic Season",
    date: "Sep 2026",
    deadline: "Oct 15, 2026",
    summary:
      "Join the scientific, logistics, or communications bureau. Shape national medical congresses and surgical bootcamps.",
    actionText: "Apply Now",
    actionHref: "#recruitment",
    tagColor: "#F97316",
  },
  {
    id: "ann-2",
    category: "Announcement",
    title: "National Clinical Simulation Congress: Early-Bird Registration",
    date: "Sep 2026",
    deadline: "Nov 01, 2026",
    summary:
      "Accredited by faculty surgical chairs. 250 hands-on simulation seats available for suturing, trauma triage, and emergency ultrasound.",
    actionText: "Reserve Seat",
    actionHref: "#events",
    tagColor: "#3B33FF",
  },
  {
    id: "ann-3",
    category: "Opportunity",
    title: "Student Research Fellowship in Molecular Diagnostics",
    date: "Sep 2026",
    deadline: "Oct 30, 2026",
    summary:
      "Funded 6-month clinical epidemiology study on point-of-care viral detection. Direct co-authorship in indexed medical journals.",
    actionText: "View Abstract & Syllabus",
    actionHref: "#academic-hub",
    tagColor: "#8B3EE1",
  },
  {
    id: "ann-4",
    category: "Opportunity",
    title: "Clinical Clerkship OSCE Bootcamp Registration",
    date: "Sep 2026",
    deadline: "Ongoing",
    summary:
      "Small-group 1:4 resident-instructor training for third and fourth-year medical students preparing for hospital rotations.",
    actionText: "Join Bootcamp",
    actionHref: "#workshops",
    tagColor: "#E53888",
  },
];
