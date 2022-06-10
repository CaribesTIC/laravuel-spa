//import { useLocalStorage } from "@vueuse/core";
import type Product from "@/modules/ShopCart/types/Product";

const state = () => {
  return {
    // items: useLocalStorage("CartStore:items", []),
    items: [] as Product[],
    test: "hello world"
  };
};

export default state;
