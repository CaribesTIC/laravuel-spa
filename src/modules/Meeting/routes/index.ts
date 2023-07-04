import auth from "@/middleware/auth"
import admin from "@/middleware/admin"

export default [{
    path: "/meetings",
    name: "meetings",
    redirect: "NotFound"
    //meta: { middleware: [auth, admin] },
    //component: () => import("@/modules/Meeting/views/Index.vue").then(m => m.default)
}/*, {
    path: "/meetings/create",
    name: "meetingCreate",
    meta: { middleware: [auth, admin] },
    component: () => import("@/modules/Meeting/views/CreateOrEdit.vue").then(m => m.default),
    props: true
}, {
    path: "/meetings/edit/:id(\\d+)",
    name: "meetingEdit",
    meta: { middleware: [auth, admin] },
    component: () => import("@/modules/Meeting/views/CreateOrEdit.vue").then(m => m.default),
    props: true
}*/]
