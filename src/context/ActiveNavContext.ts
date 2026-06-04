import { createContext, useContext } from "react";
import type { Dispatch, SetStateAction } from "react";

/** `[activeSectionId, setActiveSectionId]` — the section the navbar highlights. */
export type ActiveNavValue = [string, Dispatch<SetStateAction<string>>];

export const ActiveNavContext = createContext<ActiveNavValue | null>(null);

export function useActiveNav(): ActiveNavValue {
  const ctx = useContext(ActiveNavContext);
  if (!ctx) {
    throw new Error("useActiveNav must be used within an ActiveNavContext.Provider");
  }
  return ctx;
}
