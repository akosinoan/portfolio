export const socials = {
  email: "noan.babao@gmail.com",
  emailHref: "mailto:noan.babao@gmail.com",
  linkedin: "https://www.linkedin.com/in/noanbabao/",
  github: "https://github.com/akosinoan",
  resume: "/Noel_Angelo_Babao_Resume.pdf",
};

export const navItems = [
  { id: "work", label: "Work" },
  { id: "stack", label: "Stack" },
  { id: "thinking", label: "Thinking" },
  { id: "timeline", label: "Timeline" },
  { id: "contact", label: "Contact" },
] as const;

export type NavItemId = (typeof navItems)[number]["id"];
