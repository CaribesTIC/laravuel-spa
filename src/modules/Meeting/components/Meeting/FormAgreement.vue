<script setup lang="ts">
import { toRaw } from "vue"
import useFormAgreement from "../../composables/Meeting/useFormAgreement";
// import type { RadioOption } from "@/types/RadioOption";
import type { Agreement } from "../../types/Meeting/Agreement";

const props = defineProps<{
  agreement: Agreement
  // saleTypeOptions: RadioOption[]
  // statusOptions: RadioOption[]
}>()

const {
  form,

  v$
} = useFormAgreement(props.agreement)

const emits = defineEmits<{
  (e: 'submitAgreement', form: Agreement): void
}>()

const submitAgreement = async () => {
  const result = await v$.value.$validate();
  if (result) {
    emits("submitAgreement", toRaw(form));
  }
}
</script>

<template>
  <div>
    <form @submit.prevent="submitAgreement"> 
      <div class="p-5 grid lg:grid-cols-2 gap-4">

          
              <div class="block">     
                <AppInput           
                  v-model="form.agreement"
                  label="Agreement"
                  type="text"
                  :error="v$.agreement.$error ? v$.agreement.$errors[0].$message : null"

                />
              </div>
              
              <div class="block">     
                <AppInput           
                  v-model="form.responsible"
                  label="Responsible"
                  type="text"
                  :error="v$.responsible.$error ? v$.responsible.$errors[0].$message : null"

                />
              </div>
              
              <div class="block">     
                <AppTextarea
                  label="Observation"
                  v-model="form.observation"
                  :error="v$.observation.$error ? v$.observation.$errors[0].$message : null"
                />
              </div>

              
            

          <!--label>Tipo de Venta</label><br/>
          <AppRadioGroup
            v-model="form.status"
            name="status"
            :options="props.statusOptions"
            :error="v$.status.$error ? v$.status.$errors[0].$message : null"           
          /-->    
      
      </div>
      <div class="block flex justify-center">
        <AppBtn
          type="submit"                 
          data-testid="submit-btn"
          class="btn btn-primary"
          text="Guardar"
        />        
      </div> 
    </form>    
  </div>
</template>
