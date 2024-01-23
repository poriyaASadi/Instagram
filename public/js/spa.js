import rot from './router.js';




document.addEventListener('click' , (event) => {
    event.preventDefault();
    if (!event.target.parentElement.className.includes("link-spa")){
       return false 
    }
    console.log(event.target.parentElement);
    urlElm(event.target.parentElement.href);
});

function urlElm (data) {
    console.log(data);
    window.history.pushState({}, "", data)
     locationHandler();
}

async function locationHandler () {
    const loc = window.location.pathname;
    const route = rot[loc] || rot[404] ;
     console.log(route);
    // const html = await fetch(route.template)
    // .then((res) => res.text());
    //  document.querySelector("main").innerHTML = html;
    //  document.title = route.title;
}
window.onpopstate = locationHandler; 