import { defineStore } from 'pinia'
//import { getError } from "@/utils/helpers";
import router from "@/router";
import AuthService from "@/services/AuthService";

export const useAuthStore = defineStore('auth', {
  state: () => ({
    user: null,
    loading: false,
    error: null,
  }),
  actions: {  
    async getAuthUser() {         
      this.loading = true;
      try {
        const response = await AuthService.getAuthUser();        
        this.user = response.data.data;        
        this.loading = false;
        return response.data.data;
      } catch (error) {
        this.loading = false;        
        this.user = null;        
        this.error = error//getError(error);
      }
    },
    setGuest({ value }) {
      window.localStorage.setItem("guest", value);
    },   
  },
  //getters: {
  //  double: (state) => state.count * 2,
  //},
})
