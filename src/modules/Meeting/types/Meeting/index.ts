

export type Meeting = {
  id?: any; 
  city_id?: any; 
  app_date?: any; 
  start_time?: any; 
  place?: string; 
  entity_id?: any; 
  dependence_id?: any; 
  subject?: string; 
  reason?: string; 
  observation?: string; 
  
}

export type MeetingTG = {
  rows: Rows;
  sort: null | string;
  direction: null | string;
  search: null | string;
}

export type Rows = {
  current_page: number;
  data: MeetingRow[];
  first_page_url: string;
  from: number;
  last_page: number;
  last_page_url: string;
  links: Link[];
  next_page_url: null | string;
  path: string;
  per_page: number;
  prev_page_url: null | string;
  to: number;
  total: number;
}

export type MeetingRow = {
  city_id?: any; 
  app_date?: any; 
  start_time?: any; 
  place?: string; 
  entity_id?: any; 
  dependence_id?: any; 
  subject?: string; 
  reason?: string; 
  observation?: string; 
}

export type Link = {
  url: null | string;
  label: string;
  active: boolean;
}

