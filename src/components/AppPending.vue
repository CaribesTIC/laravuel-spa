<script setup lang="ts">
const props = withDefaults(defineProps<{
  pending: boolean
  msg: string
}>(), {
  pending: false,
  msg: 'Pendiente'  
})
</script>

<template>
  <div class="pending">
    <div class="msg">{{ props.msg }}<span class="animate">...</span></div>
  </div>

</template>

<style scoped>
.pending { @apply font-medium text-xl my-4; }
.msg { @apply py-4; }
.animate { @apply animate-ping; }
</style>

