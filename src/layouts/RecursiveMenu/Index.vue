<script setup lang="ts">
import TreeMenu from './TreeMenu.vue'
import data from './data'

const menus = data
</script>

<template>
  <nav class="py-6 px-6">
    <ul v-if="menus.length>0">
      <TreeMenu
        v-for="(menu, index) in menus"
        :key="index"
        :menu="menu"/>
      </ul>
    </nav>
</template>


