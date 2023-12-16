/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  mode: 'jit',
  theme: {
    extend: {
      animation: {
        marquee: 'marquee 30s linear infinite',
        marquee2: 'marquee2 25s linear infinite',
      },
      keyframes: {
        marquee: {
          '0%': { transform: 'translateX(0%)' },
          '100%': { transform: 'translateX(-100%)' },
        },
        marquee2: {
          '0%': { transform: 'translateX(100%)' },
          '100%': { transform: 'translateX(0%)' },
        }
      }
    },   
    colors: {
      'background': '#f2f2f2',
      'navbar-footer-bg': '#3d3d3d',
      'button-bg': '#0f0f0f',
      'white': '#FFFFFF',
      'black': '#000000',
      'gray':  '#949494',
      'blue': '#1a3782',
      'green': '#008207',
      'red': '#b00000',
    }
  },
  plugins: [],
}

