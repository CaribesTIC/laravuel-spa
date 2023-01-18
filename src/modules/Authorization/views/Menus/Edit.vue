<script lang="ts">
import { defineComponent } from 'vue'
import * as MenuService from "@/modules/Authorization/services/MenuService"
//import AppLoadingButton from '@/components/AppLoadingButton.vue'
export default defineComponent({
  components: {    
    //AppLoadingButton,
  },
  props: ['menu'],
  data() {
    return {      
      nivel: 0,
      form: {
        title: this.menu.title,
        path: this.menu.path,
        icon: this.menu.icon,
        sort: this.menu.sort,
        _method: 'PUT'
      }
    }
  },
  computed: {
    parents() {
        let arr = this.menu.alias.split(' / ');
        this.nivel = arr.length -1;        
        this.form.title = arr.pop();
        return arr;
      }
    },    
    methods: {
      validateForm() {
        let element = document.querySelector("input:invalid");
        return element === null ? true : false;
      },
      submit() {
        //console.log(this.form, this.menu.id)
        //sending.value= true
        this.form._method = 'PUT';
        return MenuService.updateMenu(this.menu.id, this.form)
          .then((response) => {
            alert( response.data.message );
            //this.$router.push( { path: '/menus' } );
            window.location.reload()
          })
          .catch((err) => {                
            console.log( err.response.data );
            //errors.value = getError(err)
          })
          //.finally(() => {
            //sending.value = false
          //});
      },     
      closeModal111: function () {
        this.$emit('closeModal1');        
      }
  }
})
</script>

<template>
  <div class="flex items-end justify-center min-h-screen pt-4 px-4 pb-20 text-center sm:block sm:p-0">
    <div class="fixed inset-0 transition-opacity">
      <div class="absolute inset-0 bg-gray-500 opacity-75"></div>
    </div>
    <!-- This element is to trick the browser into centering the modal contents. -->
    <span class="hidden sm:inline-block sm:align-middle sm:h-screen"></span>​
    <div
      class="inline-block align-bottom bg-white rounded-lg text-left overflow-hidden shadow-xl transform transition-all sm:my-8 sm:align-middle sm:max-w-lg sm:w-full"
      role="dialog"
      aria-modal="true"
      aria-labelledby="modal-headline">
      <form @submit.prevent="submit">
        <div class="bg-base-200 px-4 pt-5 pb-4 sm:p-6 sm:pb-4">
          <table style="width: 100%" id="main" border="1">                
            <tr class="text-left font-bold">
              <th colspan="2" class="px-6 pt-6 pb-4 items-center">Update menu option</th>
            </tr>
            <tr class="hover:bg-gray-100 focus-within:bg-gray-100">
              <td colspan="2">
                <table id="id_table_padre" style="width: 100%"> 
                  <tr v-for="(parent, key) in parents">
                    <td width="50%">Nivel {{ key }} </td>
                    <td>( {{ parent }} )</td>                                
                  </tr>
                </table>
              </td>                   
            </tr>
            <tr class="lospare">
              <td colspan="2">                
                <table width="100%">
                  <tr class="hover:bg-gray-100 focus-within:bg-gray-100">
                    <td align="left" id="id_td_descripcion" width="50%">
                      Option (level {{ nivel }})
                    </td>
                    <td>
                      <input
                        type="text"
                        name="menu"
                        class="form-control"
                        v-model="form.title"
                        placeholder="Opction..." />
                    </td>
                  </tr>
                  <tr class="hover:bg-gray-100 focus-within:bg-gray-100">
                    <td align="left" width="50%">
                      Path (level {{ nivel }})
                    </td>
                    <td>
                      <input
                        type="text"
                        name="path"
                        class="form-control"
                        v-model="form.path"
                        placeholder="Path..." />
                    </td>
                  </tr>
                  <tr class="hover:bg-gray-100 focus-within:bg-gray-100">
                    <td align="left" width="50%">
                      Icon (level {{ nivel }})
                    </td>
                    <td>
                      <input
                        type="text"
                        name="icon"
                        class="form-control"
                        v-model="form.icon"
                        placeholder="Icon..." />
                    </td>
                  </tr>
                  <tr class="hover:bg-gray-100 focus-within:bg-gray-100">
                    <td align="left" width="50%">
                      Sort (level {{ nivel }})
                    </td>
                    <td>
                      <input
                        type="text"
                        name="sort"
                        class="form-control"
                        v-model="form.sort"
                        placeholder="Sort...">
                    </td>
                  </tr>                            
                </table>                
              </td>
            </tr>
          </table>
        </div>
        <div class="bg-base-100 px-4 py-3 sm:px-6 sm:flex sm:flex-row-reverse">
          <!--loading-button :loading="sending" class="btn-indigo ml-auto" type="submit">Update Organization</loading-button-->
          <span class="flex w-full rounded-md shadow-sm sm:ml-3 sm:w-auto">
            <button
              type="submit"
              class="inline-flex justify-center w-full rounded-md border border-transparent px-4 py-2 bg-green-600 text-base leading-6 font-medium text-white shadow-sm hover:bg-green-500 focus:outline-none focus:border-green-700 focus:shadow-outline-green transition ease-in-out duration-150 sm:text-sm sm:leading-5">
              Update
            </button>
          </span>
          <span class="mt-3 flex w-full rounded-md shadow-sm sm:mt-0 sm:w-auto">
            <button
	          @click="closeModal111"
	          type="button"
	          class="inline-flex justify-center w-full rounded-md border border-gray-300 px-4 py-2 bg-white text-base leading-6 font-medium text-gray-700 shadow-sm hover:text-gray-500 focus:outline-none focus:border-blue-300 focus:shadow-outline-blue transition ease-in-out duration-150 sm:text-sm sm:leading-5">Cancel</button>
          </span>
        </div>
      </form>
    </div>
  </div>
</template>
