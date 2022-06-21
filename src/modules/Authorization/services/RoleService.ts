import Http from "@/utils/Http";

const path = "/api/roles"

export const getRoles = (query) => {  
  return Http.get(`${path}/?${query}`);
}

export const getRole = (roleId) => {
  return Http.get(`${path}/${roleId}`);
}
