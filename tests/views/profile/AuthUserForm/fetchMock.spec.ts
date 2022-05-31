import { test, vi, expect } from 'vitest'
import Http from '@/models/Http';
import { updateUser } from '@/services/AuthService';

test('should fetch update-user-profile via http-auth-service', () => {
  const resp = ""
  const payload = {
    name: "John Doe",
    email: "user@email.ext"
  }
  
  Http.put = vi.fn().mockResolvedValue(resp); 

  updateUser(payload).then(
    (data) => expect(data).toEqual(resp)
  );
});
