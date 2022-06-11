<script setup lang="ts">
  import { ref } from "vue"  
  
  const props = defineProps({ menu: Object })
  const urlImg = `${process.env.VUE_APP_API_URL}/menu/`
  const showChildren = ref(true)
  const toggleChildren = ()=> showChildren.value = !showChildren.value
  const activeClass = ref("bg-gray-600 bg-opacity-25 text-gray-100 border-gray-100");
  const inactiveClass = ref("border-gray-900 text-gray-300 hover:bg-gray-200 hover:bg-opacity-25 hover:text-gray-100");
</script>

<template>
  <li>
    <div v-if="menu.path==='#'" class="mb-2 py-1 px-2">
      <a href="#" @click="toggleChildren" style="color:gray" class="flex items-center group py-0">
        {{ menu.title }}
      </a>
    </div>
    <div v-else
      class="mb-2 py-1 px-2"
      :class="[$route.name === menu.path ? activeClass : inactiveClass]"
    >      
      <RouterLink :to="menu.path">
        <span class="flex items-center group py-0">
          <img v-if="menu.icon!==''" :src="urlImg + menu.icon" class="w-5 h-5 mr-2"/>
          {{ menu.title }}
        </span>
      </RouterLink>
    </div>  
    <ul v-if="menu.children_menus.length>0" style="padding-left: 21px">
      <TreeMenu
        v-if="showChildren"
        v-for="(menu, index) in menu.children_menus"
        :key="index"
        :menu="menu"/>
    </ul>
  </li>    
</template>

