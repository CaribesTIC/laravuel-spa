//import { defineAsyncComponent } from "vue"
import {createRouter, createWebHistory, RouteRecordRaw} from 'vue-router'

const routes: Array<RouteRecordRaw> = [{
    path: '/',
    name: 'Home',
    meta: { layout: "empty" },       
    component: () => import("@/views/Home/Index.vue").then(m => m.default)
}, {
    path: '/about',
    name: 'About',
    meta: { layout: "empty" },
    component: () => import("@/components/About.vue").then(m => m.default)
}, {
    path: "/dashboard",
    name: "dashboard",
    meta: { layout: "default" },
    component: () => import("@/views/Dashboard/Index.vue").then(m => m.default),
}, {
    path: "/login",
    name: "Login",
    meta: { layout: "empty" },
    component: () => import("@/views/Login/Index.vue").then(m => m.default)
}, {
    path: "/register",
    name: "Register",
    meta: { layout: "empty" },
    component: () => import("@/views/Register/Index.vue").then(m => m.default)
}, {
    path: "/:catchAll(.*)",
    name: "NotFound",
    meta: { layout: "empty" },
    component: () => import("@/components/NotFound.vue").then(m => m.default),
}]

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),  
  routes,
  scrollBehavior(to, from, savedPosition): any {
    if (savedPosition) {
      return savedPosition;
    } else {
      return { x: 0, y: 0 };
    }
  },
});

export default router
