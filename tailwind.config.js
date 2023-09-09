/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html"],
  darkMode: "class",
  theme: {
    container: {
      center: true,
      padding: "16px",
    },
    extend: {
      colors: {
        merah: "#ff4b57",
        hitam: "#23253a",
        ijo: "#cbf380",
        ungu: "#4831d4",
      },
      screens: {
        "2xl": "1320px",
      },
    },
  },
  plugins: [],
};
