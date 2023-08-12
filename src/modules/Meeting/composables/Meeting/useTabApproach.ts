import { computed, onMounted, reactive, ref } from 'vue'
import useHttp from "@/composables/useHttp";
import ApproachService from "@/modules/Meeting/services/ApproachService";
import type { Ref } from "vue";
import type { Approach } from "../../types/Approach";

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
  
  const approaches: Ref<Approach[]>  = ref([])
  const panelOpened = ref(false)
  const closeButtonOpened = computed(()=> panelOpened.value ? "Cerrar" : "Abrir")
  const closeClassOpened = computed(()=> panelOpened.value ? "btn-default" : "btn-primary")

  const {  
    errors,
    pending,

    getError
  } = useHttp()

  onMounted(() => getApproaches())
  
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
    payload.product_id = productId
    return ApproachService.insertApproach(payload)
      .then((response) => {
        panelOpened.value = false
        getapproaches()    
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
    payload.product_id = productId
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
  
  const submit = (payload: Approach) => {    
    !approach.id ? insertApproach (payload)  : updateApproach(payload, approach.id)
  }

  const edit = (approachEdit: Approach) => {
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
  
  const remove = async (approachId: string) => {
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

    edit,
    getApproaches,
    remove, 
    submit
  }
}
