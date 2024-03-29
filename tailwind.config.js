/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        ivory: "#FFFFF0",
        whitesmoke: "#F5F5F5",
        snow: "#FFFAFA",
      },
    },
  },
  plugins: [],
};
