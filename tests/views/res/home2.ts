//https://lmiller1990.github.io/vue-testing-handbook/v3/vue-router.html#writing-the-test
import { mount, flushPromises } from '@vue/test-utils'
//import routes from "@/router/index"
import Home from '@/views/Home/Index.vue'
import Login from '@/views/Login/Index.vue'
import { createRouter, createWebHistory } from "vue-router"
import App from "@/App.vue"




const routes = [{
    path: '/',
    name: 'Home',
    meta: { layout: "empty" },       
    component: Home
}, {
    path: "/login",
    name: "Login",
    meta: { layout: "empty" },
    component: Login
}]

describe('main screen', () => { 
  
  
  
 it("renders a child component via routing", async () => {
    const router = createRouter({ 
      history: createWebHistory(),
      routes 
    })
    router.push("/login")
    await router.isReady()
    const wrapper = mount(Home, { 
      global: {
        plugins: [router]
      }
    })

    expect(wrapper.findComponent(Home).exists()).toBe(true)
  })
    


  

  
})
