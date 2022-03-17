export interface IAuthStore {
    user: {
        isAdmin?: boolean
    }
    loading: boolean
    error: string
}