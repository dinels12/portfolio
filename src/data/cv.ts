// src/data/cv.ts
// Single source of truth — edit your CV here.

export const personal = {
  name: "Daniel Suarez",
  title: "Senior Full-Stack Engineer",
  tagline: "Building products people actually use.",
  summary:
    "5+ years designing and shipping scalable web and mobile products. From mobile apps and backend APIs to cloud infrastructure — I work across the entire stack.",
  location: "Buenos Aires, Argentina",
  email: "dinels12@gmail.com",
  linkedin: "https://linkedin.com/in/dinels",
  available: true,
};

export const experience = [
  {
    role: "Sr. Software Engineer / CTO",
    company: "Aloharmony",
    location: "USA",
    period: "Oct 2024 – Present",
    current: true,
    bullets: [
      "Lead engineer building a meditation platform with <strong>16k registered users</strong> and <strong>1,300 daily active users</strong>.",
      "Architected backend APIs, mobile app, web platform, and cloud infrastructure end-to-end.",
      "Built React Native mobile app with <strong>offline-first architecture</strong> and audio streaming.",
      "Designed NestJS + GraphQL backend with 90+ endpoints.",
      "Migrated system from GraphQL federation microservices to an optimized monolith.",
      "Implemented Stripe subscription payments and managed the full billing lifecycle.",
      "Optimized landing performance from <strong>~3s → ~200ms</strong> using Next.js and CloudFront.",
      "Managed AWS infrastructure: ECS, EC2, S3, CloudFront, and Redis.",
    ],
  },
  {
    role: "Technical Leader",
    company: "CRIZZ",
    location: "Colombia",
    period: "Jun 2022 – Dec 2023",
    current: false,
    bullets: [
      "Led a team of <strong>5 developers</strong> across multiple concurrent projects.",
      "Managed development of platforms: Subliful, Adkiero, Yovoto, and XProfit.",
      "Defined technology stacks and drove architectural decisions.",
      "Provided hands-on technical support and code guidance to the development team.",
    ],
  },
  {
    role: "Full Stack Developer",
    company: "Thought Media",
    location: "USA",
    period: "Jan 2021 – Jan 2022",
    current: false,
    bullets: [
      "Developed e-commerce platforms with PayPal and Authorize.net integrations.",
      "Built backend services and frontend interfaces for client projects.",
      "Worked on TaxMambo, a mobile application for tax calculations.",
    ],
  },
];

export const skills = [
  {
    category: "Frontend",
    tags: ["React", "Next.js", "Astro", "TailwindCSS", "HTML", "CSS", "JavaScript"],
  },
  {
    category: "Mobile",
    tags: ["React Native", "Expo", "Zustand", "NativeWind"],
  },
  {
    category: "Backend",
    tags: ["Node.js", "NestJS", "GraphQL", "REST APIs", "gRPC"],
  },
  {
    category: "Cloud & DevOps",
    tags: ["AWS ECS", "EC2", "S3", "CloudFront", "Route53", "Docker", "Redis", "BigQuery"],
  },
  {
    category: "Payments",
    tags: ["Stripe", "PayPal", "Authorize.net"],
  },
  {
    category: "CI/CD & Tools",
    tags: ["Git", "GitHub Actions", "GitLab CI/CD", "Linux"],
  },
];

export const education = [
  {
    name: "Introduction to Computer Science (CS50)",
    org: "HarvardX",
    period: "Completed",
  },
];

export const languages = [
  { name: "Spanish", level: "Native" },
  { name: "English", level: "Advanced" },
];
