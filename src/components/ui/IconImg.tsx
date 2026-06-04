import type { ComponentPropsWithoutRef } from "react";

/**
 * An `<img>` that hides itself if the source fails to load — used for remote
 * logos and credential badges that may 404. A caller-supplied `onError`
 * takes precedence.
 */
export function IconImg({ onError, ...props }: ComponentPropsWithoutRef<"img">) {
  return (
    <img
      {...props}
      onError={
        onError ??
        ((e) => {
          e.currentTarget.style.display = "none";
        })
      }
    />
  );
}
