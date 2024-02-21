const data_line = document.getElementById("data-line");
const DescriptionInput = document.getElementById("DescriptionInput");
const p_valueInput = document.getElementById("p_valueInput");
const fileInput = document.getElementById("fileInput");
const imageElm = document.getElementById("imageElm");
const content_box_item = document.getElementById("content-box-item");
const defult_box_tem_post = document.getElementById("defult-box-item-post");
const License = document.querySelectorAll("#License");
window.addEventListener("load", () => {
  setInterval(() => {
    let data = new Date();
    const fulllData = `${data.getHours()}.${data.getMinutes()}.${data.getSeconds()}`;
    data_line.innerHTML = "";
    data_line.innerHTML += fulllData;
  }, 1000);
});

DescriptionInput.addEventListener("keyup", (e) => {
  let valueInput = e.target.value;
  p_valueInput.innerHTML = "";
  p_valueInput.innerHTML += valueInput;
});
fileInput.addEventListener("change", () => {
  let video = document.createElement("video");
  const filee = fileInput.files[0];
  const videoType = /video.*/;
  if (filee.type.match(videoType)) {
    const reader = new FileReader();
    reader.onload = function (e) {
      manufacturerVideo(e.target.result);
      defult_box_tem_post.style.display = "none";
    };
    reader.readAsDataURL(filee);
  } else {
    let image = new Image();
    image.src = URL.createObjectURL(fileInput.files[0]);
    let srcImage = image.getAttribute("src");
    imageElm.src = srcImage;
    if (srcImage) {
      defult_box_tem_post.style.display = "none";
      manufacturer(srcImage);
    }
  }
  DeletItemPostUser();
});
function manufacturer(value) {
  content_box_item.insertAdjacentHTML(
    "afterbegin",
    `
  <div class="w-24 h-24  rounded-md">
  <img src="${value}" alt="" class="w-full h-full object-cover rounded-md relative " id="postUserSelect">
 </div>
  `
  );
}
function manufacturerVideo(value) {
  content_box_item.insertAdjacentHTML(
    "afterbegin",
    `
  <div class="w-24 h-24  rounded-md">
  <video src="${value}" alt="" class="w-full h-full object-cover rounded-md relative " id="postUserSelect"></video>
 </div>
  `
  );
}
License.forEach((item) => {
  item.addEventListener("click", (e) => {
    e.target.classList.toggle("bg-pink-500");
  });
});

function DeletItemPostUser  () {
  document.querySelectorAll('#postUserSelect').forEach(item => {
    item.addEventListener('click' , (e) => {
      console.log(e.target);
      e.target.remove();
    })
  })
}