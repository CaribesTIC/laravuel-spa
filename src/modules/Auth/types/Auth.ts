import type { Ref, UnwrapRef } from 'vue'

export interface FormLogin {
    email: string
    password: string
}

export interface StandaloneLogin {
    sending: Ref<UnwrapRef<boolean>>
    login: (form: FormLogin) => Promise<void>
    error: Ref<UnwrapRef<null>>
}