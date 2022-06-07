<script setup lang="ts">
  import Form from "./Form.vue";
  import { useRegister } from './useRegister'

  const { register, sending, error } = useRegister()
</script>

<template>
  <div class="p-5 m-auto w-full sm:w-4/12">
    <h2 class="mb-4 text-xl text-center">Regístrerse</h2>
    <Form
      class="p-5 bg-white border rounded shadow"
      @submit='register'      
      :sending='sending'
      :error='error'
    />
    <p class="mt-2 text-center text-gray-500">
      <router-link
        to="/login"
        class="text-gray-500 transition hover:text-gray-600"
        data-testid="login-link"
      >
        ¿Ya registrado?
      </router-link>
    </p>
  </div>
</template>

