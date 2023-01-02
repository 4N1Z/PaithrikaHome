/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./src/**/*.{js,jsx}"],
  mode: "jit",
  theme: {
    extend: {
      colors: {
        primary: "#F3F3F3",
        secondary: "#CC281E",
        teritery: "rgba(204, 40, 30, 0.85)",
        dimWhite: "rgba(255, 255, 255, 0.7)",
        dimBlue: "rgba(9, 151, 124, 0.1)",
        redGrad1: "rgba(204, 40, 30, 0.7)",
        redGrad2: "rgba(137, 8, 0, 0.7)",
        bgBlur: "blur(12px)",
      },
      fontFamily: {
        poppins: ["Poppins", "sans-serif"],
      },
    },
    screens: {
      xs: "480px",
      ss: "620px",
      sm: "768px",
      sn: "860px",
      md: "1060px",
      lg: "1200px",
      xl: "1700px",
    },
  },
  plugins: [],
};