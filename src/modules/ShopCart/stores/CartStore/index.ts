import { defineStore, acceptHMRUpdate } from "pinia";
import state from "./state"
import getters from "./getters"
import actions from "./actions"

export const useCartStore = defineStore("CartStore", {
  // @ts-ignore
  historyEnabled: true,
  state,
  getters,
  actions
});

if (import.meta.hot) {
  import.meta.hot.accept(acceptHMRUpdate(useCartStore, import.meta.hot));
}
