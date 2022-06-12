<script setup lang="ts">
//import { useAuthStore } from "@/modules/Auth/stores/index"
import { getAuthMenu } from "@/modules/Auth/services"
import { ref, onMounted } from "vue"
import TreeMenu from "./TreeMenu.vue"

const menus = ref([])

onMounted(async () => {
  const response = await getAuthMenu()
  menus.value = response.data
})

</script>

<template>
  <nav class="py-6 px-6">
    <ul v-if="menus && menus.length>0">
      <TreeMenu
        v-for="(menu, index) in menus"
        :key="index"
        :menu="menu"/>
      </ul>
    </nav>
</template>


