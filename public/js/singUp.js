let $ = document;
const email_Input = $.getElementById("email_Input");
let Emailviewer = $.querySelector(".Emailviewer");

const password_repeat = $.getElementById("password_repeat");
const password = $.getElementById("password");
let Passwordviewer = $.querySelector(".Passwordviewer");

//  add regex for input email
email_Input.addEventListener("keyup", () => {
  let Condition = /[a-z A-Z 0-9]+@gmail.com/g;
  let valueInput = email_Input.value;

  if (Condition.test(valueInput)) {
    Emailviewer.innerHTML = "It is suitable";
    chengColor(Emailviewer);
  } else {
    Emailviewer.innerHTML = "not suitable";
    Emailviewer.classList.add('text-pink-500')
  }
  if (valueInput === "") {
    Emailviewer.innerHTML = "";
  }
});
password_repeat.addEventListener("keyup", () => {
  let value = password_repeat.value;
  if (password.value == value) {
    Passwordviewer.innerHTML = "Correct password";
    chengColor(Passwordviewer);
  } else {
    Passwordviewer.innerHTML = "wrong password";
    Passwordviewer.classList.add("text-pink-500");
  }
});
password_repeat.addEventListener("keyup", () => {
  if (!password.value) {
    password_repeat.value = "";
    Passwordviewer.innerHTML = "First, fill in the field above";
  }
});
function chengColor(values) {
  values.classList.remove("text-pink-500");
  values.classList.add("text-blue-500");
}
