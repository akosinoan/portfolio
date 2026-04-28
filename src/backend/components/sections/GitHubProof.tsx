import { motion } from "framer-motion";
import { Section, SectionHeader } from "@/components/ui/Section";
import { Card } from "@/components/ui/Card";
import { Button } from "@/components/ui/Button";
import { ArrowRightIcon, GithubIcon } from "@/components/icons";
import { pinnedRepos } from "@/data/repos";
import { socials } from "@/data/socials";

const langDot: Record<string, string> = {
  Rust: "bg-[#dea584]",
  TypeScript: "bg-[#3178c6]",
  JavaScript: "bg-[#f1e05a]",
};

export function GitHubProof() {
  return (
    <Section id="github">
      <div className="flex flex-wrap items-end justify-between gap-6">
        <SectionHeader
          eyebrow="GitHub"
          title="Code is the receipt."
          description="Pinned repos. Two are still going public; the third is live."
        />
        <Button as="a" href={socials.github} target="_blank" rel="noreferrer" variant="ghost">
          <GithubIcon />
          @akosinoan
          <ArrowRightIcon />
        </Button>
      </div>

      <div className="grid gap-4 md:grid-cols-3">
        {pinnedRepos.map((r, i) => (
          <motion.a
            key={r.name}
            href={r.url}
            target="_blank"
            rel="noreferrer"
            initial={{ opacity: 0, y: 12 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.4, delay: i * 0.05, ease: "easeOut" }}
            className="group block focus-visible:outline-none"
          >
            <Card interactive className="h-full">
              <div className="flex items-center gap-2 text-fg">
                <GithubIcon className="text-muted" />
                <span className="font-mono text-sm">{r.name}</span>
              </div>
              <p className="mt-3 text-sm leading-relaxed text-muted">
                {r.description}
              </p>
              <div className="mt-5 flex items-center gap-2 text-xs text-muted">
                <span
                  className={`h-2.5 w-2.5 rounded-full ${
                    langDot[r.language] ?? "bg-zinc-500"
                  }`}
                />
                <span>{r.language}</span>
              </div>
            </Card>
          </motion.a>
        ))}
      </div>
    </Section>
  );
}
