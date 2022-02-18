import { shallowMount, flushPromises } from '@vue/test-utils'
import router from '../../router'
import Form from '@/views/Login/Form.vue'

const FlashMessage = { }

beforeEach(() => { window.scrollTo = vi.fn() })
afterEach(() => { vi.clearAllMocks() })

test('component must be mounted correctly', async () => {

  const wrapper = shallowMount(Form, {
    global: {
      plugins: [router],
      stubs: {FlashMessage: true}
    }    
  })
     
  const forgotPasswordLink = wrapper.find('[data-testid="forgot-password-link"]');
  const submitBtn = wrapper.find('[data-testid="submit-btn"]');
  const emailInput = wrapper.find('[data-testid="email-input"]');
  const passwordInput = wrapper.find('[data-testid="password-input"]');
     
  expect(forgotPasswordLink.exists()).toBe(true)  
  expect(forgotPasswordLink.html()).toContain('to="/forgot-password"')
  expect(submitBtn.exists()).toBe(true)
  expect(submitBtn.html()).toContain('type="submit"')
  expect(emailInput.exists()).toBe(true)
  expect(passwordInput.exists()).toBe(true)
  
})
