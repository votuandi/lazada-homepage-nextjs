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
        blacktext: '#212121',
        graytext: '#9e9e9e',
        bg: '#f5f5f5'
      }
    }
  },
  plugins: [],
}