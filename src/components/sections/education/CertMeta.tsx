import type { CertMeta as CertMetaModel } from "../../../types";

/** Status pill or date, plus an optional "Verify" credential link. */
export function CertMeta({ meta }: { meta: CertMetaModel }) {
  return (
    <span className="flex items-center gap-2 text-gray-500 whitespace-nowrap">
      {meta.status ? (
        <span className="inline-flex items-center gap-1 rounded-full bg-amber-100 px-2 py-0.5 text-[10px] font-medium uppercase tracking-wider text-amber-700">
          <span className="w-1.5 h-1.5 rounded-full bg-amber-500 animate-pulse" />
          {meta.status}
        </span>
      ) : (
        <span>📅 {meta.date}</span>
      )}
      {meta.credentialUrl && (
        <a
          href={meta.credentialUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-1 text-gray-500 hover:text-red-700 transition-colors"
        >
          Verify
          <svg
            className="w-3 h-3"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2.5"
          >
            <path d="M7 17L17 7M7 7h10v10" />
          </svg>
        </a>
      )}
    </span>
  );
}
