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
        'project-gradient': "linear-gradient(to bottom, rgba(0,0,0,0.6) 0%,rgba(0,0,0,0.6) 100%)"

      }
    },
  },
  plugins: [],
}