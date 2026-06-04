import type { Social } from "../types";
import { site } from "./site";

/** Contact links rendered in the hero "Let's connect!" row. */
export const socials: Social[] = [
  { href: `mailto:${site.email}`, imgSrc: "./gmail_logo.png", label: "Email" },
  {
    href: "https://www.linkedin.com/in/noanbabao/",
    imgSrc: "./linkedIn_logo.png",
    label: "LinkedIn",
  },
  {
    href: "https://www.instagram.com/nowander",
    imgSrc: "./Instagram_logo.png",
    label: "Instagram",
  },
  {
    href: "https://www.facebook.com/Akosinoan/",
    imgSrc: "./fb_logo.png",
    label: "Facebook",
  },
];
