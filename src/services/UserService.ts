import * as API from "@/services/API";

export default {

  getUser(userId) {
    return API.apiClient.get(`/users/${userId}`);
  },      
  getUsers(query) {  
    return API.apiClient.get(`/users/?${query}`);
  },  
  //paginateUsers(link) {
  //  return API.apiClient.get(link);
  //},
  helperTablesGet() {
     return API.apiClient.get(`/user/helperTables`);
  },
  insertUser(form) {
    return API.apiClient.post(`/users`, form);
  },
  updateUser(userId, form) {
    return API.apiClient.post(`/users/${userId}`, form);
  }
};
