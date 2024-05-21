// all let && const 
const $ = document;
/*
   === ---$--- ===
*/
// -------- post box user 
const post_user = $.querySelectorAll('#post-user');
const alertBoxShow_post_videos = $.getElementById('alertBoxShow_post_videos');
// comment main post user / html icon comment
const comment_icon_user_main = $.querySelectorAll('#comment_icon');
const back_comment_icon = $.querySelectorAll('#back_icon_comment');
// --- input comment post 
const input_comment_post = $.getElementById('input_comment_post');
const button_creat_post_comment = $.getElementById('button_creat_post_comment');
const mainComment = $.getElementById('main_comment');
// -------------------------------------------
//  -------- heart like 
const like_heart_post = $.querySelectorAll('#like');
const likePostValue = $.querySelectorAll('#likePostValue');
// ----- icon save post 
const save_post_icon = $.querySelector('#save_post_icon');
// ------- icon more post info 
const moreIcon_post = $.getElementById('moreIcon-post');
// ----- text more post ---> p 
const text_more_post = $.querySelectorAll('#text_more_post');
const timeSendUser_comment = $.querySelector('#timeSendUser-comment');
// ----========== user acount location
const user_acount = $.getElementById('user_acount');
// ----------------- user likes
const like_user = $.getElementById('like_user');
// ----------------- Notification user alert show & hidden
const active_icon_branch = document.querySelector('#active_icon_branch') 
const stack = document.querySelectorAll('#stack_icon');
// ---------------- openBlurAlert
const openBlurAlert = $.getElementById('openBlurAlert');
const prantIcon_ShowAlert = $.getElementById('prantIcon_ShowAlert');
const videoPostUser = $.querySelectorAll('.videoPostUser')
// ---------------------------------

//  all var for desktop start =====>
let boxShow = $.getElementById('boxShow');
let iconShowBox = $.getElementById('iconShowBox');
let menuDesktop = $.getElementById('menuDesktop');
// =========================> 

export {
    post_user,
    alertBoxShow_post_videos,
    comment_icon_user_main,
    back_comment_icon,
    input_comment_post,
    button_creat_post_comment,
    mainComment,
    like_heart_post,
    likePostValue,
    save_post_icon,
    moreIcon_post,
    text_more_post,
    timeSendUser_comment,
    user_acount,
    like_user,
    active_icon_branch,
    stack,
    openBlurAlert,
    prantIcon_ShowAlert,
    videoPostUser,
    // for destopp starat code ...
    boxShow,
   iconShowBox,
   menuDesktop,
}