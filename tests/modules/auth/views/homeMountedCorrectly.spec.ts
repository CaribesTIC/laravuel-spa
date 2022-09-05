import { shallowMount } from "@vue/test-utils"
import router from "../router"
import AppLink from "@/components/AppLink.vue"
import Home from "@/modules/Auth/views/Home.vue"

beforeEach(() => { window.scrollTo = vi.fn() })
afterEach(() => { vi.clearAllMocks() })

test("component must be mounted correctly", async () => {

  const wrapper = shallowMount(Home, {
    global: {
      plugins: [ router ],
      components: { AppLink }
    }
  }) 
   
  expect(wrapper.find('[data-testid="login-link"]').exists()).toBe(true)   
  expect(wrapper.find('[data-testid="register-link"]').exists()).toBe(true)
  
})
