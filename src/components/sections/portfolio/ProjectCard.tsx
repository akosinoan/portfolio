import { useRef, type SyntheticEvent } from "react";
import { cn } from "../../../lib/cn";
import { useIsVisible } from "../../../hooks/useIsVisible";
import { Card } from "../../ui";
import { TechnologyList } from "./TechnologyList";
import type { Project } from "../../../types";

export function ProjectCard({
  project,
  featured = false,
}: {
  project: Project;
  featured?: boolean;
}) {
  const ref = useRef<HTMLDivElement>(null);
  const isVisible = useIsVisible(ref);

  // Fall back to the bundled screenshot if the live og-image fails to load.
  const handleImgError = (e: SyntheticEvent<HTMLImageElement>) => {
    const img = e.currentTarget;
    if (project.imgsrc && img.dataset.fallback !== "true") {
      img.dataset.fallback = "true";
      img.src = project.imgsrc;
    }
  };

  return (
    <Card
      ref={ref}
      className={cn(
        "group relative flex border-4 border-gray-200 bg-white shadow-2xl transition-all duration-500 hover:-translate-y-1.5 hover:border-red-300 hover:shadow-[0_0_35px_-5px_rgba(220,38,38,0.6)]",
        featured ? "flex-col lg:flex-row" : "flex-col",
        isVisible ? "animate-fadeIn" : "opacity-0"
      )}
    >
      {/* Screenshot — banner aspect, no crop */}
      <a
        href={project.demo}
        target="_blank"
        rel="noopener noreferrer"
        aria-label={`Open ${project.name}`}
        className={cn(
          "relative block aspect-[1200/630] overflow-hidden bg-gray-100",
          featured && "lg:w-3/5"
        )}
      >
        <img
          src={project.ogImage ?? project.imgsrc}
          alt={project.name}
          loading="lazy"
          onError={handleImgError}
          className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
        />
        <span className="pointer-events-none absolute inset-0 bg-gradient-to-t from-red-950/30 to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
      </a>

      {/* Body */}
      <div
        className={cn(
          "flex flex-1 flex-col gap-2",
          featured ? "p-6 lg:justify-center" : "p-4"
        )}
      >
        <a
          href={project.demo}
          target="_blank"
          rel="noopener noreferrer"
          className="group/title self-start"
        >
          <h3
            className={cn(
              "font-bold bg-gradient-to-b from-red-900 via-red-600 to-red-300 bg-clip-text text-transparent transition-opacity group-hover/title:opacity-75",
              featured ? "text-2xl sm:text-3xl" : "text-lg"
            )}
          >
            {project.name}
          </h3>
        </a>

        <p className={cn("text-gray-500", featured ? "text-base" : "text-sm")}>
          {project.description}
        </p>

        <ul className="flex flex-wrap pt-1">
          <TechnologyList techs={project.technologies} />
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
    </Card>
  );
}
