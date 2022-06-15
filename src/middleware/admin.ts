export default function admin({ next, storeAuth }) {
  storeAuth.value.isAdmin
    ? next()
      : next({ path: "not-found-page" });
}
