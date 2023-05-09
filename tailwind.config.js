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
      },
      fontFamily: {
        manrope: ['Manrope'],
        poppins: ['Poppins'],
      },
    },
    backgroundImage: {
      homeHeader: ["url('../public/assets/mobile/home/home-header.jpg')"],
    },
  },
  plugins: [],
};
