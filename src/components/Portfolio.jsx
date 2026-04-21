import { useRef, useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import useIsVisible from "../util/useIsVisible";

const PROJECTS = [
  {
    name: "CompTIA Reviewer",
    href: "https://akosinoan.github.io/comptia_reviewer_flashcard/",
    imgsrc: "./comptiareviewer.png",
    technologies: ["React", "Vite", "TailwindCSS", "Supabase"],
  },
  {
    name: "Barista Coffee Beans",
    href: "https://www.baristacoffeebeans.com/",
    imgsrc: "./baristascreenshot.png",
    technologies: ["NextJS", "React", "Bootstrap", "CSS"],
  },
  {
    name: "One Source Marketing Services",
    href: "https://onesourcemarketing.org/",
    imgsrc: "./onesource.png",
    technologies: ["Vite", "React", "Shadcn", "TailwindCSS"],
  },
];

const slideVariants = {
  enter: (dir) => ({ x: dir > 0 ? "100%" : "-100%" }),
  center: { x: 0 },
  exit: (dir) => ({ x: dir > 0 ? "-100%" : "100%" }),
};

const Portfolio = () => {
  const ref1 = useRef();
  const isVisible1 = useIsVisible(ref1);

  const [current, setCurrent] = useState(0);
  const [direction, setDirection] = useState(1);
  const [timerKey, setTimerKey] = useState(0);

  // Auto-advance every 4 s; timerKey resets the interval on manual navigation
  useEffect(() => {
    const id = setInterval(() => {
      setDirection(1);
      setCurrent((prev) => (prev + 1) % PROJECTS.length);
    }, 4000);
    return () => clearInterval(id);
  }, [timerKey]);

  const goTo = (index, dir) => {
    setDirection(dir);
    setCurrent(index);
    setTimerKey((k) => k + 1);
  };

  const goPrev = () =>
    goTo((current - 1 + PROJECTS.length) % PROJECTS.length, -1);
  const goNext = () => goTo((current + 1) % PROJECTS.length, 1);

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

      <div className="pt-12 max-w-2xl mx-auto">
        {/* ── Image carousel ── */}
        <div className="relative h-64 sm:h-[26rem] lg:h-[32rem] rounded-xl overflow-hidden border-4 border-gray-200 shadow-2xl bg-gray-100">
          {/* Sliding images — each is a clickable link */}
          <AnimatePresence custom={direction}>
            <motion.a
              key={current}
              href={PROJECTS[current].href}
              target="_blank"
              rel="noopener noreferrer"
              custom={direction}
              variants={slideVariants}
              initial="enter"
              animate="center"
              exit="exit"
              transition={{ duration: 0.45, ease: [0.25, 0.46, 0.45, 0.94] }}
              className="absolute inset-0 block"
            >
              <img
                src={PROJECTS[current].imgsrc}
                className="w-full h-full object-cover"
                alt={PROJECTS[current].name}
              />
            </motion.a>
          </AnimatePresence>

          {/* Prev button */}
          <button
            onClick={goPrev}
            aria-label="Previous project"
            className="absolute left-3 top-1/2 -translate-y-1/2 z-10 w-9 h-9 rounded-full bg-black/40 hover:bg-black/65 text-white flex items-center justify-center transition-all hover:scale-110 backdrop-blur-sm select-none"
          >
            <svg
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2.5"
              className="w-5 h-5"
            >
              <polyline points="15 18 9 12 15 6" />
            </svg>
          </button>

          {/* Next button */}
          <button
            onClick={goNext}
            aria-label="Next project"
            className="absolute right-3 top-1/2 -translate-y-1/2 z-10 w-9 h-9 rounded-full bg-black/40 hover:bg-black/65 text-white flex items-center justify-center transition-all hover:scale-110 backdrop-blur-sm select-none"
          >
            <svg
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2.5"
              className="w-5 h-5"
            >
              <polyline points="9 18 15 12 9 6" />
            </svg>
          </button>

          {/* Auto-progress bar */}
          <div className="absolute bottom-0 left-0 right-0 h-1 bg-black/20 z-10">
            <motion.div
              key={`${current}-${timerKey}`}
              className="h-full bg-gradient-to-r from-red-700 to-red-400"
              initial={{ width: "0%" }}
              animate={{ width: "100%" }}
              transition={{ duration: 4, ease: "linear" }}
            />
          </div>
        </div>

        {/* ── Project info (fades on slide change) ── */}
        <AnimatePresence mode="wait">
          <motion.div
            key={current}
            initial={{ opacity: 0, y: 8 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -8 }}
            transition={{ duration: 0.25 }}
            className="pt-4"
          >
            <a
              href={PROJECTS[current].href}
              target="_blank"
              rel="noopener noreferrer"
              className="group inline-block"
            >
              <h3 className="font-bold text-base sm:text-lg bg-gradient-to-b from-red-900 via-red-600 to-red-300 text-transparent bg-clip-text group-hover:opacity-75 transition-opacity">
                {PROJECTS[current].name}
              </h3>
            </a>
            <br />
            <a
              href={PROJECTS[current].href}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-3 inline-flex items-center gap-1.5 text-xs text-gray-400 hover:text-red-700 transition-colors"
            >
              <svg
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                className="w-3.5 h-3.5 flex-shrink-0"
              >
                <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6" />
                <polyline points="15 3 21 3 21 9" />
                <line x1="10" y1="14" x2="21" y2="3" />
              </svg>
              {PROJECTS[current].href}
            </a>

            <div className="pt-2 flex items-center gap-2">
              <h4 className="font-medium text-sm bg-gradient-to-b from-red-950 via-red-700 to-red-300 text-transparent bg-clip-text whitespace-nowrap">
                Technologies:
              </h4>
              <ul className="flex flex-wrap">
                <TechnologyList technologies={PROJECTS[current].technologies} />
              </ul>
            </div>
          </motion.div>
        </AnimatePresence>

        {/* ── Dot indicators ── */}
        <div className="flex justify-center items-center gap-2 mt-5">
          {PROJECTS.map((_, i) => (
            <button
              key={i}
              onClick={() => goTo(i, i > current ? 1 : -1)}
              aria-label={`Go to project ${i + 1}`}
              className={`h-2 rounded-full transition-all duration-300 ${
                i === current
                  ? "w-6 bg-red-700"
                  : "w-2 bg-gray-400 hover:bg-gray-600"
              }`}
            />
          ))}
        </div>
      </div>
    </section>
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
    Vite:     { href: "https://vite.dev/",       imgsrc: "./vite_logo.png" },
    Supabase: { href: "https://supabase.com/",   imgsrc: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/supabase/supabase-original.svg" },
  };

  return technologies.map((tech, i) => {
    const entry = technologyList[tech];
    return (
      <li key={i} className="px-2 group">
        <a href={entry?.href ?? "/"} target="_blank" rel="noopener noreferrer">
          <img className="h-5 w-5" src={entry?.imgsrc ?? ""} alt={tech} />
          <span className="group-hover:visible absolute text-xs invisible border-2 border-gray-300 rounded-3xl p-2 bg-red-900 text-white">
            {tech}
          </span>
        </a>
      </li>
    );
  });
};

export default Portfolio;
