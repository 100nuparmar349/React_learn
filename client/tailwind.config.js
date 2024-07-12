/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors:{
        customGray: '#151617',
        bg100:'#2d2d2e',
      }
    },
  },

  plugins: [],
}

