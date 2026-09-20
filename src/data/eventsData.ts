export interface MedicalEvent {
  id: string;
  title: string;
  category: "Medical Day" | "Workshop" | "Conference" | "Simulation";
  date: string;
  time: string;
  location: string;
  attendeesCount: number;
  maxCapacity: number;
  status: "Open" | "Limited Seats" | "Completed" | "Upcoming";
  badgeColor: string;
  summary: string;
  highlights: string[];
  instructorOrSpeaker: string;
  speakerTitle: string;
}

export const EVENTS_DATA: MedicalEvent[] = [
  {
    id: "annual-medical-congress-2026",
    title: "New Era Annual Medical Congress: Frontier in Cardiology",
    category: "Conference",
    date: "Oct 24 - 25, 2026",
    time: "09:00 AM - 05:00 PM",
    location: "Main University Auditorium & Live Stream",
    attendeesCount: 380,
    maxCapacity: 450,
    status: "Open",
    badgeColor: "#3629D2",
    summary:
      "A flagship two-day scientific gathering uniting renowned interventional cardiologists, researchers, and students to explore AI in ECG interpretation and transcatheter interventions.",
    highlights: [
      "Keynote addresses from 6 international cardiology professors",
      "Interactive 3D cardiovascular anatomy sessions",
      "Poster presentations from student medical researchers",
      "Official CME-accredited participation certificates",
    ],
    instructorOrSpeaker: "Prof. Arthur Benali & Team",
    speakerTitle: "Head of Interventional Cardiology, CHU",
  },
  {
    id: "hands-on-suture-mastery",
    title: "Surgical Suturing & Knot Tying Intensive Workshop",
    category: "Workshop",
    date: "Nov 08, 2026",
    time: "02:00 PM - 06:30 PM",
    location: "Surgical Simulation Lab B",
    attendeesCount: 45,
    maxCapacity: 50,
    status: "Limited Seats",
    badgeColor: "#F0516D",
    summary:
      "A high-yield practical bootcamp providing individual surgical pads, micro-instruments, and 1-on-1 mentorship for continuous, mattress, and intradermal suture techniques.",
    highlights: [
      "1:5 instructor-to-student ratio for tactile feedback",
      "Tendon and vascular anastomosis simulation kits",
      "Instrument ergonomics and needle safety guidelines",
      "Take-home clinical suture practice kit",
    ],
    instructorOrSpeaker: "Dr. Lina Khelifi",
    speakerTitle: "Plastic & Reconstructive Surgery Resident",
  },
  {
    id: "national-medical-day-oncology",
    title: "Medical Day: Advances in Precision Immunotherapy",
    category: "Medical Day",
    date: "Dec 05, 2026",
    time: "10:00 AM - 04:30 PM",
    location: "Faculty Amphitheater 3",
    attendeesCount: 220,
    maxCapacity: 250,
    status: "Upcoming",
    badgeColor: "#C0278A",
    summary:
      "Dedicated full-day immersion analyzing next-generation CAR-T therapies, checkpoint inhibitors, and ethical clinical dilemmas in oncological therapeutics.",
    highlights: [
      "Multi-disciplinary tumor board case simulations",
      "Breakout roundtable debates on novel oncology protocols",
      "Student abstract competition with publication awards",
      "Networking brunch with oncology fellows",
    ],
    instructorOrSpeaker: "Dr. Selim Rahal",
    speakerTitle: "Senior Oncologist & Clinical Trial Lead",
  },
  {
    id: "emergency-triage-sim-day",
    title: "Emergency Room Simulation: Trauma & Code Blue Drills",
    category: "Simulation",
    date: "Dec 18, 2026",
    time: "01:30 PM - 07:00 PM",
    location: "Center for Advanced Medical Simulation",
    attendeesCount: 60,
    maxCapacity: 60,
    status: "Limited Seats",
    badgeColor: "#F26C4F",
    summary:
      "High-fidelity simulation day where student teams manage simulated acute polytrauma cases, cardiac arrest scenarios, and airway crises under high pressure.",
    highlights: [
      "High-fidelity smart mannequins with synchronized vitals",
      "Direct video debriefing with emergency medicine attending",
      "Crew Resource Management (CRM) leadership training",
      "Ultrasound-guided vascular access station",
    ],
    instructorOrSpeaker: "Dr. Mehdi Zerrouki",
    speakerTitle: "Emergency Medicine Specialist",
  },
  {
    id: "ecg-interpretation-masterclass",
    title: "Advanced 12-Lead ECG Analysis & Arrhythmia Clinic",
    category: "Workshop",
    date: "Jan 12, 2027",
    time: "03:00 PM - 07:00 PM",
    location: "Clinical Skills Hall 1",
    attendeesCount: 95,
    maxCapacity: 120,
    status: "Upcoming",
    badgeColor: "#F8AF41",
    summary:
      "A step-by-step diagnostic journey decoding complex tachyarrhythmias, ischemic patterns, bundle branch blocks, and subtle electrolyte disturbances.",
    highlights: [
      "100+ real clinical ECG trace breakdowns",
      "Interactive digital polling and diagnostic contests",
      "Pocket reference cards for emergency shifts",
      "Special focus on STEMI mimics and benign variants",
    ],
    instructorOrSpeaker: "Dr. Yasmine Haddad",
    speakerTitle: "Cardiology Fellow & Electro-physiologist",
  },
  {
    id: "neuroscience-symposium-2027",
    title: "Neuroscience Frontiers: Brain-Machine Interfaces & Stroke Care",
    category: "Conference",
    date: "Feb 06, 2027",
    time: "09:30 AM - 05:00 PM",
    location: "Grand Conference Hall",
    attendeesCount: 190,
    maxCapacity: 300,
    status: "Upcoming",
    badgeColor: "#3629D2",
    summary:
      "An interdisciplinary symposium bridging clinical neurology, neurosurgery, and neural engineering, with hands-on neuro-radiology review sessions.",
    highlights: [
      "Stroke thrombolysis decision-making protocols",
      "Live 3D brain tractography visualization",
      "Ethics of neural implants in motor rehabilitation",
      "Panel discussion with neurosurgery department heads",
    ],
    instructorOrSpeaker: "Prof. Karim Mansouri",
    speakerTitle: "Professor of Clinical Neurology",
  },
];
