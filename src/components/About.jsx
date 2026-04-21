import { useRef } from 'react'
import useIsVisible from "../util/useIsVisible";

const D = "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons";
const SI = "https://cdn.simpleicons.org";

const SKILL_CATEGORIES = [
  {
    label: "Languages",
    skills: [
      { name: "Java",       icon: `${D}/java/java-original.svg` },
      { name: "JavaScript", icon: `${D}/javascript/javascript-original.svg` },
      { name: "PHP",        icon: `${D}/php/php-original.svg` },
      { name: "C",          icon: `${D}/c/c-original.svg` },
      { name: "Rust",       icon: `${D}/rust/rust-original.svg` },
    ],
  },
  {
    label: "Backend",
    skills: [
      { name: "Spring Boot", icon: `${D}/spring/spring-original.svg` },
      { name: "Node.js",     icon: `${D}/nodejs/nodejs-original.svg` },
      { name: "Express.js",  icon: `${D}/express/express-original.svg` },
      { name: "Axum",        icon: `${D}/rust/rust-original.svg` },
      { name: "Supabase",    icon: `${D}/supabase/supabase-original.svg` },
      { name: "REST APIs",   icon: `${SI}/fastapi/009688` },
    ],
  },
  {
    label: "Frontend",
    skills: [
      { name: "React",       icon: `${D}/react/react-original.svg` },
      { name: "Next.js",     icon: `${D}/nextjs/nextjs-original.svg` },
      { name: "HTML",        icon: `${D}/html5/html5-original.svg` },
      { name: "CSS",         icon: `${D}/css3/css3-original.svg` },
      { name: "TailwindCSS", icon: `${D}/tailwindcss/tailwindcss-original.svg` },
      { name: "Bootstrap",   icon: `${D}/bootstrap/bootstrap-original.svg` },
      { name: "JSP",         icon: `${D}/java/java-original.svg` },
      { name: "jQuery",      icon: `${D}/jquery/jquery-original.svg` },
    ],
  },
  {
    label: "Databases",
    skills: [
      { name: "PostgreSQL", icon: `${D}/postgresql/postgresql-original.svg` },
      { name: "MySQL",      icon: `${D}/mysql/mysql-original.svg` },
      { name: "MongoDB",    icon: `${D}/mongodb/mongodb-original.svg` },
    ],
  },
  {
    label: "Tools & Platforms",
    skills: [
      { name: "Git",         icon: `${D}/git/git-original.svg` },
      { name: "AWS Amplify", icon: `${SI}/awsamplify/FF9900` },
      { name: "Linux",       icon: `${D}/linux/linux-original.svg` },
      { name: "macOS",       icon: `${SI}/apple/000000` },
      { name: "Windows",     icon: `${D}/windows8/windows8-original.svg` },
    ],
  },
  {
    label: "Concepts",
    skills: [
      { name: "Full-Stack Development", icon: null },
      { name: "CRUD Applications",      icon: null },
      { name: "MVC Architecture",       icon: null },
      { name: "Responsive Design",      icon: null },
    ],
  },
];

const About = () => {
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
          <div ref={ref1} className={`relative ${isVisible1 ? "animate-fadeLeftToRight" : "opacity-0"}`}>
            <h2 className="text-4xl font-semibold uppercase sm:text-5xl lg:text-6xl bg-gradient-to-b from-red-950 via-red-800 to-red-300 text-transparent bg-clip-text inline-block">
              Who am I?
            </h2>
            <h4 className="pt-6 font-header text-xl font-medium text-black sm:text-2xl lg:text-3xl">
              I'm Noel Angelo Babao, <br /> a Web Developer & U.S. Navy Veteran
            </h4>
          </div>
          <div ref={ref2} className={`relative ${isVisible2 ? "animate-fadeLeftToRight" : "opacity-0"}`}>
            <p className="pt-6 font-body leading-relaxed text-gray-400">
              I'm a motivated software developer who has three years of professional web development
              experience and four years of military service in aviation maintenance.
              Efficient in learning new knowledge while maintaining attention to details. Equally
              capable of working alone or as a member of a team, and comfortable exercising initiative
              and adapting to situations effortlessly.
              <br /><br />
              Enjoys exploring something new.
            </p>
          </div>
        </div>

        <div className="pt-10 lg:pt-0 flex-1">
          <div ref={ref3} className={`relative ${isVisible3 ? "lg:animate-fadeRightToLeft animate-fadeLeftToRight" : "opacity-0"}`}>
            <h4 className="font-header text-center lg:text-left text-xl font-medium sm:text-2xl lg:text-3xl bg-gradient-to-b from-red-950 via-red-800 to-red-300 text-transparent bg-clip-text mb-6">
              Skills
            </h4>
            <div className="space-y-5">
              {SKILL_CATEGORIES.map((cat) => (
                <SkillCategory key={cat.label} label={cat.label} skills={cat.skills} />
              ))}
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
        onError={(e) => { e.currentTarget.style.display = 'none'; }}
      />
    )}
    {name}
  </span>
);

export default About;
