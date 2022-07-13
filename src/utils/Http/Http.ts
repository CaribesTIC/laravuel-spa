import type { GenericFunction, GenericObject } from "@/utils/Types"

export interface Init {  
  baseURL?: string;
  withCredentials?: boolean;
  handleError?: GenericFunction;
  handleSuccess?:  GenericFunction;
  customHeaders?: GenericObject;
  customParams?: GenericObject | URLSearchParams;
}
