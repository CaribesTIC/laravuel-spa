// @ts-nocheck
import { useAuthUserStore } from "@/modules/ShopCart/stores/AuthUserStore";
import type Product from "@/modules/ShopCart/types/Product";

const actions = {
    checkout() {
      const authUserStore = useAuthUserStore();
      alert(
        `${authUserStore.username} just bought ${this.count} items at a total of $${this.total}`
      );
    },
    addItems(count: number, item: Product) {
      //count = parseInt(count);
      for (let index = 0; index < count; index++) {
        this.items.push({ ...item });
      }
    },
    clearItem(itemName: string) {
      this.items = this.items.filter((item) => item.name !== itemName);
    },
    setItemCount(item: Product, count: number) {
      this.clearItem(item.name);
      this.addItems(count, item);
    }
  };

  export default actions;