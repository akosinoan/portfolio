/** Site-wide identity and copy shared across layout + sections. */
export const site = {
  name: "Noel Angelo Babao",
  email: "noanworks@gmail.com",
  copyright: "© 2026 Noanworks Development",
  hero: {
    greeting: "Hello I'm",
    name: "Noel Angelo Babao!",
    connect: "Let's connect!",
  },
  /** Link to the alternate backend-engineer build, shown in the footer. */
  backendLink: {
    href: "/backend/",
    label: "See the backend-engineer rebuild →",
  },
} as const;
