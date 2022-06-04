import { describe, it, vi, expect } from 'vitest'
import { mount } from '@vue/test-utils'
import { nextTick } from 'vue'
import UsersForm from '@/views/Users/Form.vue'

describe('UsersForm Component',  () => {
  it('emits the input to its parent', async () => {
    const wrapper = mount(UsersForm, {
      props: {
        id: "1",
        user: {
          name: "John Doe",
          email: "user@email.ext",
          password: "password",
          role_id: 1
        },
        sending: false,
        errors: [],
        roles: [],
      }
    })
    
    await wrapper.trigger('submit.prevent')

    expect(wrapper.emitted()).toHaveProperty('submit')
    const submitEvent = wrapper.emitted('submit')
    expect(submitEvent).toBeTruthy()
    expect(submitEvent[0][0].name).toBe('John Doe')
    expect(submitEvent[0][0].email).toBe('user@email.ext')  
    expect(submitEvent[0][0].password).toBe('password')    
    expect(submitEvent).toEqual(
      [
        [
          {
            name: 'John Doe',
            email: 'user@email.ext',
            password: 'password',
            role_id: 1
          },
          '1'
        ]
      ]
    )    
  })
})
