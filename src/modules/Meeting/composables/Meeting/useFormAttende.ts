import { onMounted, computed, reactive, ref, watch } from 'vue'
import { useVuelidate } from "@vuelidate/core";
import { required, helpers, minValue } from "@vuelidate/validators";
import useHttp from "@/composables/useHttp";
import EntityService from "../../services/Entity";
import DependencyService from "../../services/Dependency";
import PositionService from "../../services/Position";
import type { Attende } from "../../types/Meeting/Attende";

export default (attende: Attende) => {  
  const form = reactive<Attende>({
    id: attende.id, 
    meeting_id: attende.meeting_id, 
    idcard: attende.idcard, 
    fullname: attende.fullname, 
    email: attende.email, 
    phone: attende.phone, 
    observation: attende.observation, 
    entity_id: attende.entity_id, 
    dependency_id: attende.dependency_id, 
    position_id: attende.position_id, 
  })

  const {
    errors,
    pending,

    getError
  } = useHttp()

  const isOpenModal = ref(false)
  const entities = ref([])
  const dependencies = ref([])
  const positions = ref([])
  
  const rules = computed(() => {
    return {
      meeting_id: { required: helpers.withMessage("Campo requerido", required) },
      idcard: { required: helpers.withMessage("Campo requerido", required) },
      fullname: { required: helpers.withMessage("Campo requerido", required) },
      email: { required: helpers.withMessage("Campo requerido", required) },
      phone: { required: helpers.withMessage("Campo requerido", required) },
      observation: { required: helpers.withMessage("Campo requerido", required) },
      entity_id: { required: helpers.withMessage("Campo requerido", required) },
      dependency_id: { required: helpers.withMessage("Campo requerido", required) },
      position_id: { required: helpers.withMessage("Campo requerido", required) },
    };
  });

  const v$ = useVuelidate(rules, form as any);
    
  watch(attende, (newAttende) => {
    form.meeting_id = newAttende.meeting_id
    form.idcard = newAttende.idcard
    form.fullname = newAttende.fullname
    form.email = newAttende.email
    form.phone = newAttende.phone
    form.observation = newAttende.observation
    form.entity_id = newAttende.entity_id
    form.dependency_id = newAttende.dependency_id
    form.position_id = newAttende.position_id
  })

  onMounted(() => {
    
      pending.value = true
      EntityService.getHelpEntities()
        .then((response) => {
          entities.value = response.data
         })
         .catch((err) => {
           errors.value = getError(err)
         })
         .finally(() => {
           pending.value = false
         })
      pending.value = true
      DependencyService.getHelpDependencies()
        .then((response) => {
          dependencies.value = response.data
         })
         .catch((err) => {
           errors.value = getError(err)
         })
         .finally(() => {
           pending.value = false
         })
      pending.value = true
      PositionService.getHelpPositions()
        .then((response) => {
          positions.value = response.data
         })
         .catch((err) => {
           errors.value = getError(err)
         })
         .finally(() => {
           pending.value = false
         })
    })

  return {
    entities,
    dependencies,
    positions,
    form,
    
    v$ 
  }
}
