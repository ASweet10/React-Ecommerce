/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {
      fontFamily: {
        gothic: ['Special Gothic Expanded One', 'sans-serif'],
      },
    },   
    colors: {
      'background': '#f0f0f0',
      'primary': '#000c21',
      'button-bg': '#0f0f0f',
      'white': '#FFFFFF',
      'black': '#000000',
      'gray':  '#949494',
      'lightGray': '#',
      'blue': '#1a3782',
      'green': '#008207',
      'red': '#b00000',
      'pink': '#FF8DA1',
    }
  },
  plugins: [],
}