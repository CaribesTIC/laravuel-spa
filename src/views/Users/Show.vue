<script setup>
  import { onMounted, computed } from 'vue'
  import { useRouter } from 'vue-router'
  import FlashMessage from "@/components/FlashMessage.vue";
  import PageHeader from "@/components/PageHeader.vue";
  import useUser from "./useUser.js";

  const router = useRouter();
  const props = defineProps({ id: String })
  const {
    form,
    loading,
    userGet
  } = useUser();
  onMounted(async () => await userGet(props.id))
</script>

<template>
  <div>
    <page-header>Usuarios / Mostrar</page-header>
    <transition name="fade" mode="out-in">
      <FlashMessage
        message="loading..."
        v-if="loading && !form.length"
        key="loading"
      />
      <div v-else class="panel mt-6 p-4">      
        <div  class="flex space-x-2">
          <button class="btn btn-primary mb-4" @click="router.push({ path: '/users' })">Ver todos</button>
        </div>
        <div class="table-data__wrapper">
          <table class="table-data">
            <thead>
              <tr class="">
                <th class="w-2/5">Dato</th>
                <th class="w-3/5">Valor</th>
              </tr>
            </thead>      
            <tbody>
              <tr class="">
                <th class="">Nombre</th>
                <td class="">{{ form.name }}</td>                
              </tr>
              <tr class="">
                <th class="">Correo</th>
                <td class="">{{ form.email }}</td>                
              </tr>
              <!--tr class="">
                <th class="">Role</th>
                <td class="">"{{ form.role }}</td>              
              </tr-->        
            </tbody>
          </table>
        </div>
      </div>
    </transition>
  </div>
</template>



