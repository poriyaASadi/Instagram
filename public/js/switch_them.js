let icon_them_switch = document.getElementById("icon-them");
let cheng_icon = document.querySelector('.cheng-icon');

icon_them_switch.addEventListener('click' , function () {
    console.log('df');
    if(localStorage.theme === "dark"){
    document.documentElement.classList.remove("dark");
    localStorage.theme = "light";
     cheng_icon.setAttribute('href','#sun');
    }else{
        document.documentElement.classList.add("dark");
        localStorage.setItem("theme","dark");
        cheng_icon.setAttribute('href','#moon')
    }
})


