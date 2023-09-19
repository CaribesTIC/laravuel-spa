import Http from "@/utils/Http";
import type { Position } from "../types/Position";

export const getPositions = (query: string) => {  
  return Http.get(`/api/positions/?${query}`);
}
 
export const getPosition = (positionId: string) => { 
  return Http.get(`/api/positions/${positionId}`);
}

export const insertPosition = (payload: Position) => {   
  return Http.post("/api/positions", payload);
}
  
export const updatePosition = (positionId: string, payload: Position) => {   
  return Http.put(`/api/positions/${positionId}`, payload);
}
  
export const deletePosition = (positionId: string) => { 
  return Http.delete(`/api/positions/${positionId}`);
}

export const getHelpPositions = () => {
  return Http.get(`/api/positions-help`);
}

export default {
  getPositions,
  getPosition,
  insertPosition,
  updatePosition,
  deletePosition,
  getHelpPositions
}
