<script setup lang="ts">
import TheHeader from "@/modules/ShopCart/components/TheHeader.vue";
import ProductCard from "@/modules/ShopCart/components/ProductCard.vue";
import { useProductStore } from "@/modules/ShopCart/stores/ProductStore";
import { useCartStore } from "@/modules/ShopCart/stores/CartStore";
import AppButton from "@/modules/ShopCart/components/AppButton.vue";
const productStore = useProductStore();
const cartStore = useCartStore();

cartStore.$onAction(({ name, store, args, after, onError }) => {
  if (name === "addItems") {
    after(() => {
      console.log("onAction-addItems", args[0]);
    });
    onError((error) => {
      console.log("onAction-addItems-error: ", error.message);
    });
  }
});
productStore.fill();
</script>

<template>
  <div class="container p-10">
    <TheHeader />
    <div class="mb-5 flex justify-end">
      <AppButton @click="cartStore.undo">Undo</AppButton>
      <AppButton class="ml-2" @click="cartStore.redo">Redo</AppButton>
    </div>
    <ul class="sm:flex flex-wrap lg:flex-nowrap gap-5">
      <ProductCard
        v-for="product in productStore.products"
        :key="product.name"
        :product="product"
        @addToCart="cartStore.addItems($event, product)"
      />
    </ul>
  </div>
</template>

<style scoped>
.container {
  max-width: 1200px;
  margin: 0 auto;
}
</style>
