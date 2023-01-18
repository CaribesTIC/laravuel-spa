<script setup lang="ts">
import AppFlashMessage from "@/components/AppFlashMessage.vue";
import AppPageHeader from "@/components/AppPageHeader.vue";
import Form from "./Form.vue";
import useRole from "./useRole";

const props = defineProps<{ id?: string }>()

const {
  role,
  errors,
  sending,
  loading,
  menus,
  submit,
} = useRole(props.id)
</script>

<template>
  <div>
    <AppPageHeader>Roles / {{ !props.id ? "Crear" : "Editar" }}</AppPageHeader>
    <transition name="fade" mode="out-in">
      <AppFlashMessage
        message="loading..."
        v-if="loading && !role"
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
            class="p-5 border rounded shadow"
            @submit='submit'
            :id="props.id"            
            :sending='sending'
            :loading='false'
            :errors='errors'
            :menus="menus"
            :role="role"       
          />
        </div>
      </div>
    </transition>
  </div>
</template>
