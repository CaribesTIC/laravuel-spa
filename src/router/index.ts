import {createRouter, createWebHistory, RouteRecordRaw} from 'vue-router'
import { computed } from "vue"
import { useAuthStore } from '@/stores/Auth'
import auth from "@/middleware/auth"
import admin from "@/middleware/admin"
import guest from "@/middleware/guest"
import middlewarePipeline from "@/router/middlewarePipeline"

const storeAuth = computed(() => useAuthStore())

const routes: Array<RouteRecordRaw> = [{
    path: '/',
    name: 'Home',     
    meta: { middleware: [guest], layout: "empty" },      
    component: () => import("@/views/Home/Index.vue").then(m => m.default)
}, {
    path: '/about',
    name: 'About',
    meta: { layout: "empty" },
    component: () => import("@/components/About.vue").then(m => m.default)
}, {
    path: "/dashboard",
    name: "dashboard",
    meta: { middleware: [auth], layout: "default" },
    component: () => import("@/views/Dashboard/Index.vue").then(m => m.default),
}, {
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
}, {
    path: "/users",
    name: "users",
    meta: { middleware: [auth] },
    component: () => import("@/views/Users/Index.vue").then(m => m.default),
}, {
    path: "/users/create",
    name: "userCreate",
    meta: { middleware: [auth] },
    component: () => import("@/views/Users/CreateOrEdit.vue").then(m => m.default),
    props: true
}, {
    path: "/users/edit/:id",
    name: "userEdit",
    meta: { middleware: [auth] },
    component: () => import("@/views/Users/CreateOrEdit.vue").then(m => m.default),
    props: true    
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

router.beforeEach((to, from, next) => {
  const middleware = to.meta.middleware;
  const context = { to, from, next, storeAuth };

  if (!middleware) {
    return next();
  }

  middleware[0]({
    ...context,
    next: middlewarePipeline(context, middleware, 1),
  });
});

export default router
