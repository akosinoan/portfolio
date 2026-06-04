import { useRef } from "react";
import { useInView } from "framer-motion";
import { Card, IconImg } from "../../ui";
import { CertMeta } from "./CertMeta";
import { firstLetter } from "../../../utils/firstLetter";
import type { Certification } from "../../../types";

export function CertCard({ cert, index }: { cert: Certification; index: number }) {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, margin: "-50px" });

  return (
    <Card
      ref={ref}
      gradient={cert.gradient}
      initial={{ opacity: 0, y: 20 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.5, delay: index * 0.08 }}
      whileHover={{ y: -4, boxShadow: "0 20px 40px rgba(0,0,0,0.10)" }}
      className="border border-gray-200 bg-white/70 backdrop-blur-sm shadow-md"
    >
      <div className="p-5">
        <div className="flex items-start gap-3 mb-3">
          {cert.icon ? (
            <IconImg
              src={cert.icon}
              alt={cert.issuer}
              className="w-10 h-10 flex-shrink-0 rounded-md"
            />
          ) : (
            <div
              className={`w-10 h-10 flex-shrink-0 rounded-md bg-gradient-to-br ${cert.gradient} flex items-center justify-center`}
            >
              <span className="text-white font-bold text-sm">
                {firstLetter(cert.issuer)}
              </span>
            </div>
          )}
          <div className="flex-1 min-w-0">
            <h4
              className={`text-sm font-bold bg-gradient-to-r ${cert.gradient} bg-clip-text text-transparent leading-tight`}
            >
              {cert.name}
            </h4>
            <p className="text-gray-600 text-xs mt-0.5">{cert.issuer}</p>
          </div>
        </div>

        {cert.items ? (
          <ul className="space-y-2">
            {cert.items.map((item, i) => (
              <li
                key={i}
                className="flex items-center justify-between gap-2 text-xs text-gray-600"
              >
                <span className="font-medium text-gray-700">{item.name}</span>
                <CertMeta meta={item} />
              </li>
            ))}
          </ul>
        ) : (
          <div className="flex items-center justify-between text-xs text-gray-500">
            <CertMeta meta={cert} />
          </div>
        )}
      </div>
    </Card>
  );
}
