<script setup lang="ts">
import { toRaw } from "vue"
import useFormApproach from "../../composables/Meeting/useFormApproach";
import type { RadioOption } from "@/types/RadioOption";
import type { Approach } from "../../types/Approach";

const props = defineProps<{
  approach: Approach
  //saleTypeOptions: RadioOption[]
  //statusOptions: RadioOption[]
}>()

const {
  form,

  v$
} = useFormApproach(props.approach)

const emits = defineEmits<{
  (e: 'submit', form: Approach): void
}>()

const submit = async () => {
  const result = await v$.value.$validate();
  if (result) {
    emits("submit", toRaw(form));
  }
}
</script>

<template>
  <div>
    <form @submit.prevent="submit">
      <div class="p-5 grid lg:grid-cols-2 gap-4">

          
              <div class="block">     
                <AppInput           
                  v-model="form.approach"
                  label="approach"
                  type="text"
                  :error="errors && errors.approach ? errors.approach[0] : ''"
                />
              </div>
              
              <div class="block">     
                <AppInput           
                  v-model="form.speaker"
                  label="speaker"
                  type="text"
                  :error="errors && errors.speaker ? errors.speaker[0] : ''"
                />
              </div>
              
              <div class="block">     
                <AppTextarea
                  label="observation"
                  v-model="form.observation"
                  :error="errors && errors.observation ? errors.observation[0] : ''"
                />
              </div>
              
            










          <!--label>Tipo de Venta</label><br/>
          <AppRadioGroup
            v-model="form.status"
            name="status"
            :options="props.statusOptions"
            :error="v$.status.$error ? v$.status.$errors[0].$message : null"           
          /-->
      
        <!--div class="block">
          <AppTextarea
            label="Empaque"
            v-model="form.packing_deployed"                
            @focus="isOpenModal = !isOpenModal"                
            readonly
            :error="v$.packing_deployed.$error ? v$.packing_deployed.$errors[0].$message : null"
          />
          <AppInput
            v-model="form.packing_json"          
            type="hidden"          
          />                        
        </div-->       
      </div>
      <div class="block flex justify-center">
        <AppBtn
          type="submit"                 
          data-testid="submit-btn"
          class="btn btn-primary"
          text="Agregar"
        />        
      </div> 
    </form>    
  </div>
</template>
