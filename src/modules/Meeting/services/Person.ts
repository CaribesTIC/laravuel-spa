import Http from "@/utils/Http";
import type { Person } from "../types/Person";

export const getPeople = (query: string) => {  
  return Http.get(`/api/people/?${query}`);
}
 
export const getPerson = (personId: string) => { 
  return Http.get(`/api/people/${personId}`);
}

export const insertPerson = (payload: Person) => {   
  return Http.post("/api/people", payload);
}
  
export const updatePerson = (personId: string, payload: Person) => {   
  return Http.put(`/api/people/${personId}`, payload);
}
  
export const deletePerson = (personId: string) => { 
  return Http.delete(`/api/people/${personId}`);
}

export const getHelpPeople = () => {
  return Http.get(`/api/people-help`);
}

export default {
  getPeople,
  getPerson,
  insertPerson,
  updatePerson,
  deletePerson,
  getHelpPeople
}
