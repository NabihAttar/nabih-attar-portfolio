export const personalInfo = {
  name: "Nabih Al Attar",
  initials: "NA",
  location: "Beirut, Lebanon",
  phone: "+961 71 20 10 21",
  phoneHref: "tel:+96171201021",
  email: "nabihattarr@gmail.com",
  emailHref: "mailto:nabihattarr@gmail.com",
  linkedin: "https://linkedin.com/in/nabih-attar-99a63b2b4",
  github: "https://github.com/NabihAttar",
  title: "Frontend Developer | React.js & Next.js Developer",
  intro:
    "I am a Frontend Developer based in Beirut, Lebanon, specializing in React.js, Next.js, JavaScript, Tailwind CSS, and responsive web development. I build modern websites, e-commerce platforms, multilingual web applications, API-integrated systems, and desktop applications using Electron.js.",
  cvPath: "/cv/Nabih_Al_Attar_ATS_CV_with_Portfolio.docx",
};

export const navItems = [
  { label: "Home", href: "#home" },
  { label: "About", href: "#about" },
  { label: "Experience", href: "#experience" },
  { label: "Projects", href: "#projects" },
  { label: "Entrepreneurial", href: "#entrepreneurial-work" },
  { label: "Skills", href: "#skills" },
  { label: "Contact", href: "#contact" },
];

export const aboutHighlights = [
  "BS in Computer Science from Lebanese International University.",
  "Focused on frontend development with React.js, Next.js, TypeScript, and responsive UI systems.",
  "Hands-on experience with API integration, CMS APIs, Odoo API, e-commerce platforms, and multilingual websites.",
  "Built desktop ERP solutions with Electron.js and contributed to scalable, recruiter-friendly web experiences.",
];

export const experiences = [
  {
    role: "Frontend Developer Intern",
    company: "Novalyft",
    period: "July 2025 - Present",
    points: [
      "Developing responsive web applications using React.js and Next.js.",
      "Building reusable UI components for scalable frontend systems.",
      "Working on company websites, e-commerce websites, multilingual websites, and client projects.",
      "Integrating frontend applications with APIs, CMS APIs, and Odoo API.",
      "Collaborating with Git and GitHub in day-to-day development workflows.",
    ],
  },
  {
    role: "IT Trainer & IT Support Assistant",
    company: "LOST Association",
    period: "April 2025 - June 2025",
    points: [
      "Delivered IT training sessions for youth.",
      "Supported administrative teams with IT tasks, troubleshooting, and data entry.",
      "Conducted additional IT training workshops under the Plan International Project.",
    ],
  },
  {
    role: "Accela Software Programming and Configuration Trainee",
    company: "White Ink Technology",
    period: "June 2024 - September 2024",
    points: [
      "Completed training in Accela Software programming and configuration.",
      "Learned enterprise workflow configuration and public sector software systems.",
    ],
  },
  {
    role: "Front-end Developer",
    company: "Anhar Pro",
    period: "January 2024 - May 2024",
    points: [
      "Designed frontend interfaces for public sector websites.",
      "Used Angular CLI to develop and maintain frontend components.",
      "Improved responsive layouts and page structure.",
    ],
  },
];

export const projectFilters = [
  "All",
  "Next.js",
  "React.js",
  "E-commerce",
  "Desktop App",
  "Freelance",
];

