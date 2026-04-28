import type { StackGroup } from "@/types";

export const stackGroups: StackGroup[] = [
  {
    label: "Languages",
    items: ["Rust", "JavaScript", "TypeScript", "Java", "C", "PHP", "SQL"],
  },
  {
    label: "Backend",
    items: [
      "Axum",
      "SQLx",
      "Spring Boot",
      "Node.js",
      "Express.js",
      "REST APIs",
      "JSP",
      "Java Servlets",
    ],
  },
  {
    label: "Databases",
    items: ["PostgreSQL", "MySQL", "MongoDB", "Supabase"],
  },
  {
    label: "Frontend",
    items: [
      "React 19",
      "Next.js",
      "Vite",
      "TailwindCSS",
      "shadcn/ui",
      "Bootstrap",
      "jQuery",
    ],
  },
  {
    label: "DevOps & Tools",
    items: [
      "Git",
      "Linux (Ubuntu, Arch)",
      "GitHub Pages",
      "AWS Amplify",
      "Vercel",
    ],
  },
  {
    label: "Practices",
    items: [
      "Full-stack development",
      "CRUD design",
      "Debugging",
      "Code review",
      "Technical documentation",
    ],
  },
];

export const exploring = ["Bevy", "MongoDB", "gRPC"];
