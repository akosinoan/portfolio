import { motion } from "framer-motion";
import { Section } from "@/components/ui/Section";
import { Button } from "@/components/ui/Button";
import { GithubIcon, LinkedinIcon, MailIcon } from "@/components/icons";
import { socials } from "@/data/socials";

export function FinalCTA() {
  return (
    <Section id="contact" className="pb-32">
      <motion.div
        initial={{ opacity: 0, y: 16 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-80px" }}
        transition={{ duration: 0.6, ease: "easeOut" }}
        className="rounded-2xl border border-border bg-surface/50 p-10 sm:p-14"
      >
        <p className="font-mono text-[11px] uppercase tracking-[0.18em] text-accent">
          Get in touch
        </p>
        <h2 className="mt-4 max-w-3xl text-3xl font-semibold tracking-tight text-fg sm:text-4xl lg:text-5xl">
          Looking for a backend engineer who can ship real systems?
        </h2>
        <p className="mt-4 text-lg text-muted">Let's talk.</p>

        <div className="mt-8 flex flex-wrap items-center gap-3">
          <Button as="a" href={socials.emailHref} variant="primary">
            <MailIcon />
            Email
          </Button>
          <Button
            as="a"
            href={socials.linkedin}
            target="_blank"
            rel="noreferrer"
            variant="ghost"
          >
            <LinkedinIcon />
            LinkedIn
          </Button>
          <Button
            as="a"
            href={socials.github}
            target="_blank"
            rel="noreferrer"
            variant="ghost"
          >
            <GithubIcon />
            GitHub
          </Button>
        </div>

        <p className="mt-8 text-xs text-muted">
          Based in the Chicago area · Open to remote and hybrid backend roles
        </p>
      </motion.div>
    </Section>
  );
}
