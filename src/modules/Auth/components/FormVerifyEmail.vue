<script setup lang="ts">
import { ref } from "vue"
import { useAuthStore } from '@/modules/Auth/stores'
import { getError } from "@/utils/helpers"
import * as AuthService from "@/modules/Auth/services"
import AppBtn from "@/components/AppBtn.vue"
import AppFlashMessage from "@/components/AppFlashMessage.vue"

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
      <AppBtn type="submit" text="Verify Email" />
    </form>
    <AppFlashMessage :message="message" :error="error" />
  </div>
</template>
