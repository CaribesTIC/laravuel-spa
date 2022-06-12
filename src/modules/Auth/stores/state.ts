import type { AuthStore } from '@/modules/Auth/types/Store/AuthStore'

export default (): AuthStore => ({
  user: null,
  loading: false,
  error: '',
});
