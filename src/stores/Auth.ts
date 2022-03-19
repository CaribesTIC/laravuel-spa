import { defineStore } from 'pinia'
import { getError } from "@/utils/helpers";
import router from "@/router";
import AuthService from "@/services/AuthService";
import { IAuthStore } from '@/Interfaces/Store/IAuthStore'

export const useAuthStore = defineStore('auth', {
  state: (): IAuthStore => ({
    user: null,
    loading: false,
    error: '',
  }),
  actions: {
    logout() {
      return AuthService.logout()
        .then(() => {
          this.user = null;
          this.setGuest({ value: "isGuest" });                    
          if (router.currentRoute.value.name !== "login")
            router.push({ path: "/login" });
        })
        .catch((error) => {                  
          this.error = getError(error);
        });
    },
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
    setGuest({ value }: { value: string}) {
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
    isError: (state) => {
      return state.error;
    },
    isLoading: (state) => {
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
    }
  }
})
