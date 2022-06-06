import auth from "@/middleware/auth"

export default [{
    path: "/dashboard",
    name: "dashboard",
    meta: { middleware: [auth], layout: "default" },
    component: () => import("@/views/Dashboard/Index.vue").then(m => m.default),
}]
