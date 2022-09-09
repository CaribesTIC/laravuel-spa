import { describe, it, vi, expect } from 'vitest'
import { mount } from '@vue/test-utils'
import { createTestingPinia } from '@pinia/testing'
import ProfileUser from '@/modules/Auth/components/ProfileUser.vue'
import { updateUser } from "@/modules/Auth/services"
import * as Mock from "../../../apiMock/AuthService"
import { AppBtn, AppInput, AppErrorMessage, AppFlashMessage, AppSelect } from '../../../globalComponents'

const payload = {
  name: "John Doe",
  email: "user@email.ext"
}

describe('ModuleauthComponentProfileUser.vue',  async () => {
  it('should be called updateUser with payload', async () => {
    const wrapper = mount(ProfileUser, {
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
            auth: { user: payload }, 
          }
        })]
      }
    })

    vi.mock("@/modules/Auth/services");
    updateUser.mockImplementation(Mock.updateUser); 
    
    expect(await updateUser()).toBe("User updated.");

  })  
})
