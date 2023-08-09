<script setup lang="ts">
  import {ref} from 'vue'
  import FormApproach from './FormApproach.vue'
  import TableApproach from './TableApproach.vue'
  import useTabApproach from '../../composables/Meeting/useTabApproach'
  const componentKey = ref(0);
  
  const props = defineProps<{ id?: string }>()
  
  const {
    panelOpened,
    closeButtonOpened,
    closeClassOpened,  
    approaches,
    approach,
  
    editApproach,
    getApproaches,
    removeApproach,  
    submitApproach
  } = useTabPresentation(props.id)
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
              :text="`${closeButtonOpened} panel to add Approach`"
              @click="panelOpened=!panelOpened"
            />      
            <FormApproach
              v-if="panelOpened"
              class="bg-base-200 py-4 mt-2 rounded"
              :approach="approach"
              @submitApproach="submitApproach"
            />
            <TableApproach
              :key="componentKey"
              v-if="approaches"
              :approaches="approaches"
              @editApproach="editApproach"
              @getApproaches="getApproaches"
              @removeApproach="removeApproach"            
            />
          </div>
        </div>
      </div>
    </div>
  </template>
  