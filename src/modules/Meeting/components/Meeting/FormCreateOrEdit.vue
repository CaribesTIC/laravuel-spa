<script setup lang="ts">
import { reactive } from "vue"
import type { Meeting } from "../../types/Meeting"

// import type Errors from "../types/Errors"

const props = defineProps<{
  id?: string
  meeting: Meeting
   
  pending: boolean
  errors: any
}>()

const emit = defineEmits<{
  (e: 'submit', meeting: Meeting, meetingId?: string): void
}>()

const form: Meeting = reactive(props.meeting)

const submit = async () => {
  emit('submit', {
    city_id: form.city_id,
    app_date: form.app_date,
    start_time: form.start_time,
    place: form.place,
    entity_id: form.entity_id,
    dependence_id: form.dependence_id,
    subject: form.subject,
    reason: form.reason,
    observation: form.observation,
    
  }, props.id)
}
</script>

<template>
<form @submit.prevent="submit" class="p-4">
  <div class="grid lg:grid-cols-2 gap-4">
  
  
  
    <div class="block">     
      <AppInput           
        v-model="form.place"
        label="place"
        type="text"
        :error="errors && errors.place ? errors.place[0] : ''"
      />
    </div>
    
  
  
    <div class="block">     
      <AppInput           
        v-model="form.subject"
        label="subject"
        type="text"
        :error="errors && errors.subject ? errors.subject[0] : ''"
      />
    </div>
    
    <div class="block">     
      <AppInput           
        v-model="form.reason"
        label="reason"
        type="text"
        :error="errors && errors.reason ? errors.reason[0] : ''"
      />
    </div>
    
    <div class="block">     
      <AppTextarea
        label="observation"
        v-model="form.observation"
        :error="errors && errors.observation ? errors.observation[0] : ''"
      />
    </div>
    
  </div>

  <div class="mt-4 px-2 border-gray-100 flex justify-end space-x-2">
    <AppBtn
      type="submit"
      :text="pending ? 'Guardando...' : 'Guardar'"
      :isDisabled='pending'
    />
  </div>
</form>  
</template>
