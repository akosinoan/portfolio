import { motion } from "framer-motion";
import { Section, SectionHeader } from "@/components/ui/Section";

export function HowIThink() {
  return (
    <Section id="thinking">
      <SectionHeader eyebrow="How I think" title="A few principles." />
      <motion.div
        initial={{ opacity: 0, y: 16 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-80px" }}
        transition={{ duration: 0.6, ease: "easeOut" }}
        className="grid gap-8 lg:grid-cols-3"
      >
        <Principle
          title="Read carefully. Debug patiently."
          body="I won't sign off on something I can't defend. The Navy taught me to own quality before anyone else has to ask for it; engineering work since has been the same instinct in a different uniform."
        />
        <Principle
          title="Smaller surface, clearer reasoning."
          body="I'd rather ship a smaller surface I can reason about than a larger one I can't. The right boundary or the right data model can make whole classes of bugs impossible."
        />
        <Principle
          title="Correct, efficient, operational."
          body="Three questions I bring to every change — is this code correct, is it efficient, and does it hold up under real operational use? Most of my work is making the answer to all three be yes."
        />
      </motion.div>
    </Section>
  );
}

function Principle({ title, body }: { title: string; body: string }) {
  return (
    <div className="border-l border-border pl-5">
      <h3 className="text-base font-semibold tracking-tight text-fg">
        {title}
      </h3>
      <p className="mt-2 text-sm leading-relaxed text-muted">{body}</p>
    </div>
  );
}
