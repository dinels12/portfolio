// src/data/cv.ts
// Single source of truth — edit your CV here.

export const personal = {
  name: "Daniel Suarez",
  title: "CTO / Sr. Software Engineer",
  jobTitle: "CTO / Sr. Software Engineer",
  tagline: "I know what to ask AI — and how — to ship products people actually use.",
  summary:
    "CTO / Sr. Software Engineer at Aloharmony, a therapeutic-music wellness app with ~52k total users and ~5k daily active users on iOS, Android and web. Remote from Argentina; 6 years shipping web and mobile products across the full stack. My edge: broad, hands-on knowledge that lets me know what to ask AI and how — so I can direct a team of AI agents with real engineering judgment.",
  location: "Buenos Aires, Argentina",
  timezone: "UTC-3",
  email: "info@desitiondev.com",
  siteUrl: "https://daniel-suarez.desitiondev.com",
  github: "https://github.com/dinels12",
  linkedin: "https://linkedin.com/in/dinels",
  desitiondev: "https://desitiondev.com/en/",
  desitiondevProducts: "https://desitiondev.com/en/products/",
  desitiondevLabs: "https://desitiondev.com/en/labs/",
  available: false,
  openFor: "consulting",
};

export const experience = [
  {
    role: "Sr. Software Engineer / CTO",
    company: "Aloharmony",
    location: "Argentina · Remote",
    period: "Oct 2024 – Present",
    current: true,
    bullets: [
      "Lead engineer building a meditation platform with <strong>45k registered users</strong> and <strong>5,000 daily active users</strong>.",
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
    location: "Argentina · Remote",
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

// Aloharmony impact 2024–2026 (results, not tasks). No financials here by design.
export const aloharmony = {
  name: "Aloharmony",
  url: "https://aloharmony.com",
  description:
    "Wellness app with therapeutic music: ~52k total users and ~5k daily active users across iOS, Android and web.",
  users: "~52k",
  platforms: ["iOS", "Android", "Web"],
};

export const achievements = [
  {
    title: "Store-compliant monetization",
    result:
      "Split purchase flows between the new web app and a store-compliant payment gateway, so users can buy where it suits them without breaking App Store / Google Play rules — powered by Stripe and RevenueCat.",
    tags: ["Stripe", "RevenueCat", "Compliance"],
  },
  {
    title: "Free trial, cross-platform",
    result:
      "Launched the free-trial experience end-to-end, giving new users a frictionless way to try the product before subscribing.",
    tags: ["RevenueCat", "Stripe", "Growth"],
  },
  {
    title: "New web app, end-to-end",
    result:
      "Designed and shipped the new web app from architecture to production — a first-class platform alongside the mobile apps.",
    tags: ["Web", "Full-stack"],
  },
  {
    title: "Microservices → monolith",
    result:
      "Migrated a GraphQL-federation microservices backend to an optimized monolith: fewer moving parts, lower latency and faster delivery.",
    tags: ["Architecture", "Backend"],
  },
  {
    title: "App v4 & v5 + visual redesign",
    result:
      "Shipped two major app versions and led the visual redesign of the web, landing, account area and blog under one design system.",
    tags: ["Mobile", "Design system"],
  },
  {
    title: "Partner integrations",
    result:
      "Built integrations with partner platforms that open new distribution channels for the product.",
    tags: ["Integrations", "APIs"],
  },
  {
    title: "SEO & GEO",
    result:
      "Made the platform discoverable by search engines and AI answer engines: structured data, performance and content built to be cited.",
    tags: ["SEO", "GEO"],
  },
  {
    title: "In-house API & CRM",
    result:
      "Built a new in-house API and CRM, giving the team direct control over users, content and operations.",
    tags: ["Backend", "Internal tools"],
  },
  {
    title: "Data & content platform",
    result:
      "Set up Metabase analytics, an events system on Kafka and content management, so product decisions are backed by data.",
    tags: ["Metabase", "Kafka", "Events"],
  },
  {
    title: "AI image generation on-brand",
    result:
      "Built AI image generation grounded in the design system — Google Gemini with Nano Banana for images and Veo for video — producing on-brand visuals for content.",
    tags: ["Gemini", "Nano Banana", "Veo", "Design system"],
  },
];

// AI agent team — general working method for the whole platform.
export const aiMethod = {
  headline: "Knowing what to ask AI — and how.",
  intro:
    "I run Aloharmony's platform with a team of ~10 AI agents working 24/7. The value isn't the agents; it's the judgment directing them. Broad, hands-on knowledge across product, code, infrastructure, data and growth lets me know what to ask, how to ask it, and when an answer is wrong.",
  models: [
    { name: "OpenAI", use: "language models" },
    { name: "Anthropic", use: "language models" },
    { name: "Grok", use: "language models (latest current model)" },
    { name: "Google Gemini", use: "Google model family" },
    { name: "Nano Banana", use: "image generation (Google)" },
    { name: "Veo", use: "video generation (Google)" },
  ],
  roles: ["Development", "QA", "Project management", "Product ownership", "UX", "Marketing", "Support", "Finance"],
  governance: [
    { title: "Human approval", text: "Nothing is published, spent or deleted without my explicit sign-off." },
    { title: "Mandatory QA with evidence", text: "Every change is verified and backed by evidence before it ships." },
    { title: "Security review", text: "Sensitive changes go through a dedicated security review." },
    { title: "Automated tests", text: "Test suites gate every release." },
  ],
};

export const faq = [
  {
    q: "Who is Daniel Suarez?",
    a: "Daniel Suarez is a CTO / Sr. Software Engineer based in Buenos Aires, Argentina, working remotely. He leads technology at Aloharmony, a wellness app with therapeutic music with ~52k total users and ~5k daily active users on iOS, Android and web, and founded the DesitionDev product studio.",
  },
  {
    q: "What makes Daniel Suarez different as an engineer?",
    a: "His value is knowing what to ask AI and how. Broad, hands-on knowledge across mobile, web, backend, cloud, data, payments and growth lets him direct a team of AI agents with judgment — and catch when the output is wrong.",
  },
  {
    q: "How does Daniel Suarez work with AI agents?",
    a: "He runs a team of ~10 AI agents — development, QA, project management, product ownership, UX, marketing, support and finance — working 24/7 under governance: human approval to publish, spend or delete; mandatory QA with evidence; security review; and automated tests. He works with language models from OpenAI, Anthropic, Grok and Google Gemini, plus Nano Banana for image generation and Veo for video.",
  },
  {
    q: "What did Daniel Suarez achieve at Aloharmony between 2024 and 2026?",
    a: "He split purchase flows between a new web app and a store-compliant payment gateway, launched a free trial with RevenueCat, built the new web app end-to-end, migrated microservices to a monolith, shipped app v4 and v5 with a visual redesign, added partner integrations, SEO/GEO, an in-house API and CRM, Metabase, an events system on Kafka, content management and on-brand AI image generation with Gemini (Nano Banana for images, Veo for video).",
  },
  {
    q: "What is Daniel Suarez's tech stack?",
    a: "React, Next.js, Astro, React Native and Expo on the front end; Node.js, NestJS, GraphQL and REST on the back end; AWS, Docker and Redis for infrastructure; Kafka and Metabase for events and analytics; Stripe and RevenueCat for payments; OpenAI, Anthropic, Grok and Google Gemini (Nano Banana, Veo) for AI.",
  },
  {
    q: "Is Daniel Suarez available for work?",
    a: "He is open for consulting and select project work — architecture, full-stack delivery, AI-assisted engineering and technical leadership. Contact: info@desitiondev.com.",
  },
];
