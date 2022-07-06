import { defineAsyncComponent } from 'vue'
import app from '@/plugins/app'

const EmptyLayout = defineAsyncComponent(
  () => import('@/layouts/EmptyLayout.vue')
)

const DashboardLayout = defineAsyncComponent(
  () => import('@/layouts/DashboardLayout.vue')
)

const AppLink = defineAsyncComponent(
  () => import('@/components/AppLink.vue')
)

app.component('empty-layout', EmptyLayout)
   .component('default-layout', DashboardLayout)
   .component('AppLink', AppLink)

