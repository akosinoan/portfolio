import type { ReactNode } from "react";
import { cn } from "../../lib/cn";

const base =
  "text-4xl font-semibold uppercase sm:text-5xl lg:text-6xl bg-gradient-to-b text-transparent bg-clip-text";

/**
 * The crimson gradient `<h2>` used as each section's headline. The gradient
 * stops vary slightly per section, so they are passed in explicitly.
 */
export function SectionHeading({
  gradient,
  className,
  children,
}: {
  /** Gradient stop classes, e.g. "from-red-900 via-red-700 to-red-300". */
  gradient: string;
  className?: string;
  children: ReactNode;
}) {
  return <h2 className={cn(base, gradient, className)}>{children}</h2>;
}
