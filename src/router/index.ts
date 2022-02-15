//import { defineAsyncComponent } from "vue"
import {createRouter, createWebHistory} from 'vue-router'

const routes = [{
    path: '/',
    name: 'Home',
    meta: { layout: "empty" },       
    component: () => import("@/views/Home/Index.vue")
}, {
    path: '/about',
    name: 'About',
    meta: { layout: "empty" },
    component: () => import("@/components/About.vue")
}, {
    path: "/login",
    name: "Login",
    meta: { layout: "empty" },
    component: () => import("@/views/Login/Index.vue")
}, {
    path: "/register",
    name: "Register",
    meta: { layout: "empty" },
    component: () => import("@/views/Register/Index.vue") 
}, {
    path: "/:catchAll(.*)",
    name: "NotFound",
    meta: { layout: "empty" },
    component: () => import("@/components/NotFound.vue"),
}]

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),  
  routes,
  scrollBehavior(to, from, savedPosition) {
    if (savedPosition) {
      return savedPosition;
    } else {
      return { x: 0, y: 0 };
    }
  },
});

export default router
