import { useRef } from "react";
import { cn } from "../../../lib/cn";
import { useIsVisible } from "../../../hooks/useIsVisible";
import { Section, Container, SectionHeading } from "../../ui";
import { ProjectCard } from "./ProjectCard";
import { projects } from "../../../data/projects";

export function Portfolio() {
  const featured = projects.filter((p) => p.featured);
  const rest = projects.filter((p) => !p.featured);

  return (
    <Section id="portfolio" className="py-16 md:py-20">
      <Container>
        <PortfolioHeading />

        {/* Featured hero + card grid */}
        <div className="pt-12 flex flex-col gap-6">
          {featured.map((project) => (
            <ProjectCard key={project.name} project={project} featured />
          ))}
          <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {rest.map((project) => (
              <ProjectCard key={project.name} project={project} />
            ))}
          </div>
        </div>
      </Container>
    </Section>
  );
}

function PortfolioHeading() {
  const ref = useRef<HTMLDivElement>(null);
  const isVisible = useIsVisible(ref);

  return (
    <div
      ref={ref}
      className={cn("relative", isVisible ? "animate-fadeIn" : "opacity-0")}
    >
      <SectionHeading
        gradient="from-red-900 via-red-800 to-red-300"
        className="text-center"
      >
        Check out my Portfolio
      </SectionHeading>
      <h3 className="pt-6 font-header text-center text-xl font-medium text-black sm:text-2xl lg:text-3xl">
        Here are my previous Projects
      </h3>
    </div>
  );
}
