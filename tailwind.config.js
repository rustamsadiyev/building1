/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/**/*.{js,jsx,ts,tsx}', 
  ],
  theme: {
    extend: {
      screens: {
        iphone: "350px", 
        tablet:"1080px",
        ipad:"963px",
        sm: "55px",
        small:"500px",
        md: "780px",  
        xl:"1600px",
        lg:"1240px"
      },
      backgroundPosition: {
        'custom-position': 'calc(0% - 0px) calc(30% - 0px)',
      },
    },
  },
  plugins: [],
}
