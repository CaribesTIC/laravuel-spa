

export type Position = {
  id?: string | number;
  name?: string; 
  
  _method?: 'PUT';
}

export type PositionTG = {
  rows: Rows;
  sort: null | string;
  direction: null | string;
  search: null | string;
}

export type Rows = {
  current_page: number;
  data: PositionRow[];
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

export type PositionRow = {
  name?: string; 
}

export type Link = {
  url: null | string;
  label: string;
  active: boolean;
}

