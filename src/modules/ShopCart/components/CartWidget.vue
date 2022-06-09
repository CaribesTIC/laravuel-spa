<script setup lang="ts">
// imports
import { ref } from "vue";
import CartItem from "./CartItem.vue";
import AppButton from "./AppButton.vue";
import AppModalOverlay from "./AppModalOverlay.vue";
import { useCartStore } from "@/modules/ShopCart/stores/CartStore";
const cartStore = useCartStore();

// data
const active = ref(false);
</script>
<template>
  <div class="relative">
    <!-- Icon that always shows -->
    <span class="cursor-pointer" @click="active = true">
      <fa icon="shopping-cart" size="lg" class="text-gray-700" />
      <div class="cart-count absolute">{{ cartStore.count }}</div>
    </span>
    <!-- Modal Overlay only shows when cart is clicked on -->
    <AppModalOverlay :active="active" @close="active = false">
      <div v-if="!cartStore.isEmpty">
        <ul class="items-in-cart">
          <CartItem
            v-for="(items, name) in cartStore.grouped"
            :key="name"
            :product="items[0]"
            :count="cartStore.groupCount(name)"
            @updateCount="cartStore.setItemCount(items[0], $event)"
            @clear="cartStore.clearItem(name)"
          />
        </ul>
        <div class="flex justify-end text-2xl mb-5">
          Total: <strong>${{ cartStore.total }}</strong>
        </div>
        <div class="flex justify-end">
          <AppButton class="secondary mr-2" @click="cartStore.$reset()"
            >Clear Cart</AppButton
          >
          <AppButton class="primary" @click="cartStore.checkout"
            >Checkout</AppButton
          >
        </div>
      </div>
      <!-- Uncomment and use condition to show when cart is empty -->
      <div v-else><em>Cart is Empty</em></div>
    </AppModalOverlay>
  </div>
</template>
<style scoped>
.items-in-cart{
  @apply mb-5;
}
.items-in-cart li{
  @apply flex justify-between p-2;
}
.items-in-cart li:nth-of-type(even){
  @apply bg-gray-300;
}

.cart-count {
  @apply bg-red-500 rounded-xl w-5 h-5 text-center text-white absolute;
  line-height: 1.8;
  position: absolute;
  top: -10px;
  right: -10px;
  font-size: 0.7rem;
}

.card {
  @apply shadow rounded-lg p-4 text-center text-lg font-bold text-gray-700 bg-white sm:w-1/3 lg:w-1/4 flex-grow;
}
.card img {
  @apply mx-auto;
}

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
</style>
