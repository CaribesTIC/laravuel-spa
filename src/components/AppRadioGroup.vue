<script setup lang="ts">
withDefaults(defineProps<{
  options: { label: string; value: number; }[] 
  name: string
  modelValue: string | number
  vertical?: boolean
}>(), {
  vertical: false  
})
</script>

<template>
  <component
    v-for="option in options"
    :key="option.value"
    :is="vertical ? 'div' : 'span'"
    :class="{
      horizontal: !vertical
    }"
  >
    <AppRadio
      :label="option.label"
      :value="option.value"
      :modelValue="modelValue"
      :name="name"
      @update:modelValue="$emit('update:modelValue', $event)"
    />
  </component> 
</template>

<style scoped>
.horizontal {
  @apply mr-5;
}
</style>

