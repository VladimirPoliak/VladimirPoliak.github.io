/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./Final_Project/**/*.{html, js}"], /*Only items in the Final_Project folder ending with html and js will be effected.*/
  theme: {
    extend: {
      fontFamily: {
        sharetech: ["Share Tech", "sans-serif"],
      }
    },
  },
  plugins: [],
}

