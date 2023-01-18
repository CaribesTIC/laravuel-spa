<script setup lang="ts">
import { ref, computed } from "vue";
import { useAuthStore } from "@/modules/Auth/stores"
import { useSidebar } from "@/composables/useSidebar"
import Logout from "@/modules/Auth/components/Logout.vue"
import LoginIcon from "@/icons/LoginIcon.vue"
import HomeIcon from "@/icons/HomeIcon.vue"
//import IconLogo from "@/icons/IconLogo.vue"
import { useDark, useToggle } from '@vueuse/core'

const { isOpen } = useSidebar()
const dropdownOpen = ref(false)
const store = computed(() => useAuthStore())

const isDark = useDark({
  selector: 'body',
  attribute: 'data-theme',
  valueDark: 'night',
  valueLight: 'winter'
})

const toggleDark = useToggle(isDark)
</script>

<template>
  <header class="flex justify-between items-center p-5 bg-base-300 border-b-2 border-gray-700">  
    <div class="flex items-center">
      <button
        @click="isOpen = true"
        class="focus:outline-none lg:hidden"
      >
        <svg
          class="h-6 w-6"
          viewBox="0 0 24 24"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M4 6H20M4 12H20M4 18H11"
            stroke="currentColor"
            stroke-width="2"
            stroke-linecap="round"
            stroke-linejoin="round"
          />
        </svg>
      </button>

      <div v-if="store.authUser" class="flex items-center space-x-5 ml-3">
        <AppLink to="/dashboard">
          <HomeIcon class="w-6 h-6" />
          <!--IconLogo
            class= "flex justify-center pt-4 sm:justify-start sm:pt-0 h-12 w-12 bg-transparent"
            fill="#ffffff"
          /-->
          <span class="sr-only">Dashboard</span>
        </AppLink>        
      </div>
      
      <AppLink to="/" v-else>
        <HomeIcon class="w-6 h-6" />
      </AppLink>

      <div class="relative mr-4 lg:mx-0">
        <span class="absolute inset-y-0 left-0 pl-3 flex items-center">
          <svg class="h-5 w-5" viewBox="0 0 24 24" fill="none">
            <path
              d="M21 21L15 15M17 10C17 13.866 13.866 17 10 17C6.13401 17 3 13.866 3 10C3 6.13401 6.13401 3 10 3C13.866 3 17 6.13401 17 10Z"
              stroke="currentColor"
              stroke-width="2"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
          </svg>
        </span>

        <input
          class="ml-10 w-32 sm:w-64 rounded-md pl-10 pr-4 focus:border-indigo-600 bg-gray-400 ml-2 "
          type="text"
          placeholder="Search"
        />
      </div>
    </div>

    <div class="flex items-center">
      <button class="flex mx-4 focus:outline-none">
        <svg
          class="h-6 w-6"
          viewBox="0 0 24 24"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M15 17H20L18.5951 15.5951C18.2141 15.2141 18 14.6973 18 14.1585V11C18 8.38757 16.3304 6.16509 14 5.34142V5C14 3.89543 13.1046 3 12 3C10.8954 3 10 3.89543 10 5V5.34142C7.66962 6.16509 6 8.38757 6 11V14.1585C6 14.6973 5.78595 15.2141 5.40493 15.5951L4 17H9M15 17V18C15 19.6569 13.6569 21 12 21C10.3431 21 9 19.6569 9 18V17M15 17H9"
            stroke="currentColor"
            stroke-width="2"
            stroke-linecap="round"
            stroke-linejoin="round"
          />
        </svg>
      </button>

      <div class="relative">
        <button
          @click="dropdownOpen = !dropdownOpen"
          class="relative z-10 block h-8 w-8 rounded-full overflow-hidden focus:outline-none"
        >
            <img
              v-if="store.authUser && store.authUser.avatar"
              :src="store.authUser.avatar"
              class="w-10 h-10 rounded-full"
              alt=""
            />
          <svg v-else
            xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 24 24"
            aria-hidden="true" class="w-8 h-10 rounded-full"
          >
            <path
              d="M24 20.993V24H0v-2.996A14.977 14.977 0 0112.004 15c4.904 0 9.26 2.354 11.996 5.993zM16.002 8.999a4 4 0 11-8 0 4 4 0 018 0z">
            </path>
          </svg>
        </button>

        <div
          v-show="dropdownOpen"
          @click="dropdownOpen = false"
          class="absolute right-0 mt-2 py-2 w-48 bg-base-100 rounded-md shadow-xl z-20"
        >
        
        <div class="ml-4">
        <!-- v-slot="{ isDark, toggleDark }"-->
  <button @click="toggleDark()" class="hover:bg-gray-400">{{ !isDark ? 'isDark' : 'isLight' }}</button>
<!--/UseDark-->
        </div>
          <AppLink
            to="/profile"
            class="block px-4 py-2 text-sm hover:bg-gray-400"
          >
            {{ store.authUser ? store.authUser.name : 'Profile' }}
          </AppLink>

          <AppLink
            to="/"
            class="block px-4 py-2 text-sm hover:bg-gray-400"
          >
            <Logout />
          </AppLink> 
        </div>        
      </div>
    </div>
    
    
  </header> 
</template>
