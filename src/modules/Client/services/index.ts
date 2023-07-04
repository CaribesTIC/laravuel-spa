import Http from "@/utils/Http";
import type { Client } from "../types/Client";

export const getClients = (query: string) => {  
  return Http.get(`/api/clients/?${query}`);
}
 
export const getClient = (clientId: string) => { 
  return Http.get(`/api/clients/${clientId}`);
}

export const insertClient = (payload: Client) => {   
  return Http.post("/api/clients", payload);
}
  
export const updateClient = (clientId: string, payload: Client) => {   
  return Http.put(`/api/clients/${clientId}`, payload);
}
  
export const deleteClient = (clientId: string) => { 
  return Http.delete(`/api/clients/${clientId}`);
}

/*export const helperTablesGet = () => {
  return Http.get(`/api/clients/helperTables`);
}*/

export default {
  getClients,
  getClient,
  insertClient,
  updateClient,
  deleteClient
  //, helperTablesGet
}