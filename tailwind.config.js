/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./index.html'],
  theme: {
    extend: {
      fontFamily:{
        'display':['Poppins', 'sans-serif'],
        'body':['Inter', 'sans-serif']
      },
      colors:{
        'primary':'#3238f2',
      }
    },
  },
  plugins: [],
}

