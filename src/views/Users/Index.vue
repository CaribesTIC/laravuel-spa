<script setup lang="ts">
import { onMounted, reactive } from "vue";
import { onBeforeRouteUpdate, useRouter, useRoute } from 'vue-router' 
import Pagination from "@/components/Pagination.vue";
import PageHeader from "@/components/PageHeader.vue"
import UserService from "@/services/UserService";
import { useSearch } from "@/composables/useTableGrid";

const router = useRouter();
const route = useRoute();

const data = reactive({
  rows: [],
  links: [],
  search: "",
  sort: "",
  direction: ""
});

const load = (newParams: object) => {
  const params = {
    search: data.search || "",
    sort: data.sort || "",
    direction: data.direction || "",
    ...newParams,
  };

  router.push({
    path:'/users',
    query: {
      ...route.query,
      ...params
    }
  });
};

const { 
  setSearch,
  setSort,
  setFilter
} = useSearch(data, load)

const getUsers = (routeQuery: string) => {
  return UserService.getUsers(routeQuery)
    .then((response) => {
      data.rows = response.data.rows.data;
      data.links = response.data.rows.links;
      data.search = response.data.search;
      data.sort = response.data.sort;
      data.direction = response.data.direction;
    })
    .catch((error) => {
      console.log(error);
    });
};
    
onBeforeRouteUpdate(async (to, from) => {      
  if (to.query !== from.query) {        
    await getUsers(new URLSearchParams(to.query).toString());        
  }
});

onMounted(() => {
  getUsers(new URLSearchParams(route.query).toString());    
});

const deleteRow = (rowId: number) => {
  if (confirm(`¿Estás seguro de que quieres eliminar el registro ${rowId}?`)) {
    // Inertia.delete(route("users.destroy", rowId));
  }
};
</script>

<template>
  <div>
    <PageHeader> Usuarios </PageHeader>

    <div class="flex space-x-2">
      <RouterLink class="btn btn-primary" to="/users/create">
        <span>Crear</span>
      </RouterLink>
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
                <a href="#" @click.prevent="setSort('name')">Nombre</a>
              </th>
              <th class="">
                <a href="#" @click.prevent="setSort('email')">Correo</a>
              </th>
              <th class="">
                <a href="#" @click.prevent="setSort('role')">Role</a>
              </th>
              <th class="">Acción</th>
            </tr>
          </thead>
          <tbody>
            <tr v-for="user in data.rows" :key="user.id" class="">
              <td class="">
                <RouterLink
                  class="text-indigo-600 hover:text-indigo-800 underline"
                  :to="{ name: 'userEdit', params: { id: user.id }}"                  
                >
                  {{ user.name }}
                </RouterLink>
              </td>
              <td class="">
                {{ user.email }}
              </td>
              <td class="">
                {{ user.role_id }}
              </td>
              <td class="">
                <div class="flex items-center space-x-1">                
                  <button
                    class="btn btn-primary btn-xs"
                    @click="router.push({ path: '/users/edit/'+user.id })">
                      Editar
                  </button>
                  <button
                    @click="deleteRow(user.id)"
                    class="btn btn-danger btn-xs"
                  >
                    Eliminar
                  </button>
                </div>
              </td>
            </tr>
            <tr v-if="data.rows.length === 0">
              <td class="" colspan="4">Usuarios no encontrados.</td>
            </tr>
          </tbody>
        </table>
      </div>
      <Pagination v-if="data.links" :links="data.links" />
    </div>
  </div>
</template>
