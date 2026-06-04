import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { Section, Container, SectionHeading } from "../../ui";
import { EducationEntry } from "./EducationEntry";
import { CertCard } from "./CertCard";
import { educationEntries } from "../../../data/education";
import { certifications } from "../../../data/certifications";

export function Education() {
  const titleRef = useRef<HTMLDivElement>(null);
  const titleInView = useInView(titleRef, { once: true, margin: "-100px" });
  const eduSubRef = useRef<HTMLHeadingElement>(null);
  const eduSubInView = useInView(eduSubRef, { once: true, margin: "-80px" });
  const certSubRef = useRef<HTMLHeadingElement>(null);
  const certSubInView = useInView(certSubRef, { once: true, margin: "-80px" });

  return (
    <Section id="education" className="pt-14 sm:pt-20 pb-16 sm:pb-24">
      <Container>
        <motion.div
          ref={titleRef}
          initial={{ opacity: 0, y: 20 }}
          animate={titleInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-10 lg:mb-16"
        >
          <SectionHeading
            gradient="from-red-900 via-red-700 to-red-300"
            className="inline-block"
          >
            Education & Certificates
          </SectionHeading>
        </motion.div>

        <div className="mb-16 lg:mb-20">
          <motion.h3
            ref={eduSubRef}
            initial={{ opacity: 0, y: 15 }}
            animate={eduSubInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5 }}
            className="text-2xl sm:text-3xl font-semibold text-gray-700 mb-8 lg:text-center"
          >
            Education
          </motion.h3>

          <div className="relative">
            <div className="hidden lg:block absolute left-1/2 top-0 bottom-0 w-px -translate-x-1/2 bg-gradient-to-b from-transparent via-red-700/50 to-transparent" />

            {educationEntries.map((entry, index) => (
              <EducationEntry
                key={index}
                entry={entry}
                isLast={index === educationEntries.length - 1}
              />
            ))}
          </div>
        </div>

        <div>
          <motion.h3
            ref={certSubRef}
            initial={{ opacity: 0, y: 15 }}
            animate={certSubInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5 }}
            className="text-2xl sm:text-3xl font-semibold text-gray-700 mb-8 lg:text-center"
          >
            Certifications
          </motion.h3>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {certifications.map((cert, index) => (
              <CertCard key={index} cert={cert} index={index} />
            ))}
          </div>
        </div>
      </Container>
    </Section>
  );
}
