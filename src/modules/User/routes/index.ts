import auth from "@/middleware/auth"
import admin from "@/middleware/admin"

export default [{
    path: "/users",
    name: "users",
    meta: { middleware: [auth, admin] },
    component: () => import("@/views/Users/Index.vue").then(m => m.default),
}, {
    path: "/users/create",
    name: "userCreate",
    meta: { middleware: [auth, admin] },
    component: () => import("@/views/Users/CreateOrEdit.vue").then(m => m.default),
    props: true
}, {
    path: "/users/edit/:id",
    name: "userEdit",
    meta: { middleware: [auth, admin] },
    component: () => import("@/views/Users/CreateOrEdit.vue").then(m => m.default),
    props: true
}]