export const projects = [
  {
    title: "Novalyft Solutions Website",
    description:
      "Official company website for Novalyft Solutions with responsive pages and a polished modern UI.",
    technologies: ["Next.js", "React.js", "Bootstrap", "CSS", "SCSS", "JavaScript"],
    category: "Company Website",
    liveDemo: "https://www.novalyftsolutions.com",
    featuredFilter: ["All", "Next.js", "React.js"],
    responsive: true,
  },
  {
    title: "Elite Movers Website",
    description:
      "Responsive website for a moving services company focused on clarity, trust, and lead generation.",
    technologies: ["Next.js", "React.js", "CSS", "JavaScript", "SCSS"],
    category: "Business Website",
    liveDemo: "https://elite-movers-website.vercel.app",
    featuredFilter: ["All", "Next.js", "React.js"],
    responsive: true,
  },
  {
    title: "Kidz Holding Website",
    description:
      "Responsive company website with clean layouts and reusable frontend components.",
    technologies: ["Next.js", "React.js", "TypeScript", "SCSS", "HTML", "CSS", "JavaScript"],
    category: "Company Website",
    liveDemo: "https://kidz-holding-website.vercel.app",
    featuredFilter: ["All", "Next.js", "React.js"],
    responsive: true,
  },
  {
    title: "Euro Tech Website",
    description:
      "Car products website supporting English and French, integrated with Odoo API.",
    technologies: ["Next.js", "React.js", "Odoo API", "SCSS", "JavaScript"],
    category: "Multilingual E-commerce Website",
    liveDemo: "https://euro-tech-two.vercel.app/fr",
    featuredFilter: ["All", "Next.js", "React.js", "API Integration", "E-commerce"],
    responsive: true,
  },
  {
    title: "Blynn E-commerce Website",
    description:
      "Cosmetics e-commerce website integrated with CMS APIs and built for a smooth shopping experience.",
    technologies: ["Next.js", "React.js", "TypeScript", "Tailwind CSS", "CMS APIs"],
    category: "E-commerce Website",
    liveDemo: "https://blynn-website.vercel.app",
    featuredFilter: ["All", "Next.js", "React.js", "API Integration", "E-commerce"],
    responsive: true,
  },
  {
    title: "Khandak News Website",
    description:
      "Responsive news website with categories, article pages, and modern UI components.",
    technologies: ["React.js", "Next.js", "Tailwind CSS"],
    category: "News Website",
    featuredFilter: ["All", "Next.js", "React.js"],
    responsive: true,
  },
  {
    title: "Al Wafa Export Group Website",
    description:
      "Informative website for an export company built as a freelance project.",
    technologies: ["Next.js", "React.js"],
    category: "Freelance Website",
    liveDemo: "https://alwafa-export-group-website.vercel.app",
    github: "https://github.com/NabihAttar/ALWAFA-Website",
    featuredFilter: ["All", "Next.js", "React.js", "Freelance"],
    responsive: true,
  },
  {
    title: "My Spot Caffe Website",
    description:
      "Coffee shop website with informative pages, menu section, and QR code menu access.",
    technologies: ["Next.js", "React.js"],
    category: "Freelance Coffee Shop Website",
    liveDemo: "https://my-spot-caffe-kappa.vercel.app/about-us",
    github: "https://github.com/NabihAttar/My-Spot-Caffe",
    featuredFilter: ["All", "Next.js", "React.js", "Freelance"],
    responsive: true,
  },
  {
    title: "ERP Desktop Application",
    description:
      "Individual ERP desktop application built from scratch with dashboard, invoices, quotations, contracts, clients, accounting, reports, login, and PDF generation.",
    technologies: ["Electron.js", "React.js", "Node.js", "SQLite"],
    category: "Freelance Desktop ERP System",
    liveDemo: "https://github.com/CLOTHIFY-LEB/CL-ERP-wood-myth",
    github: "https://github.com/CLOTHIFY-LEB/CL-ERP-wood-myth",
    featuredFilter: ["All", "React.js", "Desktop App", "Freelance"],
    responsive: false,
  },
  {
    title: "Notary Desktop Application",
    description:
      "University group project for notary workflow management including login, clients, contracts, payments, reports, and PDF generation.",
    technologies: ["Java Swing", "MariaDB", "JDBC"],
    category: "Freelance Desktop Application",
    featuredFilter: ["All", "Desktop App", "Freelance"],
    responsive: false,
  },
];

export const skillGroups = [
  {
    title: "Frontend",
    items: [
      "React.js",
      "Next.js",
      "Angular",
      "TypeScript",
      "JavaScript",
      "HTML",
      "CSS",
      "SCSS",
      "Tailwind CSS",
      "Electron.js",
    ],
  },
  {
    title: "Backend and Database",
    items: ["Node.js", "Java", "MySQL", "SQL Server", "SQLite", "MariaDB", "JDBC"],
  },
  {
    title: "Tools",
    items: ["Git", "GitHub", "VS Code", "NetBeans", "Eclipse", "Android Studio"],
  },
  {
    title: "Other",
    items: ["Accela Software", "SSMS", "SSRS", "Crystal Reports"],
  },
  {
    title: "Documentation",
    items: [
      "PRD",
      "TRD",
      "Technical Documentation",
      "Software Requirements",
      "AI-Assisted Development Planning",
    ],
  },
];

export const education = [
  {
    institution: "Lebanese International University",
    degree: "BS in Computer Science",
    period: "2020 - 2023",
  },
];

export const certifications = [
  { title: "CCNA 1 and 2", issuer: "Cisco", year: "2023" },
  { title: "Digital Literacy Training Program", issuer: "Meta", year: "2022" },
  {
    title: "Digital Content Development Capacity Building Workshop",
    issuer: "Chababeek, EU, and British Council",
    year: "2020",
  },
];

export const entrepreneurialWork = {
  title: "Entrepreneurial Work",
  subtitle: "Clothify - Freelance & Software Solutions Initiative",
  website: "https://clothify-leb.com",
  badges: ["Part-time Initiative", "Business Software Solutions"],
  description:
    "Clothify is an early-stage software initiative I am building part-time to provide practical digital solutions for businesses. The current Clothify website focuses on helping Instagram-first clothing shops turn their pages into clean, fast, mobile-friendly mini-websites with product categorization, admin dashboard features, hosting, and WhatsApp-ready customer communication.",
  impact:
    "Through Clothify, I apply my frontend development, software planning, and business problem-solving skills to real-world use cases while continuing to grow professionally as a Frontend Developer.",
  services: [
    "Website design and development",
    "Mobile-first mini-websites for shops",
    "Admin dashboards",
    "Growth Services",
    "ERP systems",
    "Desktop applications",
    "POS systems",
    "Mobile applications",
  ],
};
