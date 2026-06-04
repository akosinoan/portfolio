import { useRef } from "react";
import { motion, useInView, type Variants } from "framer-motion";
import { TimelineDot, IconImg } from "../../ui";
import { EducationCard } from "./EducationCard";
import { firstLetter } from "../../../utils/firstLetter";
import type { EducationEntry as EducationEntryModel } from "../../../types";

/** One row of the education timeline: date on the left, card on the right. */
export function EducationEntry({
  entry,
  isLast,
}: {
  entry: EducationEntryModel;
  isLast: boolean;
}) {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: false, margin: "-80px" });

  const cardAnim: Variants = {
    hidden: { opacity: 0, x: 60 },
    visible: { opacity: 1, x: 0, transition: { duration: 0.55, ease: "easeOut" } },
  };

  return (
    <div ref={ref}>
      {/* Desktop layout */}
      <div
        className={`hidden lg:flex items-center ${entry.featured ? "py-8" : "py-6"}`}
      >
        <div className="flex-1 flex justify-end pr-8">
          <motion.div
            initial={{ opacity: 0 }}
            animate={inView ? { opacity: 1 } : { opacity: 0 }}
            transition={{ delay: 0.35 }}
            className="text-right"
          >
            <p
              className={`font-medium ${entry.featured ? "text-gray-700 text-base" : "text-gray-500 text-sm"}`}
            >
              {entry.date}
            </p>
            {entry.location && (
              <p className="text-gray-400 text-xs mt-0.5">{entry.location}</p>
            )}
          </motion.div>
        </div>

        <div className="relative z-10 mx-4 flex-shrink-0">
          <EducationDot entry={entry} inView={inView} />
        </div>

        <div className="flex-1 pl-8">
          <motion.div
            variants={cardAnim}
            initial="hidden"
            animate={inView ? "visible" : "hidden"}
            className={`w-full ${entry.featured ? "max-w-xl" : "max-w-md"}`}
          >
            <EducationCard entry={entry} />
          </motion.div>
        </div>
      </div>

      {/* Mobile layout */}
      <div className="lg:hidden flex gap-4 mb-8">
        <div className="flex flex-col items-center flex-shrink-0">
          <EducationDot entry={entry} inView={inView} size="sm" />
          {!isLast && (
            <div className="w-px flex-1 min-h-6 mt-2 bg-gradient-to-b from-red-700/50 to-transparent" />
          )}
        </div>
        <motion.div
          initial={{ opacity: 0, x: -25 }}
          animate={inView ? { opacity: 1, x: 0 } : { opacity: 0, x: -25 }}
          transition={{ duration: 0.5 }}
          className="flex-1 pb-2"
        >
          <EducationCard entry={entry} />
        </motion.div>
      </div>
    </div>
  );
}

function EducationDot({
  entry,
  inView,
  size = "lg",
}: {
  entry: EducationEntryModel;
  inView: boolean;
  size?: "lg" | "sm";
}) {
  return (
    <TimelineDot
      dotBg={entry.dotBg}
      inView={inView}
      size={size}
      featured={entry.featured}
    >
      {entry.imgSrc ? (
        <div className="relative z-10 w-full h-full rounded-full bg-white flex items-center justify-center p-1.5 overflow-hidden">
          <IconImg
            src={entry.imgSrc}
            alt={entry.school}
            className="w-full h-full object-contain"
          />
        </div>
      ) : entry.featured ? (
        <svg
          className="w-7 h-7 text-white relative z-10"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2.2"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <path d="M22 10 12 5 2 10l10 5 10-5Z" />
          <path d="M6 12v5c0 1.5 3 3 6 3s6-1.5 6-3v-5" />
        </svg>
      ) : (
        <span className="text-white font-bold text-sm relative z-10">
          {firstLetter(entry.school)}
        </span>
      )}
    </TimelineDot>
  );
}
