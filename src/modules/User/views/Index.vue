<script setup lang="ts">
import { onMounted, reactive } from "vue";
import { onBeforeRouteUpdate, useRouter, useRoute } from 'vue-router' 
import { useSearch } from "@/composables/useTableGrid";
import { useHttp } from "@/composables/useHttp";
import AppPaginationB from "@/components/AppPaginationB.vue";
import AppPageHeader from "@/components/AppPageHeader.vue"
import AppBtn from "@/components/AppBtn.vue"
import UserService from "../services";
import type User from "../types/User"

const router = useRouter();
const route = useRoute();

const {  
  errors,  
  getError     
} = useHttp()

const data = reactive({
  rows: [] as User[],
  links: [],
  search: "",
  sort: "",
  direction: ""
})

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
  setSort, //setFilter
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
    await getUsers(new URLSearchParams(to.query).toString());        
  }
})

onMounted(() => {
  getUsers(new URLSearchParams(route.query).toString());    
})
</script>

<template>
  <div>
    <AppPageHeader> Usuarios </AppPageHeader>

    <div class="flex space-x-2">
      <AppLink class="btn btn-primary" to="/users/create">
        <span>Crear</span>
      </AppLink>
    </div>
    
    <div class="overflow-hidden panel mt-6">      
      <div class="mb-6 flex justify-between items-center">
        <div class="flex items-center">
          <div class="flex w-full bg-white shadow rounded">
            <input
              class=""
              type="text"
              v-model="data.search"
              @input="setSearch"
              placeholder="Filtrar…"
            />
          </div>
        </div>
      </div>      
      <div class="table-data__wrapper">
        <table class="table-data">
          <thead>
            <tr class="">
              <th class="">
                <AppLink to="#" @click.prevent="setSort('name')">Nombre</AppLink>
              </th>
              <th class="">
                <AppLink to="#" @click.prevent="setSort('email')">Correo</AppLink>
              </th>
              <th class="">
                <AppLink to="#" @click.prevent="setSort('role')">Role</AppLink>
              </th>
              <th class="">Acción</th>
            </tr>
          </thead>
          <tbody>
            <tr v-for="row in data.rows" :key="row.id" class="">
              <td class="">
                <AppLink
                  class="text-indigo-600 hover:text-indigo-800 underline"
                  :to="{ name: 'userEdit', params: { id: row.id }}"                  
                >
                  {{ row.name }}
                </AppLink>
              </td>
              <td class="">
                {{ row.email }}
              </td>
              <td class="">
                {{ row.role_id }}
              </td>
              <td class="">
                <div class="flex items-center space-x-1">                
                  <AppBtn
                    class="btn btn-primary btn-xs"                    
                    @click="router.push({ path: '/users/edit/'+row.id })"
                  >
                    Editar
                  </AppBtn>
                  <AppBtn
                    @click="deleteRow(row.id)"                    
                    class="btn btn-danger btn-xs"                    
                  >
                    Eliminar
                  </AppBtn>
                </div>
              </td>
            </tr>
            <tr v-if="data.rows.length === 0">
              <td class="" colspan="4">Usuarios no encontrados.</td>
            </tr>
          </tbody>
        </table>
      </div>
      <span v-if="errors" class="text-red-500">{{ errors }}</span>
      <AppPaginationB v-if="data.links" :links="data.links" />      
    </div>
  </div>
</template>
