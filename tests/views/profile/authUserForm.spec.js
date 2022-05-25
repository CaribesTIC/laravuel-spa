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

    expect(wrapper.vm.name).toBe("John Doe")
    expect(wrapper.vm.email).toBe("user@email.ext")  
  })

})
