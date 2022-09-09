<script setup lang="ts">
import { reactive } from "vue"
import type User from "../types/User"
import type Role from "../types/Role"
// import type Errors from "../types/Errors"

const props = defineProps<{
  id?: string
  user: User  
  sending: boolean
  errors: any
  roles: Role[]
}>()

const emit = defineEmits<{
  (e: 'submit', user: User, userId?: string): void
}>()

const form: User = reactive(props.user)

const submit = async () => {
  emit('submit', {
    name: form.name,
    email: form.email,
    password: form.password,
    role_id: form.role_id
  }, props.id)
}

</script>

<template>
  <form @submit.prevent="submit" class="p-4">
    <div class="grid lg:grid-cols-2 gap-4">    
      <div class="block">      
        <AppInput           
          v-model="form.name"
          label="Name"
          type="text"
          :error="errors && errors.name ? errors.name[0] : ''"
        />
      </div>
      
      <div class="block">      
        <AppInput           
          v-model="form.email"
          label="Correo"
          type="text"
          :error="errors && errors.email ? errors.email[0] : ''"
        />
      </div>

      <div class="block">      
        <AppInput           
          v-model="form.password"
          label="Password"
          type="password"
          :error="errors && errors.password ? errors.password[0] : ''"
        />
      </div>

      <div class="block">      
        <AppSelect
          :options="roles"
          v-model="form.role_id"
          label="Rol"
          :error="errors && errors.role_id ? errors.role_id[0] : ''"
        />
      </div>

    </div>

    <div class="mt-4 px-2 border-gray-100 flex justify-end space-x-2">
      <AppBtn
        type="submit"
        :text="sending ? 'Guardando...' : 'Guardar'"
        :isDisabled='sending'
      />
    </div>
  </form>  
</template>
