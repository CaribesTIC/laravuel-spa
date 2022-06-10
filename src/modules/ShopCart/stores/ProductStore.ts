import { defineStore } from "pinia";
import type Product from "@/modules/ShopCart/types/Product";

export const useProductStore = defineStore("ProductStore", {
  state: () => {
    return {
      products: [] as Product[],
    };
  },
  actions: {
    async fill() {
      this.products = (await import("@/modules/ShopCart/data/products.json")).default;
    },
  },
  // getters
});
