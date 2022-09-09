<script setup lang="ts">
import useUniqueId from '@/composables/useUniqueId'

withDefaults(defineProps<{
  label?: string 
  modelValue?: string | number
  options: string[]
  error?: string
}>(), {
  label: '',
  modelValue: '',
  error: ''
})

const uuid = useUniqueId().getID()
</script>

<template>
<!--div class="block"-->
  <label v-if="label">{{ label }}</label>
  <select    
    class="field"
    :value="modelValue"
    v-bind="{
      ...$attrs,
      onChange: ($event) => { $emit(
        'update:modelValue',
        ($event.target as HTMLInputElement).value
      ) }
    }"
    :id="uuid"
    :aria-describedby="error ? `${uuid}-error` : undefined"
    :aria-invalid="error ? true : undefined"
  >
    <option value="" class="text-gray-200">Seleccione...</option>
    <option
      v-for="option in options"
      :value="option.id"
      :key="option.id"
      :selected="option.id === modelValue"
    >{{ option.name }}</option>
  </select>
  <AppErrorMessage
    v-if="error"
    :id="`${uuid}-error`"
  >
    {{ error }}
  </AppErrorMessage>
<!--/div-->
</template>
