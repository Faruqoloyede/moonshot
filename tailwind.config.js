/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./src/**/*.{js,jsx}"],
  mode: "jit",
  theme: {
    extend: {
      colors: {
        primary: "#14122A",
        gradient: "#FF6EFE",
        grey: "#1A1C29",
        border: "#393939",
        black: "#0B0B0B",
        icon: "#F9F5F2",
        lightblue: "#36B6FE45"
      },
      fontFamily: {
        poppins: ["Poppins", "sans-serif"],
        sans: ["DM Sans", "sans-serif"]
      },
    },
    screens: {
      xs: "480px",
      ss: "620px",
      sm: "768px",
      md: "1060px",
      lg: "1200px",
      xl: "1700px",
    },
  },
  plugins: [],
};

