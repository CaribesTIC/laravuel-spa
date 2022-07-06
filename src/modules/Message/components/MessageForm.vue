<script setup lang="ts">
import { ref } from "vue";
import { useMessageStore } from "@/modules/Message/stores"
import { getError } from "@/utils/helpers";
import AppBtn from "@/components/AppBtn.vue";
import AppInput from "@/components/AppInput.vue";
import FlashMessage from "@/components/FlashMessage.vue";

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
    <AppInput
      type="message"
      label="Message"
      name="message"
      v-model="body"
      class="mb-4"
    />
    <div class="flex justify-end mb-2">
      <AppBtn type="submit" text="Message" />
    </div>
    <FlashMessage :error="error" />
  </form>
</template>

