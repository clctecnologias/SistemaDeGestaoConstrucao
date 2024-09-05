/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['index.html'],
  theme: {
    extend: {
      backgroundImage: {
        'imgFundo': "url('../../assets/img/bg1.jpg')",
        'imgFundo1': "url('../../assets/img/bg2.jpg')",
        'imgFundo2': "url('../../assets/img/nome.png')",
        'input-pai': "url('../../assets/img/pai.png')",
      }, 
      fontFamily: {
        mont: ['Montserrat', 'sans-serif'],
        inter: ['Inter', 'sans-serif'],
      },
      colors: {
        lr: '#FA9225',
        vr2: '#86EFAC',
        ln: '#86FAD94',
        fusco: '#00000041',
        pr: '#1D2438',
        pr1: '#1d2438e8',
      }
    },
  },
  plugins: [],
}


