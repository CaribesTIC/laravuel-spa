import '@testing-library/jest-dom'
import {render, fireEvent} from '@testing-library/vue'
import { flushPromises } from '@vue/test-utils'
import router from "@/router/index"
import App from '@/views/Home/Index.vue'

beforeEach(() => {
  window.scrollTo = vi.fn();  
});

afterEach(() => {
  vi.clearAllMocks();
});

test('full app rendering/navigating', async () => {  
  router.push('/')
  await router.isReady()
  const { getByTestId, getByText } = render(App, {
    global: {
      plugins: [router]
    }
  })

    
    expect(router.getRoutes()[0].path).toEqual('/')
    expect(router.getRoutes()).toHaveLength(5)
    
    await fireEvent.click(getByTestId('login-link')) 
  await flushPromises()
  await console.log(global.location.pathname)
  
/*  expect(getByTestId('location-display')).toHaveTextContent('/')

  await fireEvent.click(getByTestId('login-link')) 
  await flushPromises()
  console.log(global.location.pathname)
  
  expect(getByTestId('location-display')).toHaveTextContent('/login')
*/
  
  
  
})

/*
test('setting initial route', async () => {
  // The callback function receives three parameters: the Vue instance where
  // the component is mounted, the store instance (if any) and the router
  // object.
  const {getByTestId} = render(App,  { global: { plugins: [router] } }, (router) => {
    router.push('/about')
  })
  
  await flushPromises()
  expect(router.getRoutes()).toHaveLength(3)
  expect(getByTestId('location-display')).toHaveTextContent('/about')
})*/


/*test('can render with an instantiated Vuex store', async () => {
  render(App, { global: { plugins: [router] } },  (router) => {      
    router.push('/about')
  })

    expect(router.getRoutes()).toHaveLength(3)
    expect(router.getRoutes()[0].path).toEqual('/')
})
*/
