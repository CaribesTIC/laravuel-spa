import auth from "@/middleware/auth"
import admin from "@/middleware/admin"

export default [{
    path: "/dependencies",
    name: "dependencies",
    meta: { middleware: [auth, admin] },
    component: () => import("@/modules/Meeting/views/Dependency/Index.vue").then(m => m.default)
}, {
    path: "/dependencies/create",
    name: "dependencyCreate",
    meta: { middleware: [auth, admin] },
    component: () => import("@/modules/Meeting/views/Dependency/CreateOrEdit.vue").then(m => m.default),
    props: true
}, {
    path: "/dependencies/edit/:id(\\d+)",
    name: "dependencyEdit",
    meta: { middleware: [auth, admin] },
    component: () => import("@/modules/Meeting/views/Dependency/CreateOrEdit.vue").then(m => m.default),
    props: true
}]
