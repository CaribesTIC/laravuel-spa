import Http from "@/utils/Http";
import type { Meeting } from "../types/Meeting";

export const getMeetings = (query: string) => {  
  return Http.get(`/api/meetings/?${query}`);
}
 
export const getMeeting = (meetingId: string) => { 
  return Http.get(`/api/meetings/${meetingId}`);
}

export const insertMeeting = (payload: Meeting) => {   
  return Http.post("/api/meetings", payload);
}
  
export const updateMeeting = (meetingId: string, payload: Meeting) => {   
  return Http.put(`/api/meetings/${meetingId}`, payload);
}
  
export const deleteMeeting = (meetingId: string) => { 
  return Http.delete(`/api/meetings/${meetingId}`);
}

export const getHelpMeetings = () => {
  return Http.get(`/api/meetings-help`);
}

export default {
  getMeetings,
  getMeeting,
  insertMeeting,
  updateMeeting,
  deleteMeeting,
  getHelpMeetings
}
