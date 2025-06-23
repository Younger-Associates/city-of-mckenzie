/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./docs/**/*.{html,js}"],
  theme: {
    extend: {
      colors: {
        'mckenzie': {
          'blue': '#00558A',
          'dark-blue': '#022D48',
          'red': '#EE2B37',  
          'light-blue': '#A9DDFD',
          'green': '#75BC43'
        }
      }
    },
  },
  plugins: [],
} 