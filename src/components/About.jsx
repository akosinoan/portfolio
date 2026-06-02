import { useRef, useContext } from "react";
import useIsVisible from "../util/useIsVisible";
import { ActiveNavContext } from "./NavBar";

const D = "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons";
const SI = "https://cdn.simpleicons.org";

const HIGHLIGHTS = [
  "B.S. Computer Science",
  "U.S. Navy Veteran",
  "Full-Stack Developer",
  "Java · React · Rust",
];

const SKILL_CATEGORIES = [
  {
    label: "Languages",
    skills: [
      { name: "Java", icon: `${D}/java/java-original.svg` },
      { name: "JavaScript", icon: `${D}/javascript/javascript-original.svg` },
      { name: "PHP", icon: `${D}/php/php-original.svg` },
      { name: "C", icon: `${D}/c/c-original.svg` },
      { name: "Rust", icon: `${D}/rust/rust-original.svg` },
    ],
  },
  {
    label: "Backend",
    skills: [
      { name: "Spring Boot", icon: `${D}/spring/spring-original.svg` },
      { name: "Node.js", icon: `${D}/nodejs/nodejs-original.svg` },
      { name: "Express.js", icon: `${D}/express/express-original.svg` },
      { name: "Axum", icon: `${D}/rust/rust-original.svg` },
      { name: "Supabase", icon: `${D}/supabase/supabase-original.svg` },
      { name: "REST APIs", icon: `${SI}/fastapi/009688` },
    ],
  },
  {
    label: "Frontend",
    skills: [
      { name: "React", icon: `${D}/react/react-original.svg` },
      { name: "Next.js", icon: `${D}/nextjs/nextjs-original.svg` },
      { name: "HTML", icon: `${D}/html5/html5-original.svg` },
      { name: "CSS", icon: `${D}/css3/css3-original.svg` },
      {
        name: "TailwindCSS",
        icon: `${D}/tailwindcss/tailwindcss-original.svg`,
      },
      { name: "Bootstrap", icon: `${D}/bootstrap/bootstrap-original.svg` },
      { name: "JSP", icon: `${D}/java/java-original.svg` },
      { name: "jQuery", icon: `${D}/jquery/jquery-original.svg` },
    ],
  },
  {
    label: "Databases",
    skills: [
      { name: "PostgreSQL", icon: `${D}/postgresql/postgresql-original.svg` },
      { name: "MySQL", icon: `${D}/mysql/mysql-original.svg` },
      { name: "MongoDB", icon: `${D}/mongodb/mongodb-original.svg` },
    ],
  },
  {
    label: "Tools & Platforms",
    skills: [
      { name: "Git", icon: `${D}/git/git-original.svg` },
      { name: "AWS Amplify", icon: `${SI}/awsamplify/FF9900` },
      { name: "Linux", icon: `${D}/linux/linux-original.svg` },
      { name: "macOS", icon: `${SI}/apple/000000` },
      { name: "Windows", icon: `${D}/windows8/windows8-original.svg` },
    ],
  },
  {
    label: "Concepts",
    skills: [
      { name: "Full-Stack Development", icon: null },
      { name: "CRUD Applications", icon: null },
      { name: "MVC Architecture", icon: null },
      { name: "Responsive Design", icon: null },
    ],
  },
];

const COMPTIA_BADGES = [
  {
    name: "CompTIA A+ ce",
    label: "A+",
    img: "https://images.credly.com/images/f6d62c5d-1e1d-4de6-92ee-8dc8c80b1c7b/blob",
    url: "https://www.credly.com/badges/843606a5-6862-46eb-abe2-7116c5c49d66/public_url",
  },
  {
    name: "CompTIA Network+ ce",
    label: "Network+",
    img: "https://images.credly.com/images/c70ba73e-3c8a-46fa-9d60-4a9af94ad662/blob",
    url: "https://www.credly.com/badges/fc736661-52c8-47ec-aabb-544860eb8e69/public_url",
  },
  {
    name: "CompTIA Security+ ce",
    label: "Security+",
    img: "https://images.credly.com/images/80d8a06a-c384-42bf-ad36-db81bce5adce/blob",
    url: "https://www.credly.com/badges/19345389-7111-43d3-b932-3f28b4a4f20f/public_url",
  },
  {
    name: "CompTIA IT Operations Specialist – CIOS",
    label: "CIOS",
    img: "https://images.credly.com/images/7f7657b9-4d1b-4b8d-b5ee-5fdf6d7ccd71/04294_CompTIA_Cert_Badges_Specialist_-_CIOS.png",
    url: "https://www.credly.com/badges/d08afa7c-27e6-4a86-9c65-235d7d3ed135/public_url",
  },
  {
    name: "CompTIA Secure Infrastructure Specialist – CSIS",
    label: "CSIS",
    img: "https://images.credly.com/images/8090280a-311f-425f-a1cd-a32770b5a444/CompTIA_CSIS.png",
    url: "https://www.credly.com/badges/7a0b7da8-41db-4da5-b01f-eb5ea81c4a8e/public_url",
  },
];

