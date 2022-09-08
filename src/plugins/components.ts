import { defineAsyncComponent } from 'vue'
import app from '@/plugins/app'

const AppBtn = defineAsyncComponent(
  () => import('@/components/AppBtn.vue')
)

const AppErrorMessage = defineAsyncComponent(
  () => import('@/components/AppErrorMessage.vue')
)

const AppFlashMessage = defineAsyncComponent(
  () => import('@/components/AppFlashMessage.vue')
)

const AppLink = defineAsyncComponent(
  () => import('@/components/AppLink.vue')
)

const AppInput = defineAsyncComponent(
  () => import('@/components/AppInput.vue')
)

const DashboardLayout = defineAsyncComponent(
  () => import('@/layouts/DashboardLayout.vue')
)

const EmptyLayout = defineAsyncComponent(
  () => import('@/layouts/EmptyLayout.vue')
)  

app
  .component('AppBtn', AppBtn)
  .component('AppErrorMessage', AppErrorMessage)
  .component('AppFlashMessage', AppFlashMessage)
  .component('AppLink', AppLink)   
  .component('AppInput', AppInput)
  .component('DefaultLayout', DashboardLayout)
  .component('EmptyLayout', EmptyLayout)
