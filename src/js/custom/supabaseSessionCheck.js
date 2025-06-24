export async function checkSessionRedirect({ requireAuth = false, ifLoggedInRedirect = null } = {}) {
  const { data, error } = await window.supabase.auth.getSession();

  if (error) {
    console.error('❌ Error al obtener sesión', error.message);
    return;
  }

  const session = data.session;

  if (requireAuth && !session) {
    console.warn('🔒 No hay sesión activa. Redirigiendo al login...');
    window.location.href = '/pages/authentication/sign-in.html';
    return;
  }

  if (ifLoggedInRedirect && session) {
    console.info('👤 Sesión activa. Redirigiendo a página principal...');
    window.location.href = ifLoggedInRedirect;
    return;
  }

  console.log('✅ Sesión validada');
}
