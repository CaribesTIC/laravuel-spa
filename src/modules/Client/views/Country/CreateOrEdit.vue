<script setup lang="ts">
import AppPageHeader from "@/components/AppPageHeader.vue";
import FormCreateOrEdit from "../../components/Country/FormCreateOrEdit.vue";
import useCreateOrEdit from "../../composables/Country/useCreateOrEdit";
    
const props = defineProps<{ id?: string }>()

const {
  country,
  errors,
  
  pending,
  router,

  submit    
} = useCreateOrEdit(props.id)
</script>
    
<template>
<div>
  <AppPageHeader>Countries / {{ !props.id ? "Crear" : "Editar" }}</AppPageHeader>
  <transition name="fade" mode="out-in">
    <AppPageHeader
      message="pending..."
      v-if="pending && !country"
      key="pending"
    />
    <div v-else class="panel mt-6 p-4">           
      <div  class="flex space-x-2">
        <button
          class="btn btn-primary mb-4"
          @click="router.push({ path: '/countries' })"
        >
          Ver todos
        </button>
      </div>
      <div class="panel mt-6">
        <FormCreateOrEdit
          class="p-5 border rounded shadow"
          @submit='submit'
          :id="props.id"
          :country='country'
          :pending='pending'
          :errors='errors'
                  
        />
      </div>
    </div>
  </transition>
</div>
</template>
