
function menuToggle() {
const menu = document.getElementById("menu");
const headerMenu = document.getElementById("header-link-container");
const link = document.getElementById("header-menu-span");
const header = document.querySelector("header");

if (headerMenu) {
headerMenu.classList.toggle("new-header-link-container");
}

if (menu) {
menu.classList.toggle("none");
}

if (header) {
header.classList.toggle("newHeader");
}

if (link) {
const text = link.textContent.trim();

if (text.includes('Close')) {
    link.innerHTML = '&#9776; Menu';
    } else {
     link.innerHTML = "&#10005; Close";
    }
}}

