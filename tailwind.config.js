/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./public/**/*.html",
    "./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: "#011627",
        secondary: "#FDFFFC",
        green_sea: "#2EC4B6",
        red_panthon: "#E71D36",
        orange_peel: "#FF9F1C",
      },
    },
  },
  plugins: [],
}