import auth from "@/middleware/auth"
import admin from "@/middleware/admin"

export default [{
    path: "/entities",
    name: "entities",
    meta: { middleware: [auth, admin] },
    component: () => import("@/modules/Meeting/views/Entity/Index.vue").then(m => m.default)
}, {
    path: "/entities/create",
    name: "entityCreate",
    meta: { middleware: [auth, admin] },
    component: () => import("@/modules/Meeting/views/Entity/CreateOrEdit.vue").then(m => m.default),
    props: true
}, {
    path: "/entities/edit/:id(\\d+)",
    name: "entityEdit",
    meta: { middleware: [auth, admin] },
    component: () => import("@/modules/Meeting/views/Entity/CreateOrEdit.vue").then(m => m.default),
    props: true
}]
