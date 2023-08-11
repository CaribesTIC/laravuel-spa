import { onMounted, reactive, ref, computed } from 'vue'
import useHttp from "@/composables/useHttp";
// import { ascBubble } from "@/utils/helpers";
import { useVuelidate } from "@vuelidate/core";
import { required, helpers } from "@vuelidate/validators";
//import * as CategoryService from "@/modules/Product/services/CategoryService";
//import * as MarkService from "@/modules/Product/services/MarkService";
//import * as CommonService from "@/modules/Product/services/CommonService";
import type {
  Meeting,
  //Category,
  //Mark,
  //MeasureUnit,
  //MeasureUnitType
} from "../../types/Meeting";

export default (meeting: Meeting) => {
  //const categories = ref<Category[]>()
  //const marks = ref<Mark[]>()
  //const measureUnitTypes = ref<MeasureUnitType[]>()
  //const measureUnits = ref<MeasureUnit[]>()

  const form = reactive({
    city_id: meeting.city_id, 
    app_date: meeting.app_date, 
    start_time: meeting.start_time, 
    place: meeting.place, 
    entity_id: meeting.entity_id, 
    dependence_id: meeting.dependence_id, 
    subject: meeting.subject, 
    reason: meeting.reason, 
    observation: meeting.observation, 
  })

  const {
    errors,
    pending,

    getError
  } = useHttp()

  onMounted(() => {
    /*pending.value = true
    CategoryService.getCategoriesSelect()
      .then((response) => {
        categories.value = response.data.map(function (c) {
          return {
            id: c.id,
            name: c.family
          }
        }).sort(ascBubble)
      })
      .catch((err) => {
        errors.value = getError(err)
      })
      .finally(() => {
        pending.value = false
      })

    pending.value = true
    MarkService.getMarksSelect()
      .then((response) => {
        marks.value = response.data.sort(ascBubble)
      })
      .catch((err) => {
        errors.value = getError(err)
      })
      .finally(() => {
        pending.value = false
      })

    pending.value = true
    CommonService.getMeasureUnitTypes()
      .then((response) => {
        measureUnitTypes.value = response.data.map(function (mut) {
          return {
            id: mut.id,
            name: mut.description
          }
        }).sort(ascBubble)
      })
      .catch((err) => {
        errors.value = getError(err)
      })
      .finally(() => {
        pending.value = false;
      })*/
  })

  const rules = computed(() => {
    return {
      city_id: {
        required: helpers.withMessage("Campo requerido", required),
      },
      app_date: {
        required: helpers.withMessage("Campo requerido", required),
      },
      start_time: {
        required: helpers.withMessage("Campo requerido", required),
      },
      place: {
        required: helpers.withMessage("Campo requerido", required),
      },
      entity_id: {
        required: helpers.withMessage("Campo requerido", required),
      },
      dependence_id: {
        required: helpers.withMessage("Campo requerido", required),
      },
      subject: {
        required: helpers.withMessage("Campo requerido", required),
      },
      reason: {
        required: helpers.withMessage("Campo requerido", required),
      },
      observation: {
        required: helpers.withMessage("Campo requerido", required),
      },
    }
  })

  const v$ = useVuelidate(rules, form);

  return {
//    categories,
//    marks,
//    measureUnitTypes,
//    measureUnits,
    form,
    errors,
    pending,

    v$      
  }
}
