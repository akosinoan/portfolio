import { motion } from "framer-motion";
import { Button } from "@/components/ui/Button";
import { Container } from "@/components/ui/Container";
import { CodeBlock } from "@/components/ui/CodeBlock";
import { ArrowRightIcon } from "@/components/icons";
import { socials } from "@/data/socials";

export function Hero() {
  return (
    <section
      id="hero"
      className="relative overflow-hidden pt-32 pb-20 sm:pt-36 sm:pb-24 lg:pt-40 lg:pb-28"
    >
      <BackgroundGlow />
      <Container>
        <div className="grid items-center gap-12 lg:grid-cols-12 lg:gap-10">
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: "easeOut" }}
            className="lg:col-span-7"
          >
            <p className="mb-5 inline-flex items-center gap-2 font-mono text-[11px] uppercase tracking-[0.18em] text-muted">
              <span className="relative flex h-2 w-2">
                <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-accent opacity-60" />
                <span className="relative inline-flex h-2 w-2 rounded-full bg-accent" />
              </span>
              Backend Engineer · Chicago Area · Open to roles
            </p>

            <h1 className="text-4xl font-semibold tracking-tight text-fg sm:text-5xl lg:text-6xl">
              Building fast, reliable systems
              <span className="block text-accent">in Rust.</span>
            </h1>

            <p className="mt-6 max-w-2xl text-base leading-relaxed text-muted sm:text-lg">
              Software engineer with a Computer Science degree, full-stack
              production experience, and U.S. Navy–trained attention to detail.
              Currently shipping backend services in Rust, Axum, and PostgreSQL.
            </p>

            <div className="mt-8 flex flex-wrap items-center gap-3">
              <Button as="a" href="#work" variant="primary">
                View projects
                <ArrowRightIcon />
              </Button>
              <Button as="a" href={socials.resume} variant="ghost" download>
                Resume
              </Button>
              <Button as="a" href="#contact" variant="ghost">
                Get in touch
              </Button>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: "easeOut", delay: 0.1 }}
            className="lg:col-span-5"
          >
            <CodeBlock />
          </motion.div>
        </div>
      </Container>
    </section>
  );
}

function BackgroundGlow() {
  return (
    <div
      aria-hidden="true"
      className="pointer-events-none absolute inset-0 -z-10 overflow-hidden"
    >
      <div className="absolute -top-48 left-1/2 h-[520px] w-[820px] -translate-x-1/2 rounded-full bg-accent/[0.07] blur-3xl" />
      <div className="absolute inset-x-0 top-0 h-[1px] bg-gradient-to-r from-transparent via-border to-transparent" />
    </div>
  );
}
