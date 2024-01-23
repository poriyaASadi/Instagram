let $ = document;
// ---------------
const form_open_dialog = $.getElementById('form_open_dialog');
const dialog = $.querySelector('dialog');
const form_show_dialog = $.getElementById('form_show_dialog')
// ----------------
let active_icon_branch = document.getElementById('active_icon_branch');
let stack = document.querySelectorAll('#stack_icon');
// ----------------
const userIdCopy = document.getElementById('userId');

// ---------- open dialog acocount user 

form_open_dialog.addEventListener('click' , () => {
  dialog.showModal();
  $.getElementById('show_slid').classList.add('h-full')
})
 form_show_dialog.addEventListener('click' , () => {
   dialog.close()
   $.getElementById('show_slid').classList.remove('h-full')
 })
// ---------- end
 
// .........................

//  --------- cheng active icon show post user 
// ------------->
stack.forEach((item) => {
   item.addEventListener('click' , (e) => {
    let dataValue = e.target.dataset.id
     if (dataValue == 'user') {
      active_icon_branch.classList.add('left-48');
       hidden_elm('box-stack' , 'box-user')
     }else {
        active_icon_branch.classList.remove('left-48');
        hidden_elm('box-user' , 'box-stack')
     }
   })
})

function hidden_elm (stack,user) {
  document.getElementById(stack).classList.add('hidden');
  document.getElementById(user).classList.remove('hidden');
}

// --------------> end 

let num = userIdCopy.addEventListener('click' , (event) => {
   let userId = event.target.text;
   navigator.clipboard.writeText(userId);
   let copyBoxShow = document.querySelector('.userIDCopy-box');
   copyBoxShow.classList.remove('hidden');
   setInterval(() => {
    copyBoxShow.classList.add('hidden');
   },1000);
})

