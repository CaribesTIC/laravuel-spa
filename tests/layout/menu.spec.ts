import { mount } from '@vue/test-utils'
import Menu from '@/layouts/RecursiveMenu/Index.vue'
import { nextTick } from 'vue'
import { useRoute } from 'vue-router' 
import router from '@/router' 
import { getAuthMenu } from "@/modules/Auth/services"

const a =`<nav class="py-6 px-6">
  <ul>
    <li data-v-27c4ac4c="">
      <div class="mb-2 py-1 px-2 inactiveClass" data-v-27c4ac4c=""><a href="/dashboard" class="" data-v-27c4ac4c=""><span class="flex items-center group py-0" data-v-27c4ac4c=""><img src="http://localhost:8000/menu/dashboard.svg" class="w-5 h-5 mr-2" data-v-27c4ac4c=""> Dashboard</span></a></div>
      <ul class="pl-5" data-v-27c4ac4c=""></ul>
    </li>
    <li data-v-27c4ac4c="">
      <div class="mb-2 py-1 px-2" data-v-27c4ac4c=""><a href="#" style="color: gray;" class="flex items-center group py-0" data-v-27c4ac4c="">Registrar</a></div>
      <ul class="pl-5" data-v-27c4ac4c="">
        <li data-v-27c4ac4c="">
          <div class="mb-2 py-1 px-2 inactiveClass" data-v-27c4ac4c=""><a href="/users" class="" data-v-27c4ac4c=""><span class="flex items-center group py-0" data-v-27c4ac4c=""><img src="http://localhost:8000/menu/users.svg" class="w-5 h-5 mr-2" data-v-27c4ac4c=""> Users</span></a></div>
          <ul class="pl-5" data-v-27c4ac4c=""></ul>
        </li>
      </ul>
    </li>
    <li data-v-27c4ac4c="">
      <div class="mb-2 py-1 px-2 inactiveClass" data-v-27c4ac4c=""><a href="/ui-elements" class="" data-v-27c4ac4c=""><span class="flex items-center group py-0" data-v-27c4ac4c=""><img src="http://localhost:8000/menu/categories.svg" class="w-5 h-5 mr-2" data-v-27c4ac4c=""> UI Elements</span></a></div>
      <ul class="pl-5" data-v-27c4ac4c=""></ul>
    </li>
  </ul>
</nav>`

const menujson = [{
  "id":1,
  "title":"Dashboard",
  "menu_id":0,
  "path":"dashboard",
  "sort":1,
  "icon": "dashboard.svg",
  "children_menus":[]
  }, {
    "id":4,
    "title":"Registrar",
    "menu_id":0,
    "path":"#",
    "icon":"printer",
    "sort":1,
    "icon": "",
    "children_menus": [
       {
          "id":5,
          "title":"Users",
          "menu_id":4,
          "path":"users",
          "sort":1,
          "icon": "users.svg",
          "children_menus":[]
        }
      ]
   },{
          "id":8,
          "title":"UI Elements",
          "menu_id":7,
          "path":"ui-elements",
          "sort":1,
          "icon": "categories.svg",
          "children_menus":[]
        }
  ];


test.skip('component must be mounted correctly', async () => {
const route = useRoute();
  const wrapper = mount(Menu, {
  global: {
        plugins: [router]
      },
  data() {
      return {
        menus: []
      }
    },
    mounted: vi.fn()
  })

  wrapper.vm.menus = menujson

  await nextTick()
 
  expect(wrapper.html()).toEqual(a)
})


