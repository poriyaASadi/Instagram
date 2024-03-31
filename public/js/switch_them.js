let icon_them_switch = document.querySelectorAll("#icon-them");
let cheng_icon = document.querySelectorAll('.cheng-icon');

icon_them_switch.forEach(item => {
    item.addEventListener('click' , () => {
        if(localStorage.theme === "dark"){
            document.documentElement.classList.remove("dark");
            localStorage.theme = "light";
           chengIcon('#sun');
            }else{
                document.documentElement.classList.add("dark");
                localStorage.setItem("theme","dark");
               chengIcon('#moon');
            }
    })
})

function chengIcon (value) {
    cheng_icon.forEach(item => {
        item.setAttribute('href',`${value}`);
    })
}


