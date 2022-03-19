export default function guest({ next, storeAuth }) {
  const storageItem = window.localStorage.getItem("guest");
  if (storageItem === "isNotGuest" && !storeAuth.value.authUser) {
    storeAuth.value.getAuthUser().then(() => {
      if (storeAuth.value.authUser) {
        next({ name: "dashboard" });
      } else {
        storeAuth.value.setGuest({ value: "isGuest" });
        next();
      }
    });
  } else {
    next();
  }
}
