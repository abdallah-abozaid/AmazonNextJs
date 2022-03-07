module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  darkMode: false,
  theme: {
    extend: {
      colors: {
        amzaon: {
          light: "#232f3e",
          DEFAULT: "#131921",
        },
      },
    },
    fontSize: {
      xs: ".65rem",
      sm: ".815rem",
      lg: "1.125rem",
    },
  },
  plugins: [],
};
