<script setup lang="ts">
withDefaults(defineProps<{
  label?: string
  modelValue?: boolean 
}>(), {
  label: '',
  modelValue: false
})
</script>

<template>
  <input
    v-bind="$attrs"
    type="checkbox"
    :checked="modelValue"
    @change="$emit('update:modelValue', ($event.target as HTMLInputElement).checked)"
    class="field"
  />
  <label v-if="label">{{ label }}</label>
</template>
