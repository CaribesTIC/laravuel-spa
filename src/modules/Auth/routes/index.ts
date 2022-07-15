import auth from "@/middleware/auth"
import guest from "@/middleware/guest"
import admin from "@/middleware/admin"

export default [{
    path: "/",
    name: "Home",     
    meta: { middleware: [guest], layout: "empty" },      
    component: () => import("@/modules/Auth/views/Home.vue").then(m => m.default)
}, {
    path: "/login",
    name: "Login",
    meta: { middleware: [guest], layout: "empty" },
    component: () => import("@/modules/Auth/views/Login.vue").then(m => m.default)
}, {
    path: "/register",
    name: "Register",    
    meta: { middleware: [guest], layout: "empty" },
    component: () => import("@/modules/Auth/views/Register.vue").then(m => m.default)
}, {
    path: "/profile",
    name: "profile",
    meta: { middleware: [auth] },
    component: () => import("@/modules/Auth/views/Profile.vue").then(m => m.default),
}, {
    path: "/dashboard",
    name: "dashboard",
    meta: { middleware: [auth], layout: "default" },
    component: () => import("@/modules/Auth/views/Dashboard.vue").then(m => m.default)
}, {
    path: "/about",
    name: "About",
    meta: { middleware: [guest], layout: "empty" },
    component: () => import("@/modules/Auth/components/About.vue").then(m => m.default)
}, {
    path: "/:catchAll(.*)",
    name: "NotFound",
    meta: { middleware: [guest], layout: "empty" },
    component: () => import("@/modules/Auth/components/NotFound.vue").then(m => m.default),    
}]
