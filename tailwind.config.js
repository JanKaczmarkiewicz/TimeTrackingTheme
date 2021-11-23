module.exports = {
  purge: [], //["./src/**/*.{js,jsx,ts,tsx}", "./public/index.html"],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      colors: {
        black: "#121212",
        whiteSurface: "#FFFFFF11",
        white: "#FFFFFF",
        gray: "#E5E5E5",
        lightGray: "#C4C4C4",
        red: "#F44335",
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
