import auth from "@/middleware/auth"

export default [{
    path: "/card",
    name: "card",
    meta: { middleware: [auth], layout: "default" },
    component: () => import("@/modules/Themes/views/Card.vue").then(m => m.default),
}, {
    path: "/ui-elements",
    name: "ui-elements",
    meta: { middleware: [auth], layout: "default" },
    component: () => import("@/modules/Themes/views/UIElements.vue").then(m => m.default),
}, {
    path: "/tables",
    name: "tables",
    meta: { middleware: [auth], layout: "default" },
    component: () => import("@/modules/Themes/views/Tables.vue").then(m => m.default),
}, {
    path: "/forms",
    name: "forms",
    meta: { middleware: [auth], layout: "default" },
    component: () => import("@/modules/Themes/views/Forms.vue").then(m => m.default),
}, {
    path: "/modal",
    name: "modal",
    meta: { middleware: [auth], layout: "default" },
    component: () => import("@/modules/Themes/views/Modal.vue").then(m => m.default),
}, {
    path: "/blank",
    name: "blank",
    meta: { 
    //middleware: [auth],
    layout: "default"},
    component: () => import("@/modules/Themes/views/Blank.vue").then(m => m.default),
}]
