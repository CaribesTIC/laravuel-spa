import { computed, reactive, ref, watch } from 'vue'
import { useVuelidate } from "@vuelidate/core";
import { required, helpers, minValue } from "@vuelidate/validators";
import type { Attende } from "../../types/Meeting/Attende";

export default (attende: Attende) => {  
  const form = reactive<Attende>({
    id: attende.id, 
    meeting_id: attende.meeting_id, 
    idcard: attende.idcard, 
    fullname: attende.fullname, 
    entity_id: attende.entity_id, 
    dependence_id: attende.dependence_id, 
    position_id: attende.position_id, 
    email: attende.email, 
    phone: attende.phone, 
    observation: attende.observation, 
  })

  const isOpenModal = ref(false)

  const rules = computed(() => {
    return {
      meeting_id: { required: helpers.withMessage("Campo requerido", required) },
      idcard: { required: helpers.withMessage("Campo requerido", required) },
      fullname: { required: helpers.withMessage("Campo requerido", required) },
      entity_id: { required: helpers.withMessage("Campo requerido", required) },
      dependence_id: { required: helpers.withMessage("Campo requerido", required) },
      position_id: { required: helpers.withMessage("Campo requerido", required) },
      email: { required: helpers.withMessage("Campo requerido", required) },
      phone: { required: helpers.withMessage("Campo requerido", required) },
      observation: { required: helpers.withMessage("Campo requerido", required) },
    };
  });

  const v$ = useVuelidate(rules, form as any);
    
  watch(attende, (newAttende) => {
    form.meeting_id = newAttende.meeting_id
    form.idcard = newAttende.idcard
    form.fullname = newAttende.fullname
    form.entity_id = newAttende.entity_id
    form.dependence_id = newAttende.dependence_id
    form.position_id = newAttende.position_id
    form.email = newAttende.email
    form.phone = newAttende.phone
    form.observation = newAttende.observation
  })

  return {
    form,
    
    v$ 
  }
}
