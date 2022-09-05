import Http from '@/utils/Http';

test('should fetch users', () => {
  const users = [{name: 'Bob'}];
  const resp = {data: users};

  /* Http.get = vi.fn().mockResolvedValue(resp);  
   * Http.patch = vi.fn().mockResolvedValue(resp);
   * Http.post = vi.fn().mockResolvedValue(resp);
   * Http.put = vi.fn().mockResolvedValue(resp);
  */ Http.delete = vi.fn().mockResolvedValue(resp);

  Http.get('/users').then(({data}) => expect(data).toEqual(users));
  Http.patch('/users', {}).then(({data}) => expect(data).toEqual(users));
  Http.post('/users', {}).then(({data}) => expect(data).toEqual(users));
  Http.put('/users/1', {}).then(({data}) => expect(data).toEqual(users));
  Http.delete('/users/1').then(({data}) => expect(data).toEqual(users));
});


