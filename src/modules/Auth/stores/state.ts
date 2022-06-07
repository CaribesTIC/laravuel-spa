import { IAuthStore } from '@/Interfaces/Store/IAuthStore'

export default (): IAuthStore => ({
  user: null,
  loading: false,
  error: '',
});
