const params = new URLSearchParams(window.location.search);

const slug = params.get("slug");

console.log("Article slug:", slug);

const supabaseUrl = "https://lwcxxvuxoamzhyyizjdl.supabase.co/";
const supabaseKey = "sb_publishable_EAzj4KOodBGijAiqA38skw_NawCLARv";
const supabaseClient = window.supabase.createClient(
  supabaseUrl,
  supabaseKey
);


async function loadArticle() {

  const { data, error } = await supabaseClient
    .from("article")
    .select("*")
    .eq("slug", slug)
    .single();


  if (error) {
    console.error(error);
    return;
  }


  document.getElementById("title").textContent = data.title   ;
  document.getElementById("paragraphOne").textContent = data.paragraphOne;
  document.getElementById("paragraphTwo").textContent = data.paragraphTwo;
  document.getElementById("paragraphThree").textContent = data.paragraphThree;
  document.getElementById("paragraphFour").textContent = data.paragraphFour;
  document.getElementById("paragraphFive").textContent = data.paragraphFive;

}


loadArticle();
