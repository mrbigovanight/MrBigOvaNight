var menu = document.getElementById("menu");
menu.classList.add("none");

function menuToggle() {
var menu = document.getElementById("menu");
menu.classList.toggle("none");

if (menu.classList.contains("none")) {
checkbox.checked = false;
} else {
checkbox.checked = true;
}
}
