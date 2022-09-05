import { shallowMount } from '@vue/test-utils'
import FormRegister from '@/modules/Auth/components/FormRegister.vue'

const FlashMessage = {}

test('component must be mounted correctly', () => {

  const wrapper = shallowMount(FormRegister, {
    global: {
      stubs: { FlashMessage: true }
    }    
  })

  const form = wrapper.find('form')
  const submitBtn = wrapper.find('[data-testid="submit-btn"]');
  const nameInput = wrapper.find('[data-testid="name-input"]');
  const emailInput = wrapper.find('[data-testid="email-input"]');
  const passwordInput = wrapper.find('[data-testid="password-input"]');
  const confirmPasswordInput = wrapper.find('[data-testid="confirm-password-input"]');
  
  expect(form.exists()).toBe(true)     
  expect(submitBtn.exists()).toBe(true)
  expect(submitBtn.html()).toContain('type="submit"')
  expect(nameInput.exists()).toBe(true)
  expect(emailInput.exists()).toBe(true)
  expect(passwordInput.exists()).toBe(true)
  expect(confirmPasswordInput.exists()).toBe(true)
  
})
