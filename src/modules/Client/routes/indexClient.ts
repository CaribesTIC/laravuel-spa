import auth from "@/middleware/auth"
import admin from "@/middleware/admin"

export default [{
    path: "/clients",
    name: "clients",
    meta: { middleware: [auth, admin] },
    component: () => import("@/modules/Client/views/Client/Index.vue").then(m => m.default)
}, {
    path: "/clients/create",
    name: "clientCreate",
    meta: { middleware: [auth, admin] },
    component: () => import("@/modules/Client/views/Client/CreateOrEdit.vue").then(m => m.default),
    props: true
}, {
    path: "/clients/edit/:id(\\d+)",
    name: "clientEdit",
    meta: { middleware: [auth, admin] },
    component: () => import("@/modules/Client/views/Client/CreateOrEdit.vue").then(m => m.default),
    props: true
}]
