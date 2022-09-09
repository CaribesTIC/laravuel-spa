import { defineAsyncComponent } from 'vue'
import app from '@/plugins/app'

app
  .component('AppBtn', defineAsyncComponent(() => import('@/components/AppBtn.vue')))
  .component('AppErrorMessage', defineAsyncComponent(() => import('@/components/AppErrorMessage.vue')))
  .component('AppFlashMessage', defineAsyncComponent(() => import('@/components/AppFlashMessage.vue')))
  .component('AppLink', defineAsyncComponent(() => import('@/components/AppLink.vue')))   
  .component('AppInput', defineAsyncComponent(() => import('@/components/AppInput.vue')))
  .component('AppSelect', defineAsyncComponent(() => import('@/components/AppSelect.vue')))
  .component('DefaultLayout', defineAsyncComponent(() => import('@/layouts/DashboardLayout.vue')))
  .component('EmptyLayout', defineAsyncComponent(() => import('@/layouts/EmptyLayout.vue')))
