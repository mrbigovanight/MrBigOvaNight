var menu = document.getElementById("menu");
if (menu) {
menu.classList.add("none");
}
var link = document.getElementById("header-menu-span");
if (link) {
link.innerHTML = '&#9776; Menu';
}
function menuToggle() {
var menu = document.getElementById("menu");
var headerMenu = document.getElementById("header-link-container");
if (headerMenu) {
headerMenu.classList.toggle("new-header-link-container");
}
var header = document.querySelector("header");
if (menu) {
menu.classList.toggle("none");
}
if (header) {
header.classList.toggle("newHeader");
}
const text = link.textContent.trim();
if (text.includes('Close')) {
if (link) {
link.innerHTML = '&#9776; Menu';
}
} else {
if (link) {
link.innerHTML = '&#9747; Close';
}
} 

}

const programLink1 = document.getElementById("programLink1");
const programLink2 = document.getElementById("programLink2");
const programLink3 = document.getElementById("programLink3");
const programLink4 = document.getElementById("programLink4");
function programToggle() {
  if (programLink1) {
  programLink1.classList.toggle("none");
  programLink2.classList.toggle("none");
  programLink3.classList.toggle("none");
  programLink4.classList.toggle("none");
  }
}

const videoLink1 = document.getElementById("videoLink1");
const videoLink2 = document.getElementById("videoLink2");
const videoLink3 = document.getElementById("videoLink3");
const imageLink1 = document.getElementById("imageLink1");
const imageLink2 = document.getElementById("imageLink2");
const imageLink3 = document.getElementById("imageLink3");

function videoToggle() {
  videoLink1.classList.toggle("none");
  videoLink2.classList.toggle("none");
  videoLink3.classList.toggle("none");
}

function imageToggle() {
  imageLink1.classList.toggle("none");
  imageLink2.classList.toggle("none");
  imageLink3.classList.toggle("none");
}

const articleLink1 = document.getElementById("articleLink1");
const articleLink2 = document.getElementById("articleLink2");
const articleLink3 = document.getElementById("articleLink3");
function articleToggle() {
  articleLink1.classList.toggle("none");
  articleLink2.classList.toggle("none");
  articleLink3.classList.toggle("none");
}

const socialLink1 = document.getElementById("socialLink1");
const socialLink2 = document.getElementById("socialLink2");
const socialLink3 = document.getElementById("socialLink3");
const socialLink4 = document.getElementById("socialLink4");
const socialLink5 = document.getElementById("socialLink5");
const socialLink6 = document.getElementById("socialLink6");
const socialLink7 = document.getElementById("socialLink7");

function socialToggle() {
socialLink1.classList.toggle("none");
socialLink2.classList.toggle("none");
socialLink3.classList.toggle("none");
socialLink4.classList.toggle("none");
socialLink5.classList.toggle("none");
socialLink6.classList.toggle("none");
socialLink7.classList.toggle("none");
}

const aboutLink1 = document.getElementById("aboutLink1");
const aboutLink2 = document.getElementById("aboutLink2");

function aboutToggle() {
  aboutLink1.classList.toggle("none");
  aboutLink2.classList.toggle("none");
}

const reviews = [
  "I joined this online relationship camp hoping to improve communication with my partner, and it exceeded my expectations.",
  "The exercises were practical and easy to apply, and our conversations immediately got more respectful and productive.",
  "I liked the structure—short sessions, clear prompts, and helpful guidance that made it feel manageable even with a busy schedule.",
  "The camp helped me understand triggers and respond instead of react. We’ve had fewer arguments and more teamwork.",
  "I came in skeptical, but the feedback and activities really improved our connection. The atmosphere felt supportive and safe.",
  "By the end of the program we had better routines for check-ins, and it made long-term planning together feel a lot easier."
];

const images = [
"Content/man1.jpg",
"Content/man2.jpg",
"Content/man3.jpg",
"Content/man4.jpg",
"Content/man5.jpg",
"Content/man6.jpg"];



let max = reviews.length;
let num = 0;



const comment_container = document.getElementById("comment_container");



function render() {
comment_container.innerHTML = `<img class="review-img" src=${images[num]} alt="profile_picture"><span class="qoute1">${reviews[num]}</span><button class="next_button" id="next_button" onclick="switcher">&rsaquo;</button>`;

document.getElementById("next_button").addEventListener("click", switcher);

}



function switcher() {
num = (num + 1) % max;
render();
}



render();
