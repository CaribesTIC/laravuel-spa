import { test, vi, expect } from 'vitest'
/* import axios from 'axios'
 * import { Http } from '@/models/Http';
 *
 * const MyHttp = new Http({
 *   baseURL: "http://localhost:3000/"
 * })
 */

test('should fetch login-auth-user via http-auth-service', async () => {

  // await MyHttp.get("tests/API/data/data.json").then(r=>console.log(r))

  const fill = async () => {
      return (await import("../../tests/data/data.json")).default;
  }
  
  const arr = await fill()
  
  expect(arr).toEqual([
    { name: "Plain Ol' Pineapple", image: 'pineapple-original.jpg', price: 4 },
    { name: 'Dried Pineapple', image: 'pineapple-dried.jpg', price: 5 },
    { name: 'Pineapple Gum', image: 'pineapple-gum.jpg', price: 3 },
    { name: 'Pineapple T-Shirt', image: 'pineapple-tshirt.jpg', price: 12 }
  ])
    
});



