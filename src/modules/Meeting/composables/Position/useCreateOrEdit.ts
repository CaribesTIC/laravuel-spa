import { onMounted, reactive, ref } from 'vue'
import { useRouter } from 'vue-router'
import useHttp from "@/composables/useHttp"; //foreign_table_name
import PositionService from "../../services/Position"

import type { Position } from "../../types/Position"


export default (positionId?: string) => {
  const router = useRouter();
  
  const position: Position = reactive({
    name: "", 
  })

  
  
  const {  
    errors,
    pending,

    getError
  } = useHttp()
  
  onMounted(async () => {
    if (positionId) {
      pending.value = true
      PositionService.getPosition(positionId)
        .then((response) => { 
          position.name = response.data.data.name 
        })
        .catch((err) => {        
          errors.value = getError(err)
        })
        .finally(() => {
          pending.value = false;
        })
    }    
    
  })

  const insertPosition = async (position: Position) => {  
    pending.value = true
    return PositionService.insertPosition(position)
      .then((response) => {         
        alert( response.data.message )
        router.push( { path: '/positions' } )
      })
      .catch((err) => {                
        console.log( err.response.data )
        errors.value = getError(err)
      })
      .finally(() => {
        pending.value = false
      })
  }

  const updatePosition = async (position: Position, positionId: string) => {
    pending.value= true
    return PositionService.updatePosition(positionId, position)
      .then((response) => {
        alert( response.data.message )
        router.push( { path: '/positions' } )
      })
      .catch((err) => {                
        console.log( err.response.data )
        errors.value = getError(err)
      })
      .finally(() => {
        pending.value = false
      })
  }
  
  const submit = (position: Position, positionId?: string) => {  
    !positionId ? insertPosition(position)  : updatePosition(position, positionId)
  }

  return {
    position,
    errors,
    
    pending,
    router,

    submit    
  }

}
