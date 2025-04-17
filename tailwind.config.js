// tailwind.config.js

module.exports = {
  content: ["./app/**/*.{js,ts,jsx,tsx}", "./components/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        varela: ["var(--font-varela)", "sans-serif"],
        varelaround: ["var(--font-varela-round)", "sans-serif"],
        montserrat: ["var(--font-montserrat)", "sans-serif"],
        lexend: ["var(--font-lexend)", "sans-serif"],
        coustard: ["var(--font-coustard)", "serif"],
        fraunces: ["var(--font-fraunces)", "serif"],
        baloo: ["'Baloo Bhaijaan 2'", "cursive"],
        lilita: ["'Lilita One'", "cursive"],
      },
    },
  },
  plugins: [],
};
