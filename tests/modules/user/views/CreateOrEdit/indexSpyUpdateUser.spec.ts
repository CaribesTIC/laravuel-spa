import { describe, it, vi, expect } from 'vitest'
import { mount } from '@vue/test-utils'
import { createTestingPinia } from '@pinia/testing'
import CreateOrEdit from '@/modules/User/views/CreateOrEdit.vue'
import router from '@/router'

describe('Modules User views CreateOrUpdate Component',  () => {
  
  it.todo('should be called submit with payload', async () => {
  
    const user = {
      name: "John Doe",
      email: "user@email.ext",
      password: "password",
      role_id: 1
    }
  
    const wrapper = mount(CreateOrEdit, {
      props: {
        id: "1"
      },
      mounted: vi.fn(),
      global: {
        plugins: [router, createTestingPinia({})]
      }
    })

    const submitSpy = vi.spyOn(wrapper.vm, 'submit');
    wrapper.vm.submit(user, "1")

    expect(submitSpy).toHaveBeenCalled()
    expect(submitSpy).toHaveBeenCalledTimes(1)
    expect(submitSpy).toHaveBeenCalledWith(user, "1")
  })
    
})
