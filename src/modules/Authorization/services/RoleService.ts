import Http from "@/utils/Http";

const path = "/api/roles"

export const getRoles = (query) => {  
  return Http.get(`${path}/?${query}`);
}

export const getRole = (roleId) => {
  return Http.get(`${path}/${roleId}`);
}

export const insertRole = (form) => {
  return Http.post(path, form);
}

export const updateRole = (roleId, form) => {
  return Http.put(`${path}/${roleId}`, form);
}

export const deleteRole = (roleId) => {
  return Http.delete(`${path}/${roleId}`);
}
