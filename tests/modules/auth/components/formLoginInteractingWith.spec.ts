import { mount } from '@vue/test-utils'
import FormLogin from '@/modules/Auth/components/FormLogin.vue'

describe('ModuleAuthComponentFormLogin.vue', () => {
  it('sets the value', async () => {
    const wrapper = mount(FormLogin)
  
    const input = wrapper.find('[data-testid="email-input"] input')
    await input.setValue('user@email.ext')

    expect(input.element.value).toBe('user@email.ext')
  })

  it('emits the input to its parent', async () => {
    const wrapper = mount(FormLogin)

    await wrapper.find('[data-testid="email-input"] input').setValue('user@email.ext')
    expect(wrapper.vm.email).toBe('user@email.ext')
  
    await wrapper.trigger('submit.prevent')

    expect(wrapper.emitted('submit')[0][0].email).toBe('user@email.ext')  
    expect(wrapper.emitted('submit')).toBeTruthy()
    expect(wrapper.emitted()).toHaveProperty('submit')
  })
})
