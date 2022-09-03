<template>
  <label
    :for="name"
  >
    <span
      class="text-sm text-gray-800"
      :class="{ 'sr-only': !showLabel }"
      v-if="label"
      >
        {{ label }}
      </span>
    <input
      :id="name"
      :name="name"
      :type="type"
      :required="required"
      :placeholder="placeholder"
      :autocomplete="autocomplete"
      :value="modelValue"
      @input="$emit('update:modelValue', ($event.target as HTMLInputElement).value)"
      ref="input"
    />
  </label>
</template>

<script lang="ts">
export default {
  //https://vuejs.org/guide/components/attrs.html#disabling-attribute-inheritance
  name: 'BaseInput',
  inheritAttrs: true,
  emits: ['update:modelValue'],
  props: {
    name: {
      type: String,
      required: true,
    },
    label: {
      type: String,
      default: "",
    },
    modelValue: {
      type: [String, Number],
    },
    type: {
      type: String,
      default: "text",
    },
    showLabel: {
      type: Boolean,
      default: true,
    },
    required: {
      type: Boolean,
      default: false,
    },
    placeholder: {
      type: String,
      default: null,
    },
    autocomplete: {
      type: String,
      default: null,
    }
  }
}
</script>


<style scoped>
  input {
    @apply
      block
      w-full
      px-3
      py-2
      mb-3
      placeholder-gray-400
      border
      border-gray-300
      rounded-md
      shadow-sm
      appearance-none
      focus:outline-none
      focus:ring-blue-500
      focus:border-blue-500;
  }
</style>
