/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['index.html'],
  theme: {
    container:{
      center: true,
      padding: '16px',
    },
    extend: {
      colors : {
        magenta: '#d97706',
        abu: '#64748b',
        dark : '#111827',
        yello : '#ea580c',
      },
      screens: {
        '2xl': '1320px',
      },
    },
  },
  plugins: [],
}
