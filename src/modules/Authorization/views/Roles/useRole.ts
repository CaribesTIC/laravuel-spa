import { onMounted, reactive, ref } from 'vue'
import { useRouter } from 'vue-router'
import { getError } from "@/utils/helpers";
import * as MenuService from "@/modules/Authorization/services/MenuService";
import * as RoleService from "@/modules/Authorization/services/RoleService";

export default (roleId?: string) => {
  const router = useRouter();
      
  const sending = ref(false);
  const loading = ref(false);
  const errors = ref({})

  const menus = ref([])
  const role = reactive({
    name:'',
    description: '',
    menu_ids: []
  })
  
  onMounted(() => {  
    MenuService.getMenus()
      .then(response => {
      menus.value = response.data.data
      console.log(menus.value)
      })
    if (roleId){
      RoleService.getRole(roleId)
      .then(response => {        
        role.name = response.data.role.name
        role.description = response.data.role.description
        role.menu_ids = response.data.role.menu_ids        
      })
    }    
  });

  const submit = (role: Role, roleId?: string) => {  
    !roleId ? insertRole (role)  : updateRole(role, roleId)
  }
  
  return {
    role,
    menus,
    sending,
    loading,
    errors,
    submit
  
  }

};
