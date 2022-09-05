//import { defineAsyncComponent } from "vue"
import {createRouter, createWebHistory, RouteRecordRaw} from 'vue-router'
import Home from "@/modules/Auth/views/Home.vue"
import About from "@/modules/Auth/components/About.vue"
import Login from "@/modules/Auth/views/Login.vue"
import Register from "@/modules/Auth/views/Register.vue"
import NotFound from "@/modules/Auth/components/NotFound.vue"

const routes: Array<RouteRecordRaw> = [{
    path: '/',
    name: 'Home',
    meta: { layout: "empty" },       
    component: Home
}, {
    path: '/about',
    name: 'About',
    meta: { layout: "empty" },
    component: About
}, {
    path: "/login",
    name: "Login",
    meta: { layout: "empty" },
    component: Login
}, {
    path: "/register",
    name: "Register",
    meta: { layout: "empty" },
    component: Register
}, {
    path: "/:catchAll(.*)",
    name: "NotFound",
    meta: { layout: "empty" },
    component: NotFound
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
