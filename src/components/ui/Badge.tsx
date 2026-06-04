import type { ReactNode } from "react";
import { cn } from "../../lib/cn";

type BadgeTone = "highlight" | "tech";

const tones: Record<BadgeTone, string> = {
  highlight:
    "rounded-full border border-red-200 bg-white px-3 py-1 text-xs font-semibold text-red-900 shadow-sm",
  tech: "rounded-full border border-gray-200 bg-gray-100 px-2.5 py-0.5 text-xs font-medium text-gray-600",
};

/** Pill label — `highlight` for the about chips, `tech` for technology tags. */
export function Badge({
  tone,
  className,
  children,
}: {
  tone: BadgeTone;
  className?: string;
  children: ReactNode;
}) {
  return (
    <span className={cn("inline-flex items-center", tones[tone], className)}>
      {children}
    </span>
  );
}
