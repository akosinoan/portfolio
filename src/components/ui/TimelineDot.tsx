import type { ReactNode } from "react";
import { motion } from "framer-motion";
import { cn } from "../../lib/cn";

/**
 * The animated circular node on a vertical timeline: spins + scales in on
 * view and emits a slow pulse ring. Inner content (logo or fallback glyph) is
 * supplied by the caller so work and education entries can render differently.
 */
export function TimelineDot({
  dotBg,
  inView,
  size = "lg",
  featured = false,
  children,
}: {
  /** Background classes for the dot, e.g. "bg-gradient-to-br from-blue-700 to-cyan-500". */
  dotBg: string;
  inView: boolean;
  size?: "lg" | "sm";
  featured?: boolean;
  children: ReactNode;
}) {
  const dims =
    size === "lg"
      ? featured
        ? "w-16 h-16"
        : "w-14 h-14"
      : featured
        ? "w-12 h-12"
        : "w-10 h-10";
  const ring = featured
    ? "ring-2 ring-green-300/60 ring-offset-2 ring-offset-white"
    : "";

  return (
    <motion.div
      className={cn(
        "relative flex items-center justify-center overflow-hidden rounded-full shadow-xl",
        dims,
        dotBg,
        ring
      )}
      initial={{ scale: 0, rotate: -180 }}
      animate={inView ? { scale: 1, rotate: 0 } : { scale: 0 }}
      transition={{ type: "spring", stiffness: 260, damping: 20, delay: 0.15 }}
    >
      <motion.div
        className={cn("absolute inset-0 rounded-full opacity-60", dotBg)}
        animate={{ scale: [1, 1.7, 1], opacity: [0.6, 0, 0.6] }}
        transition={{ duration: 2.5, repeat: Infinity, ease: "easeInOut" }}
      />
      {children}
    </motion.div>
  );
}
