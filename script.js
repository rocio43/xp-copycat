// sidebar open close js code
let menuOpenBtn = document.querySelector(".menudropdown .bx-menu");
let menuCloseBtn = document.querySelector(".menu-links .bx-x");
let menuLinks = document.querySelector(".menu-links");
menuOpenBtn.onclick = function() {
    menuLinks.style.left = "0";
}
menuCloseBtn.onclick = function() {
    menuLinks.style.left = "-100%";
}


// sidebar submenu open close js code
let arrow1 = document.querySelector(".arrow1");
arrow1.onclick = function() {
    menuLinks.classList.toggle("show1");
}
let arrow2 = document.querySelector(".arrow2");
arrow2.onclick = function() {
    menuLinks.classList.toggle("show2");
}
