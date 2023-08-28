import { onMounted, reactive, ref, computed } from 'vue'
import useHttp from "@/composables/useHttp";
import { useVuelidate } from "@vuelidate/core";
import { required, helpers } from "@vuelidate/validators";
import MeetingService from "../../services/Meeting"
import CountryService from  "../../services/Country"
import type { Meeting } from "../../types/Meeting"
import type { Country } from  "../../types/Country"
// import { ascBubble } from "@/utils/helpers";

export default (meeting: Meeting) => {
  const countries =  ref<Country[]>()

  const form = reactive({
    country_id: meeting.country_id, 
    place: meeting.place, 
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









    
      pending.value = true
      CountryService.getHelpCountries()
        .then((response) => {
          countries.value = response.data
         })
         .catch((err) => {
           errors.value = getError(err)
         })
         .finally(() => {
           pending.value = false
         })











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
      country_id: {
        required: helpers.withMessage("Campo requerido", required),
      },
      place: {
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
    countries,
    form,
    errors,
    pending,

    v$      
  }
}
