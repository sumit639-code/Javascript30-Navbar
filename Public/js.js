let close = document.querySelector('.close');
let men = document.querySelector('.menu');
let op = document.querySelector('.menu-img')
let txt = "conference calling tool.";
let pro = document.querySelector('.pro');
let products = document.querySelector('.products')
// var myWindow = window.self;

// myWindow.addEventListener( 'click',()=>products.style.display="none");
// Window.addEventListener()
pro.addEventListener('click',()=>products.style.display = "flex");
op.addEventListener('click',()=>men.style.display = "flex");
close.addEventListener('click',()=>men.style.display="none");
close.addEventListener('click',()=>products.style.display = "none");

window.addEventListener('resize', function(event) {
    men.style.display="none"
}, true);
window.addEventListener('click', function(event) {
    men.style.display="none"
}, true);