import Http from "@/utils/Http";
import type { Agreement } from "../types/Agreement";

export const getAgreements = (meetingId: string) => {  
  return Http.get(`/api/agreements/${meetingId}`);
}

export const insertAgreement = (payload: Agreements) => {   
  return Http.post(`/api/agreements`, payload);
}

export const updateAgreement = (payload: Agreements, agreementId: string) => {   
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
