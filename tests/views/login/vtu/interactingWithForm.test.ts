import { mount } from '@vue/test-utils'
import router from '../../router'
import Form from '@/views/Login/Form.vue'

beforeEach(() => { window.scrollTo = vi.fn() })
afterEach(() => { vi.clearAllMocks() })

test('fills in the form', async () => {
  const wrapper = mount(Form, {
    global: {
      plugins: [router]
    }
  })

  await wrapper.find('[data-testid="email-input"] input').setValue('user@email.ext')
})

test('sets the value', async () => {
  const wrapper = mount(Form, {
    global: {
      plugins: [router]
    }
  })

  const input = wrapper.find('[data-testid="email-input"] input')

  await input.setValue('user@email.ext')

  expect(input.element.value).toBe('user@email.ext')
})

test('emits the input to its parent', async () => {
  const wrapper = mount(Form, {
    global: {
      plugins: [router]
    }
  })
  
  await wrapper.find('[data-testid="email-input"] input').setValue('my@mail.com')

  await wrapper.find('[data-testid="submit-btn"]').trigger('click')
  
  //console.log(wrapper.emitted())
    expect(wrapper.emitted('click')).toBeTruthy()
    expect(wrapper.emitted()).toHaveProperty('click')

  // assert the `submit` event is emitted,
  //expect(wrapper.emitted('submit')[0][0]).toBe('my@mail.com')
})

test('handles complex events', async () => {
   const wrapper = mount(Form, {
    global: {
      plugins: [router]
    }
  })
  
  
  const form = wrapper.find('form') 
  
  await wrapper.find('[data-testid="email-input"] input').setValue('user@email.ext')

  await form.trigger('submit.prevent')

  expect(wrapper.vm.email).toBe('user@email.ext')
})



