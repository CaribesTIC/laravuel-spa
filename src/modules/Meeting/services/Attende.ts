import Http from "@/utils/Http";
import type { Attende } from "../types/Meeting/Attende";

export const getAttendes = (meetingId: string) => {  
  return Http.get(`/api/attendes/${meetingId}`);
}

export const insertAttende = (payload: Attende) => {   
  return Http.post(`/api/attendes`, payload);
}

export const updateAttende = (payload: Attende, attendeId: string) => {   
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
