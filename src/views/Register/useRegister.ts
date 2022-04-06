import { ref } from "vue"
import { useRouter } from 'vue-router';
import * as AuthService from "@/services/AuthService.js";
import { getError } from "@/utils/helpers.js";

export function useRegister() {
  const router = useRouter();
  const error = ref(null)
  const sending = ref(false)
  
  const register = async (form) => {
    const payload = {
      name: form.name,
      email: form.email,
      password: form.password,
      password_confirmation: form.passwordConfirm
    };
    error.value = null;
    sending.value = true;  
    AuthService.registerUser(payload)
      .then(() => router.push("/dashboard"))
      .catch((e) => error.value = getError(e))
      .finally(() => sending.value = false);
  }

  return {
    register,
    sending,
    error
  }
}
