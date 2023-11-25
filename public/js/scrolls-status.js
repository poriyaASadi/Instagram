let scroll_users_status = document.getElementById('scroll-users-status')

let scrollUser =  scroll_users_status.addEventListener('wheel' , function (e) {
 this.scrollLeft += e.deltaX
 e.preventDefault()
})

