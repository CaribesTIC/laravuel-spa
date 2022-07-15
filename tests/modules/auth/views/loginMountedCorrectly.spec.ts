import { shallowMount } from '@vue/test-utils'
import { createPinia } from 'pinia'
import router from '@/router'
import AppLink from "@/components/AppLink.vue"
import Login from '@/modules/Auth/views/Login.vue'

beforeEach(() => { window.scrollTo = vi.fn() })
afterEach(() => { vi.clearAllMocks() })

test('component must be mounted correctly', async () => {

  const wrapper = shallowMount(Login, {
    global: {
      plugins: [createPinia(), router],
      components: { AppLink }
    }
  })
  
  expect(wrapper.html()).toContain('Inicio de Sesión')
  expect(wrapper.html()).toContain('form-login-stub')     
  expect(wrapper.find('[data-testid="register-link"]').exists()).toBe(true)

  const forgotPasswordLink = wrapper.find('[data-testid="forgot-password-link"]')
  expect(forgotPasswordLink.exists()).toBe(true)  
  expect(forgotPasswordLink.html()).toContain('to="/forgot-password"') 
  
})
