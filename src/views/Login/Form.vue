<script setup lang="ts">
  import { ref } from "vue"
  import { useRouter } from 'vue-router';
  import { useLogin } from './useLogin'
  import BaseBtn from "@/components/BaseBtn.vue";
  import BaseInput from '@/components/BaseInput.vue'
  import FlashMessage from "@/components/FlashMessage.vue";

  const router = useRouter();
  const { login, error, sending } = useLogin()
  const email = ref(null)
  const password = ref(null)
</script>

<template>
  <form @submit.prevent="login">
    <BaseInput
      type="email"
      label="Correo Electrónico"
      name="email"
      v-model="email"
      autocomplete="email"
      placeholder="luke@jedi.com"      
      class="mb-2"
      data-testid="email-input"      
    />
    <BaseInput
      type="password"
      label="Contraseña"
      name="password"
      v-model="password"
      class="mb-4"
      data-testid="password-input"
    />
    <label class="flex items-center">
      <input
        type="checkbox"
        class="rounded border-gray-300 text-indigo-600 shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50i mb-4"
        name="remember">
          <span class="ml-2 mb-3 text-sm text-gray-600">
            Recuérdame
          </span>
    </label>

    <div class="flex items-center justify-between mt-4">

      <BaseBtn
        type="submit"
        :text="sending ? 'Iniciando sesión...' : 'Iniciar sesión'"
        :isDisabled='sending'
        data-testid="submit-btn"
      />

      <router-link
        to="/forgot-password"
        class="underline text-sm text-gray-600 hover:text-gray-900"
        data-testid="forgot-password-link"
      >
        ¿Olvidaste tu contraseña?
      </router-link>

    </div>

    <FlashMessage :error="error" />
  </form>
</template>