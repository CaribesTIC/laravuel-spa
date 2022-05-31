<script lang="ts">
import { onMounted//, ref
  , reactive } from "vue";
import { onBeforeRouteUpdate, useRouter, useRoute } from 'vue-router' 
import Pagination from "@/components/Pagination.vue";
import UserService from "@/services/UserService";
import { useSearch } from "@/hooks/useTableGrid";

export default {
  name: "UsersIndex",
  components: {
    Pagination,
  },
  //  props: ["errors"],  
  props: [],  
  setup(props) {
    const router = useRouter();
    const route = useRoute();
    const data = reactive({
      rows: [],
      links: [],
      search: "",
      sort: "",
      direction: ""
    });

    const getUsers = (routeQuery) => {
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

    const load = (newParams) => {
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

    const deleteRow = (rowId) => {
      if (confirm("¿Estás seguro de que quieres eliminar?")) {
        // Inertia.delete(route("users.destroy", rowId));
      }
    };

    return {
      data,
      deleteRow,
      ...useSearch(data, load),
    };
  }
};
</script>

<template>
  <div>
    <!--page-header> Usuarios </page-header-->

    <div class="flex space-x-2">
      <RouterLink class="btn btn-primary" to="/users">
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
                  to="/users"                  
                >
                  {{ user.name }}
                </RouterLink>
              </td>
              <td class="">
                {{ user.email }}
              </td>
              <td class="">
                { user.role.name }
              </td>
              <td class="">
                <div class="flex items-center space-x-1">
                  <RouterLink
                    to="/users"
                    tabindex="-1"
                  >
                    <button class="btn btn-success btn-xs">Mostrar</button>
                  </RouterLink>

                  <RouterLink
                    to="/users"
                    tabindex="-1"
                  >
                    <button class="btn btn-primary btn-xs">Editar</button>
                  </RouterLink>

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

