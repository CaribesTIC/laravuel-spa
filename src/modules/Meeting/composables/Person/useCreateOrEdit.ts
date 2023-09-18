import { onMounted, reactive, ref } from 'vue'
import { useRouter } from 'vue-router'
import useHttp from "@/composables/useHttp"; //foreign_table_name
import PersonService from "../../services/Person"
import CountryService from  "../../services/Country"
import type { Person } from "../../types/Person"
import type { Country } from  "../../types/Country"

export default (personId?: string) => {
  const router = useRouter();
  
  const person: Person = reactive({
    email: "", 
    type: "", 
    identification_card: "", 
    business_name: "", 
    phone: "", 
    country_id: "", 
    domicile: "", 
  })

  const countries = ref<Country[]>()
  
  const {  
    errors,
    pending,

    getError
  } = useHttp()
  
  onMounted(async () => {
    if (personId) {
      pending.value = true
      PersonService.getPerson(personId)
        .then((response) => { 
          person.email = response.data.data.email 
          person.type = response.data.data.type 
          person.identification_card = response.data.data.identification_card 
          person.business_name = response.data.data.business_name 
          person.phone = response.data.data.phone 
          person.country_id = response.data.data.country_id 
          person.domicile = response.data.data.domicile 
        })
        .catch((err) => {        
          errors.value = getError(err)
        })
        .finally(() => {
          pending.value = false;
        })
    }    
    
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
  })

  const insertPerson = async (person: Person) => {  
    pending.value = true
    return PersonService.insertPerson(person)
      .then((response) => {         
        alert( response.data.message )
        router.push( { path: '/people' } )
      })
      .catch((err) => {                
        console.log( err.response.data )
        errors.value = getError(err)
      })
      .finally(() => {
        pending.value = false
      })
  }

  const updatePerson = async (person: Person, personId: string) => {
    pending.value= true
    return PersonService.updatePerson(personId, person)
      .then((response) => {
        alert( response.data.message )
        router.push( { path: '/people' } )
      })
      .catch((err) => {                
        console.log( err.response.data )
        errors.value = getError(err)
      })
      .finally(() => {
        pending.value = false
      })
  }
  
  const submit = (person: Person, personId?: string) => {  
    !personId ? insertPerson(person)  : updatePerson(person, personId)
  }

  return {
    person,
    errors,
    countries,
    pending,
    router,

    submit    
  }

}
