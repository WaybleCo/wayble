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
      },
      animation: {
        ["infinite-slider"]: "infiniteSlider 20s linear infinite",
      },
      keyframes: {
        infiniteSlider: {
          "0%": { transform: "translateX(0)" },
          "100%": {
            transform: "translateX(calc(-250px * 5))",
          },
        },
      },
    },
  },
  plugins: [],
}

