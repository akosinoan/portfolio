import { motion } from "framer-motion";
import { Section, SectionHeader } from "@/components/ui/Section";
import { Card } from "@/components/ui/Card";
import { Badge } from "@/components/ui/Badge";
import { exploring, stackGroups } from "@/data/stack";

export function TechStack() {
  return (
    <Section id="stack">
      <SectionHeader
        eyebrow="Stack"
        title="Tools I reach for."
        description="What I've shipped with — drawn from work history, personal projects, and active study. Defensible in any conversation."
      />
      <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {stackGroups.map((group, i) => (
          <motion.div
            key={group.label}
            initial={{ opacity: 0, y: 12 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.4, delay: i * 0.04, ease: "easeOut" }}
          >
            <Card className="h-full">
              <p className="font-mono text-[11px] uppercase tracking-[0.18em] text-muted">
                {group.label}
              </p>
              <ul className="mt-4 flex flex-wrap gap-1.5">
                {group.items.map((item) => (
                  <li key={item}>
                    <Badge>{item}</Badge>
                  </li>
                ))}
              </ul>
            </Card>
          </motion.div>
        ))}
      </div>

      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true, margin: "-80px" }}
        transition={{ duration: 0.5, delay: 0.2 }}
        className="mt-8 flex flex-wrap items-center gap-x-3 gap-y-2 border-t border-border pt-6"
      >
        <p className="font-mono text-[11px] uppercase tracking-[0.18em] text-muted">
          Currently exploring
        </p>
        <ul className="flex flex-wrap gap-1.5">
          {exploring.map((item) => (
            <li key={item}>
              <Badge tone="accent">{item}</Badge>
            </li>
          ))}
        </ul>
      </motion.div>
    </Section>
  );
}
