<script setup lang="ts">
import { ref } from "vue"
import { getError } from "@/utils/helpers"
import * as AuthService from "@/services/AuthService"
import { useAuthStore } from "@/stores/Auth"
import Form from "./Form.vue"

const error = ref<object | string>()
const message = ref<object | string>()

const updateUser = (payload: { name: string, email: string }) => {
  error.value = ''
  message.value = ''

  const store = useAuthStore()

  AuthService.updateUser(payload)
    .then(() => store.getAuthUser())
    .then(() => (message.value = "User updated."))
    .catch((err) => (error.value = getError(err)))
}
</script>

<template>
<Form
  class="p-5 bg-white border rounded shadow"
  @submit='updateUser($event)'      
  :sending='true'
  :error='error'
  :message="message"
/>
</template>
