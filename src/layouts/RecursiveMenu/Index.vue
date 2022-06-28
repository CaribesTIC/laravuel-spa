<script setup lang="ts">
import { useAuthStore } from "@/modules/Auth/stores/index"
import { getAuthMenu } from "@/modules/Auth/services"
import { ref, onMounted } from "vue"
import TreeMenu from "./TreeMenu.vue"

interface Menu {
  id: number;
  title: string;
  menu_id: number;
  path: string;
  sort: number;
  icon: string;
  children_menus?: Menu[];
}

const menus = ref<Menu[]>([])
const depth = ref(-1)
const loading = ref(false)
const store = useAuthStore()

onMounted(async () => {
  if (store.authUser) {
    loading.value = true
    const response = await getAuthMenu()
    menus.value = response.data
    loading.value = false
  }
})
</script>

<template>
  <div v-if="loading" class="text-white p-5">
    Loading...
  </div>
  <nav v-else class="py-6 px-6">     
    <ul v-if="menus && menus.length>0">
      <TreeMenu
        v-for="(menu, index) in menus"
        :key="index"
        :menu="menu"
        :depth="depth + 1"/>
      </ul>
    </nav>
</template>


