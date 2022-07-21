export default interface User {
  id?: string;
  name: string | null;
  email: string | null;
  password: string | null;
  role_id: string | null;
}
