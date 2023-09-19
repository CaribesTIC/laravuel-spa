import { onMounted, reactive, ref } from 'vue'
import { useRouter } from 'vue-router'
import useHttp from "@/composables/useHttp"; //foreign_table_name
import EntityService from "../../services/Entity"

import type { Entity } from "../../types/Entity"


export default (entityId?: string) => {
  const router = useRouter();
  
  const entity: Entity = reactive({
    name: "", 
  })

  
  
  const {  
    errors,
    pending,

    getError
  } = useHttp()
  
  onMounted(async () => {
    if (entityId) {
      pending.value = true
      EntityService.getEntity(entityId)
        .then((response) => { 
          entity.name = response.data.data.name 
        })
        .catch((err) => {        
          errors.value = getError(err)
        })
        .finally(() => {
          pending.value = false;
        })
    }    
    
  })

  const insertEntity = async (entity: Entity) => {  
    pending.value = true
    return EntityService.insertEntity(entity)
      .then((response) => {         
        alert( response.data.message )
        router.push( { path: '/entities' } )
      })
      .catch((err) => {                
        console.log( err.response.data )
        errors.value = getError(err)
      })
      .finally(() => {
        pending.value = false
      })
  }

  const updateEntity = async (entity: Entity, entityId: string) => {
    pending.value= true
    return EntityService.updateEntity(entityId, entity)
      .then((response) => {
        alert( response.data.message )
        router.push( { path: '/entities' } )
      })
      .catch((err) => {                
        console.log( err.response.data )
        errors.value = getError(err)
      })
      .finally(() => {
        pending.value = false
      })
  }
  
  const submit = (entity: Entity, entityId?: string) => {  
    !entityId ? insertEntity(entity)  : updateEntity(entity, entityId)
  }

  return {
    entity,
    errors,
    
    pending,
    router,

    submit    
  }

}
