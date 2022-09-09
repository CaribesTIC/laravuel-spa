import { shallowMount } from '@vue/test-utils'
import FormLogin from '@/modules/Auth/components/FormLogin.vue'
import { AppBtn, AppInput, AppErrorMessage, AppFlashMessage, AppSelect } from '../../../globalComponents'

const FlashMessage = {}

test('component must be mounted correctly', async () => {

  const wrapper = shallowMount(FormLogin, {
    global: {
      components: {
        AppBtn,
        AppInput,
        AppErrorMessage,
        AppFlashMessage,
        AppSelect
      },
      stubs: { FlashMessage: true }
    }    
  })

  const form = wrapper.find('form')
  const submitBtn = wrapper.find('[data-testid="submit-btn"]');
  const emailInput = wrapper.find('[data-testid="email-input"]');
  const passwordInput = wrapper.find('[data-testid="password-input"]');
  
  expect(form.exists()).toBe(true)     
  expect(submitBtn.exists()).toBe(true)
  expect(submitBtn.html()).toContain('type="submit"')
  expect(emailInput.exists()).toBe(true)
  expect(passwordInput.exists()).toBe(true)
  
})
