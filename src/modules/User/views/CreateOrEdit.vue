<script setup lang="ts">
import AppFlashMessage from "@/components/AppFlashMessage.vue";
import AppPageHeader from "@/components/AppPageHeader.vue";
import FormCreateOrEdit from "../components/FormCreateOrEdit.vue";
import useUser from "../composables/useUser";

const props = defineProps<{ id?: string }>()

const {
  user,
  errors,
  roles,
  sending,
  loading,
  router,
  submit    
} = useUser(props.id)
</script>

<template>
  <div>
    <AppPageHeader>Usuarios / {{ !props.id ? "Crear" : "Editar" }}</AppPageHeader>
    <transition name="fade" mode="out-in">
      <AppPageHeader
        message="loading..."
        v-if="loading && !user"
        key="loading"
      />
      <div v-else class="panel mt-6 p-4">           
        <div  class="flex space-x-2">
          <button
            class="btn btn-primary mb-4"
            @click="router.push({ path: '/users' })"
          >
            Ver todos
          </button>
        </div>
        <div class="panel mt-6">
          <FormCreateOrEdit
            class="p-5 bg-white border rounded shadow"
            @submit='submit'
            :id="props.id"
            :user='user'
            :sending='sending'
            :errors='errors'
            :roles="roles"            
          />
        </div>
      </div>
    </transition>
  </div>
</template>
