/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./public/index.html"],
  theme: {
    extend: {
      fontFamily: {
        poppins: "'Poppins', sans-serif",
      },
      colors: {
        primarytext: "#3f3f46",
        secondarytext: "#78716c",
        primaryclr: "#0891b2",
        navBg: "rgb(212, 212, 216,.7)",
      },
    },
  },
  plugins: [],
};
