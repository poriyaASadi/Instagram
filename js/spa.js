import router from "./router.js";

document.addEventListener('click' , event => {
  event.preventDefault();
  //console.log(event.target.parentElement);
  if (!event.target.parentElement.className.includes("link-spa")){
    return false
  }

  urlRouts(event)
});

function urlRouts (event) {
    window.history.pushState({} , "" , event.target.parentElement.href)
    locationHandler()
}

async function locationHandler () {
   const loc = window.location.pathname;
   const route = router[loc]
   const html = await fetch(route.template).then(res => res.text())
  document.querySelector('.content').innerHTML = ''
  //document.querySelector('.content').innerHTML = html
  console.log(html);
}

window.onpopstate = locationHandler;