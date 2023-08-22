import { computed, onMounted, reactive, ref } from 'vue'
import useHttp from "@/composables/useHttp";
import AttendeService from "@/modules/Meeting/services/Attende";
import type { Ref } from "vue";
import type { Attende } from "../../types/Attende";

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
    id: '',
    sale_type: 0,
    int_cod: "",
    bar_cod: "",
    packing_deployed: "",
    packing_json: "",
    stock_min: 0,
    stock_max: 0,
    price: "0.0",
    status: 0
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

  onMounted(() => getAttendes())
  
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
    payload.product_id = productId
    return AttendeService.insertAttende(payload)
      .then((response) => {
        panelOpened.value = false
        getattendes()    
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
    payload.product_id = productId
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
  
  const submit = (payload: Attende) => {    
    !attende.id ? insertAttende (payload)  : updateAttende(payload, attende.id)
  }

  const edit = (attendeEdit: Attende) => {
    /*presentation.id = presentationEdit.id
    presentation.sale_type = presentationEdit.sale_type ? 1 : 0
    presentation.int_cod = presentationEdit.int_cod
    presentation.bar_cod = presentationEdit.bar_cod
    presentation.packing_deployed = presentationEdit.packing_deployed
    presentation.packing_json = presentationEdit.packing
    presentation.stock_min = presentationEdit.stock_min
    presentation.stock_max = presentationEdit.stock_max
    presentation.price = presentationEdit.price
    presentation.status = presentationEdit.status ? 1 : 0*/
    panelOpened.value = true
  }
  
  const remove = async (attendeId: string) => {
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

    edit,
    getAttendes,
    remove, 
    submit
  }
}
