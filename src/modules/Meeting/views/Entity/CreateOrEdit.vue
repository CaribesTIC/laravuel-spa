<script setup lang="ts">
import AppPageHeader from "@/components/AppPageHeader.vue";
import FormCreateOrEdit from "../../components/Entity/FormCreateOrEdit.vue";
import useCreateOrEdit from "../../composables/Entity/useCreateOrEdit";
    
const props = defineProps<{ id?: string }>()

const {
  entity,
  errors,
  
  pending,
  router,

  submit    
} = useCreateOrEdit(props.id)
</script>
    
<template>
<div>
  <AppPageHeader>Entities / {{ !props.id ? "Crear" : "Editar" }}</AppPageHeader>
  <transition name="fade" mode="out-in">
    <AppPageHeader
      message="pending..."
      v-if="pending && !entity"
      key="pending"
    />
    <div v-else class="panel mt-6 p-4">           
      <div  class="flex space-x-2">
        <button
          class="btn btn-primary mb-4"
          @click="router.push({ path: '/entities' })"
        >
          Ver todos
        </button>
      </div>
      <div class="panel mt-6">
        <FormCreateOrEdit
          class="p-5 border rounded shadow"
          @submit='submit'
          :id="props.id"
          :entity='entity'
          :pending='pending'
          :errors='errors'
                  
        />
      </div>
    </div>
  </transition>
</div>
</template>
