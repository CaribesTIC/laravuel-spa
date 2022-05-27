import { test, vi, expect } from 'vitest'
import Http from '@/models/Http';
import { updateUser } from '@/services/AuthService';

test('should fetch login-auth-user via http-auth-service', () => {
    const payload = {
      name: "John Doe",
      email: "user@email.ext"
    }

    const resp = ""
  
    Http.put = vi.fn().mockResolvedValue(resp);  
    updateUser(payload).then(
      (data) => expect(data).toEqual(resp)
    );

});
