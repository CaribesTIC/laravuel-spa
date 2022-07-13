export type GenericFunction = <T>(arg: T) => T;
export type GenericObject = { [key: string]: any };
export type Paiload = string
  | { [key: string]: any } // GenericObject
  | ArrayBuffer
  | ArrayBufferView 
  | URLSearchParams
  | FormData
  | File 
  | Blob;

export type Primitive = bigint
  | boolean
  | null
  | number
  | string
  | symbol
  | undefined;
export type JSONValue = Primitive | JSONObject | JSONArray;
export interface JSONObject { [key: string]: JSONValue; }
export interface JSONArray extends Array<JSONValue> { }

/*
  const obj3: JSONObject = { a: 1 }; // Works
  const obj5: JSONObject = { a: { b: 1 } }; // Works
  const obj6: JSONObject = { a: { b: { c: 1 } } }; // Works
  const obj7: JSONObject = { a: { b: { c: { d: 1 } } } }; // Works
*/

//https://github.com/axios/axios
//https://github.com/axios/axios/issues/3815
//https://stackoverflow.com/questions/42027864/is-there-any-way-to-target-the-plain-javascript-object-type-in-typescript
//https://github.com/microsoft/TypeScript/issues/3496#issuecomment-128553540
//https://stackoverflow.com/questions/56742085/typescript-generic-that-is-any-plain-object
//https://stackoverflow.com/questions/48425137/typescript-type-of-generic-function