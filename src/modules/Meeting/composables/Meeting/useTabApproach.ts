import { computed, onMounted, reactive, ref } from 'vue'
import useHttp from "@/composables/useHttp";
import ApproachService from "@/modules/Meeting/services/Approach";
import type { Ref } from "vue";
import type { Approach } from "../../types/Meeting/Approach";

export default (meetingId: string) => {
  /*const saleTypeOptions = [
    { label: 'Mayor', value: 0 },
    { label: 'Detal', value: 1 }  
  ]
  const statusOptions = [
    { label: 'Inactivo', value: 0 },
    { label: 'Activo', value: 1 }  
  ]*/
  
  const approach: Approach = reactive({
    id: "", 
    meeting_id: "", 
    approach: "", 
    speaker: "", 
    observation: "", 
  })
  
  const approaches: Ref<Approach[]>  = ref([])
  const panelOpened = ref(false)
  const closeButtonOpened = computed(()=> panelOpened.value ? "Cerrar" : "Abrir")
  const closeClassOpened = computed(()=> panelOpened.value ? "btn-default" : "btn-primary")

  const {  
    errors,
    pending,

    getError
  } = useHttp()

  onMounted(    
    () => {
      approach.meeting_id = meetingId
      getApproaches()
    }
  )

  const panelToogleApproach = ()=> {
    if (!panelOpened.value) {
      createApproach()
    }
    panelOpened.value =! panelOpened.value    
  }
  
  const getApproaches = async () => {
    if (!meetingId)
      return null 
    pending.value = true
    ApproachService.getApproaches(meetingId)
      .then(res => approaches.value = res.data)
      .catch(err => errors.value = getError(err))
      .finally(() => pending.value = false) 
  }

  const insertApproach = async (payload: Approach) => {
    pending.value = true
    payload.meeting_id = meetingId
    return ApproachService.insertApproach(payload)
      .then((response) => {
        panelOpened.value = false
        getApproaches()    
        alert( response.data.message )
              
      })
      .catch((err) => {                
        console.log( err.response.data )
        errors.value = getError(err)
      })
      .finally(() => {
        pending.value = false
      })
  }

  const updateApproach = async (payload: Approach, approachId: string) => {
    pending.value = true
    payload.meeting_id = meetingId
    payload._method = 'PUT'        
    return ApproachService.updateApproach(payload, approachId)
      .then((response) => {        
        panelOpened.value = false
        getApproaches()    
        alert( response.data.message )     
      })
      .catch((err) => {                
        console.log( err.response.data )
        errors.value = getError(err)
      })
      .finally(() => {
        pending.value = false
      })
  }
  
  const submitApproach = (payload: Approach) => {    
    !approach.id ? insertApproach (payload)  : updateApproach(payload, approach.id)
  }

  const createApproach = () => {
      approach.meeting_id = meetingId
      approach.id = ""
      approach.approach = ""
      approach.speaker = ""
      approach.observation = ""
  }

  const editApproach = (approachEdit: Approach) => {
    // presentation.status = presentationEdit.sale_type ? 1 : 0
    approach.meeting_id = meetingId
    approach.id = approachEdit.id
    approach.approach = approachEdit.approach
    approach.speaker = approachEdit.speaker
    approach.observation = approachEdit.observation
    panelOpened.value = true
  }
  
  const removeApproach = async (approachId: string) => {
    if (approachId === undefined)
      return
    else if (confirm(`¿Estás seguro que desea eliminar el registro ${approachId}?`)) {  
      pending.value = true    
      return ApproachService.deleteApproach(approachId)
        .then((response) => {        
          getApproaches()
        })
        .catch((err) => {                
          console.log( err.response.data )
          errors.value = getError(err)
        })
        .finally(() => {
          pending.value = false
        })
    }
  }

  return {
    panelOpened,
    closeButtonOpened,
    closeClassOpened,
    approaches,
    approach,
    /*saleTypeOptions,
    statusOptions,*/

    createApproach,
    editApproach,
    getApproaches,
    removeApproach, 
    submitApproach,
    panelToogleApproach
  }
}
