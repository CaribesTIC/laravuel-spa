import { reactive, onMounted } from "vue"
import { onBeforeRouteUpdate } from "vue-router"
import useTableGrid from "@/composables/useTableGrid"
import useHttp from "@/composables/useHttp"
import UserService from "../services"

type Params =  string | string[][] | Record<string, string> | URLSearchParams | undefined

export default () => {
  const data = reactive({
    rows: [],
    links: [],
    search: "",
    sort: "",
    direction: ""
  })

  const {  
    errors,

    getError     
  } = useHttp()

  const {
    route,
    router,

    setSearch,
    setSort, 
  } = useTableGrid(data, "/users")

  const getUsers = (routeQuery: string) => {  
    return UserService.getUsers(routeQuery)
      .then((response) => {
        errors.value = {}
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
          errors.value = {}
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
      await getUsers(
        new URLSearchParams(to.query as Params).toString()
      )
    }
  })

  onMounted(() => {
    getUsers(
      new URLSearchParams(route.query as Params).toString()
    )
  })

  return {
    errors,
    data,
    router,

    deleteRow,
    setSearch,
    setSort
  }
}

