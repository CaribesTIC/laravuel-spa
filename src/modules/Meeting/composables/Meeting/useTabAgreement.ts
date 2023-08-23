import { computed, onMounted, reactive, ref } from 'vue'
import useHttp from "@/composables/useHttp";
import AgreementService from "@/modules/Meeting/services/Agreement";
import type { Ref } from "vue";
import type { Agreement } from "../../types/Agreement";

export default (meetingId: string) => {
  /*const saleTypeOptions = [
    { label: 'Mayor', value: 0 },
    { label: 'Detal', value: 1 }  
  ]
  const statusOptions = [
    { label: 'Inactivo', value: 0 },
    { label: 'Activo', value: 1 }  
  ]*/
  
  const agreement: Agreement = reactive({
    id: "", 
    meeting_id: "", 
    agreement: "", 
    responsible: "", 
    observation: "", 
  })
  
  const agreements: Ref<Agreement[]>  = ref([])
  const panelOpened = ref(false)
  const closeButtonOpened = computed(()=> panelOpened.value ? "Cerrar" : "Abrir")
  const closeClassOpened = computed(()=> panelOpened.value ? "btn-default" : "btn-primary")

  const {  
    errors,
    pending,

    getError
  } = useHttp()

  onMounted(() => getAgreements())
  
  const getAgreements = async () => {
    if (!meetingId)
      return null 
    pending.value = true
    AgreementService.getAgreements(meetingId)
      .then(res => agreements.value = res.data)
      .catch(err => errors.value = getError(err))
      .finally(() => pending.value = false) 
  }

  const insertAgreement = async (payload: Agreement) => {
    pending.value = true
    payload.product_id = productId
    return AgreementService.insertAgreement(payload)
      .then((response) => {
        panelOpened.value = false
        getagreements()    
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

  const updateAgreement = async (payload: Agreement, agreementId: string) => {
    pending.value = true
    payload.product_id = productId
    payload._method = 'PUT'        
    return AgreementService.updateAgreement(payload, agreementId)
      .then((response) => {        
        panelOpened.value = false
        getAgreements()    
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
  
  const submit = (payload: Agreement) => {    
    !agreement.id ? insertAgreement (payload)  : updateAgreement(payload, agreement.id)
  }

  const edit = (agreementEdit: Agreement) => {
    // presentation.status = presentationEdit.sale_type ? 1 : 0
    agreement.id = agreementEdit.id
    agreement.meeting_id = agreementEdit.meeting_id
    agreement.agreement = agreementEdit.agreement
    agreement.responsible = agreementEdit.responsible
    agreement.observation = agreementEdit.observation
    panelOpened.value = true
  }
  
  const remove = async (agreementId: string) => {
    if (agreementId === undefined)
      return
    else if (confirm(`¿Estás seguro que desea eliminar el registro ${agreementId}?`)) {  
      pending.value = true    
      return AgreementService.deleteAgreement(agreementId)
        .then((response) => {        
          getAgreements()
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
    agreements,
    agreement,
    /*saleTypeOptions,
    statusOptions,*/

    edit,
    getAgreements,
    remove, 
    submit
  }
}
