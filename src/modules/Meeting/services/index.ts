import Http from "@/utils/Http";

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
  insertUser(form) {
    return Http.post(`/api/users`, form);
  },
  updateUser(userId, form) {
    return Http.post(`/api/users/${userId}`, form);
  },
  deleteUser(userId) {
    return Http.delete(`/api/users/${userId}`);
  },
  helperTablesGet() {
     return Http.get(`/api/roles/helperTables`);
  },
};
