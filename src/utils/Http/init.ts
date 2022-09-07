import { useAuthStore } from '@/modules/Auth/stores'
import type { Init } from "./Http"
import type { AxiosError } from "axios";

export default<Init> {
  baseURL: import.meta.env.VITE_APP_API_URL, //process.env.VUE_APP_API_URL,  
  withCredentials: true,
  handleError(error: AxiosError) {
    const storeAuth = useAuthStore()
    
    if (error.response
      && [401, 419].includes(error.response.status)    
      && storeAuth.authUser 
      && !storeAuth.guest
    ) {
      storeAuth.logout();
    }
    
    return Promise.reject(error);
  }
}
