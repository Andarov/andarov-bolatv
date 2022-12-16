/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./*.{html,js}"],
  theme: {
    extend: {
      fontFamily: {
        signika: ["Signika Negative", "sans-serif"],
      },
      colors:{
        br:{
          'red': "#a30015;",
          'blue': "#319437",
          'violet': '#5b2269',
          'darkBlue': '#004686'
        }
      },
      maxWidth:{
        "base": "1240px",
      }
    },
  },
  plugins: [],
}
