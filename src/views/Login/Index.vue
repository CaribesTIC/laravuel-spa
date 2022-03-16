<script setup lang="ts">  
  import Form from "./Form.vue";
  import { useLogin } from './useLogin'

  const { error, login, sending } = useLogin()
</script>

<template>
  <div class="p-5 m-auto w-full sm:w-4/12">
    <h2 class="mb-4 text-xl text-center">Inicio de Sesión</h2>
    <Form
      class="p-5 bg-white border rounded shadow"
      @submit='login($event)'
      :error='error'
      :sending='sending'
    />
    <p class="mt-2 text-center text-gray-500">
      <router-link
        to="/register"
        class="text-gray-500 transition hover:text-gray-600"
        data-testid="register-link"
      >
        Regístrese para obtener una cuenta
      </router-link><br>
      <router-link
        to="/forgot-password"
        class="underline text-sm text-gray-600 hover:text-gray-900"
        data-testid="forgot-password-link"
      >
        ¿Olvidaste tu contraseña?
      </router-link>
    </p>
  </div>
</template>
