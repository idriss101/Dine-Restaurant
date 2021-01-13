module.exports = {
  purge: ["./pages/**/*.js", "./components/**/*.js"],
  darkMode: false, // or 'media' or 'class'
  theme: {
    fontWeight: {
      "extra-light": 200,
      light: 300,
      normal: 400,
      medium: 500,
      semibold: 600,
      bold: 700,
    },
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
      backgroundImage: {
        "hero-mobile":
          "url('/starter-code/images/homepage/hero-bg-mobile.jpg')",
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
