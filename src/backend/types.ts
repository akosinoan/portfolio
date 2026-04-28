export type ProjectStatus = "live" | "coming-soon";

export type Project = {
  id: string;
  title: string;
  oneLiner: string;
  description: string;
  stack: string[];
  status: ProjectStatus;
  links?: {
    github?: string;
    demo?: string;
    caseStudy?: string;
  };
  thumb?: string;
  badge?: string;
};

export type StackGroup = {
  label: string;
  items: string[];
};

export type TimelineKind = "milestone" | "work" | "education";

export type TimelineEntry = {
  id: string;
  kind: TimelineKind;
  period: string;
  title: string;
  org?: string;
  location?: string;
  bullets?: string[];
  stack?: string[];
};

export type Cert = {
  id: string;
  name: string;
  issuer: string;
  date: string;
  inProgress?: boolean;
};

export type Repo = {
  name: string;
  description: string;
  language: string;
  url: string;
};
