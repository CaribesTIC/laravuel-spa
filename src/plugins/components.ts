import { defineAsyncComponent } from 'vue'
import app from '@/plugins/app'

app
  .component('AppBtn', defineAsyncComponent(() => import('@/components/AppBtn.vue')))
  .component('AppCheckbox', defineAsyncComponent(() => import('@/components/AppCheckbox.vue')))
  .component('AppErrorMessage', defineAsyncComponent(() => import('@/components/AppErrorMessage.vue')))
  .component('AppFlashMessage', defineAsyncComponent(() => import('@/components/AppFlashMessage.vue')))
  .component('AppLink', defineAsyncComponent(() => import('@/components/AppLink.vue')))
  .component('AppLabelSpan', defineAsyncComponent(() => import('@/components/AppLabelSpan.vue')))
  .component('AppInput', defineAsyncComponent(() => import('@/components/AppInput.vue')))  
  .component('AppPageHeader', defineAsyncComponent(() => import('@/components/AppPageHeader.vue')))
  .component('AppPaginationB', defineAsyncComponent(() => import('@/components/AppPaginationB.vue')))
  .component('AppPending', defineAsyncComponent(() => import('@/components/AppPending.vue')))
  .component('AppRadio', defineAsyncComponent(() => import('@/components/AppRadio.vue')))
  .component('AppRadioGroup', defineAsyncComponent(() => import('@/components/AppRadioGroup.vue')))
  .component('AppSelect', defineAsyncComponent(() => import('@/components/AppSelect.vue')))
  .component('AppTextarea', defineAsyncComponent(() => import('@/components/AppTextarea.vue')))
  .component('DefaultLayout', defineAsyncComponent(() => import('@/layouts/DashboardLayout.vue')))
  .component('EmptyLayout', defineAsyncComponent(() => import('@/layouts/EmptyLayout.vue')))
