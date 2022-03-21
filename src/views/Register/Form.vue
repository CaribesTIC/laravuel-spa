<script setup lang="ts">
  import { ref } from "vue"  
  import BaseBtn from "@/components/BaseBtn.vue"
  import BaseInput from "@/components/BaseInput.vue"  
  import FlashMessage from "@/components/FlashMessage.vue"  

  const props = defineProps({
    error: [Object, String],
    sending: Boolean
  })  
  const emit = defineEmits(['submit'])   
  const name = ref(null)
  const email = ref(null)
  const password = ref(null)
  const passwordConfirm = ref(null)
  const submit = async () => {
    emit('submit', {
      name: name.value,
      email: email.value,
      password: password.value,
      passwordConfirm: passwordConfirm.value
    })
  }
</script>

<template>
  <form @submit.prevent="submit">  
    <BaseInput
      type="text"
      label="Nombre completo"
      name="name"
      v-model="name"
      placeholder="Full name"
      class="mb-2"
      data-testid="name-input"
    />
    <BaseInput
      type="email"
      label="Correo"
      name="email"
      v-model="email"
      placeholder="email@domain.ext"
      class="mb-2"
      data-testid="email-input"
    />
    <BaseInput
      type="password"
      label="Clave"
      name="password"
      v-model="password"
      placeholder="Password"
      class="mb-2"
      data-testid="password-input"
    />
    <BaseInput
      type="password"
      label="Confirmar clave"
      name="password-confirm"
      v-model="passwordConfirm"
      placeholder="Confirm password"
      class="mb-4"
      data-testid="confirm-password-input"
    />    
    
    <BaseBtn
        type="submit"
        :text="sending ? 'Registrándose...' : 'Registrarse'"
        :isDisabled='sending'
        data-testid="submit-btn"
      />
    
    <FlashMessage :error="error" />
  </form>
</template>

