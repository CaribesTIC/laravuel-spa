<script setup lang="ts">
withDefaults(defineProps<{
  label: string
  span?: string | number
  classSpan?: string
}>(), {
    classSpan: "text-gray-500"
})
</script>

<template>
  <label class="block">
    <span class="text-gray-600">{{label}}</span>
      <p>
	    <span class="block w-full p-2 font-bold" :class="classSpan">
	      {{ span }}
        </span>
	  </p>
  </label>
</template>