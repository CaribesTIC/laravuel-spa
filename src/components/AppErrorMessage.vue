<script setup lang="ts">
defineProps<{
  id: string
}>()
</script>

<template>
  <p    
    class="form-error"
    :id="id"
    aria-live="assertive"
  >
    <slot />
  </p>
</template>

