<script setup lang="ts">
import { ref, reactive, onMounted } from "vue"
import FlashMessage from "@/components/FlashMessage.vue";
import PageHeader from "@/components/PageHeader.vue";
import Form from "./Form.vue";
//import useRole from "./useRole";
import * as RoleService from "@/modules/Authorization/services/RoleService";

const props = defineProps<{ id?: string }>()

const form = reactive({
    name:'',
    description: ''
})
const menus = ref([])

onMounted(() => {
  RoleService.getRole(1).then(
    (response)=> {
        menus.value=response.data.menus
        form.name = response.data.role.name
        form.description = response.data.role.description
        console.log(response.data)
      }
    )
    
});

/*const {
  user,
  errors,
  roles,
  sending,
  loading,
  router,
  submit    
} = useRole(props.id)*/
</script>

<template>
  <div>
    <page-header>Roles / {{ !props.id ? "Crear" : "Editar" }}</page-header>
    <transition name="fade" mode="out-in">
      <FlashMessage
        message="loading..."
        v-if="loading && !user"
        key="loading"
      />
      <div v-else class="panel mt-6 p-4">           
        <div  class="flex space-x-2">
          <button
            class="btn btn-primary mb-4"
            @click="$router.push({ path: '/roles' })"
          >
            Ver todos
          </button>
        </div>
        <div class="panel mt-6">
          <Form
            class="p-5 bg-white border rounded shadow"
            @submit='submit'
            :id="props.id"
            :user='{}'
            :sending='sending'
            :loading='false'
            :errors='{}'
            :menus="menus"
            :form="form"       
          />
        </div>
      </div>
    </transition>
  </div>
</template>
