import '@testing-library/jest-dom'
import {render, fireEvent} from '@testing-library/vue'
import { flushPromises } from '@vue/test-utils'
import router from '../../router'
import App from '@/App.vue'
import Register from '@/views/Register/Index.vue'

beforeEach(() => { window.scrollTo = vi.fn() })
afterEach(() => { vi.clearAllMocks() })

test('this should go to the register page', async () => {

  const { getByTestId, getByText } = render(App, {
    global: {
      plugins: [router]
    }
  })
  
  router.push('/')
  await router.isReady()
  
  await fireEvent.click(getByTestId('register-link'))

  await flushPromises()

  expect(global.location.pathname).toBe('/register')
  //getByText('Registrarse') 

})

