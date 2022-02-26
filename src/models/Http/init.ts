export default {  
  baseURL: process.env.VUE_APP_API_URL,  
  withCredentials: true, 
  handleError(error) {
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
