import { defineStore } from "pinia";
export const useProductStore = defineStore("ProductStore", {
  state: () => {
    return {
      products: [],
    };
  },
  actions: {
    async fill() {
      this.products = (await import("@/modules/ShopCart/data/products.json")).default;
    },
  },
  // getters
});
