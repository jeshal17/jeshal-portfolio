/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,jsx}"],
  theme: {
    extend: {
      colors: {
        espresso: "#241812",
        cocoa: "#3b271d",
        clay: "#765545",
        cream: "#eee3d2",
        paper: "#f7f0e5",
        ink: "#1c1714",
      },
      fontFamily: {
        display: ["Georgia", "Times New Roman", "serif"],
        sans: ["Inter", "ui-sans-serif", "system-ui", "sans-serif"],
      },
    },
  },
  plugins: [],
};