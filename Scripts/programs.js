console.log("programs.js loaded");
console.log(window.supabase);
const supabaseUrl = "https://lwcxxvuxoamzhyyizjdl.supabase.co/";
const supabaseKey = "sb_publishable_EAzj4KOodBGijAiqA38skw_NawCLARv";
const supabaseClient = window.supabase.createClient(
  supabaseUrl,
  supabaseKey
);

const programDiv = document.getElementById("program");

async function loadPrograms() {
const { data, error } = await supabaseClient
  .from('programs')
  .select('*');

  if (error) {
  console.error(error);
  return;
  }

  console.log("DATA:", data);
console.log("ERROR:", error);
console.log("LENGTH:", data?.length);

  data.forEach(program => {
  programDiv.innerHTML += `
   <a class="card" href="program.html?slug=${program.slug}">
      <img class="cardBanner" src="${program.banner}" alt="${program.title}"/>
      <div class="descriptionContainer">
      <h2 class="cardTitle">${program.title}</h2>
      <p class="cardDescription">${program.description}</p>
      </div>
    </a>`;
  });

}

loadPrograms();

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
programDiv.classList.toggle("newProgram");
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


