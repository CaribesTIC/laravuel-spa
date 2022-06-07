export type Paiload 
  = string
  | { [key: string]: any } // GenericObject
  | ArrayBuffer
  | ArrayBufferView 
  | URLSearchParams
  | FormData
  | File 
  | Blob;