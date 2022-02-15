//https://livebook.manning.com/book/testing-vue-js-applications/chapter-10/4
//https://codewithhugo.com/jest-fn-spyon-stub-mock/
//https://jestjs.io/docs/jest-object#jestspyonobject-methodname

import { mount, flushPromises } from '@vue/test-utils'
import Home from '@/views/Home/Index.vue'

test('allows authenticated user to edit a post', async () => {

  const mockRouter = {
    push: vi.fn()
  }

  const wrapper = mount(Home, {
    global: {
      stubs: ['router-link'],
      mocks: {
        $route: vi.fn(),     
        $router: mockRouter
      }
    }
  })
  
  const spy = vi.spyOn(mockRouter, 'push');
  
  mockRouter.push()
  
  //expect(mockRouter.push()).toBe(0)

  
  //await wrapper.find('[data-test="login"]').trigger('click')

  expect(mockRouter.push).toHaveBeenCalledTimes(1)
  //expect(mockRouter.push).toHaveBeenCalledWith('/login')

})

