/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{js,jsx,ts,tsx}'],
  theme: {
    extend: {
      colors: {
        'primary': '#ffffff',
        'lightBlue': '#DEF7FF',
        'mediumBlue': '#2D8BBE',
        'darkBlue': '#0A2D49',
      },
      fontFamily: {
        'spline': ["Spline Sans", "sans-serif"],
      }
    },
  },
  plugins: [],
}

