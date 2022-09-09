import { describe, it, vi, expect } from 'vitest'
import { mount } from '@vue/test-utils'
import { createTestingPinia } from '@pinia/testing'
import ProfileUser from '@/modules/Auth/components/ProfileUser.vue'
import { AppBtn, AppInput, AppErrorMessage, AppFlashMessage, AppSelect } from '../../../globalComponents'

const payload = {
  name: "John Doe",
  email: "user@email.ext"
}

describe('ModuleAuthComponentProfileUser.vue',  () => {
  it('should be called updateUser with payload', async () => {
    const wrapper = mount(ProfileUser, {
      global: {
        components: {
          AppBtn,
          AppInput,
          AppErrorMessage,
          AppFlashMessage,
          AppSelect
        },
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
