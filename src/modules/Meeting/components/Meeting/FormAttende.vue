<script setup lang="ts">
import { toRaw } from "vue"
import useFormAttende from "../../composables/Meeting/useFormAttende";
// import type { RadioOption } from "@/types/RadioOption";
import type { Attende } from "../../types/Meeting/Attende";

const props = defineProps<{
  attende: Attende
  // saleTypeOptions: RadioOption[]
  // statusOptions: RadioOption[]
}>()

const {
  entities,
  dependencies,
  positions,
  form,

  v$
} = useFormAttende(props.attende)

const emits = defineEmits<{
  (e: 'submitAttende', form: Attende): void
}>()

const submitAttende = async () => {
  const result = await v$.value.$validate();
  if (result) {
    emits("submitAttende", toRaw(form));
  }
}
</script>

<template>
  <div>
    <form @submit.prevent="submitAttende"> 
      <div class="p-5 grid lg:grid-cols-2 gap-4">

          
              <div class="block">     
                <AppInput           
                  v-model="form.idcard"
                  label="idcard"
                  type="text"
                  :error="v$.idcard.$error ? v$.idcard.$errors[0].$message : null"

                />
              </div>
              
              <div class="block">     
                <AppInput           
                  v-model="form.fullname"
                  label="fullname"
                  type="text"
                  :error="v$.fullname.$error ? v$.fullname.$errors[0].$message : null"

                />
              </div>
              
              <div class="block">     
                <AppInput           
                  v-model="form.email"
                  label="email"
                  type="text"
                  :error="v$.email.$error ? v$.email.$errors[0].$message : null"

                />
              </div>
              
              <div class="block">     
                <AppInput           
                  v-model="form.phone"
                  label="phone"
                  type="text"
                  :error="v$.phone.$error ? v$.phone.$errors[0].$message : null"

                />
              </div>
              
              <div class="block">     
                <AppTextarea
                  label="observation"
                  v-model="form.observation"
                  :error="v$.observation.$error ? v$.observation.$errors[0].$message : null"
                />
              </div>

              
              <div class="block">     
                <AppSelect
                  v-if="entities"
                  :options="entities"
                  v-model="form.entity_id"
                  label="entity_id"
                  :error="v$.entity_id.$error ? v$.entity_id.$errors[0].$message : null"
                />
              </div>

              
              
              <div class="block">     
                <AppSelect
                  v-if="dependencies"
                  :options="dependencies"
                  v-model="form.dependence_id"
                  label="dependence_id"
                  :error="v$.dependence_id.$error ? v$.dependence_id.$errors[0].$message : null"
                />
              </div>

              
              
              <div class="block">     
                <AppSelect
                  v-if="positions"
                  :options="positions"
                  v-model="form.position_id"
                  label="position_id"
                  :error="v$.position_id.$error ? v$.position_id.$errors[0].$message : null"
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
          text="Agregar"
        />        
      </div> 
    </form>    
  </div>
</template>
