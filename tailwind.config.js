/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html",
  "./src/**/*.{js,ts,jsx,tsx}",],
  theme: {
    extend: {
      backgroundImage:{
        'yosimite': "url('../20190619 yosemite-1.jpg')",
      }
    },
  },
  plugins: [],
}

