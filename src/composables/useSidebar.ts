import { reactive, toRefs } from "vue";

const state = reactive({
  isOpen: false,
  isClose: false,
});

export function useSidebar() {
  return {
    ...toRefs(state),
  };
}
