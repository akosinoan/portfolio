import { useRef, useState, useEffect } from 'react';
import { motion, useInView, AnimatePresence } from 'framer-motion';

const workExperiences = [
  {
    name: "SSE Inc.",
    position: "Subject Matter Expert & Technical Publication Author",
    date: "Jan 2021 – Apr 2024",
    duration: "3 yrs 4 mos",
    location: "Remote",
    jobType: "Full-time",
    achievements: [
      "Collaborated with Boeing as an external contractor to maintain and update digital documentation for F/A-18 and F-15 aircraft structures and coatings.",
      "Applied technical precision and process-driven documentation using Quill, MDART, and CGM Viewer to ensure data consistency and compliance.",
      "Developed PS917 Word Checker — an internal content validation tool using HTML and JavaScript to automatically detect restricted or noncompliant terminology.",
    ],
    technologies: ["Quill", "MDART", "CGM Viewer", "HTML", "JavaScript", "F/A-18", "F-15"],
    imgSrc: "./sse_logo.jpeg",
    gradient: "from-rose-600 via-red-500 to-orange-400",
    dotBg: "bg-gradient-to-br from-rose-700 to-orange-500",
    accentBorder: "border-rose-500/30",
  },
  {
    name: "United States Navy",
    position: "Aviation Structural Mechanic, Petty Officer 2nd Class",
    date: "Dec 2015 – Dec 2019",
    duration: "4 yrs",
    location: "San Diego, CA",
    jobType: "Active Duty",
    achievements: [
      "Led and mentored a team of four personnel, delegating tasks and ensuring timely completion of maintenance operations required by Maintenance Control.",
      "Demonstrated accountability by overseeing inspection, corrosion removal, and tactical paint scheme coating to meet strict military requirements and safety standards.",
      "Supervised and coordinated 11 personnel in high-pressure environments, ensuring safe and efficient launch/recovery of F/A-18E Super Hornets.",
      "Developed Flight Line Locator — an internal web tool using HTML and JavaScript to display and update aircraft location and fuel load on the flight line.",
    ],
    technologies: ["F/A-18E Super Hornet", "Corrosion Control", "Aircraft Maintenance", "HTML", "JavaScript"],
    imgSrc: "./us_navy_logo.jpeg",
    gradient: "from-blue-600 via-blue-500 to-cyan-400",
    dotBg: "bg-gradient-to-br from-blue-700 to-cyan-500",
    accentBorder: "border-blue-500/30",
  },
  {
    name: "Intevalue Services Inc.",
    position: "Java Web Developer",
    date: "Aug 2012 – Feb 2015",
    duration: "2 yrs 7 mos",
    location: "Manila, Philippines",
    jobType: "Full-time",
    achievements: [
      "Developed full-stack web application module for customer account management, including account creation, profile updates, transaction tracking, and game redirection.",
      "Built internal tools enabling customer service teams to manage account creation, transaction lookup, and data modification through a secure interface.",
      "Developed and implemented a Card Management System to track and monitor lifecycle and movement of company acquired cards.",
      "Converted static HTML designs into JSP pages and implemented backend logic using Java and Spring Boot to deliver dynamic web functionality.",
    ],
    technologies: ["Java", "Spring Boot", "JSP", "MySQL", "HTML/CSS", "JavaScript"],
    imgSrc: "./intevalue.jpeg",
    gradient: "from-violet-600 via-purple-500 to-fuchsia-400",
    dotBg: "bg-gradient-to-br from-violet-700 to-fuchsia-500",
    accentBorder: "border-violet-500/30",
  },
  {
    name: "Manila Cordage Company",
    position: "PHP Web Developer (On the Job Training)",
    date: "May 2011 – Jul 2011",
    duration: "3 mos",
    location: "Manila, Philippines",
    jobType: "Internship",
    achievements: [
      "Built a full-stack web application module for managing manufacturing work orders at a synthetic rope production company.",
      "Implemented CRUD functionality integrated with PHP backend, MySQL databases, and XML.",
      "Integrated frontend design using HTML and CSS.",
    ],
    technologies: ["PHP", "MySQL", "XML", "HTML", "CSS"],
    imgSrc: "",
    gradient: "from-emerald-600 via-teal-500 to-cyan-400",
    dotBg: "bg-gradient-to-br from-emerald-700 to-teal-500",
    accentBorder: "border-emerald-500/30",
  },
];

