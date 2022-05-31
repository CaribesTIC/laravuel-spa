import * as API from "@/services/API";

export default {    
  getUsers(query) {  
    return API.apiClient.get(`/users/?${query}`);
  }  
};
