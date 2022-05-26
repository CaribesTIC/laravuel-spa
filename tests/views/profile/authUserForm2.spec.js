import { shallowMount } from '@vue/test-utils'
import { createTestingPinia } from '@pinia/testing'
import { useAuthStore } from "@/stores/Auth"
import AuthUserForm from '@/views/Profile/AuthUserForm.vue'

describe('AuthUserForm.vue', () => {

  it('should initialize the state correctly', async () => {

    const wrapper = shallowMount(AuthUserForm, {
      global: {
        plugins: [createTestingPinia({
          initialState: {
            auth: {
              user: {
                name: "John Doe",
                email: "user@email.ext"
              }
            }, 
          }
        })]
      }
    })

    const store = useAuthStore()
    expect(wrapper.find('[data-testid="submit-button"]').exists()).toBe(true)
    const updateUserSpy = vi.spyOn(wrapper.vm, 'updateUser')
    
        
    //await wrapper.trigger('submit.prevent')
    await wrapper.trigger('[data-testid="submit-button"]')
    
    expect(updateUserSpy).toHaveBeenCalled()
   

   
      
  })

})
