<script setup lang="ts">
  import { ref } from "vue"  
  
  defineProps({
    error: [Object, String],
    sending: Boolean
  })  
  const emit = defineEmits(['submit'])  
  const email = ref(null)  
  const password = ref(null)  
  const submit = async () => {
    emit('submit', {
      email: email.value,
      password: password.value
    })
  }
</script>

<template>
  <form @submit.prevent="submit">
    <AppInput
      type="email"
      label="Correo Electrónico"
      name="email"
      v-model="email"
      autocomplete="email"
      placeholder="email@domain.ext"      
      class="mb-2"
      data-testid="email-input"      
    />
    <AppInput
      type="password"
      label="Contraseña"
      name="password"
      placeholder="password"
      v-model="password"
      class="mb-4"
      data-testid="password-input"
    />    

    <div class="flex items-center justify-between mt-4">
      <label class="flex items-center">
        <input
          type="checkbox"
          class="rounded border-gray-300 text-indigo-600 shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50i mb-4"
          name="remember">
          <span class="ml-2 mb-3 text-sm text-gray-600">
            Recuérdame
          </span>
      </label>
      <AppBtn
        type="submit"
        :text="sending ? 'Iniciando sesión...' : 'Iniciar sesión'"
        :isDisabled='sending'
        data-testid="submit-btn"
      />
    </div>
    <AppFlashMessage :error='error' />
  </form>
</template>
