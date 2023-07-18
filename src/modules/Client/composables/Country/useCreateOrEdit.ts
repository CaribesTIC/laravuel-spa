import { onMounted, reactive, ref } from 'vue'
import { useRouter } from 'vue-router'
import useHttp from "@/composables/useHttp";
import CountryService from "../../services/Country"

import type { Country } from "../types/Country"


export default (countryId?: string) => {
  const router = useRouter();
  
  const country: Country = reactive({
    name: "", 
  })

  const roles = ref<Role[]>([])
  
  
  const {  
    errors,
    pending,

    getError
  } = useHttp()
  
  onMounted(async () => {
    if (countryId) {
      pending.value = true
      CountryService.getCountry(countryId)
        .then((response) => { 
          country.name = response.data.data.name 
        })
        .catch((err) => {        
          errors.value = getError(err)
        })
        .finally(() => {
          pending.value = false;
        })
    }
    pending.value = true
    
  })

  const insertCountry = async (country: Country) => {  
    pending.value = true
    return CountryService.insertCountry(country)
      .then((response) => {         
        alert( response.data.message )
        router.push( { path: '/countries' } )
      })
      .catch((err) => {                
        console.log( err.response.data )
        errors.value = getError(err)
      })
      .finally(() => {
        pending.value = false
      })
  }

  const updateCountry = async (country: Country, countryId: string) => {
    pending.value= true
    return CountryService.updateCountry(countryId, country)
      .then((response) => {
        alert( response.data.message )
        router.push( { path: '/countries' } )
      })
      .catch((err) => {                
        console.log( err.response.data )
        errors.value = getError(err)
      })
      .finally(() => {
        pending.value = false
      })
  }
  
  const submit = (country: Country, countryId?: string) => {  
    !countryId ? insertCountry(country)  : updateCountry(country, countryId)
  }

  return {
    country,
    errors,
    
    pending,
    router,

    submit    
  }

}
