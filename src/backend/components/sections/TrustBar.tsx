import { Container } from "@/components/ui/Container";

const tech = [
  "Rust",
  "PostgreSQL",
  "Axum",
  "Linux",
  "REST",
  "Docker",
  "AWS",
  "CI/CD",
];

export function TrustBar() {
  return (
    <section
      aria-label="Core technologies"
      className="border-y border-border bg-surface/40"
    >
      <Container className="py-6">
        <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
          <ul
            className="flex flex-wrap items-center gap-x-5 gap-y-2 font-mono text-xs text-muted sm:text-[13px]"
            aria-label="Stack"
          >
            {tech.map((t, i) => (
              <li key={t} className="inline-flex items-center gap-x-5">
                <span>{t}</span>
                {i < tech.length - 1 && (
                  <span aria-hidden="true" className="text-border">
                    ·
                  </span>
                )}
              </li>
            ))}
          </ul>
          <p className="font-mono text-[11px] uppercase tracking-[0.18em] text-muted">
            <span className="mr-2 inline-block h-1.5 w-1.5 rounded-full bg-accent align-middle" />
            Open to backend, systems &amp; software engineering roles
          </p>
        </div>
      </Container>
    </section>
  );
}
