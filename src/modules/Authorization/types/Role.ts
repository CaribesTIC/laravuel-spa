export default interface Role {    
  id?: number;
  name: string;
  description: string;
  menu_ids: number[];
  _method?: "POST" | "PUT";
}
