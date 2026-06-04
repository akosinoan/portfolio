import { IconImg } from "../../ui";
import { comptiaBadges } from "../../../data/certifications";

/** CompTIA credential badges grid in the About section's right column. */
export function Certifications({ headingClassName }: { headingClassName: string }) {
  return (
    <div className="mt-8">
      <h4 className={headingClassName}>Certifications</h4>
      <div className="flex flex-wrap justify-center lg:justify-start gap-3">
        {comptiaBadges.map((badge) => (
          <a
            key={badge.name}
            href={badge.url}
            target="_blank"
            rel="noopener noreferrer"
            title={badge.name}
            className="group flex flex-col items-center w-20 sm:w-24 hover:scale-105 transition-transform duration-200"
          >
            <IconImg
              src={badge.img}
              alt={badge.name}
              className="w-16 h-16 sm:w-20 sm:h-20 object-contain transition-all duration-200 group-hover:[filter:drop-shadow(0_0_10px_rgba(220,38,38,0.65))]"
            />
            <span className="mt-1.5 text-center text-[10px] font-medium leading-tight text-gray-600">
              {badge.label}
            </span>
          </a>
        ))}
      </div>
    </div>
  );
}
