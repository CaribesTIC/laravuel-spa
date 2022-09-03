<script setup lang="ts">
import { useMessageStore } from "@/modules/Message/stores"
import AppFlashMessage from "@/components/AppFlashMessage.vue";
import AppPaginationA from "@/components/AppPaginationA.vue";
import AvatarIcon from "@/icons/AvatarIcon.vue";

const store = useMessageStore()
//["loading", "error", "messages", "meta", "links"]
const currentPage = 1;
store.getMessages(currentPage);
</script>

<template>
  <div>
    <transition name="fade" mode="out-in">
      <AppFlashMessage
        message="loading..."
        v-if="store.loading && !store.messages.length"
        key="store.loading"
      />
      <ul v-else>
        <li
          v-for="message in store.messages"
          :key="message.id"
          class="flex py-2 space-x-2 border-b"
        >
          <div>
            <img
              v-if="message.user.avatar"
              :src="message.user.avatar"
              class="w-10 h-10 rounded-full"
              alt=""
            />
            <AvatarIcon class="w-10 h-10 text-gray-400 rounded-full" v-else />
          </div>
          <div>
            <div class="flex space-x-2">
              <span class="font-bold">{{ message.user.name }}</span>
              <span class="text-gray-400">{{ message.createdAt }}</span>
            </div>
            <div class="text-gray-600">{{ message.body }}</div>
          </div>
        </li>
      </ul>
    </transition>
    <transition name="fade">
      <AppFlashMessage :error="store.error" v-if="store.error" key="store.error" />
    </transition>
    <transition name="fade">    
      <AppPaginationA
        :store="store"
        :meta="store.meta"
        :links="store.links"
        action="store.paginateMessages"
        :path="$route.path"
        v-if="store.meta && store.meta.last_page > 1"
      />
    </transition>    
  </div>
</template>


