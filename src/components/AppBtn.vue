<script setup lang="ts">
import { computed, useAttrs } from "vue"

const attrs = useAttrs()

const props = defineProps<{
  type?: "submit" | "button" | "reset"
  text?: string
  isDisabled?: boolean  
}>()

const myClass = computed(
  () => attrs.class
    ? attrs.class
      : props.isDisabled
        ? 'btn btn-default'
          : 'btn btn-primary'
)

</script>

<template>
  <button
    :disabled="isDisabled"
    :type="type"
    :class="myClass"
  > 
    <slot>{{ text ?? "Submit" }}</slot>    
  </button>
</template>

