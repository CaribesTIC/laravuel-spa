<script setup lang="ts">
import { ref } from "vue"
import { useAuthStore } from '@/stores/Auth'
import { getError } from "@/utils/helpers"
import * as AuthService from "@/services/AuthService"
import BaseBtn from "@/components/BaseBtn.vue"
import FlashMessage from "@/components/FlashMessage.vue"

const store = useAuthStore()
const error = ref(null)
const message = ref(null)

const sendVerification = () => {
  error.value = null
  message.value = null

  const payload = { user: store.authUser.id }

  AuthService.sendVerification(payload)
    .then(() => (message.value = "Verification email sent."))
    .catch((err) => (error.value = getError(err)))
}
</script>

<template>
  <div>
    <form @submit.prevent="sendVerification">
      <BaseBtn type="submit" text="Verify Email" />
    </form>
    <FlashMessage :message="message" :error="error" />
  </div>
</template>
