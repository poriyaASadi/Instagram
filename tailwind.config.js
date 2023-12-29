/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./public/**/*.{html,js}"],
  darkMode: "class",
  theme: {
    extend: {
      fontFamily:{
        "Inter-Black":"Inter Black",
      },
      colors:{
        "search-color":"rgba(118, 118, 128, 0.12)"
      }
    },
  },
  plugins: [
    function ({addVariant}) {
      addVariant('child' , '& > *'); 
      addVariant('child-hover' , '& > *:hover');
     },
  ],
}

