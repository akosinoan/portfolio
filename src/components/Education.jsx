import { useRef } from "react";
import { motion, useInView } from "framer-motion";

const education = [
  {
    school: "De La Salle University Manila -  Laguna Campus",
    degree: "Bachelor of Science in Computer Science",
    field: "Computer Science",
    date: "2008 – 2012",
    location: "Manila, Philippines",
    featured: true,
    imgSrc: "./dlsu_logo.png",
    gradient: "from-green-700 via-emerald-500 to-lime-400",
    dotBg: "bg-gradient-to-br from-green-800 to-emerald-500",
    accentBorder: "border-green-500/40",
  },
  {
    school: "University of Missouri–St. Louis & Washington University",
    degree: "Electrical Engineering",
    field: "Joint Engineering Program",
    status: "Coursework",
    date: "2021 – 2023",
    location: "St. Louis, Missouri",
    featured: false,
    imgSrc:
      "https://upload.wikimedia.org/wikipedia/commons/b/b7/UMSL_wordmark.svg",
    gradient: "from-slate-600 via-slate-500 to-slate-400",
    dotBg: "bg-gradient-to-br from-slate-600 to-slate-400",
    accentBorder: "border-slate-400/30",
  },
  {
    school: "Mapua Institute of Technology",
    degree: "Electronics and Communication Engineering",
    field: "",
    status: "Coursework",
    date: "2007 – 2008",
    location: "Intramuros, Philippines",
    featured: false,
    imgSrc: "./mapua_logo.png",
    gradient: "from-slate-600 via-slate-500 to-slate-400",
    dotBg: "bg-gradient-to-br from-slate-600 to-slate-400",
    accentBorder: "border-slate-400/30",
  },
];

const certifications = [
  {
    name: "CompTIA A+ ce Certification",
    issuer: "CompTIA",
    date: "2026",
    credentialUrl:
      "https://www.credly.com/badges/931cd16e-ee1b-41b1-a550-a54d04513f27/linked_in_profile",
    icon: "https://cdn.simpleicons.org/comptia/C8202F",
    gradient: "from-red-700 via-red-500 to-orange-400",
  },
  {
    name: "Database Design and Basic SQL in PostgreSQL",
    issuer: "University of Michigan",
    date: "Feb 2026",
    credentialUrl:
      "https://www.coursera.org/account/accomplishments/verify/99BFAVQ5U0FT",
    icon: "https://cdn.simpleicons.org/postgresql/4169E1",
    gradient: "from-blue-700 via-sky-500 to-cyan-400",
  },
  {
    name: "Rust Fundamentals",
    issuer: "Duke University",
    date: "Feb 2026",
    credentialUrl:
      "https://www.coursera.org/account/accomplishments/verify/GN3IDSPE4RXG",
    icon: "https://cdn.simpleicons.org/rust/000000",
    gradient: "from-orange-700 via-amber-600 to-yellow-500",
  },
];

