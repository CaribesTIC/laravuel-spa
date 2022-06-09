import auth from "@/middleware/auth"

export default [{
    path: "/shopcart",
    name: "shopcart",
    meta: { middleware: [auth], layout: "default" },
    component: () => import("@/modules/ShopCart/views/Index.vue").then(m => m.default),
}]
