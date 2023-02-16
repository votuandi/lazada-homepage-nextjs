/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx}",
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",

    // Or if using `src` directory:
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      spacing: {
        vw5: '5vw',
        vw5: '7.5vw',
        vw10: '10vw',
        vw20: '20vw'
      },
      colors: {
        tet: '#a00809',
        midgray: '#757575',
        textgrayfooter: '#888888',
        blacktext: '#212121',
        graytext: '#9e9e9e',
        bluetext: '#0f136d',
        bg: '#f5f5f5',
        chatbox: '#044254'
      },
      screens: {

        'tablet': '640px',
        // => @media (min-width: 640px) { ... }

        'pc': '1200px',
        // => @media (min-width: 1280px) { ... }
      }
    }
  },
  plugins: [],
}