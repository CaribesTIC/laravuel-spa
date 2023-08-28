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
},{
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
},{
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
