/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",               // Vite entry
    "./src/**/*.{js,ts,jsx,tsx}", // All React components
  ],
  theme: {
    extend: {
      spacing: {
        22: "5.5rem",
        24: "6rem",
        28: "7rem",
        32: "8rem",
        40: "10rem", // extra large spacing
      },
    },
  },
  plugins: [],
};