const svg_image = document.getElementById('svg_image');
const intarnetUser = document.getElementById('intarnetUser');
const wifye = document.querySelector('.wify');
const back = document.getElementById('back');
const swichTheme = document.getElementById('swichTheme');
const editBox = document.getElementById('editBox');
const open_edit = document.getElementById('open-edit');
const  backTobox = document.querySelector('.backTobox');
window.addEventListener('load' , () => {
    svgColor()
    if (navigator.onLine){
     intarnetUser.innerHTML = 'your online'
     wifye.classList.add('text-pink-500');
    }else{
        intarnetUser.innerHTML = 'your offline'
        wifye.classList.add('text-withe')
    }
    back.onclick = () => {
        window.history.back()
    }
    swichTheme.addEventListener('click' , function () {
        if(localStorage.theme === "dark"){
        document.documentElement.classList.remove("dark");
        localStorage.theme = "light";
        svgColor();

        }else{
            document.documentElement.classList.add("dark");
            localStorage.setItem("theme","dark");
            svgColor();
        }
    })
    open_edit.addEventListener('click' , () => {
        editBox.classList.remove('hidden');
    })
    backTobox.addEventListener('click' , () => {
        editBox.classList.add('hidden');
    })
    
})

function svgColor () {
    let data = localStorage.getItem('theme');
    if (data == 'dark') {
      svg_image.src = './images/darkSvg.png'
      swichTheme.innerHTML = 'Dark mode'
    }else {
        svg_image.src = './images/lightSvg.png';
        swichTheme.innerHTML = 'Light mode'
    }
}













// const swicth_icon = document.getElementById("swicth-icon");
// const password1 = document.getElementById('passwordInput');

// swicth_icon.addEventListener('click' , (event) => {
//  let useTag = document.querySelector('#swicth-icon use');
//  if (password1.type === "password"){
//      password1.type = "text";
//      useTag.setAttribute('href', '#hidde');
//  }else {
//     password1.type = "password";
//     useTag.setAttribute('href', '#show');
//  }
// });