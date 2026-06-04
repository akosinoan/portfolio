import clsx, { type ClassValue } from "clsx";

/**
 * Merge conditional class names. Shared helper for the root portfolio app,
 * mirroring the one used by the backend rebuild (`src/backend/lib/cn.ts`).
 */
export function cn(...inputs: ClassValue[]) {
  return clsx(inputs);
}
