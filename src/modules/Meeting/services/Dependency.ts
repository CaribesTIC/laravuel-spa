import Http from "@/utils/Http";
import type { Dependency } from "../types/Dependency";

export const getDependencies = (query: string) => {  
  return Http.get(`/api/dependencies/?${query}`);
}
 
export const getDependency = (dependencyId: string) => { 
  return Http.get(`/api/dependencies/${dependencyId}`);
}

export const insertDependency = (payload: Dependency) => {   
  return Http.post("/api/dependencies", payload);
}
  
export const updateDependency = (dependencyId: string, payload: Dependency) => {   
  return Http.put(`/api/dependencies/${dependencyId}`, payload);
}
  
export const deleteDependency = (dependencyId: string) => { 
  return Http.delete(`/api/dependencies/${dependencyId}`);
}

export const getHelpDependencies = () => {
  return Http.get(`/api/dependencies-help`);
}

export default {
  getDependencies,
  getDependency,
  insertDependency,
  updateDependency,
  deleteDependency,
  getHelpDependencies
}
