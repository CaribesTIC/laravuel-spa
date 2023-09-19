import { onMounted, reactive, ref } from 'vue'
import { useRouter } from 'vue-router'
import useHttp from "@/composables/useHttp"; //foreign_table_name
import DependencyService from "../../services/Dependency"

import type { Dependency } from "../../types/Dependency"


export default (dependencyId?: string) => {
  const router = useRouter();
  
  const dependency: Dependency = reactive({
    name: "", 
  })

  
  
  const {  
    errors,
    pending,

    getError
  } = useHttp()
  
  onMounted(async () => {
    if (dependencyId) {
      pending.value = true
      DependencyService.getDependency(dependencyId)
        .then((response) => { 
          dependency.name = response.data.data.name 
        })
        .catch((err) => {        
          errors.value = getError(err)
        })
        .finally(() => {
          pending.value = false;
        })
    }    
    
  })

  const insertDependency = async (dependency: Dependency) => {  
    pending.value = true
    return DependencyService.insertDependency(dependency)
      .then((response) => {         
        alert( response.data.message )
        router.push( { path: '/dependencies' } )
      })
      .catch((err) => {                
        console.log( err.response.data )
        errors.value = getError(err)
      })
      .finally(() => {
        pending.value = false
      })
  }

  const updateDependency = async (dependency: Dependency, dependencyId: string) => {
    pending.value= true
    return DependencyService.updateDependency(dependencyId, dependency)
      .then((response) => {
        alert( response.data.message )
        router.push( { path: '/dependencies' } )
      })
      .catch((err) => {                
        console.log( err.response.data )
        errors.value = getError(err)
      })
      .finally(() => {
        pending.value = false
      })
  }
  
  const submit = (dependency: Dependency, dependencyId?: string) => {  
    !dependencyId ? insertDependency(dependency)  : updateDependency(dependency, dependencyId)
  }

  return {
    dependency,
    errors,
    
    pending,
    router,

    submit    
  }

}
