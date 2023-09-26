<script setup lang="ts">
import { toRaw, ref } from "vue"
//import AgreementService from "@/modules/Meeting/services/Agreement"
import type { Agreement } from "../../types/Meeting/Agreement";

const props = defineProps<{ agreements: Agreement[] }>()

const emits = defineEmits<{
  (e: 'editAgreement', agreementId: object): void
  (e: 'removeAgreement', agreementId: string): void
  (e: 'getAgreements' ): void
}>()

const editAgreement =  (agreement: object) => {
  emits("editAgreement", toRaw(agreement))
};

const removeAgreement =  (agreementId: string) => {
  emits("removeAgreement", agreementId)
};

const agreementId = ref("")

</script>

<template>
  <div class="mt-4 relative overflow-x-auto shadow-md sm:rounded-lg">
    <table id="id_tab_presentacion" class="w-full text-sm text-left text-gray-500 dark:text-gray-400" width="100%">
      <thead class="text-xs text-gray-700 uppercase dark:text-gray-400">
        <tr>
          
          <th class="px-6 py-3 bg-gray-50 bg-base-200">agreement</th>
          <th class="px-6 py-3 ">responsible</th>
          <th class="px-6 py-3 bg-gray-50 bg-base-200">observation</th>
          <th class="px-6 py-3 ">Acción(es)</th>
        </tr>
      </thead>
      <tbody>      
        <tr v-for="agreement in props.agreements" :key="agreement.id">



          
            <td class="px-6 py-3 bg-gray-50 bg-base-200">

              

              {{ agreement.agreement }}


              




            </td>
           
            <td class="px-6 py-3 ">

              

              {{ agreement.responsible }}


              




            </td>
           
            <td class="px-6 py-3 bg-gray-50 bg-base-200">

              

              {{ agreement.observation }}


              




            </td>
           




          <!--td class="px-6 py-3 bg-gray-50 bg-base-200">{{agreement.bar_cod}}</td>
          <td class="px-6 py-3">{{agreement.int_cod}}</td>
          <td class="px-6 py-3 text-right">{{agreement.price}}</td>
          <td class="px-6 py-3 bg-gray-50 bg-base-200 text-right">{{agreement.stock_min}}</td>
          <td class="px-6 py-3 text-right">{{agreement.stock_max}}</td>
          <td class="px-6 py-3 bg-gray-50 bg-base-200">{{agreement.status}}</td-->  
          <td class="px-6 py-3">
            <div class="flex items-center space-x-1">
             <AppBtn
                class="btn btn-primary btn-xs"                    
                @click="editAgreement(agreement)"
              >
                Editar
              </AppBtn>
              <AppBtn
                @click="removeAgreement(agreement.id)"                    
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
