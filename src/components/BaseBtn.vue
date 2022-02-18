<template>
  <!--button
    :disabled="isDisabled"
    :type="type"
    v-on="$listeners"
    class="btn"
    :class="isDisabled ? 'btn-default' : 'btn-primary'"
  -->
  <button
    :disabled="isDisabled"
    :type="type"
    class="btn"
    :class="isDisabled ? 'btn-default' : 'btn-primary'"
  >
    {{ text }}
  </button>
</template>

<script>
export default {
  name: "BaseBtn",
  props: {
    type: {
      type: String,
      default: "submit",
    },
    text: {
      type: String,
      default: "Submit",
    },
    isDisabled: {
      type: Boolean,
      default: false
    }
  },
};
</script>
