import Http from "@/utils/Http";

const path = "/api/roles"

export const getRoles = (query) => {  
  return Http.get(`${path}/?${query}`);
}

/*export const getMenus = () => {  
  return Http.get(`${path}?page=1`);
}*/

/*export const getMenusChildren = (menuId) => {
  return Http.get(`${path}/children/${menuId}`);
}

export const insertMenu = (form) => {
  return Http.post(path, form);
}

export const updateMenu = (menuId, form) => {
  return Http.put(`${path}/${menuId}`, form);
}

export const deleteMenu = (menuId) => {
  return Http.delete(`${path}/${menuId}`);
}*/
