import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { Section, Container, SectionHeading } from "../../ui";
import { TimelineEntry } from "./TimelineEntry";
import { workExperiences } from "../../../data/work-history";

export function WorkHistory() {
  const titleRef = useRef<HTMLDivElement>(null);
  const titleInView = useInView(titleRef, { once: true, margin: "-100px" });

  return (
    <Section
      id="workhistory"
      className="bg-gray-200 pt-14 sm:pt-20 pb-16 sm:pb-24"
    >
      <Container>
        <motion.div
          ref={titleRef}
          initial={{ opacity: 0, y: 20 }}
          animate={titleInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-10 lg:mb-20"
        >
          <SectionHeading
            gradient="from-red-900 via-red-700 to-red-300"
            className="inline-block"
          >
            Work Experience
          </SectionHeading>
        </motion.div>

        <div className="relative">
          {/* Vertical center line — desktop only */}
          <div className="hidden lg:block absolute left-1/2 top-0 bottom-0 w-px -translate-x-1/2 bg-gradient-to-b from-transparent via-red-700/50 to-transparent" />

          {workExperiences.map((exp, index) => (
            <TimelineEntry
              key={index}
              experience={exp}
              index={index}
              isLast={index === workExperiences.length - 1}
            />
          ))}
        </div>
      </Container>
    </Section>
  );
}
