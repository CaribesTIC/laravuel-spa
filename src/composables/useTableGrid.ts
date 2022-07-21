import { useRouter, useRoute } from 'vue-router'
import type { RouteLocationNormalizedLoaded, Router } from 'vue-router'

interface Data {
  rows: string[];
  links: string[];
  search: string;
  sort: string;
  direction: string;
}

interface TableGrid {
  route: RouteLocationNormalizedLoaded;
  router: Router;

  setSearch: (e: Event) => void;
  setSort: (s: "asc" | "des") => void;
}

export default (data: Data, path: string): TableGrid => {
  const router = useRouter()
  const route = useRoute()

  // search
  let searchDebounceTimer: NodeJS.Timeout

  const setSearch = (e: Event): void => {
    // clear previous timer and set new
    clearTimeout(searchDebounceTimer)
    searchDebounceTimer = setTimeout(() => {
      load({ search: (e.target as HTMLInputElement).value })
    }, 300)
  }

  // sort
  const setSort = (s: "asc" | "des"): void => { // "s" is abbreviation of "sort"
    // reverse direction if clicked twice on column
    let d = "asc";         // "d" is abbreviation of "direction"
    if (data.sort == s) {
      d = data.direction == "asc" ? "desc" : "asc";
    }
    load({direction: d, sort: s})
  };
  
  // setLoad
  const load = (newParams: object): void => {
    const params = {
      search: data.search || "",
      sort: data.sort || "",
      direction: data.direction || "",
      ...newParams,
    }

    router.push({
      path,
      query: {
        ...route.query,
        ...params
      }
    })
  }

  return {
    route,
    router,

    setSearch,
    setSort,
  }
}

