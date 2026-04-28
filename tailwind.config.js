/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./backend/index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  darkMode: "class",
  theme: {
    extend: {
      colors: {
        bg: "rgb(var(--bg) / <alpha-value>)",
        surface: "rgb(var(--surface) / <alpha-value>)",
        border: "rgb(var(--border) / <alpha-value>)",
        fg: "rgb(var(--fg) / <alpha-value>)",
        muted: "rgb(var(--muted) / <alpha-value>)",
        accent: "rgb(var(--accent) / <alpha-value>)",
      },
      fontFamily: {
        sans: ['"Geist Variable"', "Inter", "system-ui", "sans-serif"],
        mono: ['"Geist Mono Variable"', "ui-monospace", "monospace"],
      },
      keyframes: {
        wiggle: {
          "0%, 100%": { transform: "rotate(-3deg)" },
          "50%": { transform: "rotate(3deg)" },
        },
        reveal: {
          "0%": { "background-position-x": "200%" },
          "100%": { "background-position-x": "0%" },
        },
        fadeIn: {
          "0%": { top: "-5%", opacity: 0 },
          "60%": { opacity: "40%" },
          "100%": { top: "0", opacity: 1 },
        },
        fadeLeftToRight: {
          "0%": { left: "-40%", opacity: 0 },
          "60%": { opacity: "40%" },
          "100%": { left: "0", opacity: 1 },
        },
        fadeRightToLeft: {
          "0%": { right: "-40%", opacity: 0 },
          "60%": { opacity: "40%" },
          "100%": { right: "0", opacity: 1 },
        },
        fadeUp: {
          "0%": { opacity: "0", transform: "translateY(12px)" },
          "100%": { opacity: "1", transform: "translateY(0)" },
        },
      },
      animation: {
        wiggle: "wiggle 200ms ease-in-out",
        reveal: "reveal both linear",
        fadeIn: "fadeIn both 500ms ease-in-out",
        fadeLeftToRight: "fadeLeftToRight both 500ms ease-in-out",
        fadeRightToLeft: "fadeRightToLeft both 500ms ease-in-out",
        fadeUp: "fadeUp 600ms ease-out both",
      },
      transitionProperty: {
        width: "width",
      },
    },
  },
  plugins: [],
};
