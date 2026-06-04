import { useRef } from "react";
import { motion, useInView, type Variants } from "framer-motion";
import { TimelineDot } from "../../ui";
import { WorkCard } from "./WorkCard";
import type { WorkExperience } from "../../../types";

/** One row of the work timeline: alternating card/date on desktop, stacked on mobile. */
export function TimelineEntry({
  experience,
  index,
  isLast,
}: {
  experience: WorkExperience;
  index: number;
  isLast: boolean;
}) {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: false, margin: "-80px" });
  const isEven = index % 2 === 0;

  const cardAnim: Variants = {
    hidden: { opacity: 0, x: isEven ? -60 : 60 },
    visible: { opacity: 1, x: 0, transition: { duration: 0.55, ease: "easeOut" } },
  };

  const card = (
    <motion.div
      variants={cardAnim}
      initial="hidden"
      animate={inView ? "visible" : "hidden"}
      className="w-full max-w-md"
    >
      <WorkCard experience={experience} inView={inView} />
    </motion.div>
  );

  return (
    <div ref={ref}>
      {/* Desktop layout — alternating left/right */}
      <div className="hidden lg:flex items-center py-6">
        <div className="flex-1 flex justify-end pr-8">
          {isEven ? card : <DateBlock experience={experience} inView={inView} className="text-right" />}
        </div>

        <div className="relative z-10 mx-4 flex-shrink-0">
          <WorkDot experience={experience} inView={inView} />
        </div>

        <div className="flex-1 pl-8">
          {!isEven ? card : <DateBlock experience={experience} inView={inView} />}
        </div>
      </div>

      {/* Mobile layout — stacked with left line */}
      <div className="lg:hidden flex gap-4 mb-8">
        <div className="flex flex-col items-center flex-shrink-0">
          <WorkDot experience={experience} inView={inView} size="sm" />
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
          <WorkCard experience={experience} inView={inView} />
        </motion.div>
      </div>
    </div>
  );
}

function DateBlock({
  experience,
  inView,
  className,
}: {
  experience: WorkExperience;
  inView: boolean;
  className?: string;
}) {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={inView ? { opacity: 1 } : { opacity: 0 }}
      transition={{ delay: 0.35 }}
      className={className}
    >
      <p className="text-gray-500 text-sm font-medium">{experience.date}</p>
      <p className="text-gray-400 text-xs">{experience.duration}</p>
    </motion.div>
  );
}

function WorkDot({
  experience,
  inView,
  size = "lg",
}: {
  experience: WorkExperience;
  inView: boolean;
  size?: "lg" | "sm";
}) {
  return (
    <TimelineDot dotBg={experience.dotBg} inView={inView} size={size}>
      {experience.imgSrc ? (
        <img
          src={experience.imgSrc}
          alt={experience.name}
          className="w-full h-full object-cover rounded-full relative z-10"
        />
      ) : (
        <span className="text-white font-bold text-sm relative z-10">
          {experience.name.charAt(0)}
        </span>
      )}
    </TimelineDot>
  );
}