const About = () => {
  const [, setActiveNav] = useContext(ActiveNavContext);

  const handleViewWork = () => {
    setActiveNav("portfolio");
    document
      .querySelector("#portfolio")
      ?.scrollIntoView({ behavior: "smooth" });
  };

  const ref1 = useRef();
  const isVisible1 = useIsVisible(ref1);
  const ref2 = useRef();
  const isVisible2 = useIsVisible(ref2);
  const ref3 = useRef();
  const isVisible3 = useIsVisible(ref3);

  return (
    <section className="bg-gray-200 scroll-mt-16" id="about">
      <div className="flex flex-col px-6 sm:px-12 lg:px-[10%] py-16 md:py-20 lg:flex-row lg:items-start lg:gap-12">
        <div className="lg:w-[38%] flex-shrink-0 text-center lg:text-left">
          <div
            ref={ref1}
            className={`relative ${isVisible1 ? "animate-fadeLeftToRight" : "opacity-0"}`}
          >
            <h2 className="text-4xl font-semibold uppercase sm:text-5xl lg:text-6xl bg-gradient-to-b from-red-950 via-red-800 to-red-300 text-transparent bg-clip-text inline-block">
              Who am I?
            </h2>
            <h4 className="pt-6 font-header text-xl font-medium text-black sm:text-2xl lg:text-3xl">
              I'm Noel Angelo Babao, <br /> a Full-Stack Software Developer
              &amp; U.S. Navy Veteran
            </h4>
          </div>
          <div
            ref={ref2}
            className={`relative ${isVisible2 ? "animate-fadeLeftToRight" : "opacity-0"}`}
          >
            <div className="flex flex-wrap justify-center lg:justify-start gap-2 pt-6">
              {HIGHLIGHTS.map((item) => (
                <span
                  key={item}
                  className="inline-flex items-center rounded-full border border-red-200 bg-white px-3 py-1 text-xs font-semibold text-red-900 shadow-sm"
                >
                  {item}
                </span>
              ))}
            </div>
            <p className="pt-6 font-body leading-relaxed text-gray-600">
              Software engineer with a Computer Science degree and hands-on
              experience building full-stack, production-grade web applications.
              I design CRUD systems, secure internal tooling, and responsive
              frontends across modern stacks.
            </p>
            <p className="pt-4 font-body leading-relaxed text-gray-600">
              I pair engineering discipline with U.S. Navy trained attention to
              detail, clear written communication, and a habit of shipping
              quality work independently under tight deadlines. Comfortable
              reaching across the stack into IT and DevOps when strong
              troubleshooting makes the difference.
            </p>
            <div className="flex flex-wrap justify-center lg:justify-start gap-3 pt-6">
              <a
                href="mailto:noanworks@gmail.com"
                className="inline-flex items-center rounded-lg bg-gradient-to-r from-red-900 to-red-700 px-5 py-2.5 text-sm font-semibold text-white shadow-sm hover:shadow-md hover:scale-105 transition-all duration-200"
              >
                Get in touch
              </a>
              <button
                onClick={handleViewWork}
                className="inline-flex items-center rounded-lg border border-red-900 px-5 py-2.5 text-sm font-semibold text-red-900 hover:shadow-md hover:scale-105 transition-all duration-200"
              >
                View my work
              </button>
            </div>
          </div>
        </div>

        <div className="pt-10 lg:pt-0 flex-1">
          <div
            ref={ref3}
            className={`relative ${isVisible3 ? "lg:animate-fadeRightToLeft animate-fadeLeftToRight" : "opacity-0"}`}
          >
            <h4 className="font-header text-center lg:text-left text-xl font-medium sm:text-2xl lg:text-3xl bg-gradient-to-b from-red-950 via-red-800 to-red-300 text-transparent bg-clip-text mb-6">
              Skills
            </h4>
            <div className="space-y-5">
              {SKILL_CATEGORIES.map((cat) => (
                <SkillCategory
                  key={cat.label}
                  label={cat.label}
                  skills={cat.skills}
                />
              ))}
            </div>

            <div className="mt-8">
              <h4 className="font-header text-center lg:text-left text-xl font-medium sm:text-2xl lg:text-3xl bg-gradient-to-b from-red-950 via-red-800 to-red-300 text-transparent bg-clip-text mb-6">
                Certifications
              </h4>
              <div className="flex flex-wrap justify-center lg:justify-start gap-3">
                {COMPTIA_BADGES.map((b) => (
                  <a
                    key={b.name}
                    href={b.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    title={b.name}
                    className="flex flex-col items-center w-20 sm:w-24 hover:scale-105 transition-transform duration-200"
                  >
                    <img
                      src={b.img}
                      alt={b.name}
                      className="w-16 h-16 sm:w-20 sm:h-20 object-contain"
                      onError={(e) => {
                        e.currentTarget.style.display = "none";
                      }}
                    />
                    <span className="mt-1.5 text-center text-[10px] font-medium leading-tight text-gray-600">
                      {b.label ?? b.name.replace(/^CompTIA\s+/, "")}
                    </span>
                  </a>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

const SkillCategory = ({ label, skills }) => (
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

const SkillBadge = ({ name, icon }) => (
  <span className="inline-flex items-center gap-1.5 rounded-lg border border-gray-200 bg-white px-2.5 py-1.5 text-xs font-medium text-gray-700 shadow-sm hover:shadow-md hover:scale-105 transition-all duration-200 cursor-default">
    {icon && (
      <img
        src={icon}
        alt={name}
        className="w-4 h-4 flex-shrink-0"
        onError={(e) => {
          e.currentTarget.style.display = "none";
        }}
      />
    )}
    {name}
  </span>
);

export default About;
