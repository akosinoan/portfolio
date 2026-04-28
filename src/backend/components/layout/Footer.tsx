import { Container } from "@/components/ui/Container";
import { GithubIcon, LinkedinIcon, MailIcon } from "@/components/icons";
import { socials } from "@/data/socials";

export function Footer() {
  return (
    <footer className="border-t border-border">
      <Container className="flex flex-col gap-3 py-8 sm:flex-row sm:items-center sm:justify-between">
        <p className="font-mono text-xs text-muted">
          © {new Date().getFullYear()} Noel Angelo Babao · Built in Vite + React
          + Tailwind
        </p>
        <ul className="flex items-center gap-1">
          <li>
            <a
              href={socials.emailHref}
              aria-label="Email"
              className="inline-flex h-9 w-9 items-center justify-center rounded-md text-muted transition-colors hover:bg-surface hover:text-fg"
            >
              <MailIcon />
            </a>
          </li>
          <li>
            <a
              href={socials.linkedin}
              target="_blank"
              rel="noreferrer"
              aria-label="LinkedIn"
              className="inline-flex h-9 w-9 items-center justify-center rounded-md text-muted transition-colors hover:bg-surface hover:text-fg"
            >
              <LinkedinIcon />
            </a>
          </li>
          <li>
            <a
              href={socials.github}
              target="_blank"
              rel="noreferrer"
              aria-label="GitHub"
              className="inline-flex h-9 w-9 items-center justify-center rounded-md text-muted transition-colors hover:bg-surface hover:text-fg"
            >
              <GithubIcon />
            </a>
          </li>
        </ul>
      </Container>
    </footer>
  );
}
