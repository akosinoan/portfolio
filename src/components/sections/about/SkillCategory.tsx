import { SkillBadge } from "./SkillBadge";
import type { SkillCategory as SkillCategoryModel } from "../../../types";

export function SkillCategory({ label, skills }: SkillCategoryModel) {
  return (
    <div>
      <h5 className="text-xs font-semibold uppercase tracking-widest text-gray-400 mb-2">
        {label}
      </h5>
      <div className="flex flex-wrap gap-2">
        {skills.map((skill) => (
          <SkillBadge key={skill.name} name={skill.name} icon={skill.icon} />
        ))}
      </div>
    </div>
  );
}
