import { supabase } from './supabase.js'

const form = document.getElementById('signupForm')

form.addEventListener('submit', async (e) => {
  e.preventDefault()

  const email = document.getElementById('email').value
  const password = document.getElementById('password').value

  const { data, error } = await supabase.auth.signUp({
    email,
    password
  })

  if (error) {
    alert(error.message)
    return
  }

  // If email confirmation is enabled
  if (data.user && !data.session) {
    alert("Check your email to confirm your account.")
    window.location.href = "/login.html"
    return
  }

  window.location.href = "/dashboard.html"
})
