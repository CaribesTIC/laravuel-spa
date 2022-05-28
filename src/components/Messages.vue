<script setup lang="ts">
import { computed } from "vue";
import { useMessageStore } from '../stores/Message'
import FlashMessage from "@/components/FlashMessage.vue";
import AvatarIcon from "@/components/icons/AvatarIcon.vue";
import BasePagination from "@/components/BasePagination.vue";

const store = useMessageStore()

//["loading", "error", "messages", "meta", "links"]
const currentPage = 1;
store.getMessages(currentPage);
</script>

<template>
  <div>
    <transition name="fade" mode="out-in">
      <FlashMessage
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
      <FlashMessage :error="error" v-if="store.error" key="error" />
    </transition>
    <transition name="fade">    
      <BasePagination
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


