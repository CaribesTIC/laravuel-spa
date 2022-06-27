<script setup lang="ts">
import FlashMessage from "@/components/FlashMessage.vue";
import PageHeader from "@/components/PageHeader.vue";
import Form from "../components/Form.vue";
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
    <page-header>Usuarios / {{ !props.id ? "Crear" : "Editar" }}</page-header>
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
            @click="router.push({ path: '/users' })"
          >
            Ver todos
          </button>
        </div>
        <div class="panel mt-6">
          <Form
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
