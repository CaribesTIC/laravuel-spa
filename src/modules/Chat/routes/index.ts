import auth from "@/middleware/auth"

export default [{
    path: "/chat",
    name: "chat",
    meta: { middleware: [auth], layout: "default" },
    component: () => import("@/views/Dashboard/Index.vue").then(m => m.default),
}]
