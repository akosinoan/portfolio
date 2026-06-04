import type { ReactNode } from "react";
import { cn } from "../../lib/cn";

/**
 * A page section anchored by `id`, with the shared scroll offset that keeps
 * headings clear of the fixed 64px navbar. Background and vertical padding are
 * supplied per-section via `className`.
 */
export function Section({
  id,
  className,
  children,
}: {
  id: string;
  className?: string;
  children: ReactNode;
}) {
  return (
    <section id={id} className={cn("scroll-mt-16", className)}>
      {children}
    </section>
  );
}
