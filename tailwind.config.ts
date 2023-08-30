/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: ["class"],
  content: [
    "./pages/**/*.{ts,tsx}",
    "./components/**/*.{ts,tsx}",
    "./app/**/*.{ts,tsx}",
    "./src/**/*.{ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: "#F1FFD3",
        "primary-dark": "#C5FF48",
        secondary: "#28242D",
        accent: "#FF3B99",
        "accent-dark": "#B32066",
      },
      fontFamily: {
        sans: ["var(--font-open)"],
        serif: ["var(--font-source-serif-4)"],
      },
    },
  },
  plugins: [require("tailwindcss-animate")],
};
