import type { ReactNode } from "react";
import { cn } from "@/lib/cn";

type Tone = "default" | "accent";

export function Badge({
  children,
  tone = "default",
  className,
}: {
  children: ReactNode;
  tone?: Tone;
  className?: string;
}) {
  const toneClass =
    tone === "accent"
      ? "border-accent/40 bg-accent/10 text-accent"
      : "border-border bg-surface text-muted";

  return (
    <span
      className={cn(
        "inline-flex items-center rounded-md border px-2 py-0.5 font-mono text-xs",
        toneClass,
        className
      )}
    >
      {children}
    </span>
  );
}
