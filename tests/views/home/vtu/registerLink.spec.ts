import { mount, flushPromises } from '@vue/test-utils'
import router from '../../router'
import App from '@/App.vue'
import Register from '@/views/Register/Index.vue'

beforeEach(() => { window.scrollTo = vi.fn() })
afterEach(() => { vi.clearAllMocks() })

test('this should go to the register page', async () => {

  const wrapper = mount(App, {
    global: {
      plugins: [router]
    }
  })
  
  router.push('/')
  await router.isReady()
  
  await wrapper.get('[data-testid="register-link"]').trigger('click')

  await flushPromises()

  expect(global.location.pathname).toBe('/register')
  //expect(wrapper.html()).toContain('Registrarse') 

})
