import { mount } from '@vue/test-utils'
import FormRegister from '@/modules/Auth/components/FormRegister.vue'

describe('ModuleAuthComponentFormRegister.vue', () => {

  it('sets the value and emits the input to its parent', async () => {
    const wrapper = mount(FormRegister)

    const inputName = wrapper.find('[data-testid="name-input"] input')
    const inputEmail = wrapper.find('[data-testid="email-input"] input')
    const inputPassword = wrapper.find('[data-testid="password-input"] input')
    const inputConfirmPassword = wrapper.find('[data-testid="confirm-password-input"] input')
    
    await inputName.setValue('John Doe')
    await inputEmail.setValue('user@email.ext')
    await inputPassword.setValue('password')
    await inputConfirmPassword.setValue('password')
    
    expect(inputName.element.value).toBe('John Doe')
    expect(inputEmail.element.value).toBe('user@email.ext')
    expect(inputPassword.element.value).toBe('password')
    expect(inputConfirmPassword.element.value).toBe('password')
  
    await wrapper.trigger('submit.prevent')

    expect(wrapper.emitted('submit')[0][0].name).toBe('John Doe')
    expect(wrapper.emitted('submit')[0][0].email).toBe('user@email.ext')
    expect(wrapper.emitted('submit')[0][0].password).toBe('password')
    expect(wrapper.emitted('submit')[0][0].passwordConfirm).toBe('password')  
    expect(wrapper.emitted('submit')).toBeTruthy()
    expect(wrapper.emitted()).toHaveProperty('submit')
  })
})
