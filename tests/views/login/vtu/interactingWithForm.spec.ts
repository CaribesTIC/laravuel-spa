import { mount } from '@vue/test-utils'
import Form from '@/views/Login/Form.vue'

test('fills in the form', async () => {
  const wrapper = mount(Form)

  await wrapper.find('[data-testid="email-input"] input').setValue('user@email.ext')
})

test('sets the value', async () => {
  const wrapper = mount(Form)
  
  const input = wrapper.find('[data-testid="email-input"] input')
  await input.setValue('user@email.ext')

  expect(input.element.value).toBe('user@email.ext')
})

test('emits the input to its parent', async () => {
   const wrapper = mount(Form)

  await wrapper.find('[data-testid="email-input"] input').setValue('user@email.ext')
  expect(wrapper.vm.email).toBe('user@email.ext')
  
  await wrapper.trigger('submit.prevent')
  expect(wrapper.emitted('submit')[0][0].email.value).toBe('user@email.ext')  
  expect(wrapper.emitted('submit')).toBeTruthy()
  expect(wrapper.emitted()).toHaveProperty('submit')
})


