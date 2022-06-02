interface Data {
  rows: string[];
  links: string[];
  search: string;
  sort: string;
  direction: string;
}

interface Load {
  (newParams: object): void;
}

export function useSearch(data: Data, load: Load) {

  // search
  let searchDebounceTimer: NodeJS.Timeout;

  const setSearch = (e: Event) => {
    // clear previous timer and set new
    clearTimeout(searchDebounceTimer);
    searchDebounceTimer = setTimeout(() => {
      load( { search: e.target.value} );
    }, 300);
  };

  // sort
  const setSort = (s) => { // "s" is abbreviation of "sort"
    // reverse direction if clicked twice on column
    let d = "asc";         // "d" is abbreviation of "direction"
    if (data.sort == s) {
      d = data.direction == "asc" ? "desc" : "asc";
    }
    load({direction: d, sort: s});
  };

  // filter
  const setFilter = (filter: object) => {
    load(filter);
  };

  return {
    setSearch,
    setSort,
    setFilter,
  };

}

