<script setup lang="ts">
  import BaseBtn from "@/components/BaseBtn.vue";
  import FlashMessage from "@/components/FlashMessage.vue";
  import PageHeader from "@/components/PageHeader.vue";
  import useUser from "./useUser";

  const props = defineProps<{ id?: string }>()
   
  const {
    form,
    errors,
    roles,
    sending,
    loading,
    router,
    submit    
  } = useUser(props.id)
</script>

<template>
  <div>
    <!--FlashMessages /--> 
    <page-header>Usuarios / {{ !props.id ? "Crear" : "Editar" }}</page-header>
    <transition name="fade" mode="out-in">
      <FlashMessage
        message="loading..."
        v-if="loading && !form"
        key="loading"
      />
      <div v-else class="panel mt-6 p-4">           
        <div  class="flex space-x-2">
          <button class="btn btn-primary mb-4" @click="router.push({ path: '/users' })">Ver todos</button>
        </div>
        <div class="panel mt-6">
          <form @submit.prevent="submit(form, props.id)" class="p-4">
            <div class="grid lg:grid-cols-2 gap-4">
              <!-- name -->
              <label class="block">
                <span class="text-gray-700">Nombre</span>
                <input v-model="form.name" type="text" class="" />
                <div v-if="errors.name" class="form-error">
                  {{ errors.name[0] }}
                </div>
              </label>
              <!-- email -->
              <label class="block">
                <span class="text-gray-700">Correo</span>
                <input v-model="form.email" type="email" class="" />
                <div v-if="errors.email" class="form-error">
                  {{ errors.email[0] }}
                </div>
              </label>
              <!-- password -->
              <label class="block">
                <span class="text-gray-700">Password</span>
                <input v-model="form.password" type="password" class="" />
                <div v-if="errors.password" class="form-error">
                  {{ errors.password[0] }}
                </div>
              </label>
              <!-- role -->
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
              <BaseBtn
                type="submit"
                :text="sending ? 'Guardando...' : 'Guardar'"
                :isDisabled='sending'
              />
            </div>

          </form>
        </div>
      </div>
    </transition>
  </div>
</template>