const WorkHistory = () => {
  const titleRef = useRef();
  const titleInView = useInView(titleRef, { once: true, margin: "-100px" });

  return (
    <section
      className="px-6 sm:px-12 lg:px-[10%] scroll-mt-16 bg-gray-200 pt-14 sm:pt-20 pb-16 sm:pb-24"
      id="workhistory"
    >
      <motion.div
        ref={titleRef}
        initial={{ opacity: 0, y: 20 }}
        animate={titleInView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.6 }}
        className="text-center mb-10 lg:mb-20"
      >
        <h2 className="bg-gradient-to-b from-red-900 via-red-700 to-red-300 text-transparent bg-clip-text inline-block text-4xl font-semibold uppercase sm:text-5xl lg:text-6xl">
          Work Experience
        </h2>
      </motion.div>

      <div className="relative">
        {/* Vertical center line — desktop only */}
        <div className="hidden lg:block absolute left-1/2 top-0 bottom-0 w-px -translate-x-1/2 bg-gradient-to-b from-transparent via-red-700/50 to-transparent" />

        {workExperiences.map((exp, index) => (
          <TimelineEntry
            key={index}
            experience={exp}
            index={index}
            isLast={index === workExperiences.length - 1}
          />
        ))}
      </div>
    </section>
  );
};

const TimelineEntry = ({ experience, index, isLast }) => {
  const ref = useRef();
  const inView = useInView(ref, { once: false, margin: "-80px" });
  const isEven = index % 2 === 0;

  const cardAnim = {
    hidden: { opacity: 0, x: isEven ? -60 : 60 },
    visible: { opacity: 1, x: 0, transition: { duration: 0.55, ease: "easeOut" } },
  };

  const stagger = {
    visible: { transition: { staggerChildren: 0.08, delayChildren: 0.1 } },
  };

  const fade = {
    hidden: { opacity: 0, y: 10 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.35 } },
  };

  return (
    <div ref={ref}>
      {/* Desktop layout — alternating left/right */}
      <div className="hidden lg:flex items-center py-6">
        {/* Left slot */}
        <div className="flex-1 flex justify-end pr-8">
          {isEven ? (
            <motion.div
              variants={cardAnim}
              initial="hidden"
              animate={inView ? "visible" : "hidden"}
              className="w-full max-w-md"
            >
              <WorkCard experience={experience} stagger={stagger} fade={fade} inView={inView} />
            </motion.div>
          ) : (
            <motion.div
              initial={{ opacity: 0 }}
              animate={inView ? { opacity: 1 } : { opacity: 0 }}
              transition={{ delay: 0.35 }}
              className="text-right"
            >
              <p className="text-gray-500 text-sm font-medium">{experience.date}</p>
              <p className="text-gray-400 text-xs">{experience.duration}</p>
            </motion.div>
          )}
        </div>

        {/* Center icon */}
        <div className="relative z-10 mx-4 flex-shrink-0">
          <CenterDot experience={experience} inView={inView} />
        </div>

        {/* Right slot */}
        <div className="flex-1 pl-8">
          {!isEven ? (
            <motion.div
              variants={cardAnim}
              initial="hidden"
              animate={inView ? "visible" : "hidden"}
              className="w-full max-w-md"
            >
              <WorkCard experience={experience} stagger={stagger} fade={fade} inView={inView} />
            </motion.div>
          ) : (
            <motion.div
              initial={{ opacity: 0 }}
              animate={inView ? { opacity: 1 } : { opacity: 0 }}
              transition={{ delay: 0.35 }}
            >
              <p className="text-gray-500 text-sm font-medium">{experience.date}</p>
              <p className="text-gray-400 text-xs">{experience.duration}</p>
            </motion.div>
          )}
        </div>
      </div>

      {/* Mobile layout — stacked with left line */}
      <div className="lg:hidden flex gap-4 mb-8">
        <div className="flex flex-col items-center flex-shrink-0">
          <CenterDot experience={experience} inView={inView} size="sm" />
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
          <WorkCard experience={experience} stagger={stagger} fade={fade} inView={inView} />
        </motion.div>
      </div>
    </div>
  );
};

