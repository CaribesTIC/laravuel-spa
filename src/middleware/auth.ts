export default function auth({ to, next, storeAuth }) {
  const loginQuery = { path: "/login", query: { redirect: to.fullPath } };

  if (!storeAuth.value.authUser) {
    storeAuth.value.getAuthUser().then(() => {
      if (!storeAuth.value.authUser) next(loginQuery);
      else next();
    });
  } else {
    next();
  }
}




