import type { Project, Technology } from "../types";
import comptiaReviewerImg from "../assets/comptiareviewer.png";
import baristaImg from "../assets/baristascreenshot.png";
import oneSourceImg from "../assets/onesource.png";

export const projects: Project[] = [
  {
    name: "RadarPro",
    description:
      "Conversion-focused landing page for a 24/7 CCTV monitoring service, with a glassmorphic design and animated scroll reveals.",
    demo: "https://radarproph.com/",
    github: "https://github.com/akosinoan/radarpro",
    ogImage: "https://radarproph.com/og-image.jpg",
    technologies: ["React", "Vite", "TailwindCSS", "TypeScript", "FramerMotion"],
    featured: true,
  },
  {
    name: "CompTIA Reviewer",
    description:
      "Interactive study platform for CompTIA A+ (Core 1 & 2), Network+, and Security+ certification exams.",
    demo: "https://akosinoan.github.io/comptia_reviewer_flashcard/",
    github: "https://github.com/akosinoan/comptia_reviewer_flashcard",
    ogImage:
      "https://akosinoan.github.io/comptia_reviewer_flashcard/og-image.png",
    imgsrc: comptiaReviewerImg,
    technologies: ["React", "Vite", "TailwindCSS", "Neon"],
  },
  {
    name: "Barista Coffee Beans",
    description:
      "Production marketing site for a Philippine gourmet coffee brand, with an interactive café menu, masonry gallery, and JSON-LD structured data for every branch.",
    demo: "https://www.baristacoffeebeans.com/",
    github: "https://github.com/akosinoan/barista_coffee_beans_2026",
    ogImage: "https://www.baristacoffeebeans.com/og-image.jpg",
    imgsrc: baristaImg,
    technologies: ["Vite", "React", "TailwindCSS", "FramerMotion"],
  },
  {
    name: "One Source Marketing Services",
    description:
      "Marketing site for a Philippine corporate giveaways and branded merchandise supplier.",
    demo: "https://onesourcemarketing.org/",
    ogImage: "https://onesourcemarketing.org/onesource_banner.png",
    imgsrc: oneSourceImg,
    github: "https://github.com/akosinoan/onesource",
    technologies: ["Vite", "React", "TailwindCSS"],
  },
];

/** Logo + link metadata keyed by the technology names used in `projects`. */
export const technologies: Record<string, Technology> = {
  NextJS: { href: "https://nextjs.org/", imgsrc: "./nextjs_logo.png" },
  React: { href: "https://react.dev/", imgsrc: "./reactjs_logo.png" },
  Bootstrap: {
    href: "https://getbootstrap.com/",
    imgsrc: "./bootstrap_logo.png",
  },
  CSS: {
    href: "https://www.w3.org/Style/CSS/Overview.en.html",
    imgsrc: "./w3_css-official.svg",
  },
  Shadcn: { href: "https://ui.shadcn.com/", imgsrc: "./shadcn_logo.png" },
  TailwindCSS: {
    href: "https://tailwindcss.com/",
    imgsrc: "./tailwindcss.svg",
  },
  Vite: { href: "https://vite.dev/", imgsrc: "./vite_logo.png" },
  TypeScript: {
    href: "https://www.typescriptlang.org/",
    imgsrc: "https://cdn.simpleicons.org/typescript/3178C6",
  },
  Neon: {
    href: "https://neon.tech/",
    imgsrc: "https://cdn.simpleicons.org/neon/00E599",
  },
  FramerMotion: {
    href: "https://www.framer.com/motion/",
    imgsrc: "https://cdn.simpleicons.org/framer/0055FF",
  },
};
