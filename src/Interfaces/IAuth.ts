import { Ref, UnwrapRef } from 'vue'

export interface IFormLogin {
    email: string
    password: string
}

export interface IStandaloneLogin {
    sending: Ref<UnwrapRef<boolean>>
    login: (form: IFormLogin) => Promise<void>
    error: Ref<UnwrapRef<null>>
}