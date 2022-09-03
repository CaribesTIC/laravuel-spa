<script setup lang="ts">
// imports
import { ref } from "vue";
import AppCountInput from "./AppCountInput.vue";
import AppButton from "./AppButton.vue";

// props
const props = defineProps({
  product: Object,
});

// emits
defineEmits(["addToCart"])

// data
const count = ref(0);
</script>
<template>
  <li class="card">
    <img :src="`/images/${product.image}`" class="mb-3" width="300" />
    <div>
      {{ product.name }} - <span class="text-green-500">${{product.price}}</span>
      <div class="text-center m-4">
        <AppCountInput v-model="count" />
      </div>
      <AppButton
        class="primary" @click="$emit('addToCart', count), (count = 0)">Add to Cart</AppButton>
    </div>
  </li>
</template>

<style scoped>


.card {
  @apply shadow rounded-lg p-2 text-center text-lg font-bold text-gray-700 bg-white sm:w-1/3 lg:w-1/4 flex-grow;
}
.card img {
  @apply mx-auto;
}
</style>
