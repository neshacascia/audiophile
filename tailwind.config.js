/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx}',
    './components/**/*.{js,ts,jsx,tsx}',
    './app/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {
      colors: {
        fadedOrange: '#D87D4A',
        lightGrey: '#F1F1F1',
        charcoal: '#101010',
      },
      fontFamily: {
        manrope: ['Manrope'],
        poppins: ['Poppins'],
      },
    },
    backgroundImage: {
      homeHeader: ["url('../public/assets/mobile/home/home-header.jpg')"],
      zx7Speaker: ["url('../public/assets/mobile/home/speaker-zx7.jpg')"],
      yx1Earphones: ["url('../public/assets/mobile/home/earphones-yx1.jpg')"],
    },
  },
  plugins: [],
};
