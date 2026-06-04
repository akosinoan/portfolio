/**
 * Shared domain types for the root portfolio app.
 * Data files in `src/data` produce these shapes; components consume them.
 */

/** A primary navigation link mapped to a section element id. */
export interface NavLink {
  name: string;
  id: string;
}

/** A single skill chip; `icon` is a remote SVG URL or null for text-only. */
export interface Skill {
  name: string;
  icon: string | null;
}

/** A labelled group of related skills. */
export interface SkillCategory {
  label: string;
  skills: Skill[];
}

/** A CompTIA credential badge rendered in the About section. */
export interface ComptiaBadge {
  name: string;
  label: string;
  img: string;
  url: string;
}

/** A portfolio project card. */
export interface Project {
  name: string;
  description: string;
  demo: string;
  github?: string;
  /** Live Open Graph image URL, preferred when available. */
  ogImage?: string;
  /** Bundled screenshot used as a fallback when `ogImage` fails to load. */
  imgsrc?: string;
  technologies: string[];
  featured?: boolean;
}

/** Lookup entry for a technology badge (link + logo). */
export interface Technology {
  href: string;
  imgsrc: string;
}

/** A timeline entry styling bundle shared by work + education cards. */
interface TimelineStyles {
  /** `from-… via-… to-…` gradient classes. */
  gradient: string;
  /** Background classes for the timeline dot. */
  dotBg: string;
  /** Border classes for the card accent. */
  accentBorder: string;
}

/** A role in the work-history timeline. */
export interface WorkExperience extends TimelineStyles {
  name: string;
  position: string;
  date: string;
  duration: string;
  location: string;
  jobType: string;
  achievements: string[];
  technologies: string[];
  imgSrc: string;
}

/** A school / program in the education timeline. */
export interface EducationEntry extends TimelineStyles {
  school: string;
  degree: string;
  field: string;
  status?: string;
  date: string;
  location: string;
  featured: boolean;
  imgSrc: string;
}

/** Verifiable metadata shared by a certification or one of its items. */
export interface CertMeta {
  date?: string;
  status?: string;
  credentialUrl?: string;
}

/** A nested credential within a certification group. */
export interface CertItem extends CertMeta {
  name: string;
}

/** A certification card — either a single credential or a group of `items`. */
export interface Certification extends CertMeta {
  name: string;
  issuer: string;
  icon: string;
  gradient: string;
  items?: CertItem[];
}

/** A contact / social link rendered in the hero. */
export interface Social {
  href: string;
  imgSrc: string;
  label: string;
}
