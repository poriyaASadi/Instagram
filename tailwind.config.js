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
        "search-color":"rgba(118, 118, 128, 0.12)",
        "primeryColor-Chat" : "#06080C",
        "primeryColor-2":"#32384A",
        "primary-with":"#F6F6F6",
        "colorSvgDark":"#4D5151"
        },
      backgroundColor:{
        "colorLine" : "radial-gradient(rgba(0,0,0,0.15) 60%,transparent 0 ), radial-gradient(white 63%,transparent 0), linear-gradient(to top right,rgba(119, 0, 195, 1),rgba(226, 3, 55, 1))"
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

