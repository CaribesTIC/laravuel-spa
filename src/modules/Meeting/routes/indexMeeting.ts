import auth from "@/middleware/auth"
import admin from "@/middleware/admin"

export default [{
    path: "/meetings",
    name: "meetings",
    meta: { middleware: [auth, admin] },
    component: () => import("@/modules/Meeting/views/Meeting/Index.vue").then(m => m.default)
}, {
    path: "/meetings/create",
    name: "meetingCreate",
    meta: { middleware: [auth, admin] },
    component: () => import("@/modules/Meeting/views/Meeting/Tabs.vue").then(m => m.default),
    props: true
}, {
    path: "/meetings/edit/:id(\\d+)",
    name: "meetingEdit",
    meta: { middleware: [auth, admin] },
    component: () => import("@/modules/Meeting/views/Meeting/Tabs.vue").then(m => m.default),
    props: true
}]
