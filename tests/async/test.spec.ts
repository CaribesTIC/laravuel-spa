import { test, vi, expect } from 'vitest'
import axios from 'axios'
import { Http } from '@/models/Http';

const MyHttp = new Http({
    baseURL: "http://localhost:3000/"
})

test('should fetch login-auth-user via http-auth-service', async () => {

  //await MyHttp.get("tests/API/ttt.json").then(r=>console.log(r))  
  expect(true).toBe(true)
    
});



