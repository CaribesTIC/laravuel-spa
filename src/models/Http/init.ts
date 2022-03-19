import { computed } from "vue"
import { useAuthStore } from '@/stores/Auth'
import { InitInterface } from "./init.interface"

export default<InitInterface> {  
  baseURL: process.env.VUE_APP_API_URL,  
  withCredentials: true, 
  handleError(error: any) {
    const storeAuth = computed(() => useAuthStore())
    
    if (error.response
      && [401, 419].includes(error.response.status)    
      && storeAuth.value.authUser 
      && !storeAuth.value.guest
    ) {
      storeAuth.value.logout();
    }
    
    return Promise.reject(error);
  }
}
