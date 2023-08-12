<script setup lang="ts">
import { toRaw, ref } from "vue"
import PresentationService from "@/modules/Meeting/services/ApproachService"

import type { Approach } from "../../types/Approach";

const props = defineProps<{ approaches: Approach[] }>()

const emits = defineEmits<{
  (e: 'edit', approachId: object): void
  (e: 'remove', approachId: string): void
  (e: 'getApproaches' ): void
}>()

const edit =  (approach: object) => {
  emits("edit", toRaw(approach))
};

const remove =  (approachId: string) => {
  emits("remove", approachId)
};

const approachId = ref("")

</script>

<template>
  <div class="mt-4 relative overflow-x-auto shadow-md sm:rounded-lg">
    <table id="id_tab_presentacion" class="w-full text-sm text-left text-gray-500 dark:text-gray-400" width="100%">
      <thead class="text-xs text-gray-700 uppercase dark:text-gray-400">
        <tr>          
          <th class="px-6 py-3 bg-gray-50 bg-base-200">IntCod</th>           
          <th class="px-6 py-3">BarCod</th>        
          <th class="px-6 py-3 bg-gray-50 bg-base-200">Empaque</th>
          <th class="px-6 py-3">Precio</th>
          <th class="px-6 py-3 bg-gray-50 bg-base-200">StockMin</th>
          <th class="px-6 py-3">StockMax</th>
          <th class="px-6 py-3 bg-gray-50 bg-base-200">Estatus</th>                         
          <th class="px-6 py-3">Acción(es)</th>
        </tr>
      </thead>
      <tbody>      
        <!--tr v-for="presentation in props.presentations" :key="presentation.id">             
          <td class="px-6 py-3 bg-gray-50 bg-base-200">{{presentation.bar_cod}}</td>
          <td class="px-6 py-3">{{presentation.int_cod}}</td>
          <td class="px-6 py-3 bg-gray-50 bg-base-200" :id='presentation.packing'>{{presentation.packing_deployed}}</td>
          <td class="px-6 py-3 text-right">{{presentation.price}}</td>
          <td class="px-6 py-3 bg-gray-50 bg-base-200 text-right">{{presentation.stock_min}}</td>
          <td class="px-6 py-3 text-right">{{presentation.stock_max}}</td>
          <td class="px-6 py-3 bg-gray-50 bg-base-200">{{presentation.status}}</td>  
          <td class="px-6 py-3">
            <div class="flex items-center space-x-1">
             <AppBtn
                class="btn btn-primary btn-xs"                    
                @click="edit(presentation)"
              >
                Editar
              </AppBtn>
              <AppBtn
                @click="remove(presentation.id)"                    
                class="btn btn-danger btn-xs"                    
              >
                Eliminar
              </AppBtn>
            </div>
          </td>
        </tr-->
      </tbody>
    </table>    
  </div>  
</template>
