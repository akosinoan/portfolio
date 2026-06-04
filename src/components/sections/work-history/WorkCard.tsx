import { useEffect, useState } from "react";
import { motion, AnimatePresence, type Variants } from "framer-motion";
import { Card, Badge } from "../../ui";
import type { WorkExperience } from "../../../types";

const stagger: Variants = {
  visible: { transition: { staggerChildren: 0.08, delayChildren: 0.1 } },
};

const fade: Variants = {
  hidden: { opacity: 0, y: 10 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.35 } },
};

/** Expandable work-experience card; tapping it toggles the achievements list. */
export function WorkCard({
  experience,
  inView,
}: {
  experience: WorkExperience;
  inView: boolean;
}) {
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    if (!inView) setIsOpen(false);
  }, [inView]);

  return (
    <Card
      onClick={() => setIsOpen((o) => !o)}
      whileHover={{ y: -3, boxShadow: "0 20px 40px rgba(0,0,0,0.10)" }}
      transition={{ duration: 0.2 }}
      gradient={experience.gradient}
      className={`border ${experience.accentBorder} bg-white/70 backdrop-blur-sm shadow-md cursor-pointer select-none`}
    >
      <motion.div
        variants={stagger}
        initial="hidden"
        animate={inView ? "visible" : "hidden"}
        className="p-5"
      >
        {/* Name + position + job type badge */}
        <motion.div
          variants={fade}
          className="flex items-start justify-between gap-2 flex-wrap mb-2"
        >
          <div>
            <h3
              className={`text-base font-bold bg-gradient-to-r ${experience.gradient} bg-clip-text text-transparent leading-tight`}
            >
              {experience.name}
            </h3>
            <p className="text-gray-700 text-sm font-medium mt-0.5">
              {experience.position}
            </p>
          </div>
          <span className="text-xs px-2 py-0.5 rounded-full border border-gray-300 bg-white/60 text-gray-500 whitespace-nowrap">
            {experience.jobType}
          </span>
        </motion.div>

        {/* Date + location */}
        <motion.div
          variants={fade}
          className="flex flex-wrap gap-x-4 gap-y-0.5 text-xs text-gray-500 mb-3"
        >
          <span>
            📅 {experience.date} · {experience.duration}
          </span>
          <span>📍 {experience.location}</span>
        </motion.div>

        {/* Technology badges — always visible */}
        <motion.div variants={fade} className="flex flex-wrap gap-1.5 mb-4">
          {experience.technologies.map((tech, i) => (
            <Badge key={i} tone="tech">
              {tech}
            </Badge>
          ))}
        </motion.div>

        {/* Description toggle button */}
        <motion.div variants={fade} className="flex">
          <div
            className={`inline-flex items-center gap-1.5 px-3 py-1 rounded-full border text-xs font-medium transition-colors ${isOpen ? "bg-gray-700 border-gray-700 text-white" : "border-gray-300 bg-white/60 text-gray-500"}`}
          >
            Description
            <motion.svg
              animate={{ rotate: isOpen ? 180 : 0 }}
              transition={{ duration: 0.3, ease: "easeInOut" }}
              className="w-3 h-3"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2.5"
            >
              <polyline points="6 9 12 15 18 9" />
            </motion.svg>
          </div>
        </motion.div>
      </motion.div>

      {/* Accordion body — achievements */}
      <AnimatePresence initial={false}>
        {isOpen && (
          <motion.div
            key="body"
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.35, ease: [0.04, 0.62, 0.23, 0.98] }}
            style={{ overflow: "hidden" }}
          >
            <ul className="px-5 pb-5 pt-1 border-t border-gray-200/60 space-y-1.5">
              {experience.achievements.map((ach, i) => (
                <motion.li
                  key={i}
                  initial={{ opacity: 0, x: -12 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: i * 0.07, duration: 0.28 }}
                  className="flex items-start gap-2 text-xs text-gray-600 leading-relaxed"
                >
                  <span
                    className={`mt-1.5 flex-shrink-0 w-1.5 h-1.5 rounded-full bg-gradient-to-r ${experience.gradient}`}
                  />
                  {ach}
                </motion.li>
              ))}
            </ul>
          </motion.div>
        )}
      </AnimatePresence>
    </Card>
  );
}
