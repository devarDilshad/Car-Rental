/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./src/**/*.{js,jsx}"],
  mode: "jit",
  theme: {
    extend: {
      colors: {
        primary: "#FF4D30",
        secondary: "#010103",
        dimGrey: "#706F7B",
        darkBg: "#2D2D2D",
        lightBg: "#E9E9E9",
      },
      fontFamily: {
        rubik: ["Rubik", "sans-serif"],
        poppins: ["Poppins" , "sans-serif"],
      },
    },
    screens: {
      ss: "480px",
      sm: "620px",
      mm: "700px",
      md: "800px",
      lg: "1024px",
      xl: "1280px",
      xxl: "1560px"
    },
  },
  plugins: [],
};