import { useRef } from "react";
import { cn } from "../../../lib/cn";
import { useIsVisible } from "../../../hooks/useIsVisible";
import { useActiveNav } from "../../../context/ActiveNavContext";
import { Badge, Button, SectionHeading } from "../../ui";
import { highlights } from "../../../data/skills";
import { aboutParagraphs } from "../../../data/about";
import { site } from "../../../data/site";

/** Left column of the About section: intro, highlights, bio, and CTAs. */
export function AboutIntro() {
  const [, setActiveNav] = useActiveNav();
  const headingRef = useRef<HTMLDivElement>(null);
  const headingVisible = useIsVisible(headingRef);
  const bodyRef = useRef<HTMLDivElement>(null);
  const bodyVisible = useIsVisible(bodyRef);

  const handleViewWork = () => {
    setActiveNav("portfolio");
    document
      .querySelector("#portfolio")
      ?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <div className="lg:w-[38%] flex-shrink-0 text-center lg:text-left">
      <div
        ref={headingRef}
        className={cn(
          "relative",
          headingVisible ? "animate-fadeLeftToRight" : "opacity-0"
        )}
      >
        <SectionHeading
          gradient="from-red-950 via-red-800 to-red-300"
          className="inline-block"
        >
          Who am I?
        </SectionHeading>
        <h4 className="pt-6 font-header text-xl font-medium text-black sm:text-2xl lg:text-3xl">
          I'm Noel Angelo Babao, <br /> a Full-Stack Software Developer &amp;
          U.S. Navy Veteran
        </h4>
      </div>
      <div
        ref={bodyRef}
        className={cn(
          "relative",
          bodyVisible ? "animate-fadeLeftToRight" : "opacity-0"
        )}
      >
        <div className="flex flex-wrap justify-center lg:justify-start gap-2 pt-6">
          {highlights.map((item) => (
            <Badge key={item} tone="highlight">
              {item}
            </Badge>
          ))}
        </div>
        {aboutParagraphs.map((paragraph, i) => (
          <p
            key={i}
            className={cn(
              i === 0 ? "pt-6" : "pt-4",
              "font-body leading-relaxed text-gray-600"
            )}
          >
            {paragraph}
          </p>
        ))}
        <div className="flex flex-wrap justify-center lg:justify-start gap-3 pt-6">
          <Button as="a" href={`mailto:${site.email}`} variant="primary">
            Get in touch
          </Button>
          <Button variant="outline" onClick={handleViewWork}>
            View my work
          </Button>
        </div>
      </div>
    </div>
  );
}
