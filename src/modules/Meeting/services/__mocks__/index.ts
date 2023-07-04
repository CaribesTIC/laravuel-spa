export default {
  async getUser(id) {
    return (await import("./data/user.json")).default.filter((u) => u.id === id)[0];
  }, 
  async getUsers (query) {
    return (await import("./data/users.json")).default;
  },
  insertUser(form) {
    return; // Http.post(`/api/users`, form);
  },
  updateUser(userId, form) {
    return; // Http.post(`/api/users/${userId}`, form);
  },
  deleteUser(userId) {
    return; // Http.delete(`/api/users/${userId}`);
  },
  helperTablesGet() {
     return; // Http.get(`/api/roles/helperTables`);
  },
}

 


