<script setup lang="ts">
  import {ref} from 'vue'
  import FormAttende from './FormAttende.vue'
  import TableAttende from './TableAttende.vue'
  import useTabAttende from '../../composables/Meeting/useTabAttende'
  const componentKey = ref(0);
  
  const props = defineProps<{ id?: string }>()
  
  const {
    panelOpened,
    closeButtonOpened,
    closeClassOpened,  
    attendes,
    attende,
  
    editAttende,
    getAttendes,
    removeAttende,  
    submitAttende
  } = useTabAttende(props.id)
  </script>
  
  <template>
    <div class="demo-tab">
      <div class="form-group row">
        <div class="col-sm-12">
          <div align="center">     
            <AppBtn
              class="btn p-8"
              type="text"                 
              data-testid="click-btn"
              :class="closeClassOpened"
              :text="`${closeButtonOpened} panel to add Attende`"
              @click="panelOpened=!panelOpened"
            />      
            <FormAttende
              v-if="panelOpened"
              class="bg-base-200 py-4 mt-2 rounded"
              :attende="attende"
              @submitAttende="submitAttende"
            />
            <TableAttende
              :key="componentKey"
              v-if="attendes"
              :attendes="attendes"
              @editAttende="editAttende"
              @getAttendes="getAttendes"
              @removeAttende="removeAttende"            
            />
          </div>
        </div>
      </div>
    </div>
  </template>
  
