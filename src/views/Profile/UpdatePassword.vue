<script setup lang="ts">
import { ref } from "vue"
import { getError } from "@/utils/helpers"
import * as AuthService from "@/services/AuthService"
import BaseBtn from "@/components/BaseBtn.vue"
import FlashMessage from "@/components/FlashMessage.vue"

const currentPassword = ref(null)
const password = ref(null)
const passwordConfirm = ref(null)
const error = ref(null)
const message = ref(null)

const updatePassword = () => {
  error.value = null
  message.value = null

  const payload = {
    current_password: currentPassword.value,
    password: password.value,
    password_confirmation: passwordConfirm.value,
  }

  AuthService.updatePassword(payload)
    .then(() => (message.value = "Password updated."))
    .catch((err) => (error.value = getError(err)))
}
</script>

<template>
  <form @submit.prevent="updatePassword">
    <div class="mb-2">
      <label for="password" class="text-sm text-gray-500"
        >Current Password</label
      >
      <input
        type="password"
        id="current-password"
        v-model="currentPassword"
        class="block w-full px-3 py-2 placeholder-gray-400 border border-gray-300 rounded-md shadow-sm appearance-none focus:outline-none focus:ring-blue-500 focus:border-blue-500"
      />
    </div>
    <div class="mb-2">
      <label for="password" class="text-sm text-gray-500">Password</label>
      <input
        type="password"
        id="password"
        v-model="password"
        class="block w-full px-3 py-2 placeholder-gray-400 border border-gray-300 rounded-md shadow-sm appearance-none focus:outline-none focus:ring-blue-500 focus:border-blue-500"
      />
    </div>
    <div class="mb-4">
      <label for="password-confirm" class="text-sm text-gray-500"
        >Confirm Password</label
      >
      <input
        type="password"
        id="password-confirm"
        v-model="passwordConfirm"
        class="block w-full px-3 py-2 placeholder-gray-400 border border-gray-300 rounded-md shadow-sm appearance-none focus:outline-none focus:ring-blue-500 focus:border-blue-500"
      />
    </div>
    <BaseBtn type="submit" text="Update" />
    <FlashMessage :message="message" :error="error" />
  </form>
</template>
