import { describe, it, vi, expect } from 'vitest'
import Http from '@/utils/Http';
import UserService from "@/modules/User/services";

describe('Users/CreateOrEdit Component',  () => {
  const user = {
    name: "John Doe",
    email: "user@email.ext",
    password: "password",
    role_id: 1
  }
    
  it('should fetch insert-user via http-users-service', async () => {
    const resp = { message: "Usuario creado" }

    Http.put = vi.fn().mockResolvedValue(resp); 

    UserService.insertUser(user).then(
      (data) => expect(data).toEqual(resp)
    )
  })
  
  it('should fetch update-user via http-users-service', async () => {
    const resp = { message: "Usuario actualizado" }

    Http.put = vi.fn().mockResolvedValue(resp); 

    UserService.updateUser("1", user).then(
      (data) => expect(data).toEqual(resp)
    )
  })
})
