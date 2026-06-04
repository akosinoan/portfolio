import { IconImg } from "../../ui";
import type { Skill } from "../../../types";

export function SkillBadge({ name, icon }: Skill) {
  return (
    <span className="inline-flex items-center gap-1.5 rounded-lg border border-gray-200 bg-white px-2.5 py-1.5 text-xs font-medium text-gray-700 shadow-sm hover:shadow-md hover:scale-105 transition-all duration-200 cursor-default">
      {icon && (
        <IconImg src={icon} alt={name} className="w-4 h-4 flex-shrink-0" />
      )}
      {name}
    </span>
  );
}
