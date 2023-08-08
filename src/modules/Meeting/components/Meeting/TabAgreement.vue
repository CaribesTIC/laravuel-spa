<script setup lang="ts">
  import {ref} from 'vue'
  //import FormAgreement from './FormAgreement.vue'
  //import TableAgreement from './TableAgreement.vue'
  //import useTabAgreement from '../../composables/Meeting/useTabAgreement'
  const componentKey = ref(0);
  
  const props = defineProps<{ id?: string }>()
  
  /*const {
    panelOpened,
    closeButtonOpened,
    closeClassOpened,  
    agreements,
    agreement,
  
    editAgreement,
    getAgreements,
    removeAgreement,  
    submitAgreement
  } = useTabPresentation(props.id)*/
  </script>
  
  <template>
    <div class="demo-tab">
      <div class="form-group row">
        <div class="col-sm-12">
          <div align="center">     
            <!--AppBtn
              class="btn p-8"
              type="text"                 
              data-testid="click-btn"
              :class="closeClassOpened"
              :text="`${closeButtonOpened} panel to add Agreement`"
              @click="panelOpened=!panelOpened"
            />      
            <FormAgreement
              v-if="panelOpened"
              class="bg-base-200 py-4 mt-2 rounded"
              :agreement="agreement"
              @submitAgreement="submitAgreement"
            />
            <TableAgreement
              :key="componentKey"
              v-if="agreements"
              :agreements="agreements"
              @editAgreement="editAgreement"
              @getAgreements="getAgreements"
              @removeAgreement="removeAgreement"            
            /-->
          </div>
        </div>
      </div>
    </div>
  </template>
  