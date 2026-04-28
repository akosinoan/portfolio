import { motion } from "framer-motion";
import { Section, SectionHeader } from "@/components/ui/Section";
import { Card } from "@/components/ui/Card";
import { Badge } from "@/components/ui/Badge";
import { Button } from "@/components/ui/Button";
import { ExternalLinkIcon, GithubIcon } from "@/components/icons";
import { projects } from "@/data/projects";
import type { Project } from "@/types";
import { cn } from "@/lib/cn";

export function Projects() {
  return (
    <Section id="work">
      <SectionHeader
        eyebrow="Selected Work"
        title="Projects."
        description="Six projects, ordered by depth — Rust and backend systems leading, production frontends trailing. Two are still in private repos; the rest are live."
      />
      <div className="grid gap-6 md:grid-cols-2">
        {projects.map((p, i) => (
          <ProjectCard key={p.id} project={p} index={i} />
        ))}
      </div>
    </Section>
  );
}

function ProjectCard({ project, index }: { project: Project; index: number }) {
  const isComingSoon = project.status === "coming-soon";

  return (
    <motion.div
      initial={{ opacity: 0, y: 16 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-80px" }}
      transition={{ duration: 0.5, delay: index * 0.04, ease: "easeOut" }}
    >
      <Card
        interactive
        className={cn(
          "flex h-full flex-col gap-5",
          isComingSoon && "border-dashed"
        )}
      >
        <div className="flex items-start justify-between gap-4">
          <div>
            <h3 className="text-lg font-semibold tracking-tight text-fg">
              {project.title}
            </h3>
            <p className="mt-1 text-sm text-muted">{project.oneLiner}</p>
          </div>
          {project.badge && (
            <Badge tone={isComingSoon ? "accent" : "default"} className="shrink-0">
              {project.badge}
            </Badge>
          )}
        </div>

        <p className="text-sm leading-relaxed text-muted">
          {project.description}
        </p>

        <ul className="flex flex-wrap gap-1.5">
          {project.stack.map((s) => (
            <li key={s}>
              <Badge>{s}</Badge>
            </li>
          ))}
        </ul>

        <div className="mt-auto flex flex-wrap gap-2 pt-2">
          {project.links?.github ? (
            <Button
              as="a"
              href={project.links.github}
              target="_blank"
              rel="noreferrer"
              variant="ghost"
              size="sm"
            >
              <GithubIcon />
              GitHub
            </Button>
          ) : (
            <Button
              as="a"
              size="sm"
              variant="ghost"
              disabled
              disabledLabel="Publishing soon"
            >
              <GithubIcon />
              GitHub
            </Button>
          )}

          {project.links?.demo ? (
            <Button
              as="a"
              href={project.links.demo}
              target="_blank"
              rel="noreferrer"
              variant="ghost"
              size="sm"
            >
              <ExternalLinkIcon />
              Live
            </Button>
          ) : (
            <Button
              as="a"
              size="sm"
              variant="ghost"
              disabled
              disabledLabel="Publishing soon"
            >
              <ExternalLinkIcon />
              Live
            </Button>
          )}
        </div>
      </Card>
    </motion.div>
  );
}
