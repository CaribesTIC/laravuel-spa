<script setup lang="ts">
import { ref, computed } from "vue"
import { useRoute } from 'vue-router'

interface Menu {
  id: number;
  title: string;
  menu_id: number;
  path: string;
  sort: number;
  icon: string;
  children_menus?: Menu[];
}

const props = defineProps<{
  menu: Menu
  depth: numeric
}>()

const route = useRoute();

const routePathRoot = computed(
  () => route.path.startsWith(`/${props.menu.path}`)
)

const showChildren = ref(true)
const toggleChildren = ()=> showChildren.value = !showChildren.value
const urlImg = `${process.env.VUE_APP_API_URL}/menu/`
</script>

<template>
  <li>
    <div
      v-if="menu.path === '#'"
      class="mb-2 py-1 px-2"
    >
      <button href="#"
        @click="toggleChildren"
        style="color:gray"
        class="flex items-center group py-0">
        {{ menu.title }}
      </button>
    </div>
    <div v-else
      class="mb-2 py-1 px-2"
      :class="routePathRoot ? 'activeClass' : 'inactiveClass'"      
    >      
      <RouterLink :to="{ name: menu.path }">
        <span class="flex items-center group py-0">
          <img
            v-if="menu.icon!==''"
            :src="urlImg + menu.icon"
            class="w-5 h-5 mr-2"/>
          {{ menu.title }}
        </span>
      </RouterLink>
    </div>
    <ul
      v-if="menu"
      class="pl-5"
    >
      <TreeMenu
        v-if="showChildren"
        v-for="(m, index) in menu.children_menus"
        :key="index"
        :menu="m"
        :depth="depth + 1"/>
    </ul>
  </li>
</template>

<style scoped>
.activeClass {
  @apply
    bg-gray-600
    bg-opacity-25
    text-gray-100
    border-gray-100
    border-l-4
    -ml-3;
}
.inactiveClass {
  @apply
    border-gray-900
    text-gray-300
    hover:bg-gray-200
    hover:bg-opacity-25
    hover:text-gray-100;
}
</style>
