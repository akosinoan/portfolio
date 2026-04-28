import type { Project } from "@/types";

export const projects: Project[] = [
  {
    id: "forge",
    title: "Forge",
    badge: "Coming soon · Roadmap",
    oneLiner: "Distributed job queue in Rust.",
    description:
      "Reliable async task processing with retry policies, idempotency, and Prometheus metrics. Workers poll Postgres with SKIP LOCKED, exponential-backoff retries with a dead-letter queue, and a metrics endpoint for observability.",
    stack: ["Rust", "Axum", "PostgreSQL", "Redis", "Tokio", "Prometheus"],
    status: "coming-soon",
  },
  {
    id: "barista-paws",
    title: "Barista Paws",
    badge: "Coming soon",
    oneLiner: "Pet management REST API.",
    description:
      "Full-stack pet management platform with a Rust/Axum backend, SQLx queries against PostgreSQL, and a React 19 + Vite + Tailwind frontend. JWT authentication and role-based access control.",
    stack: ["Rust", "Axum", "SQLx", "PostgreSQL", "React 19", "Vite"],
    status: "coming-soon",
  },
  {
    id: "acey-deucy",
    title: "Acey-Deucy",
    oneLiner: "Terminal card game in Rust.",
    description:
      "Complete card-game CLI in Rust — full gameplay loop with ante, betting, draw/discard, and deck shuffling. Hands-on study of ownership, lifetimes, and idiomatic error handling.",
    stack: ["Rust", "Cargo", "CLI"],
    status: "coming-soon",
    badge: "Repo publishing soon",
  },
  {
    id: "comptia-reviewer",
    title: "CompTIA Reviewer",
    oneLiner: "Certification study platform with nine interactive modules.",
    description:
      "Interactive web app for CompTIA A+ and Network+ (N10-009) prep. React 19 + Vite frontend with Supabase auth and Postgres persistence for study state. Deployed via GitHub Pages.",
    stack: ["React 19", "Vite", "TailwindCSS", "Supabase", "PostgreSQL"],
    status: "live",
    links: {
      github: "https://github.com/akosinoan/comptia_reviewer_flashcard",
      demo: "https://akosinoan.github.io/comptia_reviewer_flashcard/",
    },
    thumb: "/comptiareviewer.png",
  },
  {
    id: "barista-coffee",
    title: "Barista Coffee Beans",
    oneLiner: "Production marketing site for a coffee merchant.",
    description:
      "Next.js + React landing page deployed on AWS Amplify. Responsive layout, image pipeline, and live in production for a coffee merchant.",
    stack: ["Next.js", "React", "Bootstrap", "AWS Amplify"],
    status: "live",
    links: {
      demo: "https://www.baristacoffeebeans.com/",
    },
    thumb: "/baristascreenshot.png",
  },
  {
    id: "one-source",
    title: "One Source Marketing",
    oneLiner: "Marketing site for a shirt-design company.",
    description:
      "Vite + React + TailwindCSS landing page with shadcn/ui primitives, deployed on Vercel free tier.",
    stack: ["Vite", "React", "TailwindCSS", "shadcn/ui", "Vercel"],
    status: "live",
    links: {
      demo: "https://onesource-pied.vercel.app/",
    },
    thumb: "/onesource.png",
  },
];
