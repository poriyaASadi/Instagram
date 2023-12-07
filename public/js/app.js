// all let && const 
const $ = document;
/*
   === ---$--- ===
*/
// comment main post user / html icon comment
let comment_icon_user_main = $.querySelectorAll('#comment_icon');
let back_comment_icon = $.querySelectorAll('#back_icon_comment');
// --- input comment post 
let input_comment_post = $.getElementById('input_comment_post');
let button_creat_post_comment = $.getElementById('button_creat_post_comment');
let mainComment = $.getElementById('main_comment');
// -------------------------------------------
//  -------- heart like 
let like_heart_post = $.querySelectorAll('#like');
// ----- icon save post 
let save_post_icon = $.querySelector('#save_post_icon');
// ----- text more post ---> p 
let text_more_post = $.querySelectorAll('#text_more_post');
// ----========== user acount location
let user_acount = $.getElementById('user_acount');

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


button_creat_post_comment.addEventListener('click' , () => {
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
  console.log(mainComment);
};
// ------------------------------
// =========== heart like post ;
like_heart_post.forEach(function heart_like (item) {
    let changValue = false
    item.addEventListener('click' ,() => {  
    if (!changValue) {
      item.style.color = 'red';
      changValue = true;
    }
    else{
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

user_acount.addEventListener('click' , () => {
  this.window.location = 'acountUser.html';
})