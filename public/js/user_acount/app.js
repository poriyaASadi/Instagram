let $ = document;
// ---------------
const form_open_dialog = $.getElementById('form_open_dialog');
const dialog = $.querySelector('dialog');
const form_show_dialog = $.getElementById('form_show_dialog')
// ----------------
let active_icon_branch = document.getElementById('active_icon_branch');
let stack = document.querySelectorAll('#stack_icon');


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
     }else {
        active_icon_branch.classList.remove('left-48');
     }
   })
})
// --------------> end 

