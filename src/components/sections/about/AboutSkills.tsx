import { useRef } from "react";
import { cn } from "../../../lib/cn";
import { useIsVisible } from "../../../hooks/useIsVisible";
import { SkillCategory } from "./SkillCategory";
import { Certifications } from "./Certifications";
import { skillCategories } from "../../../data/skills";

const GRADIENT_SUBHEADING =
  "font-header text-center lg:text-left text-xl font-medium sm:text-2xl lg:text-3xl bg-gradient-to-b from-red-950 via-red-800 to-red-300 text-transparent bg-clip-text mb-6";

/** Right column of the About section: grouped skills and certifications. */
export function AboutSkills() {
  const ref = useRef<HTMLDivElement>(null);
  const isVisible = useIsVisible(ref);

  return (
    <div className="pt-10 lg:pt-0 flex-1">
      <div
        ref={ref}
        className={cn(
          "relative",
          isVisible
            ? "lg:animate-fadeRightToLeft animate-fadeLeftToRight"
            : "opacity-0"
        )}
      >
        <h4 className={GRADIENT_SUBHEADING}>Skills</h4>
        <div className="space-y-5">
          {skillCategories.map((category) => (
            <SkillCategory
              key={category.label}
              label={category.label}
              skills={category.skills}
            />
          ))}
        </div>

        <Certifications headingClassName={GRADIENT_SUBHEADING} />
      </div>
    </div>
  );
}
