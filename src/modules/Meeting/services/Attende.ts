import Http from "@/utils/Http";
import type { Attende } from "../types/Attende";

export const getAttendes = (attendeId: string) => {  
  return Http.get(`/api/presentationsattendes/${meetingId}`);
}

export const insertAttende = (payload: Attendes) => {   
  return Http.post(`/api/attendes`, payload);
}

export const updateAttende = (payload: Attendes, attendesId: string) => {   
  return Http.put(`/api/attendes/${attendeId}`, payload);
}

export const deleteAttende = (attendeId: string) => { 
  return Http.delete(`/api/attendes/${attendeId}`);
}

export default {
  getAttendes,
  insertAttende,
  updateAttende,
  deleteAttende
}
