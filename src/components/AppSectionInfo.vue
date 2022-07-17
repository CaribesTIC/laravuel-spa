<script setup lang="ts">
defineProps<{
  title: string
  description: String
}>()

</script>

<template>
  <div class="p-4">
    <h3 class="text-lg font-medium text-gray-900">{{ title }}</h3>
    <p class="mt-1 text-sm text-gray-600">
      {{ description }}
    </p>
  </div>
</template>
