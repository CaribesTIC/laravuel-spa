<script setup lang="ts">  
  import IconLogo from "@/icons/IconLogo.vue"
  import FormLogin from "../components/FormLogin.vue";
  import { useLogin } from '../composables/useLogin'  

  const { login, sending, error } = useLogin()
</script>

<template>
  <div class="p-5 m-auto w-full sm:w-4/12">
    <IconLogo class= "flex justify-center pt-4 sm:justify-start sm:pt-0 w-1/4 y-1/4 h-auto m-auto bg-transparent"/>
    <h2 class="my-4 text-2xl text-center">Inicio de Sesión</h2>
    <FormLogin
      class="p-5 bg-base-200 border rounded shadow"
      @submit='login($event)'      
      :sending='sending'
      :error='error'
    />
    <p class="mt-2 text-center text-gray-500">
      <AppLink
        to="/register"
        class="text-gray-500 transition hover:text-gray-600"
        data-testid="register-link"
      >
        Regístrese para obtener una cuenta
      </AppLink><br>
      <AppLink
        to="/forgot-password"
        class="underline text-sm text-gray-600 hover:text-gray-900"
        data-testid="forgot-password-link"
      >
        ¿Olvidaste tu contraseña?
      </AppLink>
    </p>
  </div>
</template>
