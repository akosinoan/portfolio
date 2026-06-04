import { Card } from "../../ui";
import type { EducationEntry } from "../../../types";

export function EducationCard({ entry }: { entry: EducationEntry }) {
  const isFeatured = entry.featured;

  return (
    <Card
      whileHover={{
        y: -3,
        boxShadow: isFeatured
          ? "0 25px 50px rgba(16,185,129,0.22)"
          : "0 20px 40px rgba(0,0,0,0.10)",
      }}
      transition={{ duration: 0.2 }}
      gradient={entry.gradient}
      barHeight={isFeatured ? "h-1.5" : "h-0.5"}
      className={`border ${entry.accentBorder} bg-white/80 backdrop-blur-sm ${
        isFeatured ? "shadow-xl ring-1 ring-green-200/70" : "shadow-md"
      }`}
    >
      <div className={isFeatured ? "p-6" : "p-5"}>
        {isFeatured ? (
          <div className="mb-3">
            <span className="inline-flex items-center gap-1.5 rounded-full bg-gradient-to-r from-green-700 to-emerald-500 px-2.5 py-1 text-[10px] font-semibold uppercase tracking-wider text-white shadow-sm">
              <svg className="w-3 h-3" viewBox="0 0 24 24" fill="currentColor">
                <path d="M12 2l2.4 7.4H22l-6.2 4.6 2.4 7.4L12 17l-6.2 4.4 2.4-7.4L2 9.4h7.6z" />
              </svg>
              Earned Degree
            </span>
          </div>
        ) : (
          entry.status && (
            <div className="mb-2">
              <span className="inline-flex items-center rounded-full bg-slate-100 px-2 py-0.5 text-[10px] font-medium uppercase tracking-wider text-slate-500">
                {entry.status}
              </span>
            </div>
          )
        )}

        <h4
          className={`font-bold bg-gradient-to-r ${entry.gradient} bg-clip-text text-transparent leading-tight ${
            isFeatured ? "text-xl" : "text-sm"
          }`}
        >
          {entry.school}
        </h4>
        <p
          className={`font-medium mt-1 ${
            isFeatured ? "text-gray-800 text-base" : "text-gray-700 text-xs"
          }`}
        >
          {entry.degree}
        </p>
        {entry.field && (
          <p
            className={`text-gray-500 mt-0.5 ${isFeatured ? "text-sm" : "text-xs"}`}
          >
            {entry.field}
          </p>
        )}

        <div
          className={`flex flex-wrap gap-x-4 gap-y-0.5 text-gray-500 ${
            isFeatured ? "mt-4 text-sm" : "mt-3 text-xs"
          }`}
        >
          <span>📅 {entry.date}</span>
          {entry.location && <span>📍 {entry.location}</span>}
        </div>
      </div>
    </Card>
  );
}
