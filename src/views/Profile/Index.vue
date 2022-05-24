<script setup lang="ts">
import { useAuthStore } from '@/stores/Auth'
import AuthUser from "./AuthUser.vue"
import AuthUserForm from "./AuthUserForm.vue"
import UpdatePassword from "./UpdatePassword.vue"
import FileUpload from "./FileUpload.vue"

const store = useAuthStore()

const updateUser = () => {
  store.getAuthUser()
}

</script>

<template>
  <div class="p-0 xl:px-0">
    <h1 class="font-bold text-xl mb-2">Mi Perfil</h1>
    <div class="grid grid-cols-1 gap-10 md:grid-cols-2 lg:grid-cols-3">      
      <AuthUser class="p-5 bg-white border rounded shadow" />
      <AuthUserForm class="p-5 bg-white border rounded shadow" />
      <UpdatePassword class="p-5 bg-white border rounded shadow" />
      <FileUpload
        label="Upload Avatar"
        :fileTypes="['image/*']"
        endpoint="/users/auth/avatar"
        @fileUploaded="updateUser"
        class="p-5 bg-white border rounded shadow"
      />
    </div>
  </div>
</template>
