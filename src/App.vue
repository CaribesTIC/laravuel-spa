<script>
import { defineComponent, computed } from "vue";
import { useRouter } from "vue-router";

const defaultLayout = "default";

export default defineComponent({
  setup() {
    const { currentRoute } = useRouter();

    const layout = computed(
      () => `${currentRoute.value.meta.layout || defaultLayout}-layout`
    );

    return {
      layout,
    };
  },
});
</script>

<template>
  <component :is="layout">
    <router-view v-slot="{Component}">
      <transition name="fade" mode="out-in">
        <component :is="Component" :key="$route.paht"></component>
      </transition>
    </router-view>
  </component>
</template>

<style lang="css" scoped>
  .fade-enter-active,
  .fade-leave-active{
    transition: opacity 0.3s;
  }

  .fade-enter-from,
  .fade-leave-to{
    opacity:0;
  }
</style>
