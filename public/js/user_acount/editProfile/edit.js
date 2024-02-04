const swicth_icon = document.getElementById("swicth-icon");
const password1 = document.getElementById('passwordInput');

swicth_icon.addEventListener('click' , (event) => {
 let useTag = document.querySelector('#swicth-icon use');
 if (password1.type === "password"){
     password1.type = "text";
     useTag.setAttribute('href', '#hidde');
 }else {
    password1.type = "password";
    useTag.setAttribute('href', '#show');
 }
})  