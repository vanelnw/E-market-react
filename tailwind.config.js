/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {
      screens:{
        xs: "320px",
        sn: "375px",
        snl: "500px",
        md: "667px",
        mdl: "768px",
        lg: "960px",
        lgl: "1024px",
        xl: "1280px",
      },
      fontFamily:{
        bobyFont:["Montserrat", "sans-serif"],
        titleFont:["Inter", "sans-serif"],
      },
      colors:{
        bodyColor:"rgb(2,0,36)",
        textGreen : "#02FFF2",
        textLight:"#ccd6f6",
        textDark:"#8892b0",
        hoverColor:"rgba(100,255,218,0.1)",
      },
    },
  },
  plugins: [],
}

