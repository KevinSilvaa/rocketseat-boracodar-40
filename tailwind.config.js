/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./public/*.html"],
  theme: {
    extend: {
      colors: {
        'roxo-claro': '#C7AFFF',
        'roxo-escuro': '#996DDF',
        'preto': '#09090A',
        'cinza': '#C4C4CC'
        },
      'fontFamily': {
        roboto: ['Roboto', 'sans-serif'],
      },
    },
  },
  plugins: [],
}

