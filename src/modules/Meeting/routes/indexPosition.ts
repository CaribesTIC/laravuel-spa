import auth from "@/middleware/auth"
import admin from "@/middleware/admin"

export default [{
    path: "/positions",
    name: "positions",
    meta: { middleware: [auth, admin] },
    component: () => import("@/modules/Meeting/views/Position/Index.vue").then(m => m.default)
}, {
    path: "/positions/create",
    name: "positionCreate",
    meta: { middleware: [auth, admin] },
    component: () => import("@/modules/Meeting/views/Position/CreateOrEdit.vue").then(m => m.default),
    props: true
}, {
    path: "/positions/edit/:id(\\d+)",
    name: "positionEdit",
    meta: { middleware: [auth, admin] },
    component: () => import("@/modules/Meeting/views/Position/CreateOrEdit.vue").then(m => m.default),
    props: true
}]
