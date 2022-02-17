import '@testing-library/jest-dom'
import {render, fireEvent} from '@testing-library/vue'
import { flushPromises } from '@vue/test-utils'
import router from '../../router'
import Home from '@/views/Home/Index.vue'

beforeEach(() => { window.scrollTo = vi.fn() })
afterEach(() => { vi.clearAllMocks() })

test('full app rendering/navigating', async () => {  
  router.push('/')
  await router.isReady()
  const { getByTestId, getByText } = render(Home, {
    global: {
      plugins: [router]
    }
  })
  
  getByTestId('login-link')  
  getByTestId('register-link')
  getByText('Iniciar sesión')  
  getByText('Registrarse')    
  
})

/*test('setting initial route', async () => {
  // The callback function receives three parameters: the Vue instance where
  // the component is mounted, the store instance (if any) and the router
  // object.
  const {getByTestId} = render(App,  { global: { plugins: [router] } }, (router) => {
    router.push('/about')
  })
  
  await flushPromises()
  expect(router.getRoutes()).toHaveLength(3)
  expect(getByTestId('location-display')).toHaveTextContent('/about')
})


test('can render with an instantiated Vuex store', async () => {
  render(App, { global: { plugins: [router] } },  (router) => {      
    router.push('/about')
  })

    expect(router.getRoutes()).toHaveLength(3)
    expect(router.getRoutes()[0].path).toEqual('/')
})*/

/*test('can render with an instantiated Vuex store', async () => {
  // Instantiate a router with only one route
  const instantiatedRouter = new VueRouter({
    routes: [{path: '/special-path', component: Home}],
  })
  render(App, {routes: instantiatedRouter}, (vue, store, router) => {
    expect(router.getRoutes()).toHaveLength(1)
    expect(router.getRoutes()[0].path).toEqual('/special-path')
  })
})
*/

