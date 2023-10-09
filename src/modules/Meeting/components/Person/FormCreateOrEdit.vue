<script setup lang="ts">
import { reactive } from "vue"
import type { Person } from "../../types/Person"
import type { Country } from  "../../types/Country"
// import type Errors from "../types/Errors"

const props = defineProps<{
  id?: string
  person: Person
  countries?: Country[] 
  pending: boolean
  errors: any
}>()

const emit = defineEmits<{
  (e: 'submit', person: Person, personId?: string): void
}>()

const form: Person = reactive(props.person)

const submit = async () => {
  emit('submit', {
    email: form.email,
    type: form.type,
    identification_card: form.identification_card,
    business_name: form.business_name,
    phone: form.phone,
    country_id: form.country_id,
    domicile: form.domicile,
    
  }, props.id)
}
</script>

<template>
<form @submit.prevent="submit" class="p-4">
  <div class="grid lg:grid-cols-2 gap-4">
    <div class="block">     
      <AppInput           
        v-model="form.email"
        label="Email"
        type="text"
        :error="errors && errors.email ? errors.email[0] : ''"
      />
    </div>
    
    <div class="block">     
      <AppCheckbox
        v-model="form.type"
        label="Type"
        :error="errors && errors.type ? errors.type[0] : ''"
      />
    </div>
    
    <div class="block">     
      <AppInput           
        v-model="form.identification_card"
        label="IdentificationCard"
        type="text"
        :error="errors && errors.identification_card ? errors.identification_card[0] : ''"
      />
    </div>
    
    <div class="block">     
      <AppInput           
        v-model="form.business_name"
        label="BusinessName"
        type="text"
        :error="errors && errors.business_name ? errors.business_name[0] : ''"
      />
    </div>
    
    <div class="block">     
      <AppInput           
        v-model="form.phone"
        label="Phone"
        type="text"
        :error="errors && errors.phone ? errors.phone[0] : ''"
      />
    </div>
    
    <div class="block">     
      <AppSelect
        v-if="countries"
        :options="countries"
        v-model="form.country_id"
        label="Country"
        :error="errors && errors.country_id ? errors.country_id[0] : ''"
      />
    </div>
    
    <div class="block">     
      <AppTextarea
        label="Domicile"
        v-model="form.domicile"
        :error="errors && errors.domicile ? errors.domicile[0] : ''"
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
