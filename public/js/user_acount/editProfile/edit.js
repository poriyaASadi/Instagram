const swicth_icon = document.getElementById("swicth-icon");
const password1 = document.getElementById('passwordInput');

swicth_icon.addEventListener('click' , (event) => {
    
 if (password1.type === "password"){
     password1.type = "text";
     
 }else {
    password1.type = "password";

 }
})  