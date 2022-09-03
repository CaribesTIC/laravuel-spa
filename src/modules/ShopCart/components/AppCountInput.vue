<script setup lang="ts">
defineProps({
  modelValue: { type: Number, default: 0 },
});

const emit = defineEmits(["update:modelValue", "input"]);
const updateValue = (value: number | string) => {
  if (value !== "") {
    emit("update:modelValue", value);
  }
};


</script>
<template>
  <span class="inline-flex">
    <button
      class="cursor-pointer bg-gray-200 px-2 rounded-l"
      @click="updateValue(modelValue > 0 ? modelValue - 1 : null)"
    >
      -
    </button>
    <input
      :value="modelValue"
      type="number"
      min="0"
      @input="updateValue(($event.target as HTMLInputElement).value)"
    />
    <button
      class="bg-gray-200 px-2 rounded-r cursor-pointer"
      @click="updateValue(modelValue + 1)"
    >
      +
    </button>
  </span>
</template>

<style scoped>
/* Chrome, Safari, Edge, Opera */
input::-webkit-outer-spin-button,
input::-webkit-inner-spin-button {
  -webkit-appearance: none;
  margin: 0;
}

/* Firefox */
input[type="number"] {
  -moz-appearance: textfield;
}


input[type="number"] {
  appearance: none;
  -moz-appearance: textfield;
  border: 1px solid gray;
  @apply border-gray-500 w-10 text-center;
}
button {
  border: 1px solid gray;
}


</style>
