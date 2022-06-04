import { onMounted, reactive, ref } from 'vue'
import { useRouter } from 'vue-router'
import { getError } from "@/utils/helpers";
import UserService from "@/services/UserService";
import type Role from "./Role"
import type User from "./User"

export default (userId?: string) => {
  const router = useRouter();
  
  const form = reactive ({    
    name: null, email: null, password: null, role_id: null
  })

  const errors = ref({
    name: [], email: [], password: [], role_id: []
  })
  
  const roles = ref<Role[]>([])
  const sending = ref(false);
  const loading = ref(false);
  
  onMounted(async () => {
    if (userId) {
      loading.value = true
      UserService.getUser(userId)
        .then((response) => {                
          form.name = response.data.data.name
          form.email = response.data.data.email
          form.password = null
          form.role_id = response.data.data.role_id        
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
  });

  const insertUser = async (form: User) => {  
    sending.value = true
    return UserService.insertUser(form)
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
  };

  const updateUser = async (form: User, userId: string) => {
    sending.value= true
    return UserService.updateUser(userId, form)
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
  };
  
  const submit = (form: User, userId?: string) => {
    !userId ? insertUser (form)  : updateUser(form, userId)
  } 

  return {
    form,
    errors,
    roles,
    sending,
    loading,
    router,
    submit
  }

};
