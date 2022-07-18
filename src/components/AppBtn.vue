<script setup lang="ts">
import { computed, onMounted, useAttrs } from "vue"

const attrs = useAttrs()

const props = defineProps<{
  type?: string | "submit"
  text?: string | "Submit"  
  isDisabled?: Boolean
  btnColor?: "btn-danger" | "btn-default" | "btn-primary" | "btn-success"
}>()

const btnColor = computed(
  () => props.isDisabled
    ? "btn-default" : props.btnColor
        ? props.btnColor : "btn-primary"
)

onMounted(()=>
console.log(attrs)
)

</script>

<template>
  <button
    :disabled="isDisabled"
    :type="type"
    class="btn"
    :class="btnColor"
  >
    <slot>{{ text }}</slot>    
  </button>
</template>

