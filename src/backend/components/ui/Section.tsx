import type { ReactNode } from "react";
import { cn } from "@/lib/cn";
import { Container } from "./Container";

type Props = {
  id: string;
  children: ReactNode;
  className?: string;
  containerClassName?: string;
  bare?: boolean;
};

export function Section({ id, children, className, containerClassName, bare }: Props) {
  return (
    <section
      id={id}
      className={cn(
        "scroll-mt-20 py-20 sm:py-24 lg:py-28",
        className
      )}
    >
      {bare ? children : <Container className={containerClassName}>{children}</Container>}
    </section>
  );
}

export function SectionHeader({
  eyebrow,
  title,
  description,
}: {
  eyebrow?: string;
  title: string;
  description?: string;
}) {
  return (
    <div className="mb-12 max-w-2xl">
      {eyebrow && (
        <p className="mb-3 font-mono text-xs uppercase tracking-[0.18em] text-accent">
          {eyebrow}
        </p>
      )}
      <h2 className="text-3xl font-semibold tracking-tight text-fg sm:text-4xl">
        {title}
      </h2>
      {description && (
        <p className="mt-4 text-base leading-relaxed text-muted sm:text-lg">
          {description}
        </p>
      )}
    </div>
  );
}
