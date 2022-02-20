import { createApp } from 'vue'
import { createPinia } from 'pinia'
import router from './router/index'
import EmptyLayout from './layouts/EmptyLayout.vue'
import DashboardLayout from './layouts/DashboardLayout.vue'
import App from './App.vue'
import "./assets/css/app.css"

createApp(App)
  .use(createPinia())
  .use(router)
  .component('empty-layout', EmptyLayout)
  .component('default-layout', DashboardLayout)
  .mount('#app')
