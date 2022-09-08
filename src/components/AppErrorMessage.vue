<script setup lang="ts">
defineProps<{
  id: string | number  
}>()
</script>

<template>
  <p    
    class="errorMessage"
    :id="id"
    aria-live="assertive"
  >
    <slot />
  </p>
</template>

