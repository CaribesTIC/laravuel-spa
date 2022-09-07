import { describe, it, vi, expect, afterEach,  afterAll} from 'vitest'
import { mount, flushPromises } from '@vue/test-utils'
import { createTestingPinia } from '@pinia/testing'
import router from '@/router'
import Menu from '@/layouts/RecursiveMenu/Index.vue'
import data from "./data"
import nav from "./nav"

vi.mock("@/modules/Auth/services", () => ({
  getAuthMenu: vi.fn(() => ({ data }))
}))

window.scrollTo = vi.fn()
afterEach(() => { vi.resetAllMocks() })
afterAll(() => { vi.clearAllMocks() })

describe('RecursiveMenu', ()=> {

  it('should render recursive menu', async () => {

    const wrapper = mount(Menu, {
      global: {
        plugins: [          
          router,
          createTestingPinia({
            initialState: {
              auth: {
                user: {
                  name: "John Doe",
                  email: "user@email.ext"
                }
              } 
            }
          })
        ],
        stubs: {
          AppLink: true
        }
      }
    })

    await flushPromises()

    expect(wrapper.html()).toEqual(nav)
    expect(true).toBe(true)
  })

})
