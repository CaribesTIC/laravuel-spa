<script setup lang="ts">
import { ref, onMounted } from "vue"
import { useAuthStore } from "@/stores/Auth"
import { getError } from "@/utils/helpers"
import * as AuthService from "@/services/AuthService"
import BaseBtn from "@/components/BaseBtn.vue"
import BaseInput from "@/components/BaseInput.vue"
import FlashMessage from "@/components/FlashMessage.vue"

const name = ref<string | null>(null)
const email = ref<string | null>(null)
const error = ref<string | null>(null)
const message = ref<string | null>(null)
const store = useAuthStore()

const updateUser = () => {
  error.value = null
  message.value = null

  const payload = {
    name: name.value,
    email: email.value
  }

  AuthService.updateUser(payload)
    .then(() => store.getAuthUser())
    .then(() => (message.value = "User updated."))
    .catch((err) => (error.value = getError(err)))
}

onMounted(() => {
  name.value = store.authUser.name
  email.value = store.authUser.email
})
</script>

<template>
  <form @submit.prevent="updateUser">
    <BaseInput
      type="text"
      label="Name"
      name="name"
      v-model="name"
      class="mb-2"
      data-testid="name"
    />
    <BaseInput
      type="email"
      label="Email"
      name="email"
      v-model="email"
      autocomplete="email"
      placeholder="luke@jedi.com"
      class="mb-4"
      data-testid="email"
    />
    <BaseBtn type="submit" text="Update" data-testid="submit-button"/>
    <FlashMessage :message="message" :error="error" />
  </form>
</template>
