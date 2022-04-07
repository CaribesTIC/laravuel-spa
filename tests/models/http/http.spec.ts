import Http from '@/models/Http';

test('should fetch users', () => {
  const users = [{name: 'Bob'}];
  const resp = {data: users};

  Http.get = vi.fn().mockResolvedValue(resp);

  return Http.get('/users').then(({data}) => expect(data).toEqual(users));
});
