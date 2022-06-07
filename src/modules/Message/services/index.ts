import Http from "@/utils/Http";

export default {
  getMessages(page) {  
    return Http.get(`/api/messages/?page=${page}`);
  },
  postMessage(payload) {
    return Http.post(`/api/messages`, payload);
  },
  paginateMessages(link) {
    return Http.get(link);
  },
};
