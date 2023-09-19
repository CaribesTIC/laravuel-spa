

export type Dependency = {
  id?: string | number;
  name?: string; 
  
  _method?: 'PUT';
}

export type DependencyTG = {
  rows: Rows;
  sort: null | string;
  direction: null | string;
  search: null | string;
}

export type Rows = {
  current_page: number;
  data: DependencyRow[];
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

export type DependencyRow = {
  name?: string; 
}

export type Link = {
  url: null | string;
  label: string;
  active: boolean;
}

