import { onMounted, reactive, ref } from 'vue'
import { useRouter } from 'vue-router'
import { getError } from "@/utils/helpers";
import RoleService from "@/modules/Roles/services";
/*import type Role from "./Role"
import type User from "./User"
import type Errors from "./Errors"*/

export default (userId?: string) => {
  const router = useRouter();
  
  /*const user: User = reactive({    
    name: null, email: null, password: null, role_id: null
  })*/

  const errors = ref<Errors>({
    name: [], email: [], password: [], role_id: []
  })
  
  const roles = ref<Role[]>([])
  const sending = ref(false);
  const loading = ref(false);
  
  /*onMounted(async () => {
    if (userId) {
      loading.value = true
      UserService.getUser(userId)
        .then((response) => {                
          user.name = response.data.data.name
          user.email = response.data.data.email
          user.password = null
          user.role_id = response.data.data.role_id        
        })
        .catch((err) => {        
          errors.value = getError(err)
        })
        .finally(() => {
          loading.value = false;
        });
    }
    loading.value = true
    UserService.helperTablesGet()
    .then((response) => {
      roles.value = response.data.roles;      
    })
    .catch((err) => {
      errors.value = getError(err)
    })
    .finally(() => {
      loading.value = false
    });    
  });*/

  /*const insertUser = async (user: User) => {  
    sending.value = true
    return UserService.insertUser(user)
      .then((response) => {         
        alert( response.data.message );
        router.push( { path: '/users' } );
      })
      .catch((err) => {                
        console.log( err.response.data );
        errors.value = getError(err)
      })
      .finally(() => {
        sending.value = false
      });
  };*/

  /*const updateUser = async (user: User, userId: string) => {
    sending.value= true
    return UserService.updateUser(userId, user)
      .then((response) => {
        alert( response.data.message );
        router.push( { path: '/users' } );
      })
      .catch((err) => {                
        console.log( err.response.data );
        errors.value = getError(err)
      })
      .finally(() => {
        sending.value = false
      });
  };*/
  
  /*const submit = (user: User, userId?: string) => {  
    !userId ? insertUser (user)  : updateUser(user, userId)
  }*/

  const deleteRole = (userId?: string) => {
    if (userId === undefined) return;
    sending.value= true
    return UserService.deleteUser(userId)
      .then((response) => {
        router.push( { path: '/roles' } );
      })
      .catch((err) => {                
        console.log( err.response.data );
        errors.value = getError(err)
      })
      .finally(() => {
        sending.value = false
      });
  }

  return {
    //user,
    errors,
    roles,
    //sending,
    loading,
    //router,
    //submit,
    deleteRole
  }

};
