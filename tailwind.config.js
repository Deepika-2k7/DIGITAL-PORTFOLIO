/** @type {import('tailwindcss').Config} */
export default {
  darkMode: "class",
  content: ["./index.html", "./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        sand: "#f8f4ec",
        ink: "#161417",
        coral: "#f97360",
        teal: "#5eead4",
        gold: "#f6c66a"
      },
      boxShadow: {
        soft: "0 24px 80px -32px rgba(15, 23, 42, 0.45)"
      },
      backgroundImage: {
        "mesh-light":
          "radial-gradient(circle at top left, rgba(249,115,96,0.2), transparent 34%), radial-gradient(circle at top right, rgba(94,234,212,0.14), transparent 30%), linear-gradient(180deg, rgba(248,244,236,0.95), rgba(255,255,255,1))",
        "mesh-dark":
          "radial-gradient(circle at top left, rgba(249,115,96,0.16), transparent 32%), radial-gradient(circle at top right, rgba(94,234,212,0.12), transparent 28%), linear-gradient(180deg, rgba(2,6,23,0.96), rgba(15,23,42,1))"
      },
      fontFamily: {
        display: ['"Cormorant Garamond"', "serif"],
        sans: ['"Manrope"', "sans-serif"]
      }
    }
  },
  plugins: []
};
