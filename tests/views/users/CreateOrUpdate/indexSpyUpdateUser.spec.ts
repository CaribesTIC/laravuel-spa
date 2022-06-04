import { describe, it, vi, expect } from 'vitest'
import { shallowMount } from '@vue/test-utils'
import CreateOrUpdate from '@/views/Users/CreateOrEdit.vue'
import router from '@/router'

describe('Profile AuthUserForm/Index Component',  () => {
  
  it('should be called submit with payload', async () => {
  
    const user = {
      name: "John Doe",
      email: "user@email.ext",
      password: "password",
      role_id: 1
    }
  
    const wrapper = shallowMount(CreateOrUpdate, {
      props: {
        id: "1"
      },
      mounted: vi.fn(),
      global: {
        plugins: [router]
      }
    })

    const submitSpy = vi.spyOn(wrapper.vm, 'submit');

    wrapper.vm.submit(user, "1")

    expect(submitSpy).toHaveBeenCalled()
    expect(submitSpy).toHaveBeenCalledTimes(1)
    expect(submitSpy).toHaveBeenCalledWith(user, "1")
  })
    
})
