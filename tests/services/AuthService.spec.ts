import { authClient } from "@/services/AuthService.js"; 

describe('AuthService', () => {
  it('should be configured well', () => {
    expect(authClient.defaults.baseURL).toBe(process.env.VUE_APP_API_URL)
    expect(authClient.defaults.withCredentials).toBe(true)
  })
})
