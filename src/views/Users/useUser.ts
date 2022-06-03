import { onMounted, computed, reactive, ref } from 'vue'
import UserService from "@/services/UserService";
import { getError } from "@/utils/helpers";
import type Role from "./Role"

export default () => {   

  const form = reactive ({    
    name: null,
    email: null,
    password: null,
    role_id: null
  })

  const errors = ref({
    name: [], email: [], password: [], role_id: []
  })
  
  const roles = ref<Role[]>([])
  const sending = ref(false);
  const loading = ref(false);
  
  onMounted(async () => {
    loading.value = true
    UserService.helperTablesGet()
    .then((response) => {
      roles.value = response.data.roles;      
    })
    .catch((error) => {
      errors.value = getError(error)
    })
    .finally(() => {
      loading.value = false
    });
    ;
  });

  return {
    form,
    errors,
    roles,
    sending,
    loading   
  }
  
};


