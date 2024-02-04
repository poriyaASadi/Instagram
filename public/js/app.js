// all let && const 
const $ = document;

import * as name from './Var-all.js';

import { mainComment , comment_icon_user_main , back_comment_icon , input_comment_post , button_creat_post_comment  , likePostValue 
, like_heart_post , save_post_icon , text_more_post , active_icon_branch , stack , openBlurAlert , prantIcon_ShowAlert } from './Var-all.js';

//  ----- icon comment open chat 
comment_icon_user_main.forEach((item) => {
item.addEventListener('click' , () => {
  $.getElementById('comment_main').classList.remove('-top-[100vh]')
})
})
// ----- icon back comment
back_comment_icon.forEach((item) => {
 item.addEventListener('click' , () => {
  $.getElementById('comment_main').classList.add('-top-[100vh]');
 })
})


button_creat_post_comment.addEventListener('click' , (e) => {
  let valueInputComment = input_comment_post.value;
   creatPostComment(valueInputComment);
   input_comment_post.value = '' 
});
function creatPostComment (value_input) {
    mainComment.insertAdjacentHTML('afterend',`
    <div class="mb-2">
    <div class="w-full flex justify-start items-center gap-x-1 mb-[.5rem] child:dark:text-white">
    <img src="./images/face/5904c9ce3cfb08e4c032b5a473d5648d.png" alt="face"
    class="w-5 h-5 rounded-full">
    <p class="text-sm font-medium cursor-pointer">mariya</p>
    </div>
    <div class="text-sm tracking-tight leading-5 font-normal dark:text-white">
    <p>${value_input}</p>
    </div>
    </div>`);

};
input_comment_post.addEventListener('keydown' , (e) => {
   if (e.keyCode === 13) {
    creatPostComment(input_comment_post.value);
    input_comment_post.value = '';
   }
})
// ------------------------------
// =========== heart like post ;

let likePost = Math.floor(Math.random() * 1000);
function LikeUserPost () {


  this.LikeAdder = function () {
    likePost += 1  
    this.pushValue();
 }

 this.LikeRemover = function () {
  likePost -= 1  
   this.pushValue();
 }
 
 this.pushValue = function () {
  likePostValue.forEach(item => {
    item.innerHTML = likePost;
   })
 }

 
}

let likeUserGenariat = new LikeUserPost();

like_heart_post.forEach(function heart_like (item) {
    let changValue = false
    item.addEventListener('click' ,() => {  
    if (!changValue) {
      item.style.color = 'red';
      changValue = true; 
      likeUserGenariat.LikeAdder();
    }
    else{
        likeUserGenariat.LikeRemover();
        changValue = false;
        if (document.documentElement.classList == 'dark') {
          item.style.color = '#fff'
        }else{
          item.style.color = 'black';
        }
    }
  })
})

// =========== end ====
// icon save post <=========
save_post_icon.addEventListener('click' , function () {
  if (document.documentElement.classList == 'dark'){
    this.classList.toggle('dark:text-red-500');
    this.classList.remove('dark:text-white');
  }else {
    this.classList.toggle('text-red-500');
  }
});
// ========== end ----
//  text_more_post =====> 
text_more_post.forEach(text_post => {
  text_post.addEventListener('click' , () =>  text_post.classList.toggle('line-clamp-2'));
});
// =========== text more post end =======

// user_acount.addEventListener('click' , () => {
//   this.window.location = 'acountUser.html';
// })
// -------------------------------
// ========like_user start 
// like_user.addEventListener('click' , () => {
  
// })
// -------------------------------
// ---------- Notification user alert show & hidden
stack.forEach((item) => {
  item.addEventListener('click' , (e) => {
   let dataValue = e.target.dataset.id
    if (dataValue == 'user') {
     active_icon_branch.classList.add('right-0');
      hidden_elm('box-stack' , 'box-user') 
    }else {
       active_icon_branch.classList.remove('right-0');
       hidden_elm('box-user' , 'box-stack')
    }
  })
})

function hidden_elm (stack,user) {
 document.getElementById(stack).classList.add('hidden');
 document.getElementById(user).classList.remove('hidden');
}
let falseValue = false

window.addEventListener('load' ,  () => {
  likeUserGenariat.pushValue();
 prantIcon_ShowAlert.firstElementChild.lastElementChild.firstElementChild.setAttribute('href' , '#bell-alert')
 $.getElementById('animation_alert').classList.remove('hidden');
 })
 
prantIcon_ShowAlert.addEventListener('click' , () => {
  if (!falseValue) {
    openBlurAlert.classList.remove('invisible');
    prantIcon_ShowAlert.parentElement.className = 'w-[85%] h-full absolute left-0 transition-all right-0 top-0 bottom-0 bg-white dark:bg-black z-30 p-1 dark:text-white';
    $.getElementById('invis_alert_box').classList.remove('invisible');
    falseValue = true;
    prantIcon_ShowAlert.firstElementChild.lastElementChild.firstElementChild.setAttribute('href' , '#bell');
    $.getElementById('animation_alert').classList.add('hidden');
  
  }else {
    openBlurAlert.classList.add('invisible');
    prantIcon_ShowAlert.parentElement.className = 'w-[85%] h-full absolute -left-[85%] transition-all right-0 top-0 bottom-0 bg-white dark:bg-black z-30 p-1 dark:text-white';
    $.getElementById('invis_alert_box').classList.add('invisible');
    falseValue = false;
  }
});


// -----------------------------
// =============================

