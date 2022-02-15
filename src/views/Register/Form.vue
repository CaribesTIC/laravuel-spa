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
    />
    <BaseInput
      type="password"
      label="Contraseña"
      name="password"
      v-model="password"
      class="mb-4"
    />

<label class="flex items-center"><input type="checkbox" class="rounded border-gray-300 text-indigo-600 shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50i mb-4" name="remember"><span class="ml-2 mb-3 text-sm text-gray-600">Recuérdame</span></label>

    <div class="flex items-center justify-between mt-4">

      <BaseBtn
        type="submit"
        :text="sending ? 'Iniciando sesión...' : 'Iniciar sesión'"
        :isDisabled='sending'
      />

      <router-link to="/forgot-password" class="underline text-sm text-gray-600 hover:text-gray-900">
        ¿Olvidaste tu contraseña?
      </router-link>

    </div>

    <FlashMessage :error="error" />
  </form>
</template>

<script>
import { getError } from "@/utils/helpers.js";
import BaseBtn from "@/components/BaseBtn.vue";
import BaseInput from "@/components/BaseInput.vue";
import AuthService from "@/services/AuthService.js";
import FlashMessage from "@/components/FlashMessage.vue";

export default {
  name: "LoginView",
  components: {
    BaseBtn,
    BaseInput,
    FlashMessage,
  },
  data() {
    return {
      sending: false,
      email: null,
      password: null,
      error: null,
    };
  },
  methods: {
    async login() {
      const payload = {
        email: this.email,
        password: this.password,
      };
      this.error = null;
      try {
        this.sending = true;
        await AuthService.login(payload);
        const authUser = await this.$store.dispatch("auth/getAuthUser");
        if (authUser) {
          this.$store.dispatch("auth/setGuest", { value: "isNotGuest" });
          this.$router.push("/dashboard");
        } else {
          const error = Error(
            "Unable to fetch user after login, check your API settings."
          );
          error.name = "Fetch User";
          throw error;
        }
      } catch (error) {
        this.error = getError(error);
      } finally {
        this.sending = false;
      }
      
    },
  },
};
</script>
