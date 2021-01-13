module.exports = {
  purge: ["./pages/**/*.js", "./components/**/*.js"],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      fontFamily: {
        spartan: ["Spartan", "sans-serif"],
      },
      colors: {
        beaver: "#9e7f66",
        "cod-gray": "#111",
        mirage: "#17192b",
        "ebony-clay": "#242b37",
        "shuttle-gray": "5c6779",
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
