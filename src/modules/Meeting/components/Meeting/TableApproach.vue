<script setup lang="ts">
import { toRaw, ref } from "vue"
//import ApproachService from "@/modules/Meeting/services/Approach"
import type { Approach } from "../../types/Meeting/Approach";

const props = defineProps<{ approaches: Approach[] }>()

const emits = defineEmits<{
  (e: 'editApproach', approachId: object): void
  (e: 'removeApproach', approachId: string): void
  (e: 'getApproaches' ): void
}>()

const editApproach =  (approach: object) => {
  emits("editApproach", toRaw(approach))
};

const removeApproach =  (approachId: string) => {
  emits("removeApproach", approachId)
};

const approachId = ref("")

</script>

<template>
  <div class="mt-4 relative overflow-x-auto shadow-md sm:rounded-lg">
    <table id="id_tab_presentacion" class="w-full text-sm text-left text-gray-500 dark:text-gray-400" width="100%">
      <thead class="text-xs text-gray-700 uppercase dark:text-gray-400">
        <tr>
          
          <th class="px-6 py-3 bg-gray-50 bg-base-200">approach</th>
          <th class="px-6 py-3 ">speaker</th>
          <th class="px-6 py-3 bg-gray-50 bg-base-200">observation</th>
          <th class="px-6 py-3 ">Acción(es)</th>
        </tr>
      </thead>
      <tbody>      
        <tr v-for="approach in props.approaches" :key="approach.id">



          
            <td class="px-6 py-3 bg-gray-50 bg-base-200">

              

              {{ approach.approach }}


              




            </td>
           
            <td class="px-6 py-3 ">

              

              {{ approach.speaker }}


              




            </td>
           
            <td class="px-6 py-3 bg-gray-50 bg-base-200">

              

              {{ approach.observation }}


              




            </td>
           




          <!--td class="px-6 py-3 bg-gray-50 bg-base-200">{{approach.bar_cod}}</td>
          <td class="px-6 py-3">{{approach.int_cod}}</td>
          <td class="px-6 py-3 text-right">{{approach.price}}</td>
          <td class="px-6 py-3 bg-gray-50 bg-base-200 text-right">{{approach.stock_min}}</td>
          <td class="px-6 py-3 text-right">{{approach.stock_max}}</td>
          <td class="px-6 py-3 bg-gray-50 bg-base-200">{{approach.status}}</td-->  
          <td class="px-6 py-3">
            <div class="flex items-center space-x-1">
             <AppBtn
                class="btn btn-primary btn-xs"                    
                @click="editApproach(approach)"
              >
                Editar
              </AppBtn>
              <AppBtn
                @click="removeApproach(approach.id)"                    
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
