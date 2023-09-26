<script setup lang="ts">
import { toRaw, ref } from "vue"
//import AttendeService from "@/modules/Meeting/services/Attende"
import type { Attende } from "../../types/Meeting/Attende";

const props = defineProps<{ attendes: Attende[] }>()

const emits = defineEmits<{
  (e: 'editAttende', attendeId: object): void
  (e: 'removeAttende', attendeId: string): void
  (e: 'getAttendes' ): void
}>()

const editAttende =  (attende: object) => {
  emits("editAttende", toRaw(attende))
};

const removeAttende =  (attendeId: string) => {
  emits("removeAttende", attendeId)
};

const attendeId = ref("")

</script>

<template>
  <div class="mt-4 relative overflow-x-auto shadow-md sm:rounded-lg">
    <table id="id_tab_presentacion" class="w-full text-sm text-left text-gray-500 dark:text-gray-400" width="100%">
      <thead class="text-xs text-gray-700 uppercase dark:text-gray-400">
        <tr>
          
          <th class="px-6 py-3 bg-gray-50 bg-base-200">idcard</th>
          <th class="px-6 py-3 ">fullname</th>
          <th class="px-6 py-3 bg-gray-50 bg-base-200">email</th>
          <th class="px-6 py-3 ">phone</th>
          <th class="px-6 py-3 bg-gray-50 bg-base-200">observation</th>
          <th class="px-6 py-3 ">entity_id</th>
          <th class="px-6 py-3 bg-gray-50 bg-base-200">dependency_id</th>
          <th class="px-6 py-3 ">position_id</th>
          <th class="px-6 py-3 bg-gray-50 bg-base-200">Acción(es)</th>
        </tr>
      </thead>
      <tbody>      
        <tr v-for="attende in props.attendes" :key="attende.id">



          
            <td class="px-6 py-3 bg-gray-50 bg-base-200">

              

              {{ attende.idcard }}


              




            </td>
           
            <td class="px-6 py-3 ">

              

              {{ attende.fullname }}


              




            </td>
           
            <td class="px-6 py-3 bg-gray-50 bg-base-200">

              

              {{ attende.email }}


              




            </td>
           
            <td class="px-6 py-3 ">

              

              {{ attende.phone }}


              




            </td>
           
            <td class="px-6 py-3 bg-gray-50 bg-base-200">

              

              {{ attende.observation }}


              




            </td>
           
            <td class="px-6 py-3 ">

              

                {{ attende.entity.name }}
                

              




            </td>
           
            <td class="px-6 py-3 bg-gray-50 bg-base-200">

              

                {{ attende.dependency.name }}
                

              




            </td>
           
            <td class="px-6 py-3 ">

              

                {{ attende.position.name }}
                

              




            </td>
           




          <!--td class="px-6 py-3 bg-gray-50 bg-base-200">{{attende.bar_cod}}</td>
          <td class="px-6 py-3">{{attende.int_cod}}</td>
          <td class="px-6 py-3 text-right">{{attende.price}}</td>
          <td class="px-6 py-3 bg-gray-50 bg-base-200 text-right">{{attende.stock_min}}</td>
          <td class="px-6 py-3 text-right">{{attende.stock_max}}</td>
          <td class="px-6 py-3 bg-gray-50 bg-base-200">{{attende.status}}</td-->  
          <td class="px-6 py-3">
            <div class="flex items-center space-x-1">
             <AppBtn
                class="btn btn-primary btn-xs"                    
                @click="editAttende(attende)"
              >
                Editar
              </AppBtn>
              <AppBtn
                @click="removeAttende(attende.id)"                    
                class="btn btn-danger btn-xs"                    
              >
                Eliminar
              </AppBtn>
            </div>
          </td>

        </tr>
      </tbody>
    </table>    
  </div>  
</template>
