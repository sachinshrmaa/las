export type NavigationItem = {
  href: string;
  label: string;
};

export type HeroSlide = {
  eyebrow: string;
  title: string;
  description: string;
  accent: string;
  imageSrc: string;
};

export type Notice = {
  title: string;
  date: string;
  body: string;
  urgent?: boolean;
};

export type CalendarMonth = {
  label: string;
  year: number;
  month: number;
  focus: string;
  events: { day: number; label: string }[];
};

export const navigationItems: NavigationItem[] = [
  { href: "/", label: "Home" },
  { href: "/about", label: "About Us" },
  { href: "/academics", label: "Academics" },
  { href: "/life-at-las", label: "Life at LAS" },
  { href: "/gallery", label: "Gallery" },
  { href: "/admissions", label: "Admissions" },
  { href: "/contact", label: "Contact" },
];

export const heroSlides: HeroSlide[] = [
  {
    eyebrow: "Little Angel Senior Secondary School",
    title: "Where ambition is shaped by care, discipline, and joy.",
    description:
      "A modern campus culture built around academic depth, character, and the confidence to lead with purpose.",
    accent: "Campus life",
    imageSrc: "/hero/campus.jpg",
  },
  {
    eyebrow: "Life at LAS",
    title: "Classrooms that stay lively, focused, and future-ready.",
    description:
      "Smart learning spaces, active faculty mentorship, and a daily rhythm that keeps students curious and engaged.",
    accent: "Classroom experience",
    imageSrc: "/hero/classroom.jpg",
  },
  {
    eyebrow: "Parents and Students",
    title: "A school website built as a clear, useful digital front door.",
    description:
      "Notices, admissions guidance, events, and academic updates are organized for quick access on any device.",
    accent: "Digital hub",
    imageSrc: "/hero/community.jpg",
  },
];

export const quickLinks = [
  {
    href: "/contact",
    title: "Pay Fees",
    description:
      "Reach the accounts desk for online transfer support and payment guidance.",
  },
  {
    href: "/admissions",
    title: "Admissions",
    description:
      "Review eligibility, fee details, and submit an inquiry in one place.",
  },
  {
    href: "/contact",
    title: "Parent Portal",
    description:
      "Get help with parent communication channels and administration contacts.",
  },
];

export const notices: Notice[] = [
  {
    title: "Admissions open for the 2026-27 session",
    date: "15 Mar 2026",
    body: "Inquiry interviews for Primary to Senior Secondary begin next week. Seats are limited in Science and Commerce.",
    urgent: true,
  },
  {
    title: "Annual Day rehearsal schedule released",
    date: "12 Mar 2026",
    body: "Participants can collect their rehearsal timetable from the activity block after lunch.",
  },
  {
    title: "Parent orientation for new entrants",
    date: "10 Mar 2026",
    body: "Orientation and campus walkthrough will be conducted in the multipurpose hall on Saturday at 11 AM.",
  },
];

export const principalMessage = {
  name: "Dr. Meera Joseph",
  role: "Principal",
  snippet:
    "At LAS, we work to create thoughtful learners, respectful citizens, and resilient young adults. Every classroom, club, and competition is designed to make students capable in academics and grounded in values.",
};

export const historyStory = {
  founded:
    "Founded with a commitment to disciplined learning and compassionate mentoring.",
  mission:
    "LAS blends strong academics with co-curricular depth so students graduate ready for board success, civic responsibility, and lifelong growth.",
  vision:
    "To be a school community known for academic excellence, integrity, leadership, and a vibrant daily culture that students are proud to belong to.",
};

export const leadershipProfiles = [
  {
    name: "Mr. Daniel Fernandes",
    title: "Chairman",
    summary:
      "Guides the school with a focus on institution-building, values, and long-term educational quality.",
  },
  {
    name: "Dr. Meera Joseph",
    title: "Principal",
    summary:
      "Leads academics, pastoral care, and faculty development across all levels of schooling.",
  },
  {
    name: "Ms. Radhika Nair",
    title: "Senior Faculty Coordinator",
    summary:
      "Coordinates department planning, board preparation, and mentorship systems for senior students.",
  },
];

export const infrastructureItems = [
  "Physics, Chemistry, Biology, and Computer Labs with guided practical support.",
  "A reading-focused library with reference collections, periodicals, and quiet study corners.",
  "Sports grounds and coaching spaces for athletics, football, cricket, and indoor activities.",
  "Smart classrooms equipped for visual learning, presentations, and blended instruction.",
];

export const curriculumLevels = [
  {
    level: "Primary",
    details:
      "Foundational literacy, numeracy, activity-based learning, and habits that build confidence in the classroom.",
  },
  {
    level: "Middle",
    details:
      "Stronger subject depth, project work, formative assessments, and guided development of communication and teamwork.",
  },
  {
    level: "Secondary",
    details:
      "Board-aligned academic preparation with structured revision, lab practice, and individual performance tracking.",
  },
  {
    level: "Senior Secondary",
    details:
      "Focused pathways in Science, Humanities, and Commerce with counseling support for higher education decisions.",
  },
];

