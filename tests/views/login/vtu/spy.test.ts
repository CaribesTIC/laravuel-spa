import { mount } from '@vue/test-utils'
import router from '../../router'
import Form from '@/views/Login/Form.vue'

beforeEach(() => { window.scrollTo = vi.fn() })
afterEach(() => { vi.clearAllMocks() })

test('handles complex events', async () => {
   const wrapper = mount(Form, {
    global: {
      plugins: [router]
    }
  })  
  
  const form = wrapper.find('form')
  
  await wrapper.find('[data-testid="email-input"] input').setValue('user@email.ext')
  
  let spia = vi.spyOn(wrapper.vm,"login")

  await form.trigger('submit.prevent')

  expect(wrapper.vm.email).toBe('user@email.ext')
  
  expect(spia).toHaveBeenCalled()
})




