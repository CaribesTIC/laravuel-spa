import type { Country } from  "../Country"

export type Meeting = {
  id?: any; 
  country_id?: string | number;
  place?: string; 
  subject?: string; 
  reason?: string; 
  observation?: string; 
  country?: Country;
  _method?: 'PUT';
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
  country_id?: number;
  place?: string; 
  subject?: string; 
  reason?: string; 
  observation?: string; 
}

export type Link = {
  url: null | string;
  label: string;
  active: boolean;
}

