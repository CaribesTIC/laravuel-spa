import { onMounted, reactive, ref } from 'vue'
import { useRouter } from 'vue-router'
import useHttp from "@/composables/useHttp";
import ClientService from "../../services/Client"
import CountryService from  "../../services/Country"
import type { Client } from "../types/Client"
import type { Country } from  "../../services/Country"

export default (clientId?: string) => {
  const router = useRouter();
  
  const client: Client = reactive({
    email: "", 
    type: "", 
    identification_card: "", 
    business_name: "", 
    phone: "", 
    country_id: "", 
    domicile: "", 
  })

  const roles = ref<Role[]>([])
  const countries = ref<Country[]>()
  
  const {  
    errors,
    pending,

    getError
  } = useHttp()
  
  onMounted(async () => {
    if (clientId) {
      pending.value = true
      ClientService.getClient(clientId)
        .then((response) => { 
          client.email = response.data.data.email 
          client.type = response.data.data.type 
          client.identification_card = response.data.data.identification_card 
          client.business_name = response.data.data.business_name 
          client.phone = response.data.data.phone 
          client.country_id = response.data.data.country_id 
          client.domicile = response.data.data.domicile 
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

  const insertClient = async (client: Client) => {  
    pending.value = true
    return ClientService.insertClient(client)
      .then((response) => {         
        alert( response.data.message )
        router.push( { path: '/clients' } )
      })
      .catch((err) => {                
        console.log( err.response.data )
        errors.value = getError(err)
      })
      .finally(() => {
        pending.value = false
      })
  }

  const updateClient = async (client: Client, clientId: string) => {
    pending.value= true
    return ClientService.updateClient(clientId, client)
      .then((response) => {
        alert( response.data.message )
        router.push( { path: '/clients' } )
      })
      .catch((err) => {                
        console.log( err.response.data )
        errors.value = getError(err)
      })
      .finally(() => {
        pending.value = false
      })
  }
  
  const submit = (client: Client, clientId?: string) => {  
    !clientId ? insertClient(client)  : updateClient(client, clientId)
  }

  return {
    client,
    errors,
    countries,
    pending,
    router,

    submit    
  }

}
