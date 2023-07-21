export type Client = {
  id?: string | number;
  email?: string; 
  type?: boolean | ""; 
  identification_card?: string; 
  business_name?: string; 
  phone?: string; 
  country_id?: string | number;
  domicile?: string; 
}

export interface ClientTG {
  rows: Rows;
}

export interface Rows {
  current_page: number;
  data: ClientRow[];
  first_page_url: string;
  from: number;
  last_page: number;
  last_page_url: string;
  links: Link[];
  next_page_url: string;
  path: string;
  per_page: number;
  prev_page_url: null;
  to: number;
  total: number;
}

export interface ClientRow {
  email?: string; 
  type?: boolean; 
  identification_card?: string; 
  business_name?: string; 
  phone?: string; 
  country_id?: number;
  domicile?: string; 
}

export interface Link {
  url: null | string;
  label: string;
  active: boolean;
}

