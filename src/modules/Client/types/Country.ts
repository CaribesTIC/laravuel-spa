export type Country = {
  id?: number;
  name?: string; 
}

export interface CountryTG {
  rows: Rows;
}

export interface Rows {
  current_page: number;
  data: CountryRow[];
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

export interface CountryRow {
  name?: string; 
}

export interface Link {
  url: null | string;
  label: string;
  active: boolean;
}

