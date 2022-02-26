import { InitInterface } from "./init.interface" 

export default<InitInterface> {  
  baseURL: process.env.VUE_APP_API_URL,  
  withCredentials: true, 
  handleError(error: any) {
    //if (
    //  error.response &&
    //  [401, 419].includes(error.response.status) &&
    //  store.getters["auth/authUser"] &&
    //  !store.getters["auth/guest"]
    //) {
    //  store.dispatch("auth/logout");
    //}
    return Promise.reject(error);
  }
}
