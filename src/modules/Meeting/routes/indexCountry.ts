import auth from "@/middleware/auth"
import admin from "@/middleware/admin"

export default [{
    path: "/countries",
    name: "countries",
    meta: { middleware: [auth, admin] },
    component: () => import("@/modules/Meeting/views/Country/Index.vue").then(m => m.default)
}, {
    path: "/countries/create",
    name: "countryCreate",
    meta: { middleware: [auth, admin] },
    component: () => import("@/modules/Meeting/views/Country/CreateOrEdit.vue").then(m => m.default),
    props: true
}, {
    path: "/countries/edit/:id(\\d+)",
    name: "countryEdit",
    meta: { middleware: [auth, admin] },
    component: () => import("@/modules/Meeting/views/Country/CreateOrEdit.vue").then(m => m.default),
    props: true
}]
