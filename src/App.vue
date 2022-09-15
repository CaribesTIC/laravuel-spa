<script setup lang="ts">
import { computed } from "vue"
import { useRouter } from "vue-router"

const defaultLayout = "default"
const { currentRoute } = useRouter()
const layout = computed(
  () => `${currentRoute.value.meta.layout || defaultLayout}-layout`
)

</script>

<template>
  <component :is="layout">
    <router-view v-slot="{Component}">
      <transition name="fade" mode="out-in">
        <component :is="Component" :key="$route.path"></component>
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
