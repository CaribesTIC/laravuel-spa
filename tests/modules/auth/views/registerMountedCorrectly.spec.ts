import { shallowMount } from '@vue/test-utils'
import { createPinia } from 'pinia'
import router from '@/router'
import AppLink from "@/components/AppLink.vue"
import RegisterIndex from '@/modules/Auth/views/Register.vue'

beforeEach(() => { window.scrollTo = vi.fn() })
afterEach(() => { vi.clearAllMocks() })

test('component must be mounted correctly', () => {

  const wrapper = shallowMount(RegisterIndex, {
    global: {
      plugins: [createPinia(), router],
      components: { AppLink }
    }
  })
  
  expect(wrapper.html()).toContain('Regístrerse')
  expect(wrapper.html()).toContain('form-register-stub')     
  expect(wrapper.find('[data-testid="login-link"]').exists()).toBe(true)

  const loginLink = wrapper.find('[data-testid="login-link"]')
  expect(loginLink.exists()).toBe(true)  
  expect(loginLink.html()).toContain('to="/login"') 
  
})
