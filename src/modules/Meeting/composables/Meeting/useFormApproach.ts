import { computed, reactive, ref, watch } from 'vue'
import { useVuelidate } from "@vuelidate/core";
import { required, helpers, minValue } from "@vuelidate/validators";
import type { Approach } from "../../types/Approach";

export default (approach: Approach) => {  
  const form = reactive<Approach>({
    id: approach.id, 
    meeting_id: approach.meeting_id, 
    approach: approach.approach, 
    speaker: approach.speaker, 
    observation: approach.observation, 
  })

  const isOpenModal = ref(false)

  const rules = computed(() => {
    return {
      meeting_id: { required: helpers.withMessage("Campo requerido", required) },
      approach: { required: helpers.withMessage("Campo requerido", required) },
      speaker: { required: helpers.withMessage("Campo requerido", required) },
      observation: { required: helpers.withMessage("Campo requerido", required) },
    };
  });

  const v$ = useVuelidate(rules, form);
    
  watch(approach, (newApproach) => {
    form.meeting_id = newApproach.meeting_id
    form.approach = newApproach.approach
    form.speaker = newApproach.speaker
    form.observation = newApproach.observation
  })

  return {
    form,
    
    v$ 
  }
}
