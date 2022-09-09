<script setup lang="ts">
withDefaults(defineProps<{
  label?: string
  modelValue?: string | number
}>(), {
  label: '',
  modelValue: ''
})
</script>

<template>
  <label v-if="label">{{ label }}</label>
  <textarea    
    v-bind="$attrs"
    :value="modelValue"
    :placeholder="label"
    @input="$emit('update:modelValue', ($event.target as HTMLInputElement).value)"    
    class="field"
  ></textarea>
</template>
