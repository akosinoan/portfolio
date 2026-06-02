import { useRef } from "react";
import useIsVisible from "../util/useIsVisible";
import comptiaReviewerImg from "../assets/comptiareviewer.png";
import baristaImg from "../assets/baristascreenshot.png";
import oneSourceImg from "../assets/onesource.png";

const PROJECTS = [
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

const Portfolio = () => {
  const ref1 = useRef();
  const isVisible1 = useIsVisible(ref1);

  return (
    <section
      className="scroll-mt-16 py-16 md:py-20 px-6 sm:px-12 lg:px-[10%]"
      id="portfolio"
    >
      {/* Section heading */}
      <div
        ref={ref1}
        className={`relative ${isVisible1 ? "animate-fadeIn" : "opacity-0"}`}
      >
        <h2 className="text-center text-4xl font-semibold uppercase sm:text-5xl lg:text-6xl bg-gradient-to-b from-red-900 via-red-800 to-red-300 text-transparent bg-clip-text">
          Check out my Portfolio
        </h2>
        <h3 className="pt-6 font-header text-center text-xl font-medium text-black sm:text-2xl lg:text-3xl">
          Here are my previous Projects
        </h3>
      </div>

      {/* ── Projects: featured hero + card row ── */}
      <div className="pt-12 flex flex-col gap-6">
        {PROJECTS.filter((p) => p.featured).map((project) => (
          <ProjectCard key={project.name} project={project} featured />
        ))}
        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {PROJECTS.filter((p) => !p.featured).map((project) => (
            <ProjectCard key={project.name} project={project} />
          ))}
        </div>
      </div>
    </section>
  );
};

// Fall back to the bundled screenshot if the live og-image fails to load.
const handleImgError = (project) => (e) => {
  if (project.imgsrc && e.currentTarget.dataset.fallback !== "true") {
    e.currentTarget.dataset.fallback = "true";
    e.currentTarget.src = project.imgsrc;
  }
};

const ProjectCard = ({ project, featured }) => {
  const ref = useRef();
  const isVisible = useIsVisible(ref);

  return (
    <div
      ref={ref}
      className={`group relative flex overflow-hidden rounded-xl border-4 border-gray-200 bg-white shadow-2xl transition-all duration-500 hover:-translate-y-1.5 hover:border-red-300 hover:shadow-[0_0_35px_-5px_rgba(220,38,38,0.6)] ${
        featured ? "flex-col lg:flex-row" : "flex-col"
      } ${isVisible ? "animate-fadeIn" : "opacity-0"}`}
    >
      {/* Screenshot — banner aspect, no crop */}
      <a
        href={project.demo}
        target="_blank"
        rel="noopener noreferrer"
        aria-label={`Open ${project.name}`}
        className={`relative block aspect-[1200/630] overflow-hidden bg-gray-100 ${
          featured ? "lg:w-3/5" : ""
        }`}
      >
        <img
          src={project.ogImage ?? project.imgsrc}
          alt={project.name}
          loading="lazy"
          onError={handleImgError(project)}
          className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
        />
        <span className="pointer-events-none absolute inset-0 bg-gradient-to-t from-red-950/30 to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
      </a>

      {/* Body */}
      <div
        className={`flex flex-1 flex-col gap-2 ${
          featured ? "p-6 lg:justify-center" : "p-4"
        }`}
      >
        <a
          href={project.demo}
          target="_blank"
          rel="noopener noreferrer"
          className="group/title self-start"
        >
          <h3
            className={`font-bold bg-gradient-to-b from-red-900 via-red-600 to-red-300 bg-clip-text text-transparent transition-opacity group-hover/title:opacity-75 ${
              featured ? "text-2xl sm:text-3xl" : "text-lg"
            }`}
          >
            {project.name}
          </h3>
        </a>

        <p className={`text-gray-500 ${featured ? "text-base" : "text-sm"}`}>
          {project.description}
        </p>

        <ul className="flex flex-wrap pt-1">
          <TechnologyList technologies={project.technologies} />
        </ul>

        {/* Links */}
        <div className="mt-auto flex items-center gap-4 pt-3">
          <a
            href={project.demo}
            target="_blank"
            rel="noopener noreferrer"
            className="group/demo inline-flex items-center gap-1.5 text-xs text-gray-400 transition-colors hover:text-red-700"
          >
            <svg
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              className="h-3.5 w-3.5 flex-shrink-0 transition-transform duration-200 group-hover/demo:-translate-y-0.5 group-hover/demo:translate-x-0.5"
            >
              <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6" />
              <polyline points="15 3 21 3 21 9" />
              <line x1="10" y1="14" x2="21" y2="3" />
            </svg>
            Live Demo
          </a>

          {project.github && (
            <a
              href={project.github}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 text-xs text-gray-400 transition-colors hover:text-red-700"
            >
              <svg
                viewBox="0 0 24 24"
                fill="currentColor"
                className="h-3.5 w-3.5 flex-shrink-0"
              >
                <path d="M12 .5C5.37.5 0 5.87 0 12.5c0 5.3 3.44 9.8 8.21 11.39.6.11.82-.26.82-.58 0-.29-.01-1.04-.02-2.04-3.34.73-4.04-1.61-4.04-1.61-.55-1.39-1.34-1.76-1.34-1.76-1.09-.75.08-.73.08-.73 1.21.09 1.84 1.24 1.84 1.24 1.07 1.84 2.81 1.31 3.5 1 .11-.78.42-1.31.76-1.61-2.67-.3-5.47-1.34-5.47-5.95 0-1.31.47-2.39 1.24-3.23-.13-.3-.54-1.52.12-3.18 0 0 1.01-.32 3.3 1.23a11.5 11.5 0 0 1 3-.4c1.02 0 2.05.14 3 .4 2.29-1.55 3.3-1.23 3.3-1.23.66 1.66.25 2.88.12 3.18.77.84 1.24 1.92 1.24 3.23 0 4.62-2.81 5.64-5.49 5.94.43.37.81 1.1.81 2.22 0 1.6-.01 2.89-.01 3.29 0 .32.22.7.83.58A12.01 12.01 0 0 0 24 12.5C24 5.87 18.63.5 12 .5z" />
              </svg>
              Code
            </a>
          )}
        </div>
      </div>
    </div>
  );
};

const TechnologyList = ({ technologies }) => {
  const technologyList = {
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

  return technologies.map((tech, i) => {
    const entry = technologyList[tech];
    return (
      <li key={i} className="px-2 group/tech">
        <a href={entry?.href ?? "/"} target="_blank" rel="noopener noreferrer">
          <img className="h-5 w-5" src={entry?.imgsrc ?? ""} alt={tech} />
          <span className="group-hover/tech:visible absolute text-xs invisible border-2 border-gray-300 rounded-3xl p-2 bg-red-900 text-white">
            {tech}
          </span>
        </a>
      </li>
    );
  });
};

export default Portfolio;