const Education = () => {
  const titleRef = useRef();
  const titleInView = useInView(titleRef, { once: true, margin: "-100px" });
  const eduSubRef = useRef();
  const eduSubInView = useInView(eduSubRef, { once: true, margin: "-80px" });
  const certSubRef = useRef();
  const certSubInView = useInView(certSubRef, { once: true, margin: "-80px" });

  return (
    <section
      className="px-6 sm:px-12 lg:px-[10%] scroll-mt-16 pt-14 sm:pt-20 pb-16 sm:pb-24"
      id="education"
    >
      <motion.div
        ref={titleRef}
        initial={{ opacity: 0, y: 20 }}
        animate={titleInView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.6 }}
        className="text-center mb-10 lg:mb-16"
      >
        <h2 className="bg-gradient-to-b from-red-900 via-red-700 to-red-300 text-transparent bg-clip-text inline-block text-4xl font-semibold uppercase sm:text-5xl lg:text-6xl">
          Education & Certificates
        </h2>
      </motion.div>

      <div className="mb-16 lg:mb-20">
        <motion.h3
          ref={eduSubRef}
          initial={{ opacity: 0, y: 15 }}
          animate={eduSubInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5 }}
          className="text-2xl sm:text-3xl font-semibold text-gray-700 mb-8 lg:text-center"
        >
          Education
        </motion.h3>

        <div className="relative">
          <div className="hidden lg:block absolute left-1/2 top-0 bottom-0 w-px -translate-x-1/2 bg-gradient-to-b from-transparent via-red-700/50 to-transparent" />

          {education.map((entry, index) => (
            <EducationEntry
              key={index}
              entry={entry}
              isLast={index === education.length - 1}
            />
          ))}
        </div>
      </div>

      <div>
        <motion.h3
          ref={certSubRef}
          initial={{ opacity: 0, y: 15 }}
          animate={certSubInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5 }}
          className="text-2xl sm:text-3xl font-semibold text-gray-700 mb-8 lg:text-center"
        >
          Certifications
        </motion.h3>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {certifications.map((cert, index) => (
            <CertCard key={index} cert={cert} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
};

const EducationEntry = ({ entry, isLast }) => {
  const ref = useRef();
  const inView = useInView(ref, { once: false, margin: "-80px" });

  const cardAnim = {
    hidden: { opacity: 0, x: 60 },
    visible: {
      opacity: 1,
      x: 0,
      transition: { duration: 0.55, ease: "easeOut" },
    },
  };

  return (
    <div ref={ref}>
      <div
        className={`hidden lg:flex items-center ${entry.featured ? "py-8" : "py-6"}`}
      >
        <div className="flex-1 flex justify-end pr-8">
          <motion.div
            initial={{ opacity: 0 }}
            animate={inView ? { opacity: 1 } : { opacity: 0 }}
            transition={{ delay: 0.35 }}
            className="text-right"
          >
            <p
              className={`font-medium ${entry.featured ? "text-gray-700 text-base" : "text-gray-500 text-sm"}`}
            >
              {entry.date}
            </p>
            {entry.location && (
              <p className="text-gray-400 text-xs mt-0.5">{entry.location}</p>
            )}
          </motion.div>
        </div>

        <div className="relative z-10 mx-4 flex-shrink-0">
          <CenterDot entry={entry} inView={inView} />
        </div>

        <div className="flex-1 pl-8">
          <motion.div
            variants={cardAnim}
            initial="hidden"
            animate={inView ? "visible" : "hidden"}
            className={`w-full ${entry.featured ? "max-w-xl" : "max-w-md"}`}
          >
            <EducationCard entry={entry} />
          </motion.div>
        </div>
      </div>

      <div className="lg:hidden flex gap-4 mb-8">
        <div className="flex flex-col items-center flex-shrink-0">
          <CenterDot entry={entry} inView={inView} size="sm" />
          {!isLast && (
            <div className="w-px flex-1 min-h-6 mt-2 bg-gradient-to-b from-red-700/50 to-transparent" />
          )}
        </div>
        <motion.div
          initial={{ opacity: 0, x: -25 }}
          animate={inView ? { opacity: 1, x: 0 } : { opacity: 0, x: -25 }}
          transition={{ duration: 0.5 }}
          className="flex-1 pb-2"
        >
          <EducationCard entry={entry} />
        </motion.div>
      </div>
    </div>
  );
};

const firstLetter = (s) => (s.match(/[A-Za-z]/)?.[0] || "?").toUpperCase();

const CenterDot = ({ entry, inView, size = "lg" }) => {
  const isFeatured = entry.featured;
  const dims =
    size === "lg"
      ? isFeatured
        ? "w-16 h-16"
        : "w-14 h-14"
      : isFeatured
        ? "w-12 h-12"
        : "w-10 h-10";
  const ringCls = isFeatured
    ? "ring-2 ring-green-300/60 ring-offset-2 ring-offset-white"
    : "";
  return (
    <motion.div
      className={`relative ${dims} rounded-full flex items-center justify-center shadow-xl overflow-hidden ${entry.dotBg} ${ringCls}`}
      initial={{ scale: 0, rotate: -180 }}
      animate={inView ? { scale: 1, rotate: 0 } : { scale: 0 }}
      transition={{ type: "spring", stiffness: 260, damping: 20, delay: 0.15 }}
    >
      <motion.div
        className={`absolute inset-0 rounded-full ${entry.dotBg} opacity-60`}
        animate={{ scale: [1, 1.7, 1], opacity: [0.6, 0, 0.6] }}
        transition={{ duration: 2.5, repeat: Infinity, ease: "easeInOut" }}
      />
      {entry.imgSrc ? (
        <div className="relative z-10 w-full h-full rounded-full bg-white flex items-center justify-center p-1.5 overflow-hidden">
          <img
            src={entry.imgSrc}
            alt={entry.school}
            className="w-full h-full object-contain"
            onError={(e) => {
              e.currentTarget.style.display = "none";
            }}
          />
        </div>
      ) : isFeatured ? (
        <svg
          className="w-7 h-7 text-white relative z-10"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2.2"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <path d="M22 10 12 5 2 10l10 5 10-5Z" />
          <path d="M6 12v5c0 1.5 3 3 6 3s6-1.5 6-3v-5" />
        </svg>
      ) : (
        <span className="text-white font-bold text-sm relative z-10">
          {firstLetter(entry.school)}
        </span>
      )}
    </motion.div>
  );
};

const EducationCard = ({ entry }) => {
  const isFeatured = entry.featured;
  return (
    <motion.div
      whileHover={{
        y: -3,
        boxShadow: isFeatured
          ? "0 25px 50px rgba(16,185,129,0.22)"
          : "0 20px 40px rgba(0,0,0,0.10)",
      }}
      transition={{ duration: 0.2 }}
      className={`rounded-xl border ${entry.accentBorder} bg-white/80 backdrop-blur-sm overflow-hidden ${
        isFeatured ? "shadow-xl ring-1 ring-green-200/70" : "shadow-md"
      }`}
    >
      <div
        className={`${isFeatured ? "h-1.5" : "h-0.5"} bg-gradient-to-r ${entry.gradient}`}
      />

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
    </motion.div>
  );
};

const CertCard = ({ cert, index }) => {
  const ref = useRef();
  const inView = useInView(ref, { once: true, margin: "-50px" });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 20 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.5, delay: index * 0.08 }}
      whileHover={{ y: -4, boxShadow: "0 20px 40px rgba(0,0,0,0.10)" }}
      className="rounded-xl border border-gray-200 bg-white/70 backdrop-blur-sm shadow-md overflow-hidden"
    >
      <div className={`h-0.5 bg-gradient-to-r ${cert.gradient}`} />
      <div className="p-5">
        <div className="flex items-start gap-3 mb-3">
          {cert.icon ? (
            <img
              src={cert.icon}
              alt={cert.issuer}
              className="w-10 h-10 flex-shrink-0 rounded-md"
              onError={(e) => {
                e.currentTarget.style.display = "none";
              }}
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

        <div className="flex items-center justify-between text-xs text-gray-500">
          <span>📅 {cert.date}</span>
          {cert.credentialUrl && (
            <a
              href={cert.credentialUrl}
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
        </div>
      </div>
    </motion.div>
  );
};

export default Education;
