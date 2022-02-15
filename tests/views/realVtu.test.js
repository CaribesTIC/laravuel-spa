//https://livebook.manning.com/book/testing-vue-js-applications/chapter-10/105

import { mount, flushPromises } from '@vue/test-utils'
import { createRouter, createWebHistory } from 'vue-router'
import Home from '@/views/Home/Index.vue'
import Login from '@/views/Login/Index.vue'
import Register from '@/views/Register/Index.vue'
import App from '@/App.vue'

const router = createRouter({
  history: createWebHistory(),
  routes: [
    {
      path: '/',
      name: 'Home',
      meta: { layout: "empty" }, 
      component: Home
    },
    {
      path: '/login',
      name: 'Login',
      meta: { layout: "empty" }, 
      component: Login
    },
    {
      path: '/register',
      name: 'Register',
      meta: { layout: "empty" }, 
      component: Register
    }
  ]
})

test('routing', async () => {
  router.push('/')
  await router.isReady()

  const wrapper = mount(App, {
    global: {
      plugins: [router]
    }
  })

  //expect(wrapper.html()).toContain('Welcome to the blogging app')
  
  await wrapper.find('a').trigger('click')  
  await flushPromises()
  expect(wrapper.html()).toContain('Inicio de Sesion') 
})

