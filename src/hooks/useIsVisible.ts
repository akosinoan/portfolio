import { useEffect, useState, type RefObject } from "react";

/**
 * Tracks whether the referenced element is intersecting the viewport.
 * Toggles back to `false` when the element scrolls out, so callers can
 * re-trigger entrance animations on re-entry.
 */
export function useIsVisible<T extends Element>(ref: RefObject<T>): boolean {
  const [isIntersecting, setIntersecting] = useState(false);

  useEffect(() => {
    const node = ref.current;
    if (!node) return;

    const observer = new IntersectionObserver(([entry]) =>
      setIntersecting(entry.isIntersecting)
    );
    observer.observe(node);
    return () => observer.disconnect();
  }, [ref]);

  return isIntersecting;
}
