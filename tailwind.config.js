/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: 'class',
  content: ['./index.html', './app.js', './countries.js'],
  theme: {
    extend: {
      fontFamily: { sans: ['Inter', 'sans-serif'] }
    }
  }
}
