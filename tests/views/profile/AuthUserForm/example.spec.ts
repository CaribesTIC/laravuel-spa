import { describe, it, vi, expect } from 'vitest'
import { mount } from '@vue/test-utils'
import { createTestingPinia } from '@pinia/testing'
import ProfileIndex from '@/views/Profile/AuthUserForm/Index.vue'
import { updateUser } from "@/services/AuthService"
import * as Mock from "../../../apiMock/AuthService"

const payload = {
  name: "John Doe",
  email: "user@email.ext"
}

describe('Profile Index Component',  async () => {
  it('should be called updateUser with payload', async () => {
    const wrapper = mount(ProfileIndex, {
      global: {
        plugins: [createTestingPinia({
          initialState: {
            auth: { user: payload }, 
          }
        })]
      }
    })

    vi.mock('@/services/AuthService');
    updateUser.mockImplementation(Mock.updateUser); 
    
    expect(await updateUser()).toBe("User updated.");

  })  
})
