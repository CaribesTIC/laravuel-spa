import Http from '@/models/Http/';
import {getAuthUser, login} from '@/services/AuthService';

test('should fetch login-auth-user via http-auth-service', () => {
    const payload = [{
      email: 'user@email.ext',
      password: 'password'
    }];
    const respLogin = {
      two_factor: false
    };
    const respAuth = {
      id: 1,
      name: 'John Doe',
      email: 'user@email.ext',
      isAmin: 1
    };
  
    Http.get = vi.fn().mockResolvedValue();
    Http.post = vi.fn().mockResolvedValue(respLogin);  
    login(payload).then(
      (data) => expect(data).toEqual(respLogin)
    );

    Http.get = vi.fn().mockResolvedValue(respAuth);
    getAuthUser().then(
      (data) => expect(data).toEqual(respAuth)
    );
});
