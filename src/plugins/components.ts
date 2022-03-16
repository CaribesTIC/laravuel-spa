import EmptyLayout from '@/layouts/EmptyLayout.vue'
import DashboardLayout from '@/layouts/DashboardLayout.vue'
import app from '@/plugins/app'

app.component('empty-layout', EmptyLayout)
    .component('default-layout', DashboardLayout)