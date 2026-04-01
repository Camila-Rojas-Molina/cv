/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: 'class',
  content: ["./docs/**/*.{html,js}"],
  theme: {
    extend: {
      colors: {
        primary: '#0066cc',
        secondary: '#0052a3',
      },
    },
  },
  plugins: [],
}
