import { motion } from "framer-motion";
import { Section, SectionHeader } from "@/components/ui/Section";
import { Badge } from "@/components/ui/Badge";
import { CheckIcon } from "@/components/icons";
import { certifications, timeline } from "@/data/timeline";
import type { TimelineEntry } from "@/types";
import { cn } from "@/lib/cn";

export function Timeline() {
  return (
    <Section id="timeline">
      <SectionHeader
        eyebrow="Timeline"
        title="Where I've been."
        description="A condensed arc — engineering today, three years on a Boeing contract before that, four years in the U.S. Navy before that, full-stack work before that."
      />

      <ol className="relative ml-2 border-l border-border pl-8">
        {timeline.map((entry, i) => (
          <Item key={entry.id} entry={entry} index={i} />
        ))}
      </ol>

      <div className="mt-16">
        <h3 className="font-mono text-[11px] uppercase tracking-[0.18em] text-muted">
          Education &amp; certifications
        </h3>
        <ul className="mt-5 grid gap-3 sm:grid-cols-2">
          {certifications.map((c) => (
            <li
              key={c.id}
              className="flex items-start gap-3 rounded-lg border border-border bg-surface/50 p-4"
            >
              <span
                className={cn(
                  "mt-0.5 flex h-5 w-5 shrink-0 items-center justify-center rounded-full",
                  c.inProgress
                    ? "border border-accent/40 text-accent"
                    : "bg-accent/15 text-accent"
                )}
              >
                {c.inProgress ? (
                  <span className="h-1.5 w-1.5 rounded-full bg-accent" />
                ) : (
                  <CheckIcon />
                )}
              </span>
              <div>
                <p className="text-sm font-medium text-fg">{c.name}</p>
                <p className="mt-0.5 text-xs text-muted">
                  {c.issuer} · {c.date}
                </p>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </Section>
  );
}

function Item({ entry, index }: { entry: TimelineEntry; index: number }) {
  const dotTone = entry.kind === "milestone" ? "bg-accent" : "bg-zinc-600";

  return (
    <motion.li
      initial={{ opacity: 0, y: 10 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-60px" }}
      transition={{ duration: 0.4, delay: index * 0.03, ease: "easeOut" }}
      className="relative pb-10 last:pb-0"
    >
      <span
        className={cn(
          "absolute -left-[33px] top-1.5 h-2.5 w-2.5 rounded-full ring-4 ring-bg",
          dotTone
        )}
      />
      <div className="flex flex-wrap items-baseline gap-x-3">
        <p className="font-mono text-[11px] uppercase tracking-[0.16em] text-muted">
          {entry.period}
        </p>
        {entry.kind !== "milestone" && (
          <Badge>{entry.kind === "work" ? "Work" : "Education"}</Badge>
        )}
      </div>
      <h3 className="mt-2 text-base font-semibold tracking-tight text-fg sm:text-lg">
        {entry.title}
      </h3>
      {(entry.org || entry.location) && (
        <p className="mt-0.5 text-sm text-muted">
          {entry.org}
          {entry.org && entry.location && " · "}
          {entry.location}
        </p>
      )}
      {entry.bullets && entry.bullets.length > 0 && (
        <ul className="mt-3 space-y-1.5 text-sm leading-relaxed text-muted">
          {entry.bullets.map((b, j) => (
            <li key={j} className="flex gap-2">
              <span className="mt-2 h-1 w-1 shrink-0 rounded-full bg-zinc-700" />
              <span>{b}</span>
            </li>
          ))}
        </ul>
      )}
      {entry.stack && entry.stack.length > 0 && (
        <ul className="mt-3 flex flex-wrap gap-1.5">
          {entry.stack.map((s) => (
            <li key={s}>
              <Badge>{s}</Badge>
            </li>
          ))}
        </ul>
      )}
    </motion.li>
  );
}
