import { forwardRef, type ReactNode } from "react";
import { motion, type HTMLMotionProps } from "framer-motion";
import { cn } from "../../lib/cn";
import { GradientBar } from "./GradientBar";

interface CardProps extends Omit<HTMLMotionProps<"div">, "children"> {
  children?: ReactNode;
  /** When set, renders a {@link GradientBar} accent at the top of the card. */
  gradient?: string;
  /** Height class for the accent bar (defaults to `h-0.5`). */
  barHeight?: string;
}

/**
 * Rounded surface used by every card in the app. It's a `motion.div`, so
 * callers pass framer-motion props (`whileHover`, `initial`, …) directly;
 * all visual styling beyond the shared shell comes through `className`.
 */
export const Card = forwardRef<HTMLDivElement, CardProps>(function Card(
  { gradient, barHeight, className, children, ...rest },
  ref
) {
  return (
    <motion.div
      ref={ref}
      className={cn("overflow-hidden rounded-xl", className)}
      {...rest}
    >
      {gradient && <GradientBar gradient={gradient} height={barHeight} />}
      {children}
    </motion.div>
  );
});
