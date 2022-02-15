import { mount, flushPromises } from '@vue/test-utils'
import { createRouter, createWebHistory } from 'vue-router'

const App = {
  template: `
    <router-link to="/posts">Go to posts</router-link>
    <router-view />
  `
}

const Posts = {
  template: `
    <h1>Posts</h1>
    <ul>
      <li v-for="post in posts" :key="post.id">
        {{ post.name }}
      </li>
    </ul>
  `,
  data() {
    return {
      posts: [{ id: 1, name: 'Testing Vue Router' }]
    }
  }
}

const router = createRouter({
  history: createWebHistory(),
  routes: [
    {
      path: '/',
      component: {
        template: 'Welcome to the blogging app'
      }
    },
    {
      path: '/posts',
      component: Posts
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

 // expect(wrapper.html()).toContain('Welcome to the blogging app')
  
  await wrapper.find('a').trigger('click')  
  await flushPromises()
  expect(wrapper.html()).toContain('Testing Vue Router') 
  expect(wrapper.html()).toContain('Posts')
  
})
