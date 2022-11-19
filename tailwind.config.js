/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.tsx",

  ],
  theme: {
    extend: {
      backgroundImage: {
        finances: "url(/finances.png)",
        coffeshop: "url(/coffeshop.png)",
        dtstore: "url(/dtstore.png)",
        pokedex: "url(/pokedex.png)",
        nunesPizza: "url(/nunesPizza.png)",
      }
    },
  },
  plugins: [],
}