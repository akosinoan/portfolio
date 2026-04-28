import type { ReactNode } from "react";
import { cn } from "@/lib/cn";

export function Card({
  children,
  className,
  interactive = false,
}: {
  children: ReactNode;
  className?: string;
  interactive?: boolean;
}) {
  return (
    <div
      className={cn(
        "rounded-xl border border-border bg-surface/60 p-6 backdrop-blur-sm transition",
        interactive && "hover:border-accent/40 hover:bg-surface",
        className
      )}
    >
      {children}
    </div>
  );
}
