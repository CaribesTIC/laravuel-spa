import { shallowMount } from '@vue/test-utils'
import SectionInfo from '@/components/SectionInfo.vue'

test('component must be mounted correctly', () => {

  const wrapper = shallowMount(SectionInfo, {
    props: {
        title: "Title of the information",
        description: "Description of the information"
      }
  })
  
  expect(wrapper.html()).toContain('Title of the information')
  expect(wrapper.html()).toContain('Description of the information')  
  
})

