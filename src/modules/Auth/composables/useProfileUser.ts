import { ref } from "vue"
import { getError } from "@/utils/helpers"
import * as AuthService from "../services"
import { useAuthStore } from "../stores"

export function useProfileUser() {  
  const error = ref<string>()
  const message = ref<string>()  
  const sending = ref<boolean>()

  const updateUser = (payload: { name: string, email: string }) => {
    error.value = ''
    message.value = ''
    sending.value = true

    const store = useAuthStore()

    AuthService.updateUser(payload)
      .then(() => store.getAuthUser())
      .then(() => (message.value = "Usuario actualizado."))
      .catch((e) => (error.value = getError(e)))
      .finally(()=> sending.value = false)
  }
  
  return { error, message, sending, updateUser }
}
