import init from "@/models/Http/init"; 

describe('Http', () => {
  it('should be initialized well', () => {
    expect(init.baseURL).toBe(process.env.VUE_APP_API_URL)
    expect(init.withCredentials).toBe(true)   
  })  
})
