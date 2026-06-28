const supabaseUrl = "https://bcegumgewrotirizmtda.supabase.co";
const supabaseKey = "sb_publishable_t6XEnrxIbOJ5CgSa-l4NfA_DQrcoKMN";
export const supabase = window.supabase.createClient(
  supabaseUrl,
  supabaseKey
);

const {
  data: { session }
} = await supabase.auth.getSession()

if (!session) {
  window.location.href = "/login.html"
}
