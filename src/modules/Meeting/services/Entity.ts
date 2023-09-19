import Http from "@/utils/Http";
import type { Entity } from "../types/Entity";

export const getEntities = (query: string) => {  
  return Http.get(`/api/entities/?${query}`);
}
 
export const getEntity = (entityId: string) => { 
  return Http.get(`/api/entities/${entityId}`);
}

export const insertEntity = (payload: Entity) => {   
  return Http.post("/api/entities", payload);
}
  
export const updateEntity = (entityId: string, payload: Entity) => {   
  return Http.put(`/api/entities/${entityId}`, payload);
}
  
export const deleteEntity = (entityId: string) => { 
  return Http.delete(`/api/entities/${entityId}`);
}

export const getHelpEntities = () => {
  return Http.get(`/api/entities-help`);
}

export default {
  getEntities,
  getEntity,
  insertEntity,
  updateEntity,
  deleteEntity,
  getHelpEntities
}
