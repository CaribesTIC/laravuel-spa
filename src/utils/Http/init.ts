import { useAuthStore } from '@/modules/Auth/stores'
import type { Init } from "./Http"
import { AxiosError } from "axios";

export default<Init> {
  baseURL: process.env.VUE_APP_API_URL,  
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
