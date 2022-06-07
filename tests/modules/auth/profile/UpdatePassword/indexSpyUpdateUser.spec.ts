import { describe, it, vi, expect } from 'vitest'
import { mount } from '@vue/test-utils'
import ProfileIndex from '@/modules/Auth/views/Profile/UpdatePassword/Index.vue'

describe('Profile Index Component',  () => {
  it('should be called updatePassword with payload', async () => {
    const wrapper = mount(ProfileIndex)
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
