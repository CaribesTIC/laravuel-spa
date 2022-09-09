<script setup lang="ts">
import { ref } from "vue";
import { useMessageStore } from "@/modules/Message/stores"
import { getError } from "@/utils/helpers";

const store = useMessageStore()

const body = ref(null)
const error = ref(null)

const postMessage = async () => {
  try {
    const payload = { body: body.value }
    error.value = null;
    await store.postMessage(payload);
    body.value = null;
  } catch (err) {
    error.value = getError(err);
  }
}

</script>

<template>
  <form @submit.prevent="postMessage">
    <div class="block mb-4">      
      <AppInput              
        v-model="body"
        label="Message"
        type="text"        
      />
    </div>
    <div class="flex justify-end mb-2">
      <AppBtn type="submit" text="Message" />
    </div>
    <AppFlashMessage :error="error" />
  </form>
</template>

