<script setup lang="ts">
import { reactive } from "vue"
import type { Client } from "../types"
// import type Errors from "../types/Errors"

const props = defineProps<{
  id?: string
  client: Client  
  pending: boolean
  errors: any
}>()

const emit = defineEmits<{
  (e: 'submit', client: Client, clientId?: string): void
}>()

const form: Client = reactive(props.client)

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
        label="email"
        type="text"
        :error="errors && errors.email ? errors.email[0] : ''"
      />
    </div>
    
    <div class="block">     
      <AppCheckbox
        v-model="form.type"
        label="type"
        :error="errors && errors.type ? errors.type[0] : ''"
      />
    </div>
    
    <div class="block">     
      <AppInput           
        v-model="form.identification_card"
        label="identification_card"
        type="text"
        :error="errors && errors.identification_card ? errors.identification_card[0] : ''"
      />
    </div>
    
    <div class="block">     
      <AppInput           
        v-model="form.business_name"
        label="business_name"
        type="text"
        :error="errors && errors.business_name ? errors.business_name[0] : ''"
      />
    </div>
    
    <div class="block">     
      <AppInput           
        v-model="form.phone"
        label="phone"
        type="text"
        :error="errors && errors.phone ? errors.phone[0] : ''"
      />
    </div>
    
    <div class="block">     
      <AppSelect
        :options="[]"
        v-model="form.country_id"
        label="country_id"
        :error="errors && errors.country_id ? errors.country_id[0] : ''"
      />
    </div>
    
    <div class="block">     
      <AppTextarea
        label="domicile"
        v-model="form.domicile"
        :error="errors && errors.domicile ? errors.domicile[0] : ''"
      />
    </div>
    
  </div>

  <div class="mt-4 px-2 border-gray-100 flex justify-end space-x-2">
    <AppBtn
      type="submit"
      :text="sending ? 'Guardando...' : 'Guardar'"
      :isDisabled='pending'
    />
  </div>
</form>  
</template>
