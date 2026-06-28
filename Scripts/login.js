const supabaseUrl = "https://bcegumgewrotirizmtda.supabase.co";
const supabaseKey = "sb_publishable_t6XEnrxIbOJ5CgSa-l4NfA_DQrcoKMN";
export const supabase = window.supabase.createClient(
  supabaseUrl,
  supabaseKey
);

const form = document.getElementById('loginForm')

form.addEventListener('submit', async (e) => {
  e.preventDefault()

  const email = document.getElementById('email').value
  const password = document.getElementById('password').value

  const { error } = await supabase.auth.signInWithPassword({
    email,
    password
  })

  if (error) {
    alert(error.message)
    return
  }

  window.location.href = "../Pages/dashboard.html"
})