export const pedagogyPoints = [
  "Concept clarity before memorization, supported by regular diagnostic feedback.",
  "Holistic development through assemblies, clubs, sports, and leadership responsibilities.",
  "Technology-enabled teaching that supplements faculty guidance without replacing personal mentoring.",
  "Continuous communication with parents around progress, routines, and intervention where needed.",
];

export const departments = [
  {
    name: "Science",
    details:
      "Board preparation, practical lab work, Olympiad exposure, and STEM mentoring.",
  },
  {
    name: "Humanities",
    details:
      "Critical reading, civic understanding, debate, writing, and social science inquiry.",
  },
  {
    name: "Commerce",
    details:
      "Foundational business studies, accountancy discipline, economics, and career awareness.",
  },
  {
    name: "Co-curricular",
    details:
      "Art, music, drama, service, and club leadership embedded into school life.",
  },
];

export const calendarMonths: CalendarMonth[] = [
  {
    label: "April 2026",
    year: 2026,
    month: 3,
    focus: "Session reopening and orientation",
    events: [
      { day: 6, label: "New session begins" },
      { day: 11, label: "Parent orientation" },
      { day: 24, label: "Club sign-up week" },
    ],
  },
  {
    label: "August 2026",
    year: 2026,
    month: 7,
    focus: "Assessment cycle and house activities",
    events: [
      { day: 8, label: "Unit test window opens" },
      { day: 15, label: "Independence Day programme" },
      { day: 28, label: "Inter-house debate" },
    ],
  },
  {
    label: "December 2026",
    year: 2026,
    month: 11,
    focus: "Celebrations and revision planning",
    events: [
      { day: 5, label: "Annual Day" },
      { day: 14, label: "Pre-board revision starts" },
      { day: 22, label: "Winter break begins" },
    ],
  },
];

export const houseSystem = [
  "Student council leadership teams coordinate assemblies, campaigns, and peer participation.",
  "House-based competitions encourage healthy rivalry, responsibility, and school spirit.",
  "Senior students mentor junior participants during event preparation and community initiatives.",
];

export const clubs = [
  "Drama Society",
  "Robotics Club",
  "Music Ensemble",
  "Eco Club",
  "Debate and Public Speaking",
  "Visual Arts Studio",
];

export const sportsPrograms = [
  {
    name: "Cricket",
    highlight:
      "Structured coaching sessions and inter-school fixtures for developing match readiness.",
  },
  {
    name: "Football",
    highlight:
      "Team drills focused on discipline, stamina, and tactical awareness.",
  },
  {
    name: "Athletics",
    highlight:
      "Track and field coaching designed to improve performance and confidence across age groups.",
  },
];

export const eventHighlights = [
  "Annual Day performances that showcase music, drama, and student achievement.",
  "Sports Meet with house competitions, relays, and award ceremonies.",
  "Inter-school contests that expose students to broader competition and collaboration.",
];

export const galleryFolders = [
  {
    title: "Events",
    description:
      "Annual celebrations, stage performances, academic showcases, and student-led campaigns.",
  },
  {
    title: "Campus",
    description:
      "Learning spaces, activity zones, and the day-to-day environment that defines LAS.",
  },
  {
    title: "Achievement Wall",
    description:
      "Scholastic distinctions, sports success, and recognitions earned across the school year.",
  },
];

export const videoLinks = [
  "Annual Day highlights and performances",
  "Student achievement reels and academic showcases",
  "Campus walkthrough and admissions orientation clips",
];

export const admissionSteps = [
  "Submit an inquiry through the online form or contact the admissions desk.",
  "Receive counseling on class availability, documentation, and interaction schedule.",
  "Attend the student interaction or entrance assessment where applicable.",
  "Complete document verification, fee confirmation, and enrollment formalities.",
];

export const feeStructure = [
  { item: "Registration", value: "One-time at inquiry confirmation" },
  { item: "Admission Fee", value: "Collected on seat confirmation" },
  { item: "Tuition", value: "Payable monthly or term-wise" },
  {
    item: "Transport and Activities",
    value: "Optional and route or programme dependent",
  },
];

export const requiredDocuments = [
  "Birth certificate and previous school records",
  "Transfer certificate where applicable",
  "Passport-size photographs of student and parents",
  "Identity and address proof for parent or guardian",
];

export const contactDetails = {
  address:
    "Little Angel Senior Secondary School campus location to be confirmed by administration.",
  phone: "+91 98765 43210",
  email: "info@littleangelschool.edu",
  hours: "Monday to Saturday, 8:00 AM to 3:30 PM",
  directories: [
    { office: "Accounts", detail: "accounts@littleangelschool.edu | Ext. 103" },
    {
      office: "Administration",
      detail: "admin@littleangelschool.edu | Ext. 101",
    },
    {
      office: "Principal's Office",
      detail: "principal@littleangelschool.edu | Ext. 105",
    },
  ],
};
