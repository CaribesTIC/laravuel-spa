<script setup lang="ts">
import { ref } from "vue"
import { getError } from "@/utils/helpers"
import * as AuthService from "@/modules/Auth/services"
import { useAuthStore } from "@/modules/Auth/stores"
import FormUser from "./FormUser.vue"

const error = ref<String>()
const message = ref<String>()

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
  <FormUser
    class="p-5 bg-white border rounded shadow"
    @submit='updateUser($event)'      
    :sending='true'
    :error='error'
    :message="message"
  />
</template>
