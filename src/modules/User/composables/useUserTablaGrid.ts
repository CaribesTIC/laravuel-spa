import { onMounted } from "vue";
import { onBeforeRouteUpdate } from 'vue-router'
import UserService from "../services";
export function useUserTablaGrid() {

const getUsers = (routeQuery: string) => {  
  return UserService.getUsers(routeQuery)
    .then((response) => {
      errors.value = null
      data.rows = response.data.rows.data
      data.links = response.data.rows.links
      data.search = response.data.search
      data.sort = response.data.sort
      data.direction = response.data.direction      
    })
    .catch((error) => {
      console.log(error)
    })    
}

onBeforeRouteUpdate(async (to, from) => {      
  if (to.query !== from.query) {        
    await getUsers(new URLSearchParams(to.query).toString());        
  }
})

onMounted(() => {
  getUsers(new URLSearchParams(route.query).toString());    
})


  return {

  };

}

