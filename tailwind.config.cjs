/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        poppins: ['Poppins'],
        header: ['Rajdhani']
      },
      colors: {
        hero: '#1D1862',
        sauce: '#E75F69',
        mypink: '#FC5BFF',
        mygrey: '#979797',
        picbg: '#010125',
        status: '#050552'
      },
      boxShadow: {
        hover: '0px 6px 0px 0px rgba(255,255,255,1)',
        heroglow1: '0px 0px 500px 100px rgba(205,161,255,1)',
        heroglow2: '0px 0px 600px 100px rgba(231,95,105,1)',
        nftglow: '0px 0px 40px -2px rgba(252,91,255,0.75)',
        greenGlow: '0px 0px 70px 20px rgba(6,177,83,0.75)',
        mockup: '10px 10px 26px 0px rgba(0,0,0,0.56)'
      },

      dropShadow: {
        partner: '4px 4px 5px #111111'


      }

    },
  },
  plugins: [],
}
