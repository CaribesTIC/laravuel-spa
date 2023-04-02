<script setup lang="ts">
import {ref} from "vue"
import { useAuthStore } from "@/modules/Auth/stores/index"
import { useSidebar } from "@/composables/useSidebar";
import RecursiveMenu from "@/layouts/RecursiveMenu/Index.vue";

const { isOpen, isClose } = useSidebar()
const store = useAuthStore()
</script>

<template>
  <div class="flex bg-base-100" v-if="store.authUser">
    <!-- Backdrop -->
    <div
      :class="isOpen ? 'block' : 'hidden'"
      @click="isOpen = false"
      class="fixed z-20 inset-0 bg-black opacity-50 transition-opacity lg:hidden"
    ></div>
    <!-- End Backdrop -->
    <div
      :class="isOpen ? 'translate-x-0 ease-out' : '-translate-x-full ease-in'"
      class="bg-base-200 fixed z-30 inset-y-0 left-0 transition duration-300 transform overflow-y-auto lg:static lg:inset-0 block lg:hidden"
    >
      <RecursiveMenu /> 
    </div>
    <div
      :class="!isClose ? 'translate-x-0 ease-out w-full' : '-translate-x-full ease-in w-0'"
      class="bg-base-200 fixed z-30 inset-y-0 left-0 transition duration-300 transform overflow-y-auto lg:static lg:inset-x-0 hidden lg:block"
    >
      <RecursiveMenu />
    </div>
  </div>
</template>

