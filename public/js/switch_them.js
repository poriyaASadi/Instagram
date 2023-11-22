let icon_them_switch = document.getElementById("icon-them");

icon_them_switch.addEventListener('click' , function () {
    console.log('df');
    if(localStorage.theme === "dark"){
    document.documentElement.classList.remove("dark");
    localStorage.theme = "light";
     lo.setAttribute('href','#sun');
    }else{
        document.documentElement.classList.add("dark");
        localStorage.setItem("theme","dark");
    }
})

let lo = document.querySelector('.lo')

