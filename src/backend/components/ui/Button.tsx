import type { ComponentPropsWithoutRef, ReactNode } from "react";
import { cn } from "@/lib/cn";

type Variant = "primary" | "ghost";
type Size = "md" | "sm";

const base =
  "inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md font-medium transition-colors focus-visible:outline-none disabled:pointer-events-none";

const variants: Record<Variant, string> = {
  primary:
    "bg-accent text-bg hover:bg-accent/90 active:bg-accent/80",
  ghost:
    "border border-border bg-transparent text-fg hover:border-fg/40 hover:bg-surface",
};

const sizes: Record<Size, string> = {
  md: "h-10 px-4 text-sm",
  sm: "h-8 px-3 text-xs",
};

const disabledClass =
  "cursor-not-allowed border border-border bg-transparent text-muted/70 opacity-70";

type CommonProps = {
  variant?: Variant;
  size?: Size;
  className?: string;
  children: ReactNode;
  disabledLabel?: string;
};

type ButtonAsButton = CommonProps &
  ComponentPropsWithoutRef<"button"> & { as?: "button"; href?: never };

type ButtonAsLink = CommonProps &
  Omit<ComponentPropsWithoutRef<"a">, "href"> & {
    as: "a";
    href?: string;
    disabled?: boolean;
  };

type ButtonProps = ButtonAsButton | ButtonAsLink;

export function Button(props: ButtonProps) {
  const {
    variant = "primary",
    size = "md",
    className,
    children,
    disabledLabel,
  } = props;

  if (props.as === "a") {
    const { as: _as, disabled, href, ...rest } = props as ButtonAsLink & {
      disabled?: boolean;
    };
    void _as;
    if (disabled) {
      return (
        <span
          className={cn(base, sizes[size], disabledClass, className)}
          aria-disabled="true"
          title={disabledLabel}
        >
          {children}
        </span>
      );
    }
    return (
      <a
        href={href}
        className={cn(base, sizes[size], variants[variant], className)}
        {...rest}
      >
        {children}
      </a>
    );
  }

  const { as: _as, disabled, ...rest } = props as ButtonAsButton;
  void _as;
  return (
    <button
      type="button"
      disabled={disabled}
      title={disabled ? disabledLabel : undefined}
      className={cn(
        base,
        sizes[size],
        disabled ? disabledClass : variants[variant],
        className
      )}
      {...rest}
    >
      {children}
    </button>
  );
}
