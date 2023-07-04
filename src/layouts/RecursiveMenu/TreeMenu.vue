<script setup lang="ts">
import { ref, computed, defineAsyncComponent } from "vue"
import { useRoute } from 'vue-router'
import type { Menu } from "@/types/Menu"

const props = defineProps<{
  menu: Menu
  depth: number
}>()

const route = useRoute();

const routePathRoot = computed(
  () => route.path.startsWith(`/${props.menu.path}`)
)

const iconName = computed(
  ()=> {
      const name = props.menu.icon.substring(0,props.menu.icon.length-4)
      return defineAsyncComponent(
      () => import(/* @vite-ignore */ `../../components/icons/menu/icon-${name}.vue`).then(c => c.default)
      )
  }
)

const showChildren = ref(true)
const toggleChildren = ()=> showChildren.value = !showChildren.value
</script>

<template>
  <li>
    <div
      v-if="menu.path === '#'"
      class="mb-2 py-1 px-2"
    >
      <button
        v-if="menu.children_menus.length"
        href="#"
        @click="toggleChildren"
        style="color:gray"
        class="flex items-center group py-0"
      >
        {{ menu.title }}
      </button>
    </div>
    <div v-else
      class="mb-2 py-1 px-2"
      :class="routePathRoot ? 'activeClass' : 'inactiveClass'"      
    >      
      <AppLink :to="{ name: menu.path }">
        <span class="flex items-center group py-0">
          <Component v-if="menu && menu.icon!==''"
            :is="iconName"
            class="w-5 h-5 mr-2 fill-current"
          />
          {{ menu.title }}
        </span>
      </AppLink>
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
    /*text-gray-100*/
    border-gray-100
    border-l-4
    -ml-3;
}
.inactiveClass {
  @apply
    border-gray-900
    /*text-gray-300*/
    hover:bg-gray-200
    hover:bg-opacity-25
    hover:text-gray-100;
}
</style>
