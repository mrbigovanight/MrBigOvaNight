const supabaseUrl = "https://bcegumgewrotirizmtda.supabase.co";
const supabaseKey = "sb_publishable_t6XEnrxIbOJ5CgSa-l4NfA_DQrcoKMN";
export const supabase = window.supabase.createClient(
  supabaseUrl,
  supabaseKey
);

const form = document.getElementById('signupForm')

form.addEventListener('submit', async (e) => {
  e.preventDefault()

  const email = document.getElementById('email').value
  const password = document.getElementById('password').value

  const { data, error } = await supabase.auth.signUp({
    email,
    password
  })

  console.log("data:", data)
console.log("error:", error)

  if (error) {
    alert(error.message)
    return
  }

  // If email confirmation is enabled
  //if (data.user && !data.session) {
  //  alert("Check your email to confirm your account.")
  //  window.location.href = "../Pages/login.html"
  //  return
  //}

  window.location.href = "../Pages/dashboard.html"
})
