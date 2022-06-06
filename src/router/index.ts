import {createRouter, createWebHistory, RouteRecordRaw} from 'vue-router'
import { computed } from "vue"
import { useAuthStore } from '@/stores/Auth'
import guest from "@/middleware/guest"
import middlewarePipeline from "@/router/middlewarePipeline"
import AuthRoutes from "@/modules/Auth/routes"
import MessageRoutes from "@/modules/Message/routes"
import UserRoutes from "@/modules/User/routes"

const storeAuth = computed(() => useAuthStore())

const routes: Array<RouteRecordRaw> = [{
    path: '/',
    name: 'Home',     
    meta: { middleware: [guest], layout: "empty" },      
    component: () => import("@/views/Home/Index.vue").then(m => m.default)
}, {
    path: '/about',
    name: 'About',
    meta: { middleware: [guest], layout: "empty" },
    component: () => import("@/components/About.vue").then(m => m.default)
}, {
    path: "/:catchAll(.*)",
    name: "NotFound",
    meta: { middleware: [guest], layout: "empty" },
    component: () => import("@/components/NotFound.vue").then(m => m.default),    
},
...AuthRoutes.map(route => route),
...MessageRoutes.map(route => route),
...UserRoutes.map(route => route)
]

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
