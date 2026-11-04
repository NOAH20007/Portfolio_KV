import profileImg from "../assets/profile.jpg";

export const profileData = {
  name: "Khorn Vuthy",
  role: "Software Engineering Student & Junior Developer",
  shortRole: "Software Engineering Student",
  statusText: "Open to Internships & Junior Roles in Phnom Penh",
  university: "BELTEI International University",
  universityShort: "BELTEI Int'l University",
  currentYear: "Year 2, Semester 2",
  location: "Toul Kork, Phnom Penh",
  fullAddress: "St 262, Toul Kork, Phnom Penh",
  fullAddressCopy: "St 262, Toul Kork, Phnom Penh, Cambodia",
  phone: "087 299 112",
  phoneClean: "087299112",
  telegram: "086 552 824",
  telegramClean: "086552824",
  telegramUrl: "https://t.me/vuthy_1689",
  githubUrl: "https://github.com/NOAH20007",
  linkedinUrl:
    "https://www.linkedin.com/in/khorn-vuthy-b76869442?utm_source=share_via&utm_content=profile&utm_medium=member_ios",
  facebookUrl: "https://www.facebook.com/share/19wG3LjWvQ/?mibextid=wwXIfr",
  youtubeUrl: "https://www.youtube.com/@NOAHDigitalTech",
  tiktokUrl: "https://www.tiktok.com/@noah.digitaltech?_r=1&_t=ZS-9B5x6EKiVtJ",
  email: "Khornvuthy20007@gmail.com",

  avatarSrc: profileImg,
  quickSkillTags: [
    "Front-End Development",
    "Basic Back-End",
    "AI Tools",
    "IT Support",
    "Content Creation",
  ],
};

export const navLinks = [
  { id: "home", label: "Home", mobileLabel: "Home" },
  { id: "about", label: "About", mobileLabel: "About Me" },
  { id: "skills", label: "Skills", mobileLabel: "Skills" },
  { id: "projects", label: "Experience", mobileLabel: "Experience & Projects" },
  { id: "education", label: "Education", mobileLabel: "Education" },
  { id: "contact", label: "Contact", mobileLabel: "Contact" },
];

export const aboutHighlights = [
  {
    title: "Web & Software",
    description:
      "Front-end interfaces, basic back-end logic, and clean code structure.",
    icon: "fa-solid fa-laptop-code",
    iconBgClass: "bg-brand-500/10 text-brand-600 dark:text-brand-400",
  },
  {
    title: "AI & IT Support",
    description:
      "Using AI tools effectively and fixing everyday computer or software issues.",
    icon: "fa-solid fa-microchip",
    iconBgClass: "bg-indigo-500/10 text-indigo-600 dark:text-indigo-400",
  },
  {
    title: "Team Player",
    description:
      "Friendly communicator with hands-on university team project and training experience.",
    icon: "fa-solid fa-people-group",
    iconBgClass: "bg-emerald-500/10 text-emerald-600 dark:text-emerald-400",
  },
];

