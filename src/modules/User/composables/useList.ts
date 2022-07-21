import { reactive, onMounted } from "vue";
import { onBeforeRouteUpdate, useRouter, useRoute } from 'vue-router'
import { useSearch } from "@/composables/useTableGrid";
import { useHttp } from "@/composables/useHttp";
import UserService from "../services";
import type User from "../types/User"

export default () => {

  const data = reactive({
    rows: [] as User[],
    links: [],
    search: "",
    sort: "",
    direction: ""
  })

  const {  
    errors,
    getError     
  } = useHttp()

  const router = useRouter();
  const route = useRoute();

  const load = (newParams: object) => {
    const params = {
      search: data.search || "",
      sort: data.sort || "",
      direction: data.direction || "",
      ...newParams,
    }

    router.push({
      path:'/users',
      query: {
        ...route.query,
        ...params
      }
    })
  }

  const { 
    setSearch,
    setSort, 
  } = useSearch(data, load)

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

  const deleteRow = (rowId?: string) => {
    if (rowId === undefined)
      return
    else if (confirm(`¿Estás seguro que desea eliminar el registro ${rowId}?`)) {    
      return UserService.deleteUser(rowId)
        .then((response) => {
          errors.value = null
          router.push( { path: '/users' } )        
        })
        .catch((err) => {                
          console.log( err.response.data )
          errors.value = getError(err)
        })
    }
  }

  onBeforeRouteUpdate(async (to, from) => {      
    if (to.query !== from.query) {        
      await getUsers(new URLSearchParams(to.query).toString())
    }
  })

  onMounted(() => {
    getUsers(new URLSearchParams(route.query).toString())
  })

  return {
    errors,
    data,
    deleteRow,
    router,  
    setSearch,
    setSort
  }
}

