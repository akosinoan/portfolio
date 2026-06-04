import type { ReactNode } from "react";
import { cn } from "../../lib/cn";

/** Shared horizontal gutter used by every section's content. */
export function Container({
  className,
  children,
}: {
  className?: string;
  children: ReactNode;
}) {
  return (
    <div className={cn("px-6 sm:px-12 lg:px-[10%]", className)}>{children}</div>
  );
}
