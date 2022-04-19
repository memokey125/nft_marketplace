module.exports = {
  mode: "jit",
  purge: ["./src/**/*.{js,jsx,ts,tsx}", "./public/index.html"],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      colors: {
        'orange': '#FF6B00',
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
