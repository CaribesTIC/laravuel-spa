import Http from "@/utils/Http";
import type { Approach } from "../types/Approach";

export const getApproaches = (meetingId: string) => {  
  return Http.get(`/api/approaches/${meetingId}`);
}

export const insertApproach = (payload: Approaches) => {   
  return Http.post(`/api/approaches`, payload);
}

export const updateApproach = (payload: Approaches, approachId: string) => {   
  return Http.put(`/api/approaches/${approachId}`, payload);
}

export const deleteApproach = (approachId: string) => { 
  return Http.delete(`/api/approaches/${approachId}`);
}

export default {
  getApproaches,
  insertApproach,
  updateApproach,
  deleteApproach
}
