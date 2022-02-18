import '@testing-library/jest-dom'
import {render, fireEvent} from '@testing-library/vue'
import { flushPromises } from '@vue/test-utils'
import router from '../../router'
import App from '@/App.vue'
import Login from '@/views/Login/Index.vue'

const FlashMessage = { }

beforeEach(() => { window.scrollTo = vi.fn() })
afterEach(() => { vi.clearAllMocks() })

test('this should go to the login page', async () => {

  const { getByTestId, getByText } = render(App, {
    global: {
      plugins: [router],
      stubs: {FlashMessage: true}
    }
  })
  
  router.push('/')
  await router.isReady()  
  
  await fireEvent.click(getByTestId('login-link')) 
  
  await flushPromises()  

  expect(global.location.pathname).toBe('/login')
  //getByText('Inicio de Sesión')

})
