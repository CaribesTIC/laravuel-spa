import auth from "@/middleware/auth"
import guest from "@/middleware/guest"

export default [{
    path: "/login",
    name: "Login",
    meta: { middleware: [guest], layout: "empty" },
    component: () => import("@/views/Login/Index.vue").then(m => m.default)
}, {
    path: "/register",
    name: "Register",    
    meta: { middleware: [guest], layout: "empty" },
    component: () => import("@/views/Register/Index.vue").then(m => m.default)
}, {
    path: "/profile",
    name: "profile",
    meta: { middleware: [auth] },
    component: () => import("@/views/Profile/Index.vue").then(m => m.default),
}]
