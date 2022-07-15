<script setup lang="ts">
import { ref } from "vue"
import { getError } from "@/utils/helpers"
import * as AuthService from "@/modules/Auth/services"
import FormUpdatePassword from "./FormUpdatePassword.vue"

const error = ref<String>()
const message = ref<String>()

const updatePassword = (payload: { 
    current_password: string,
    password: string,
    password_confirmation: string
}) => {
  error.value = ''
  message.value = ''

  AuthService.updatePassword(payload)
    .then(() => (message.value = "Password updated."))
    .catch((err) => (error.value = getError(err)))
}
</script>

<template>
  <FormUpdatePassword
    class="p-5 bg-white border rounded shadow"
    @submit='updatePassword'      
    :sending='true'
    :error='error'
    :message="message"
  />
</template>
