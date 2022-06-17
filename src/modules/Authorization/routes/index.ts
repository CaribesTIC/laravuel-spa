import auth from "@/middleware/auth"
import admin from "@/middleware/admin"

export default [{
    path: "/menus",
    name: "menus",
    meta: { middleware: [auth, admin] },
    component: () => import("@/modules/Authorization/views/Menus/Index.vue").then(m => m.default),
},{
    path: "/roles",
    name: "roles",
    meta: { middleware: [auth, admin] },
    component: () => import("@/modules/Authorization/views/Menus/Index.vue").then(m => m.default),
}]
