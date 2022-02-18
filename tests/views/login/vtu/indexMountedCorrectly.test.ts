import { shallowMount, flushPromises } from '@vue/test-utils'
import router from '../../router'
import Login from '@/views/Login/Index.vue'

beforeEach(() => { window.scrollTo = vi.fn() })
afterEach(() => { vi.clearAllMocks() })

test('component must be mounted correctly', async () => {

  const wrapper = shallowMount(Login, {
    global: {
      plugins: [router]
    }
  })   
     
  expect(wrapper.find('[data-testid="register-link"]').exists()).toBe(true)
  expect(wrapper.html()).toContain('Inicio de Sesión')
  
})
