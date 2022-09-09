import { mount } from '@vue/test-utils'
import FormLogin from '@/modules/Auth/components/FormLogin.vue'
import { AppBtn, AppInput, AppErrorMessage, AppFlashMessage, AppSelect } from '../../../globalComponents'

const factory = () => {
  return mount(FormLogin, {
    global: {
      components: {
        AppBtn,
        AppInput,
        AppErrorMessage,
        AppFlashMessage,
        AppSelect
      }
    }
  })
}

describe('ModuleAuthComponentFormLogin.vue', () => {
  it('sets the value', async () => {
    const wrapper = factory()
  
    const input = wrapper.find('[data-testid="email-input"]')
    await input.setValue('user@email.ext')

    expect(input.element.value).toBe('user@email.ext')
  })

  it('emits the input to its parent', async () => {
    const wrapper = factory()

    await wrapper.find('[data-testid="email-input"]').setValue('user@email.ext')
    expect(wrapper.vm.email).toBe('user@email.ext')
  
    await wrapper.trigger('submit.prevent')

    expect(wrapper.emitted('submit')[0][0].email).toBe('user@email.ext')  
    expect(wrapper.emitted('submit')).toBeTruthy()
    expect(wrapper.emitted()).toHaveProperty('submit')
  })
})
