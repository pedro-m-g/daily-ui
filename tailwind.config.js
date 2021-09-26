module.exports = {
  mode: 'jit',
  purge: [
    "./main.js",
    "./index.html",
    "challenges/**/*.html"
  ],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {},
  },
  variants: {
    extend: {},
  },
  plugins: [
    require('@tailwindcss/forms')
  ],
}
