<script setup lang="ts">
// @ts-nocheck
defineProps<{
  links: []
}>()

const baseUrlApi = process.env.VUE_APP_API_URL+'/api'
</script>

<template>
  <div class="mt-6 -mb-1 flex flex-wrap">
    <template v-for="(link, key) in links" :key="key">      
      <div
        v-if="link.url === null"        
        class="mr-1 mb-1 px-4 py-3 text-sm border rounded text-gray-400"
        :class="{ 'ml-auto': link.label === 'Next' }" v-html=link.label
      ></div>
      <RouterLink
        v-if="link.url !== null"        
        class="mr-1 mb-1 px-4 py-3 text-sm border rounded hover:bg-gray-400 focus:border-indigo-500 focus:text-indigo-500"
        :class="{ 'bg-base-100': link.active, 'ml-auto': link.label === 'Next' }" :to="link.url.replace(baseUrlApi, '')" v-html=link.label
      ></RouterLink>
    </template>
  </div>
</template>
