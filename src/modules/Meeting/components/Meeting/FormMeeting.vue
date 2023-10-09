<script setup lang="ts">
import useFormMeeting from "../../composables/Meeting/useFormMeeting";
import type { Meeting } from "../../types/Meeting";

const props = defineProps<{
  meeting: Meeting
  errors?: String | Object
  pending: Boolean  
}>()

const emits = defineEmits<{
  (e: 'submit', form: Meeting): void
}>()

const {
  countries,
  form,
  errors,
  pending,

  v$
} = useFormMeeting(props.meeting)

const submit = async () => {  
  const result = await v$.value.$validate();
  if (result) {
    emits("submit", form);
  }
};
</script>

<template>
<div class="m-5">
  <AppFlashMessage :error="errors"/>
  <form @submit.prevent="submit">
    <div class="grid lg:grid-cols-2 gap-4">
        <div class="block">     
          <AppSelect
            v-if="countries"
            :options="countries"
            v-model="form.country_id"
            label="Country"
            :error="v$.country_id.$error ? v$.country_id.$errors[0].$message : null"
          />
        </div>
        
        <div class="block">     
          <AppInput           
            v-model="form.place"
            label="Place"
            type="text"
            :error="v$.place.$error ? v$.place.$errors[0].$message : null"
          />
        </div>
        
        <div class="block">     
          <AppInput           
            v-model="form.subject"
            label="Subject"
            type="text"
            :error="v$.subject.$error ? v$.subject.$errors[0].$message : null"
          />
        </div>
        
        <div class="block">     
          <AppInput           
            v-model="form.reason"
            label="Reason"
            type="text"
            :error="v$.reason.$error ? v$.reason.$errors[0].$message : null"
          />
        </div>
        
        <div class="block">     
          <AppTextarea
            label="Observation"
            v-model="form.observation"
            :error="v$.observation.$error ? v$.observation.$errors[0].$message : null"
          />
        </div>
        
      </div>
    
      <div class="mt-4 px-2 border-gray-100 flex justify-right space-x-2">
        <AppBtn
          type="submit"
          :text="pending ? 'Guardando...' : 'Guardar'"
          :isDisabled='pending'
        />
      </div>
  </form>
</div>
</template>


countries
country_id
