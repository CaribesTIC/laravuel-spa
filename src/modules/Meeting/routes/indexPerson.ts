import auth from "@/middleware/auth"
import admin from "@/middleware/admin"

export default [{
    path: "/people",
    name: "people",
    meta: { middleware: [auth, admin] },
    component: () => import("@/modules/Meeting/views/Person/Index.vue").then(m => m.default)
}, {
    path: "/people/create",
    name: "personCreate",
    meta: { middleware: [auth, admin] },
    component: () => import("@/modules/Meeting/views/Person/CreateOrEdit.vue").then(m => m.default),
    props: true
}, {
    path: "/people/edit/:id(\\d+)",
    name: "personEdit",
    meta: { middleware: [auth, admin] },
    component: () => import("@/modules/Meeting/views/Person/CreateOrEdit.vue").then(m => m.default),
    props: true
}]
