import type { SkillCategory } from "../types";

const D = "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons";
const SI = "https://cdn.simpleicons.org";

export const highlights: string[] = [
  "B.S. Computer Science",
  "U.S. Navy Veteran",
  "Full-Stack Developer",
  "Java · React · Rust",
];

export const skillCategories: SkillCategory[] = [
  {
    label: "Languages",
    skills: [
      { name: "Java", icon: `${D}/java/java-original.svg` },
      { name: "JavaScript", icon: `${D}/javascript/javascript-original.svg` },
      { name: "PHP", icon: `${D}/php/php-original.svg` },
      { name: "C", icon: `${D}/c/c-original.svg` },
      { name: "Rust", icon: `${D}/rust/rust-original.svg` },
    ],
  },
  {
    label: "Backend",
    skills: [
      { name: "Spring Boot", icon: `${D}/spring/spring-original.svg` },
      { name: "Node.js", icon: `${D}/nodejs/nodejs-original.svg` },
      { name: "Express.js", icon: `${D}/express/express-original.svg` },
      { name: "Axum", icon: `${D}/rust/rust-original.svg` },
      { name: "Supabase", icon: `${D}/supabase/supabase-original.svg` },
      { name: "REST APIs", icon: `${SI}/fastapi/009688` },
    ],
  },
  {
    label: "Frontend",
    skills: [
      { name: "React", icon: `${D}/react/react-original.svg` },
      { name: "Next.js", icon: `${D}/nextjs/nextjs-original.svg` },
      { name: "HTML", icon: `${D}/html5/html5-original.svg` },
      { name: "CSS", icon: `${D}/css3/css3-original.svg` },
      {
        name: "TailwindCSS",
        icon: `${D}/tailwindcss/tailwindcss-original.svg`,
      },
      { name: "Bootstrap", icon: `${D}/bootstrap/bootstrap-original.svg` },
      { name: "JSP", icon: `${D}/java/java-original.svg` },
      { name: "jQuery", icon: `${D}/jquery/jquery-original.svg` },
    ],
  },
  {
    label: "Databases",
    skills: [
      { name: "PostgreSQL", icon: `${D}/postgresql/postgresql-original.svg` },
      { name: "MySQL", icon: `${D}/mysql/mysql-original.svg` },
      { name: "MongoDB", icon: `${D}/mongodb/mongodb-original.svg` },
    ],
  },
  {
    label: "Tools & Platforms",
    skills: [
      { name: "Git", icon: `${D}/git/git-original.svg` },
      { name: "AWS Amplify", icon: `${SI}/awsamplify/FF9900` },
      { name: "Linux", icon: `${D}/linux/linux-original.svg` },
      { name: "macOS", icon: `${SI}/apple/000000` },
      { name: "Windows", icon: `${D}/windows8/windows8-original.svg` },
    ],
  },
  {
    label: "Concepts",
    skills: [
      { name: "Full-Stack Development", icon: null },
      { name: "CRUD Applications", icon: null },
      { name: "MVC Architecture", icon: null },
      { name: "Responsive Design", icon: null },
    ],
  },
];
