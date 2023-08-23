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
  form,
  //categories,
  //marks,
  //measureUnitTypes,
  //measureUnits,
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
    
      <div class="mt-4 px-2 border-gray-100 flex justify-right space-x-2">
        <AppBtn
          type="submit"
          :text="pending ? 'Guardando...' : 'Guardar'"
          :isDisabled='pending'
        />
      </div>
      
    <!--div class="p-5 grid lg:grid-cols-2 gap-4">    
      <div class="block">      
        <AppSelect
          v-if="categories"        
          v-model="form.category_id"          
          label="Categoría"
          :options="categories"
          :error="v$.category_id.$error ? v$.category_id.$errors[0].$message : null"
        />
      </div>      
      <div class="block">      
        <AppSelect
          v-if="marks"
          v-model="form.mark_id"
          label="Marca"
          :options="marks"          
          :error="v$.mark_id.$error ? v$.mark_id.$errors[0].$message : null"
        />
      </div>

      <div class="block">      
        <AppSelect
          v-if="measureUnitTypes"
          v-model="form.measure_unit_type_id"
          label="Tipo de Unidad de Medida"
          :options="measureUnitTypes"
          :error="v$.measure_unit_type_id.$error ? v$.measure_unit_type_id.$errors[0].$message : null"
        />
      </div>

      <div class="block">
        <label>Unidad de Medida</label> 
        <select
          v-model="form.measure_unit_id"
          @change="updateMeasureUnit(
            $event.target[($event.target as HTMLSelectElement).selectedIndex].text
          )"          
        >
        <option
          value=""
          class="text-gray-200"
        >
          Seleccione...
        </option>
        <option
          v-for="(option, index) in measureUnits"
          :value="option.id"
          :key="index"
          :selected="option.id === form.measure_unit_id"
         >
          {{ option.name }}
        </option>
        </select>
        <p class="text-red-500">{{v$.measure_unit_id.$error ? v$.measure_unit_id.$errors[0].$message : null}}</p>
      </div>

      <div class="block">      
        <AppInput          
          v-model="form.name"          
          label="Nombre del Producto"
          type="text"          
          :error="v$.name.$error ? v$.name.$errors[0].$message : null"
        />   
      </div>
    </div>

    <div class="mt-4 px-2 border-gray-100 flex justify-end space-x-2">
      <AppBtn
        type="submit"             
        :text="pending ? 'Guardando...' : 'Guardar'"
        :isDisabled='pending'
      />
    </div-->
  </form>
</div>
</template>
