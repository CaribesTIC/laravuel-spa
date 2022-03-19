export default function admin({ next, storeAuth }) {
  if (storeAuth.value.isAdmin) next();
  else next({ name: "notFound" });
}
