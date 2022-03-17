import app from '@/plugins/app'
import EmptyLayout from '@/layouts/EmptyLayout.vue'
import DashboardLayout from '@/layouts/DashboardLayout.vue'

app.component('empty-layout', EmptyLayout)
   .component('default-layout', DashboardLayout)
