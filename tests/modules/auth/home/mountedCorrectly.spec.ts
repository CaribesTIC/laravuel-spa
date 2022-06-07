import { shallowMount, flushPromises } from "@vue/test-utils"
import router from "../router"
import Home from "@/modules/Auth/views/Home/Index.vue"

beforeEach(() => { window.scrollTo = vi.fn() })
afterEach(() => { vi.clearAllMocks() })

test("component must be mounted correctly", async () => {

  const wrapper = shallowMount(Home, {
    global: {
      plugins: [router]
    }
  }) 
   
  expect(wrapper.find('[data-testid="login-link"]').exists()).toBe(true)   
  expect(wrapper.find('[data-testid="register-link"]').exists()).toBe(true)
  
})
