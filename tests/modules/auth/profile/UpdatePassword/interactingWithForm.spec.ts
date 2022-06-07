import { describe, it, expect } from 'vitest'
import { mount } from '@vue/test-utils'
import ProfileForm from '@/modules/Auth/views/Profile/UpdatePassword/Form.vue'

describe('Profile UpdatePassword/Form Component',  () => {
  it('emits the input to its parent', async () => {
    const wrapper = mount(ProfileForm, {
      props: {
        message: "",
        error: "",
        sending: true
      }
    })
    
    wrapper.get('[data-testid="current-password-input"]').setValue('current-password')
    wrapper.get('[data-testid="password-input"]').setValue('password')
    wrapper.get('[data-testid="password-confirm-input"]').setValue('password-confirm')

    await wrapper.trigger('submit.prevent')

    const submitEvent = wrapper.emitted('submit')

    expect(submitEvent).toBeTruthy()
    expect(submitEvent[0][0].current_password).toBe('current-password')
    expect(submitEvent[0][0].password).toBe('password')
    expect(submitEvent[0][0].password_confirmation).toBe('password-confirm')
    expect(submitEvent).toEqual([[{
      current_password: 'current-password',
      password: 'password',
      password_confirmation: 'password-confirm'
    }]])

  })

})
