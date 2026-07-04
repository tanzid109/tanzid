import { Project, Skill, Experience } from "./types";

export const PERSONAL_INFO = {
  name: "Tanzid Un Khalil",
  designation: "Fullstack Developer",
  avatar: "/images/profile.jpeg",

  email: "tanzid.unkhalil109@gmail.com",
  phone: "+8801743281380",
  whatsapp: "+8801743281380",

  github: "https://github.com/tanzid109",
  linkedin: "https://linkedin.com/in/tanzid-un-khalil",
  twitter: "",

  aboutMe: {
    journey:
      "I'm a passionate Full Stack Developer with 1 year of professional experience building modern web applications using React.js, Next.js, TypeScript, Node.js, Express.js, and MongoDB. After completing the Programming Hero Web Development course, I began developing production-ready applications focused on performance, scalability, and exceptional user experiences.",

    workEnjoyed:
      "I enjoy building SaaS platforms, admin dashboards, AI-powered applications, and responsive websites. My focus is writing clean, maintainable code, creating reusable components, and delivering intuitive user interfaces that solve real-world problems.",

    hobbies:
      "Outside of coding, I enjoy exploring new technologies, contributing to personal projects, learning modern web development practices, watching tech content, and continuously improving my problem-solving skills through coding challenges.",
  },
};

export const SKILLS: Skill[] = [
  // Frontend
  {
    name: "HTML5",
    level: 95,
    category: "Frontend",
    iconName: "FileCode",
  },
  {
    name: "CSS3",
    level: 95,
    category: "Frontend",
    iconName: "Palette",
  },
  {
    name: "JavaScript",
    level: 92,
    category: "Frontend",
    iconName: "Code2",
  },
  {
    name: "TypeScript",
    level: 82,
    category: "Frontend",
    iconName: "FileCode2",
  },
  {
    name: "React.js",
    level: 92,
    category: "Frontend",
    iconName: "Atom",
  },
  {
    name: "Next.js",
    level: 90,
    category: "Frontend",
    iconName: "Layers",
  },
  {
    name: "Tailwind CSS",
    level: 95,
    category: "Frontend",
    iconName: "Palette",
  },
  {
    name: "ShadCN UI",
    level: 90,
    category: "Frontend",
    iconName: "LayoutGrid",
  },

  // Backend
  {
    name: "Node.js",
    level: 80,
    category: "Backend",
    iconName: "Server",
  },
  {
    name: "Express.js",
    level: 82,
    category: "Backend",
    iconName: "Cpu",
  },
  {
    name: "MongoDB",
    level: 85,
    category: "Backend",
    iconName: "Database",
  },
  {
    name: "Prisma",
    level: 72,
    category: "Backend",
    iconName: "DatabaseZap",
  },
  {
    name: "Firebase",
    level: 75,
    category: "Backend",
    iconName: "Flame",
  },
  {
    name: "REST API",
    level: 88,
    category: "Backend",
    iconName: "Webhook",
  },

  // Tools
  {
    name: "Git",
    level: 90,
    category: "Tools",
    iconName: "GitBranch",
  },
  {
    name: "GitHub",
    level: 90,
    category: "Tools",
    iconName: "Github",
  },
  {
    name: "Vercel",
    level: 88,
    category: "Tools",
    iconName: "Cloud",
  },
  {
    name: "Postman",
    level: 85,
    category: "Tools",
    iconName: "Send",
  },
  {
    name: "Figma",
    level: 78,
    category: "Tools",
    iconName: "PenTool",
  },
  {
    name: "VS Code",
    level: 95,
    category: "Tools",
    iconName: "MonitorSmartphone",
  },
];

export const EXPERIENCES: Experience[] = [
  {
    id: "exp1",
    role: "Fullstack Developer",
    company: "Sparktech Agency",
    duration: "01/05/2025 - 01/06/2026",

    description: [
      "Developed responsive user interfaces using Next.js, React.js, Tailwind CSS, and ShadCN UI.",
      "Built reusable components and optimized application performance for better user experience.",
      "Worked closely with backend developers to integrate REST APIs and improve application scalability.",
      "Participated in feature planning, bug fixing, and code reviews within an Agile workflow.",
    ],

    skills: ["Next.js", "React", "Tailwind CSS", "ShadCN UI", "TypeScript"],
  },
];

export const PROJECTS: Project[] = [
  {
    id: "proj1",
    name: "Morningwood",
    image: "/projects/proj1.png",
    tagline:
      "Modern streaming platform with a powerful content management dashboard.",
    description:
      "Morningwood is a streaming platform built with Next.js that provides users with an intuitive interface for browsing and watching content. It includes a modern admin dashboard for managing movies, users, and platform data.",
    techStack: [
      "Next.js",
      "React",
      "Tailwind CSS",
      "ShadCN UI",
      "MongoDB",
      "Express.js",
    ],
    liveUrl: "https://www.morningwood.com",
    features: [
      "Full content browsing and streaming interface for end users",
      "Admin dashboard for managing movies, users, and platform data",
      "Reusable, responsive dashboard component library",
      "RESTful API integration between Next.js frontend and Express backend",
      "MongoDB-backed data layer for scalable content storage",
    ],
  },
  {
    id: "proj2",
    name: "PoloBelt",
    image: "/projects/proj2.png",
    tagline: "Design and order custom-made belts online",
    description:
      "PoloBelt is a full-stack e-commerce application that provides a seamless shopping experience with product browsing, authentication, cart management, secure checkout, and an intuitive admin panel for managing products and orders.",
    techStack: ["Next.js", "React.js", "Tailwind CSS", "ShadCN UI", "Resend"],
    liveUrl: "https://www.mypolobelt.com",
    features: [
      "Secure user authentication and account management",
      "Persistent shopping cart with real-time state management",
      "Custom belt configurator with color and size selection",
      "Admin panel with full CRUD for products and orders",
      "Transactional email flow via Resend for order confirmations",
      "Domain migration and DNS setup for production deployment on Vercel",
    ],
  },
  {
    id: "proj3",
    name: "Castello",
    image: "/projects/proj3.png",
    tagline:
      "Modern restaurant website with online reservations and menu browsing.",
    description:
      "Castello is a modern restaurant website designed to showcase premium dining experiences. It features an elegant user interface, responsive design, interactive menu browsing, online table reservations, and detailed information about the restaurant, chefs, and special offers.",
    techStack: [
      "Next.js",
      "React.js",
      "Tailwind CSS",
      "ShadCN UI",
      "Node.js",
      "Express.js",
      "MongoDB",
    ],
    liveUrl: "https://castello-sepia.vercel.app",
    features: [
      "Interactive digital menu with category browsing",
      "Online table reservation system",
      "Fully responsive layout across mobile, tablet, and desktop",
      "Dedicated pages for chefs, offers, and restaurant details",
      "Node.js/Express backend with MongoDB for reservation data",
    ],
  },
];
