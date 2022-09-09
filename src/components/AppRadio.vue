<script setup lang="ts">
withDefaults(defineProps<{
  label?: string
  modelValue?: string | number
  value: string | number
}>(), {
  label: '',
  modelValue: ''
})
</script>

<template>
  <input
      type="radio"
      :checked="modelValue === value"
      :value="value"
      v-bind="$attrs"
      @change="$emit('update:modelValue', value)"
    />
  <label v-if="label">{{ label }}</label>
</template>
