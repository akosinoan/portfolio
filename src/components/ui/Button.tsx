import type { ComponentPropsWithoutRef, ReactNode } from "react";
import { cn } from "../../lib/cn";

type Variant = "primary" | "outline";

const base =
  "inline-flex items-center rounded-lg px-5 py-2.5 text-sm font-semibold transition-all duration-200 hover:shadow-md hover:scale-105";

const variants: Record<Variant, string> = {
  primary: "bg-gradient-to-r from-red-900 to-red-700 text-white shadow-sm",
  outline: "border border-red-900 text-red-900",
};

type CommonProps = {
  variant?: Variant;
  className?: string;
  children: ReactNode;
};

type ButtonAsButton = CommonProps &
  ComponentPropsWithoutRef<"button"> & { as?: "button"; href?: never };

type ButtonAsLink = CommonProps &
  ComponentPropsWithoutRef<"a"> & { as: "a" };

type ButtonProps = ButtonAsButton | ButtonAsLink;

/** Crimson call-to-action rendered as either a `<button>` or an `<a>`. */
export function Button(props: ButtonProps) {
  const { variant = "primary", className, children } = props;
  const classes = cn(base, variants[variant], className);

  if (props.as === "a") {
    const {
      as: _as,
      variant: _variant,
      className: _className,
      children: _children,
      ...rest
    } = props;
    return (
      <a className={classes} {...rest}>
        {children}
      </a>
    );
  }

  const {
    as: _as,
    variant: _variant,
    className: _className,
    children: _children,
    ...rest
  } = props;
  return (
    <button type="button" className={classes} {...rest}>
      {children}
    </button>
  );
}
