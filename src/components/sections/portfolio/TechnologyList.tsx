import { technologies } from "../../../data/projects";

/** Renders the technology logo row inside a project card's `<ul>`. */
export function TechnologyList({ techs }: { techs: string[] }) {
  return (
    <>
      {techs.map((tech, i) => {
        const entry = technologies[tech];
        return (
          <li key={i} className="px-2 group/tech">
            <a href={entry?.href ?? "/"} target="_blank" rel="noopener noreferrer">
              <img className="h-5 w-5" src={entry?.imgsrc ?? ""} alt={tech} />
              <span className="group-hover/tech:visible absolute text-xs invisible border-2 border-gray-300 rounded-3xl p-2 bg-red-900 text-white">
                {tech}
              </span>
            </a>
          </li>
        );
      })}
    </>
  );
}
