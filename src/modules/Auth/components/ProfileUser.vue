<script setup lang="ts">
import FormUser from "./FormUser.vue"
import { useProfileUser } from "../composables/useProfileUser"

const {
  error,
  message,
  sending,
  updateUser
} = useProfileUser() 
</script>

<template>
  <FormUser
    class="p-5 border rounded shadow"
    @submit='updateUser($event)'      
    :sending='sending'
    :error='error'
    :message="message"
  />
</template>
