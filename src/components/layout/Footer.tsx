import { site } from "../../data/site";

export function Footer() {
  return (
    <footer className="flex flex-col items-center gap-1 py-4 text-sm">
      <span>{site.copyright}</span>
      <a
        href={site.backendLink.href}
        className="text-xs text-gray-500 hover:text-red-900 transition-colors"
      >
        {site.backendLink.label}
      </a>
    </footer>
  );
}
