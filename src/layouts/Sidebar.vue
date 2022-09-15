<script setup lang="ts">
import { ref } from "vue";
import { useAuthStore } from "@/modules/Auth/stores/index"
import { useSidebar } from "@/composables/useSidebar";
import RecursiveMenu from "@/layouts/RecursiveMenu/Index.vue";

const { isOpen } = useSidebar()
const store = useAuthStore()
</script>

<template>
  <div class="flex bg-base-300" v-if="store.authUser">
    <!-- Backdrop -->
    <div
      :class="isOpen ? 'block' : 'hidden'"
      @click="isOpen = false"
      class="fixed z-20 inset-0 bg-black opacity-50 transition-opacity lg:hidden"
    ></div>
    <!-- End Backdrop -->
    <div
      :class="isOpen ? 'translate-x-0 ease-out' : '-translate-x-full ease-in'"
      class="fixed z-30 inset-y-0 left-0 w-64 transition duration-300 transform overflow-y-auto lg:translate-x-0 lg:static lg:inset-0"
    >
      <RecursiveMenu /> 
    </div>
  </div>
</template>

