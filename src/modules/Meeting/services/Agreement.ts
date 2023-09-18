import Http from "@/utils/Http";
import type { Agreement } from "../types/Meeting/Agreement";

export const getAgreements = (meetingId: string) => {  
  return Http.get(`/api/agreements/${meetingId}`);
}

export const insertAgreement = (payload: Agreement) => {   
  return Http.post(`/api/agreements`, payload);
}

export const updateAgreement = (payload: Agreement, agreementId: string) => {   
  return Http.put(`/api/agreements/${agreementId}`, payload);
}

export const deleteAgreement = (agreementId: string) => { 
  return Http.delete(`/api/agreements/${agreementId}`);
}

export default {
  getAgreements,
  insertAgreement,
  updateAgreement,
  deleteAgreement
}
