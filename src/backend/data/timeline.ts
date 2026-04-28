import type { Cert, TimelineEntry } from "@/types";

export const timeline: TimelineEntry[] = [
  {
    id: "now",
    kind: "milestone",
    period: "2026 →",
    title: "Building Rust backend systems",
    bullets: [
      "Cyber Warrior Program at MyComputerCareer (expected June 2026).",
      "Shipping Barista Paws (Rust + Axum + SQLx) and Acey-Deucy.",
    ],
  },
  {
    id: "2025",
    kind: "milestone",
    period: "2025",
    title: "Full-stack production apps and cloud deployments",
    bullets: [
      "CompTIA Reviewer with Supabase + Postgres on GitHub Pages.",
      "Marketing sites on AWS Amplify and Vercel.",
    ],
  },
  {
    id: "2024",
    kind: "milestone",
    period: "2024",
    title: "Transition into software engineering",
  },
  {
    id: "sse",
    kind: "work",
    period: "Jan 2021 — Apr 2024",
    title: "Subject Matter Expert",
    org: "SSE Inc. (Boeing contractor)",
    location: "St. Louis, MO",
    bullets: [
      "Maintained compliance-grade digital documentation for F/A-18 and F-15 platforms; structured-feedback review processes comparable to evaluating technical content for correctness and clarity.",
      "Operated specialized tooling (Quill, MDART, CGM Viewer) to enforce data consistency, traceability, and compliance across thousands of documents.",
      "Built the PS917 Word Checker — internal HTML/JS tool to flag restricted or noncompliant terminology in technical documentation.",
    ],
  },
  {
    id: "navy",
    kind: "work",
    period: "Dec 2015 — Dec 2019",
    title: "Aviation Mechanic (E-5), Petty Officer 2nd Class",
    org: "U.S. Navy",
    location: "Lemoore, CA",
    bullets: [
      "Led a team of 15 technicians on 500+ critical flight-control inspections with zero safety mishaps — rigorous quality-control judgment under load.",
      "Coordinated 11 personnel in flight-deck operations supporting safe launch and recovery of F/A-18E Super Hornets.",
      "Built the Flight Line Locator (HTML/JS) — internal tool for real-time aircraft location and fuel-load tracking.",
    ],
  },
  {
    id: "intevalue",
    kind: "work",
    period: "Aug 2012 — Feb 2015",
    title: "Java Web Developer",
    org: "Great Winner Inc. (Intevalue Services)",
    location: "Manila, Philippines",
    bullets: [
      "Engineered a customer account management module (creation, profile updates, transaction tracking) on Java + Spring Boot + JSP + PostgreSQL.",
      "Designed and shipped secure CRUD tooling for customer service teams — account lookups, transaction queries, controlled data modification.",
      "Built a card-lifecycle management system that improved auditability and reduced reconciliation errors.",
    ],
    stack: ["Java", "Spring Boot", "JSP", "PostgreSQL", "jQuery"],
  },
  {
    id: "cordage",
    kind: "work",
    period: "May 2011 — Jul 2011",
    title: "PHP Web Developer (Intern)",
    org: "Manila Cordage Company",
    location: "Manila, Philippines",
    bullets: [
      "Manufacturing work-order CRUD module in PHP, MySQL, and XML — first production-shipped feature.",
    ],
    stack: ["PHP", "MySQL", "XML", "HTML", "CSS"],
  },
  {
    id: "dlsu",
    kind: "education",
    period: "2008 — 2012",
    title: "B.S. Computer Science",
    org: "De La Salle University",
    location: "Manila, Philippines",
  },
];

export const certifications: Cert[] = [
  {
    id: "cyber-warrior",
    name: "Cyber Warrior Program",
    issuer: "MyComputerCareer",
    date: "Expected Jun 2026",
    inProgress: true,
  },
  {
    id: "comptia-a",
    name: "CompTIA A+ ce",
    issuer: "CompTIA",
    date: "Apr 2026",
  },
  {
    id: "rust-fundamentals",
    name: "Rust Fundamentals",
    issuer: "Duke University · Coursera",
    date: "Feb 2026",
  },
  {
    id: "postgres-design",
    name: "Database Design & Basic SQL in PostgreSQL",
    issuer: "University of Michigan · Coursera",
    date: "Feb 2026",
  },
  {
    id: "in-progress",
    name: "Network+ · Security+ · CySA+",
    issuer: "CompTIA",
    date: "In progress",
    inProgress: true,
  },
];
