import { mount, flushPromises } from '@vue/test-utils'
import router from "@/router/index"
import Home from '@/views/Home/Index.vue'
import Login from '@/views/Login/Index.vue'
import App from "@/App.vue"

beforeEach(() => {
  window.scrollTo = vi.fn();
});

afterEach(() => {
  vi.clearAllMocks();
});

describe('main screen', () => {  
  
  
 it("renders a child component via routing", async () => {    
    router.push('/')
    await router.isReady()
    
    const wrapper = mount(App, { 
      global: {
        plugins: [router]
      }
    })

    //router.push('/login')
    //await router.isReady()
    
    //await flushPromises()
      //console.log(wrapper.vm.$route.path)

    //expect(wrapper.findComponent(App).exists()).toBe(true)    
    

  })
    


  

  
})
