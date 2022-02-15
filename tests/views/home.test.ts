//https://livebook.manning.com/book/testing-vue-js-applications/chapter-10/4
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
  
  await wrapper.find('[data-test="login"]').trigger('click')

  expect(mockRouter.push).toHaveBeenCalledTimes(1)
  //expect(mockRouter.push).toHaveBeenCalledWith('/login')

})

