<script setup lang="ts">
/*import { ref, onMounted, computed } from 'vue';
import { useStore } from 'vuex';
import FlashMessagesIcon from "@/components/FlashMessagesIcon.vue";

const store = useStore();  
const show = ref(true);

const flashMessage = computed(
  () => store.state.flashMessage
);

const close = () => {
  show.value = false;
  store.commit('FLASH_MESSAGE_RESET'); 
  show.value = true;
};

onMounted(() => {
  if (flashMessage.value) {
    setTimeout(() => {
      close();
    }, 9000);
  }
});*/
</script>

<template>
  <!--div class="bg-gray-200">
    <div
      v-if="$store.state.flashMessage.success && show"
      class="flex items-center justify-between bg-green-500 rounded max-w-full m-1"
    >
      <div class="flex items-center">
        <FlashMessagesIcon name="success" />
        <div class="py-4 text-white text-base font-medium">
          {{ $store.state.flashMessage.success }}
        </div>
      </div>
      <button type="button" class="group mr-2 p-2" @click="close">
        <FlashMessagesIcon name="close-x" />
      </button>
    </div>

    <div
      v-else-if="$store.state.flashMessage.error && show"
      class="flex items-center justify-between bg-red-500 rounded max-w-full m-1"
    >
      <div class="flex items-center">
        <FlashMessagesIcon name="error" />
        <div v-if="$store.state.flashMessage.error.message" class="py-4 text-white text-base font-medium">
          {{ $store.state.flashMessage.error.message }}
        </div>
        <!-div v-if="$store.state.flashMessage.error.errors" class="py-4 text-white text-base font-medium">
          <ul>
            <li v-for="(error, index) in $store.state.flashMessage.error.errors" :key="index">
              {{ error[0] }}
            </li>
          </ul>
        </div->
      </div>
      <button type="button" class="group mr-2 p-2" @click="close">
        <FlashMessagesIcon name="close-x" />
      </button>
    </div>
  </div-->
</template>


