import { describe, it, vi, expect } from 'vitest'
import { mount } from '@vue/test-utils'
import ProfileUpdatePassword from '@/modules/Auth/components/ProfileUpdatePassword.vue'

describe('ModuleAuthComponentProfileUpdatePassword.vue',  () => {
  it('should be called updatePassword with payload', async () => {
    const wrapper = mount(ProfileUpdatePassword)
    const updatePasswordSpy = vi.spyOn(wrapper.vm, 'updatePassword');
    const payload = {
      current_password: 'current-password',
      password: 'password',
      password_confirmation: 'password-confirm'
    }

    wrapper.vm.updatePassword(payload)

    expect(updatePasswordSpy).toHaveBeenCalled()
    expect(updatePasswordSpy).toHaveBeenCalledTimes(1)
    expect(updatePasswordSpy).toHaveBeenCalledWith(payload)
  })  
})
