import { ref } from "vue"
import { getError } from "@/utils/helpers"
import * as AuthService from "@/modules/Auth/services"

export function useProfileUpdatePassword() {
  const error = ref<string>()
  const message = ref<string>()
  const sending = ref<boolean>()

  const updatePassword = (payload: { 
    current_password: string,
    password: string,
    password_confirmation: string
  }) => {
    error.value = ''
    message.value = ''
    sending.value = true

    AuthService.updatePassword(payload)
      .then(() => (message.value = "Contraseña actualizada."))
      .catch((e) => (error.value = getError(e)))
      .finally(()=> sending.value = false)
  }
  
  return { error, message, sending, updatePassword }
}
