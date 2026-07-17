console.log("videos.js loaded");
//console.log(window.supabase);
const supabaseUrl = "https://lwcxxvuxoamzhyyizjdl.supabase.co/";
const supabaseKey = "sb_publishable_EAzj4KOodBGijAiqA38skw_NawCLARv";
const supabaseClient = window.supabase.createClient(
  supabaseUrl,
  supabaseKey
);

const articlesDiv = document.getElementById("articlesDiv");

async function loadArticles() {
const { data, error } = await supabaseClient
  .from('article')
  .select('*');

  if (error) {
  console.error(error);
  return;
  }

  console.log("DATA:", data);
console.log("ERROR:", error);
console.log("LENGTH:", data?.length);

  data.forEach(article => {
  articlesDiv.innerHTML += `
   <div class="card">
   <a href="article.html?slug=${article.slug}">
   <p>${article.title}</p>
   </a>
    </div>`;
  });

}

loadArticles();


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
if (programLink1) {
programLink1.classList.add("none");
}
function programToggle() {
  if (programLink1) {
  programLink1.classList.toggle("none");
  }
}

const videoLink1 = document.getElementById("videoLink1");
const videoLink2 = document.getElementById("videoLink2");
const videoLink3 = document.getElementById("videoLink3");
videoLink1.classList.add("none");
videoLink2.classList.add("none");
videoLink3.classList.add("none");
function videoToggle() {
  videoLink1.classList.toggle("none");
  videoLink2.classList.toggle("none");
  videoLink3.classList.toggle("none");
}

const articleLink1 = document.getElementById("articleLink1");
const articleLink2 = document.getElementById("articleLink2");
const articleLink3 = document.getElementById("articleLink3");
articleLink1.classList.add("none");
articleLink2.classList.add("none");
articleLink3.classList.add("none");
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
socialLink1.classList.add("none");
socialLink2.classList.add("none");
socialLink3.classList.add("none");
socialLink4.classList.add("none");
socialLink5.classList.add("none");
socialLink6.classList.add("none");
socialLink7.classList.add("none");
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
aboutLink1.classList.add("none");
aboutLink2.classList.add("none");
function aboutToggle() {
  aboutLink1.classList.toggle("none");
  aboutLink2.classList.toggle("none");
}


