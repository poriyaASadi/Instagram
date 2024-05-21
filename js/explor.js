const image_box = document.querySelectorAll('.image-box')

image_box.forEach(item => {
    item.addEventListener('click' , (e) => {
     console.log(e.target.src);
     
    })
})