const CenterDot = ({ experience, inView, size = "lg" }) => {
  const dims = size === "lg" ? "w-14 h-14" : "w-10 h-10";
  return (
    <motion.div
      className={`relative ${dims} rounded-full flex items-center justify-center shadow-xl overflow-hidden ${experience.dotBg}`}
      initial={{ scale: 0, rotate: -180 }}
      animate={inView ? { scale: 1, rotate: 0 } : { scale: 0 }}
      transition={{ type: "spring", stiffness: 260, damping: 20, delay: 0.15 }}
    >
      {/* Pulse ring */}
      <motion.div
        className={`absolute inset-0 rounded-full ${experience.dotBg} opacity-60`}
        animate={{ scale: [1, 1.7, 1], opacity: [0.6, 0, 0.6] }}
        transition={{ duration: 2.5, repeat: Infinity, ease: "easeInOut" }}
      />
      {experience.imgSrc ? (
        <img
          src={experience.imgSrc}
          alt={experience.name}
          className="w-full h-full object-cover rounded-full relative z-10"
        />
      ) : (
        <span className="text-white font-bold text-sm relative z-10">
          {experience.name.charAt(0)}
        </span>
      )}
    </motion.div>
  );
};

const WorkCard = ({ experience, stagger, fade, inView }) => {
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    if (!inView) setIsOpen(false);
  }, [inView]);

  return (
    <motion.div
      onClick={() => setIsOpen((o) => !o)}
      whileHover={{ y: -3, boxShadow: "0 20px 40px rgba(0,0,0,0.10)" }}
      transition={{ duration: 0.2 }}
      className={`rounded-xl border ${experience.accentBorder} bg-white/70 backdrop-blur-sm shadow-md overflow-hidden cursor-pointer select-none`}
    >
      <div className={`h-0.5 bg-gradient-to-r ${experience.gradient}`} />

      <motion.div
        variants={stagger}
        initial="hidden"
        animate={inView ? "visible" : "hidden"}
        className="p-5"
      >
        {/* Name + position + job type badge */}
        <motion.div variants={fade} className="flex items-start justify-between gap-2 flex-wrap mb-2">
          <div>
            <h3 className={`text-base font-bold bg-gradient-to-r ${experience.gradient} bg-clip-text text-transparent leading-tight`}>
              {experience.name}
            </h3>
            <p className="text-gray-700 text-sm font-medium mt-0.5">{experience.position}</p>
          </div>
          <span className="text-xs px-2 py-0.5 rounded-full border border-gray-300 bg-white/60 text-gray-500 whitespace-nowrap">
            {experience.jobType}
          </span>
        </motion.div>

        {/* Date + location */}
        <motion.div variants={fade} className="flex flex-wrap gap-x-4 gap-y-0.5 text-xs text-gray-500 mb-3">
          <span>📅 {experience.date} · {experience.duration}</span>
          <span>📍 {experience.location}</span>
        </motion.div>

        {/* Technology badges — always visible */}
        <motion.div variants={fade} className="flex flex-wrap gap-1.5 mb-4">
          {experience.technologies.map((tech, i) => (
            <span
              key={i}
              className="inline-flex items-center rounded-full border border-gray-200 bg-gray-100 px-2.5 py-0.5 text-xs font-medium text-gray-600"
            >
              {tech}
            </span>
          ))}
        </motion.div>

        {/* Description toggle button */}
        <motion.div variants={fade} className="flex">
          <div className={`inline-flex items-center gap-1.5 px-3 py-1 rounded-full border text-xs font-medium transition-colors ${isOpen ? 'bg-gray-700 border-gray-700 text-white' : 'border-gray-300 bg-white/60 text-gray-500'}`}>
            Description
            <motion.svg
              animate={{ rotate: isOpen ? 180 : 0 }}
              transition={{ duration: 0.3, ease: "easeInOut" }}
              className="w-3 h-3"
              viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5"
            >
              <polyline points="6 9 12 15 18 9" />
            </motion.svg>
          </div>
        </motion.div>
      </motion.div>

      {/* Accordion body — achievements */}
      <AnimatePresence initial={false}>
        {isOpen && (
          <motion.div
            key="body"
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.35, ease: [0.04, 0.62, 0.23, 0.98] }}
            style={{ overflow: "hidden" }}
          >
            <ul className="px-5 pb-5 pt-1 border-t border-gray-200/60 space-y-1.5">
              {experience.achievements.map((ach, i) => (
                <motion.li
                  key={i}
                  initial={{ opacity: 0, x: -12 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: i * 0.07, duration: 0.28 }}
                  className="flex items-start gap-2 text-xs text-gray-600 leading-relaxed"
                >
                  <span className={`mt-1.5 flex-shrink-0 w-1.5 h-1.5 rounded-full bg-gradient-to-r ${experience.gradient}`} />
                  {ach}
                </motion.li>
              ))}
            </ul>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  );
};

export default WorkHistory;
