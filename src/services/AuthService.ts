import Http from "@/models/Http";

export default {
    async login(payload) {
    console.log("-------------------");
    console.log(process.env.VUE_APP_API_URL);
    console.log("-------------------");
    await Http.get("/sanctum/csrf-cookie");
    return Http.post("/login", payload);
  },
  logout() {
    return Http.post("/logout");
  },
  async forgotPassword(payload) {
    await Http.get("/sanctum/csrf-cookie");
    return Http.post("/forgot-password", payload);
  },
  getAuthUser() {
    return Http.get("/api/users/auth");
  },
  async resetPassword(payload) {
    await Http.get("/sanctum/csrf-cookie");
    return Http.post("/reset-password", payload);
  },
  updatePassword(payload) {
    return Http.put("/user/password", payload);
  },
  async registerUser(payload) {
    await Http.get("/sanctum/csrf-cookie");
    return Http.post("/register", payload);
  },
  sendVerification(payload) {
    return Http.post("/email/verification-notification", payload);
  },
  updateUser(payload) {
    return Http.put("/user/profile-information", payload);
  },
};
