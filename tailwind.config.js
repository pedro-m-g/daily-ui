const { colors } = require('tailwindcss/defaultTheme');

module.exports = {
  mode: 'jit',
  purge: [
    "./main.js",
    "./index.html",
    "challenges/**/*.html"
  ],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      borderColor: {
        'left-triangle-gray': `${colors.gray[100]} transparent transparent transparent`
      }
    },
  },
  variants: {
    extend: {},
  },
  plugins: [
    require('@tailwindcss/forms')
  ],
}
