import { mount, flushPromises } from '@vue/test-utils'
import router from "@/router/index"
import Home from '@/views/Home/Index.vue'
import Login from '@/views/Login/Index.vue'

beforeEach(() => {
  window.scrollTo = vi.fn();
  router.push('/')
  
});

afterEach(() => {
  vi.clearAllMocks();
});

describe('main screen', () => {
  it('The component must be mounted correctly', async () => {

    //router.push('/')
    //await router.isReady()

    const wrapper = mount(Home, {
      global: {
        plugins: [router]
      }
    }) 
   
    expect(wrapper.find('[data-test="login"]').exists()).toBe(true)
   
    expect(wrapper.find('[data-test="register"]').exists()).toBe(true)
  
  })  
})
