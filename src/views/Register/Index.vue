<script setup>
import Form from "./Form.vue";

</script>

<template>
  <div class="p-5 m-auto w-full sm:w-4/12">
    <h2 class="mb-4 text-xl text-center">Registrarse</h2>
    <Form class="p-5 bg-white border rounded shadow"/>

   <!--Form
      class="p-5 bg-white border rounded shadow"
      @submit='login'
      :error='error'
      :sending='sending'
    /-->

    <p class="mt-2 text-center text-gray-500">
      <router-link
        to="/login"
        class="text-gray-500 transition hover:text-gray-600"
        >¿Ya registrado?</router-link
      >
    </p>
  </div>
</template>

