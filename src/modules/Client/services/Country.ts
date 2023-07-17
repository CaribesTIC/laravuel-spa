import Http from "@/utils/Http";
import type { Country } from "../types/Country";

export const getCountries = (query: string) => {  
  return Http.get(`/api/countries/?${query}`);
}
 
export const getCountry = (countryId: string) => { 
  return Http.get(`/api/countries/${countryId}`);
}

export const insertCountry = (payload: Country) => {   
  return Http.post("/api/countries", payload);
}
  
export const updateCountry = (countryId: string, payload: Country) => {   
  return Http.put(`/api/countries/${countryId}`, payload);
}
  
export const deleteCountry = (countryId: string) => { 
  return Http.delete(`/api/countries/${countryId}`);
}

/*export const helperTablesGet = () => {
  return Http.get(`/api/countries/helperTables`);
}*/

export default {
  getCountries,
  getCountry,
  insertCountry,
  updateCountry,
  deleteCountry
  //, helperTablesGet
}