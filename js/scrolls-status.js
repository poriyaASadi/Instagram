const scroll_users_status = document.querySelectorAll('#scroll-users-status');
const box_status_user = document.querySelectorAll('#box_status_user');
const img_status = document.querySelector('#img_status');
const close_status = document.querySelector('#close_status');
const boxStatus = document.querySelector('#boxStatus');
const prew_status = document.querySelector('#prew_status');
const next_status = document.querySelector('#next-status');
// ====================

scroll_users_status.forEach(item => {
    item.addEventListener('wheel' , function (e) {
        this.scrollLeft += e.deltaX
      e.preventDefault() 
    })
})

let ar = Array.from(box_status_user);
let ar2 = ar.slice(0,9);
// console.log(ar2[0].firstElementChild.src);

box_status_user.forEach(item => {
  item.addEventListener('click' , () => {
    const SrcStatus =  item.firstElementChild.src ; 
   valueImage(SrcStatus)
   boxStatus.setAttribute('open'  , '');
   next_status.addEventListener('click' , () => {
    let num = item.nextElementSibling.firstElementChild.src; 
    valueImage(num);
   })
  })
})
close_status.onclick = () => {
 boxStatus.removeAttribute('open');
}

function valueImage (value) {
   img_status.src = ''
   img_status.src = value;
}



// let scrollUser =  scroll_users_status.addEventListener('wheel' , function (e) {
//  this.scrollLeft += e.deltaX
//  e.preventDefault()
// }) 

