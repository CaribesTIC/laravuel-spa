import Http from "@/utils/Http";

export default {
  getProducts() {
    return Http.get("/api/shopcart");
  }
};
