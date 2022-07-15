import { test, vi, expect } from 'vitest'
import Http from '@/utils/Http';
import { updateUser } from '@/modules/Auth/services';

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
