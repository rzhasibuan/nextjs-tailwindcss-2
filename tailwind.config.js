const colors = require("tailwindcss/colors");
module.exports = {
  purge: [],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      colors: {
        warnaPink: colors.pink,
        blue: colors.lightBlue,
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
