<script setup lang="ts">
import useUniqueId from '@/composables/useUniqueId'

withDefaults(defineProps<{
  label?: string
  modelValue?: string | number
  error?: string
}>(), {
  label: '',
  modelValue: '',
  error: ''
})

const uuid = useUniqueId().getID()
</script>

<template>
  <label :for="uuid" v-if="label">{{ label }}</label>
  <input
    v-bind="$attrs"
    :value="modelValue"
    :placeholder="label"
    @input="$emit(
      'update:modelValue',
      ($event.target as HTMLInputElement).value
    )"
    class="field"
    :id="uuid"
    :aria-describedby="error ? `${uuid}-error` : undefined"
    :aria-invalid="error ? true : undefined"
  >
  <AppErrorMessage
    v-if="error"
    :id="`${uuid}-error`"
  >
    {{ error }}
  </AppErrorMessage>
</template>

