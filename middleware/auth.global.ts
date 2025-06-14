export default defineNuxtRouteMiddleware(async (to) => {
  const { user, fetchUser } = useAuth();

  
  const protectedLayouts = ['dashboard', 'admin'];

  // Determine the layout for the current route
  const layout = to.meta.layout || 'default';

  // If layout is not protected, skip auth check
  if (!protectedLayouts.includes(layout)) return;

  if (!user.value) {
    await fetchUser();
  }

  if (!user.value && to.path !== '/login' && to.path !== '/register') {
    return navigateTo('/login');
  }
})
