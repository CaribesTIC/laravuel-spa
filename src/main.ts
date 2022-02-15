import { createApp } from 'vue'
import App from './App.vue'
import router from "./router/index"
import EmptyLayout from './layouts/EmptyLayout.vue';
import "./assets/css/app.css"

createApp(App)
  .use(router)
  .component('empty-layout', EmptyLayout)
  .mount('#app')
