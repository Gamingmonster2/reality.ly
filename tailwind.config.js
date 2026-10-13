/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./index.html', './src/**/*.{html,js}'],
  theme: {
    extend: {
      colors: {
        brand: {
          dark: '#05070c',
          navy: '#0b132b',
          blue: '#1c2541',
          gold: '#d4af37',
          goldHover: '#f3e5ab',
          olive: '#556b2f',
          accent: '#3a86ff'
        }
      },
      fontFamily: {
        cairo: ['Cairo', 'sans-serif']
      }
    }
  },
  plugins: []
}
