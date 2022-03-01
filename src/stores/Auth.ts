import { defineStore } from 'pinia'
import { getError } from "@/utils/helpers";
//import router from "@/router";
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
        this.error = getError(error);
      }
    },
    setGuest({ value }) {
      window.localStorage.setItem("guest", value);
    },   
  },
  getters: {
    authUser: (state) => {
      return state.user;
    },
    isAdmin: (state) => {
      return state.user ? state.user.isAdmin : false;
    },
    /*error: (state) => {
      return state.error;
    },
    loading: (state) => {
      return state.loading;
    },
    loggedIn: (state) => {
      return !!state.user;
    },
    guest: () => {
      const storageItem = window.localStorage.getItem("guest");
      if (!storageItem) return false;
      if (storageItem === "isGuest") return true;
      if (storageItem === "isNotGuest") return false;
    }*/    
  }
})