export const skillsData = [
  {
    title: "Front-End Development",
    badge: "Core Skill",
    description:
      "Building clean, mobile-friendly web pages and user interfaces using HTML, CSS, JS and modern styling tools.",
    level: 25,
    icon: "fa-solid fa-display",
    iconBoxClass: "bg-brand-500/10 text-brand-600 dark:text-brand-400",
    badgeClass:
      "bg-brand-50 dark:bg-brand-950 text-brand-600 dark:text-brand-400",
    percentTextClass: "text-brand-600 dark:text-brand-400",
    barColorClass: "bg-brand-600",
  },
  {
    title: "Basic Back-End Development",
    badge: "Growing Skill",
    description:
      "Understanding basic server-side coding, how data is stored, and how the front-end connects to the back-end.",
    level: 25,
    icon: "fa-solid fa-server",
    iconBoxClass: "bg-indigo-500/10 text-indigo-600 dark:text-indigo-400",
    badgeClass:
      "bg-indigo-50 dark:bg-indigo-950 text-indigo-600 dark:text-indigo-400",
    percentTextClass: "text-indigo-600 dark:text-indigo-400",
    barColorClass: "bg-indigo-500",
  },
  {
    title: "Software Development",
    badge: "Core Skill",
    description:
      "Writing clear code, learning programming logic, finding and fixing bugs, and working on small software projects.",
    level: 25,
    icon: "fa-solid fa-code-branch",
    iconBoxClass: "bg-sky-500/10 text-sky-600 dark:text-sky-400",
    badgeClass: "bg-sky-50 dark:bg-sky-950 text-sky-600 dark:text-sky-400",
    percentTextClass: "text-sky-600 dark:text-sky-400",
    barColorClass: "bg-sky-500",
  },
  {
    title: "AI (Artificial Intelligence)",
    badge: "Modern Tech",
    description:
      "Using modern AI tools to help write and check code, research solutions faster, and improve daily productivity.",
    level: 25,
    icon: "fa-solid fa-wand-magic-sparkles",
    iconBoxClass: "bg-purple-500/10 text-purple-600 dark:text-purple-400",
    badgeClass:
      "bg-purple-50 dark:bg-purple-950 text-purple-600 dark:text-purple-400",
    percentTextClass: "text-purple-600 dark:text-purple-400",
    barColorClass: "bg-purple-500",
  },
  {
    title: "IT Support",
    badge: "Practical",
    description:
      "Setting up software, troubleshooting computer problems, and helping people use technology smoothly.",
    level: 25,
    icon: "fa-solid fa-screwdriver-wrench",
    iconBoxClass: "bg-emerald-500/10 text-emerald-600 dark:text-emerald-400",
    badgeClass:
      "bg-emerald-50 dark:bg-emerald-950 text-emerald-600 dark:text-emerald-400",
    percentTextClass: "text-emerald-600 dark:text-emerald-400",
    barColorClass: "bg-emerald-500",
  },
  {
    title: "Marketing & Content Creation",
    badge: "Creative",
    description:
      "Creating videos and online posts, understanding social media audiences, and sharing ideas clearly.",
    level: 25,
    icon: "fa-solid fa-bullhorn",
    iconBoxClass: "bg-amber-500/10 text-amber-600 dark:text-amber-400",
    badgeClass:
      "bg-amber-50 dark:bg-amber-950 text-amber-600 dark:text-amber-400",
    percentTextClass: "text-amber-600 dark:text-amber-400",
    barColorClass: "bg-amber-500",
  },
];

export const projectsData = [
  {
    category: "University Project",
    organization: "BELTEI International University",
    title: "University Team Project",
    description:
      "Built a small project with my university classmates, working together to design and code the application from start to finish.",
    bullets: [
      "Shared coding tasks and helped classmates solve technical issues.",
      "Practiced building both the front-end layout and basic logic.",
    ],
    tags: ["Teamwork", "Front-End", "Basic Back-End"],
    badgeClass: "bg-brand-500/10 text-brand-600 dark:text-brand-400",
    checkColorClass: "text-brand-500",
  },
  {
    category: "Practical Training",
    organization: "Company Environment",
    title: "Practical Technology Training",
    description:
      "Completed hands-on training on company technology and learned how real-world technical workflows operate.",
    bullets: [
      "Trained directly on the tools and systems used by the company.",
      "Learned how teams organize tasks and support users in a workplace.",
    ],
    tags: ["Company Tech", "IT Support", "Real Workflows"],
    badgeClass: "bg-emerald-500/10 text-emerald-600 dark:text-emerald-400",
    checkColorClass: "text-emerald-500",
  },
  {
    category: "Academic Practice",
    organization: "Software Engineering",
    title: "University Coursework & Labs",
    description:
      "Gained practical coding and problem-solving experience from school and university subjects.",
    bullets: [
      "Completed coding exercises, class assignments, and lab work.",
      "Built a strong foundation in software engineering concepts.",
    ],
    tags: ["Coding Practice", "Problem Solving"],
    badgeClass: "bg-indigo-500/10 text-indigo-600 dark:text-indigo-400",
    checkColorClass: "text-indigo-500",
  },
  {
    category: "Digital Media",
    organization: "Personal Experience",
    title: "Content Creator",
    description:
      "Created digital content and learned how to reach and engage audiences on social media platforms.",
    bullets: [
      "Planned, recorded, and edited engaging online content.",
      "Learned basic digital marketing and online communication skills.",
    ],
    tags: ["Content Creation", "Basic Marketing"],
    badgeClass: "bg-amber-500/10 text-amber-600 dark:text-amber-400",
    checkColorClass: "text-amber-500",
  },
];

