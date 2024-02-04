/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./public/**/*.{html,js}"],
  darkMode: "class",
  theme: {
    screens:{
     'sm2': '300px',
     'md2':'400px'
    },
    extend: {
      fontFamily:{
        "Inter-Black":"Inter Black",
      },
      colors:{
        "search-color":"rgba(118, 118, 128, 0.12)"
      },
      boxShadow:{
        "soft-bg":"6px 6px 12px #b8b9be, -6px -6px 12px #ffffff",
        "input-Sh":"0px 0px 15px -3px",
      },
    },
  },
  plugins: [
    function ({addVariant}) {
      addVariant('child' , '& > *'); 
      addVariant('child-hover' , '& > *:hover');
     },
  ],
}

