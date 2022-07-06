<script setup lang="ts">
import { reactive } from "vue"
import AppBtn from "@/components/AppBtn.vue";
import type User from "../types/User"
import type Role from "../types/Role"
import type Errors from "../types/Errors"

const props = defineProps<{
  id?: string
  user: User  
  sending: Boolean
  errors: Errors
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
      
      <label class="block">
        <span class="text-gray-700">Nombre</span>
        <input v-model="form.name" type="text" class="" />
        <div v-if="errors.name" class="form-error">
          {{ errors.name[0] }}
        </div>
      </label>

      <label class="block">
        <span class="text-gray-700">Correo</span>
        <input v-model="form.email" type="email" class="" />
        <div v-if="errors.email" class="form-error">
          {{ errors.email[0] }}
        </div>
      </label>

      <label class="block">
        <span class="text-gray-700">Password</span>
        <input v-model="form.password" type="password" class="" />
        <div v-if="errors.password" class="form-error">
          {{ errors.password[0] }}
        </div>
      </label>

      <label class="block">
        <span class="text-gray-700">Rol</span>
        <select v-model="form.role_id" class="p-2">
          <option v-for="role in roles" :value="role.id" :key="role">
            {{ role.name }}
          </option>
        </select>
        <div v-if="errors.role_id" class="form-error">
          {{ errors.role_id[0] }}
        </div>
      </label>

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
