import Http from "@/utils/Http";

const path = "/api/menus"

export const getMenus = () => {
  return Http.get(path);
}

/*export const getMenus = () => {  
  return Http.get(`${path}?page=1`);
}*/

export const getMenusChildren = (menuId) => {
  return Http.get(`${path}/children/${menuId}`);
}
