export interface AuthStore {
    user: {
        isAdmin?: boolean
    }
    loading: boolean
    error: string
}
