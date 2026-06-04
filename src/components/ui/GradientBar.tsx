import { cn } from "../../lib/cn";

/** Thin horizontal accent bar shown at the top of timeline / cert cards. */
export function GradientBar({
  gradient,
  height = "h-0.5",
}: {
  /** Gradient stop classes, e.g. "from-rose-600 via-red-500 to-orange-400". */
  gradient: string;
  height?: string;
}) {
  return <div className={cn(height, "bg-gradient-to-r", gradient)} />;
}
