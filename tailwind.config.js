/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        daiany: {
          bg: "#FAF8F5", // Fundo off-white acolhedor
          rose: "#C68B75", // Tom rosé/terroso da logo
          sage: "#7A9A95", // Verde-água / sálvia da logo
          dark: "#2C3E3B", // Texto escuro principal
          light: "#FFFFFF", // Branco para cards
        },
      },
    },
  },
  plugins: [],
};
