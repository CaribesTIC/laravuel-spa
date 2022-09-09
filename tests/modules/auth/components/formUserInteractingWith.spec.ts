import { describe, it, vi, expect } from 'vitest'
import { mount } from '@vue/test-utils'
import { nextTick } from 'vue'
import { createTestingPinia } from '@pinia/testing'
import FormUser from '@/modules/Auth/components/FormUser.vue'
import { AppBtn, AppInput, AppErrorMessage, AppFlashMessage, AppSelect } from '../../../globalComponents'

const factory = () => {
  return mount(FormUser, {
    props: {
      message: "",
      error: "",
      sending: true
    },
    global: {
      components: {
        AppBtn,
        AppInput,
        AppErrorMessage,
        AppFlashMessage,
        AppSelect
      },
      plugins: [createTestingPinia({
        initialState: {
          auth: {
            user: {
              name: "John Doe",
              email: "user@email.ext"
            }
          }, 
        }
      })]
      
    }
  })
}

describe('Profile AuthUserForm/Form Component',  () => {
  it('sets the value from state', async () => {
    const wrapper = factory()
  
    expect(wrapper.vm.name).toBe("John Doe")
    expect(wrapper.vm.email).toBe("user@email.ext")
    
    const inputName = wrapper.get('[data-testid="name-input"]')
    const inputEmail = wrapper.get('[data-testid="email-input"]')

    await nextTick()

    expect((inputName.element as HTMLInputElement).value).toBe('John Doe')
    expect((inputEmail.element as HTMLInputElement).value).toBe('user@email.ext')

  })

  it('emits the input to its parent', async () => {
    const wrapper = factory()
  
    await wrapper.trigger('submit.prevent')

    expect(wrapper.emitted()).toHaveProperty('submit')
    const submitEvent = wrapper.emitted('submit')
    expect(submitEvent).toBeTruthy()
    expect(submitEvent[0][0].name).toBe('John Doe')
    expect(submitEvent[0][0].email).toBe('user@email.ext')  
    expect(submitEvent).toEqual([[{
      name: 'John Doe', email: 'user@email.ext'
    }]])
  })
})
