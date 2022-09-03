// @ts-nocheck
import MessageService from "@/modules/Message/services";

export default {
  getMessages(page) {
    this.loading = true;
    MessageService.getMessages(page)
      .then((response) => {
        this.setPaginatedMessages(response);
      })
      .catch((err) => {        
        this.loading = false;        
        this.error = err;
      });
  },
  postMessage(payload) {
    return MessageService.postMessage(payload).then((response) => {       
       this.setPaginatedMessages(response);
    });
  },
  setPaginatedMessages(response) {  
    this.messages = response.data.data;
    this.meta = response.data.meta;
    this.links = response.data.links;
    this.loading = false;    
  },
  paginateMessages(link) {
    this.loading = true;
    MessageService.paginateMessages(link)
      .then((response) => {
        this.setPaginatedMessages(response);
      })
      .catch((error) => {
        this.loading = false;
        this.error = err;
      });
  }
}
