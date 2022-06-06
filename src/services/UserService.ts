import Http from "@/models/Http";

export default {
  getUser(userId) {
    return Http.get(`/api/users/${userId}`);
  },      
  getUsers(query) {  
    return Http.get(`/api/users/?${query}`);
  },  
  //paginateUsers(link) {
  //  return Http.get(link);
  //},
  helperTablesGet() {
     return Http.get(`/api/user/helperTables`);
  },
  insertUser(form) {
    return Http.post(`/api/users`, form);
  },
  updateUser(userId, form) {
    return Http.post(`/api/users/${userId}`, form);
  },
  deleteUser(userId) {
    return Http.delete(`/api/users/${userId}`);
  }
};