export const educationData = [
  {
    period: "2025 - Present",
    status: "Current ( Year 2, Semester 2 )",
    degree: "Bachelor of Science in Software Engineering",
    institution: "BELTEI International University • Phnom Penh",
    description:
      "Studying software engineering fundamentals, front-end and basic back-end web development, problem-solving, and computer systems.",
    isCurrent: true,
  },
  {
    period: "2022 - 2025",
    status: "Graduated",
    degree: "High School",
    institution: "Upper Secondary Education",
    description: "Completed high school studies and passed the national exam.",
    isCurrent: false,
  },
  {
    period: "2019 - 2022",
    status: "Completed",
    degree: "Secondary School",
    institution: "Lower Secondary Education",
    description: "Completed general secondary school education.",
    isCurrent: false,
  },
];

export const cvData = {
  summary:
    "Dedicated Software Engineering undergraduate at BELTEI International University with a strong foundation in core software concepts, front-end development, IT support, and emerging AI technologies. Passionate about applying academic training and practical technology skills to real-world development environments while continuously learning and expanding technical proficiencies.",
  education: [
    {
      institution: "BELTEI International University",
      period: "2025 – Present",
      degree:
        "Bachelor of Science in Software Engineering (Year 2, Semester 2)",
      bullets: [
        "Core curriculum focused on algorithms, software design fundamentals, and computer systems.",
      ],
    },
    {
      institution: "High School & Secondary Education",
      period: "2019 – 2025",
      degree: "High School Diploma (2022–2025) • Secondary School (2019–2022)",
      bullets: [
        "Completed general science and mathematics curriculum leading to national graduation certification.",
      ],
    },
  ],
  skills: [
    {
      category: "Software Development:",
      items:
        "Front-End Development, Software Engineering Fundamentals, Web Structure",
    },
    {
      category: "Emerging Tech & IT:",
      items:
        "Artificial Intelligence (AI Tools & Concepts), IT Support & Hardware Troubleshooting",
    },
    {
      category: "Digital Media & Other:",
      items:
        "Content Creation, Digital Marketing Concepts, Technical Communication",
    },
  ],
  experience: [
    {
      title: "Academic Software Development Project",
      organization: "BELTEI International University",
      role: "Student Collaborator / Developer",
      bullets: [
        "Collaborated in a team of university peers to design, build, and deploy an academic software project.",
        "Participated in coding, interface organization, and troubleshooting to meet project specifications.",
      ],
    },
    {
      title: "Practical Technology Training",
      organization: "Hands-On Technical Program",
      role: "Trainee",
      bullets: [
        "Underwent practical corporate technology training focused on standard technological workflows and tools.",
        "Gained direct exposure to practical technical setups, system maintenance, and enterprise tools.",
      ],
    },
    {
      title: "Digital Media & Content Production",
      organization: "Independent",
      role: "Content Creator",
      bullets: [
        "Created and published digital multimedia content, applying creative storytelling and audience engagement strategies.",
        "Applied marketing techniques and communication skills to manage content delivery and engagement.",
      ],
    },
  ],
};
