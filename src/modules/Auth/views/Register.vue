<script setup lang="ts">
  import IconLogo from "@/icons/IconLogo.vue"
  import FormRegister from "../components/FormRegister.vue";
  import { useRegister } from '../composables/useRegister'

  const { register, sending, error } = useRegister()
</script>

<template>
  <div class="p-5 m-auto w-full sm:w-4/12">
    <IconLogo class= "flex justify-center pt-4 sm:justify-start sm:pt-0 w-1/4 y-1/4 h-auto m-auto bg-transparent"/>
    <h2 class="my-4 text-2xl text-center">Regístrerse</h2>
    <FormRegister
      class="p-5 bg-base-200 border rounded shadow"
      @submit='register'      
      :sending='sending'
      :error='error'
    />
    <p class="mt-2 text-center text-gray-500">
      <AppLink
        to="/login"
        class="text-gray-500 transition hover:text-gray-600"
        data-testid="login-link"
      >
        ¿Ya registrado?
      </AppLink>
    </p>
  </div>
</template>

