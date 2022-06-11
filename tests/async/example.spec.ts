import { test, vi, expect } from "vitest"
import * as AuthService from "../apiMock/AuthService"

test('should fetch login-auth-user via http-auth-service', async () => {
  
  const arr = await AuthService.example()
  
  expect(arr).toEqual([
    { name: "Plain Ol' Pineapple", image: 'pineapple-original.jpg', price: 4 },
    { name: 'Dried Pineapple', image: 'pineapple-dried.jpg', price: 5 },
    { name: 'Pineapple Gum', image: 'pineapple-gum.jpg', price: 3 },
    { name: 'Pineapple T-Shirt', image: 'pineapple-tshirt.jpg', price: 12 }
  ])
  
  const updateUser = await AuthService.updateUser()
  
  expect(updateUser).toEqual("User updated.");
    
});
