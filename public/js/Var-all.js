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
let likePostValue = $.querySelectorAll('#likePostValue');
// ----- icon save post 
let save_post_icon = $.querySelector('#save_post_icon');
// ----- text more post ---> p 
let text_more_post = $.querySelectorAll('#text_more_post');
// ----========== user acount location
let user_acount = $.getElementById('user_acount');
// ----------------- user likes
let like_user = $.getElementById('like_user');
// ----------------- Notification user alert show & hidden
let active_icon_branch = document.querySelector('#active_icon_branch') 
let stack = document.querySelectorAll('#stack_icon');
// ---------------- openBlurAlert
let openBlurAlert = $.getElementById('openBlurAlert');
let prantIcon_ShowAlert = $.getElementById('prantIcon_ShowAlert');



export {
    comment_icon_user_main,
    back_comment_icon,
    input_comment_post,
    button_creat_post_comment,
    mainComment,
    like_heart_post,
    likePostValue,
    save_post_icon,
    text_more_post,
    user_acount,
    like_user,
    active_icon_branch,
    stack,
    openBlurAlert,
    prantIcon_ShowAlert
}