import { describe, it, vi, expect } from 'vitest'
import { mount } from '@vue/test-utils'
import { createTestingPinia } from '@pinia/testing'
import ProfileIndex from '@/views/Profile/AuthUserForm/Index.vue'

const payload = {
  name: "John Doe",
  email: "user@email.ext"
}

describe('Profile AuthUserForm/Index Component',  () => {
  it('should be called updateUser with payload', async () => {
    const wrapper = mount(ProfileIndex, {
      global: {
        plugins: [createTestingPinia({
          initialState: {
            auth: { user: payload }, 
          }
        })]
      }
    })
    const updateUserSpy = vi.spyOn(wrapper.vm, 'updateUser');

    wrapper.vm.updateUser(payload)

    expect(updateUserSpy).toHaveBeenCalled()
    expect(updateUserSpy).toHaveBeenCalledTimes(1)
    expect(updateUserSpy).toHaveBeenCalledWith(payload)
  })  
})
