import auth from "@/middleware/auth"

export default [{
    path: "/message",
    name: "message",
    meta: { middleware: [auth], layout: "default" },
    component: () => import("@/modules/Message/views/Index.vue").then(m => m.default),
}]
