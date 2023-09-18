import { computed, reactive, ref, watch } from 'vue'
import { useVuelidate } from "@vuelidate/core";
import { required, helpers, minValue } from "@vuelidate/validators";
import type { Agreement } from "../../types/Meeting/Agreement";

export default (agreement: Agreement) => {  
  const form = reactive<Agreement>({
    id: agreement.id, 
    meeting_id: agreement.meeting_id, 
    agreement: agreement.agreement, 
    responsible: agreement.responsible, 
    observation: agreement.observation, 
  })

  const isOpenModal = ref(false)

  const rules = computed(() => {
    return {
      meeting_id: { required: helpers.withMessage("Campo requerido", required) },
      agreement: { required: helpers.withMessage("Campo requerido", required) },
      responsible: { required: helpers.withMessage("Campo requerido", required) },
      observation: { required: helpers.withMessage("Campo requerido", required) },
    };
  });

  const v$ = useVuelidate(rules, form as any);
    
  watch(agreement, (newAgreement) => {
    form.meeting_id = newAgreement.meeting_id
    form.agreement = newAgreement.agreement
    form.responsible = newAgreement.responsible
    form.observation = newAgreement.observation
  })

  return {
    form,
    
    v$ 
  }
}
