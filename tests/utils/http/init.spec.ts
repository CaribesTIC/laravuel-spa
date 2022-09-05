import { createPinia , setActivePinia} from 'pinia'
import { useAuthStore } from '@/modules/Auth/stores' 
import init from "@/utils/Http/init"; 

test('should be initialized well', () => { 
  setActivePinia(createPinia())
  const authStore = useAuthStore()
  
  expect(init).toHaveProperty('handleError') 
  expect(init.handleError).toBeDefined()
  expect(init.baseURL).toBe(process.env.VUE_APP_API_URL)
  expect(init.withCredentials).toBe(true)   
})
