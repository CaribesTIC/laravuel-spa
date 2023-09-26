import { computed, onMounted, reactive, ref } from 'vue'
import useHttp from "@/composables/useHttp";
import AttendeService from "@/modules/Meeting/services/Attende";
import type { Ref } from "vue";
import type { Attende } from "../../types/Meeting/Attende";

export default (meetingId: string) => {
  /*const saleTypeOptions = [
    { label: 'Mayor', value: 0 },
    { label: 'Detal', value: 1 }  
  ]
  const statusOptions = [
    { label: 'Inactivo', value: 0 },
    { label: 'Activo', value: 1 }  
  ]*/
  
  const attende: Attende = reactive({
    id: "", 
    meeting_id: "", 
    idcard: "", 
    fullname: "", 
    email: "", 
    phone: "", 
    observation: "", 
    entity_id: "", 
    dependency_id: "", 
    position_id: "", 
  })
  
  const attendes: Ref<Attende[]>  = ref([])
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
      attende.meeting_id = meetingId
      getAttendes()
    }
  )

  const panelToogleAttende = ()=> {
    if (!panelOpened.value) {
      createAttende()
    }
    panelOpened.value =! panelOpened.value    
  }
  
  const getAttendes = async () => {
    if (!meetingId)
      return null 
    pending.value = true
    AttendeService.getAttendes(meetingId)
      .then(res => attendes.value = res.data)
      .catch(err => errors.value = getError(err))
      .finally(() => pending.value = false) 
  }

  const insertAttende = async (payload: Attende) => {
    pending.value = true
    payload.meeting_id = meetingId
    return AttendeService.insertAttende(payload)
      .then((response) => {
        panelOpened.value = false
        getAttendes()    
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

  const updateAttende = async (payload: Attende, attendeId: string) => {
    pending.value = true
    payload.meeting_id = meetingId
    payload._method = 'PUT'        
    return AttendeService.updateAttende(payload, attendeId)
      .then((response) => {        
        panelOpened.value = false
        getAttendes()    
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
  
  const submitAttende = (payload: Attende) => {    
    !attende.id ? insertAttende (payload)  : updateAttende(payload, attende.id)
  }

  const createAttende = () => {
      attende.meeting_id = meetingId
      attende.id = ""
      attende.idcard = ""
      attende.fullname = ""
      attende.email = ""
      attende.phone = ""
      attende.observation = ""
      attende.entity_id = ""
      attende.dependency_id = ""
      attende.position_id = ""
  }

  const editAttende = (attendeEdit: Attende) => {
    // presentation.status = presentationEdit.sale_type ? 1 : 0
    attende.meeting_id = meetingId
    attende.id = attendeEdit.id
    attende.idcard = attendeEdit.idcard
    attende.fullname = attendeEdit.fullname
    attende.email = attendeEdit.email
    attende.phone = attendeEdit.phone
    attende.observation = attendeEdit.observation
    attende.entity_id = attendeEdit.entity_id
    attende.dependency_id = attendeEdit.dependency_id
    attende.position_id = attendeEdit.position_id
    panelOpened.value = true
  }
  
  const removeAttende = async (attendeId: string) => {
    if (attendeId === undefined)
      return
    else if (confirm(`¿Estás seguro que desea eliminar el registro ${attendeId}?`)) {  
      pending.value = true    
      return AttendeService.deleteAttende(attendeId)
        .then((response) => {        
          getAttendes()
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
    attendes,
    attende,
    /*saleTypeOptions,
    statusOptions,*/

    createAttende,
    editAttende,
    getAttendes,
    removeAttende, 
    submitAttende,
    panelToogleAttende
  }
}
