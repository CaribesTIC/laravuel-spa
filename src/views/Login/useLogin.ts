import { ref, computed } from "vue"
import { useRouter } from 'vue-router';
import { useAuthStore } from '@/stores/Auth'
import AuthService from "@/services/AuthService";
import { getError } from "@/utils/helpers";

export function useLogin() {
    const router = useRouter();
    const auth = computed(() => useAuthStore())
    const error = ref(null)
    const sending = ref(false)

    const login = async () => {
        const payload = {
            email: email.value,
            password: password.value,
        }
        error.value = null;
        try {
            sending.value = true;
            await AuthService.login(payload);
            const authUser = await auth.value.getAuthUser();
            //const authUser = await this.$store.dispatch("auth/getAuthUser");
            if (authUser) {
                auth.value.setGuest({ value: "isNotGuest" });
                //this.$store.dispatch("auth/setGuest", { value: "isNotGuest" });
                router.push("/dashboard");
            } else {
                const err = Error(
                    "Unable to fetch user after login, check your API settings."
                );
                err.name = "Fetch User";
                throw err;
            }
        } catch (err) {
            error.value = getError(err);
        } finally {
            sending.value = false;
        }
    }

    return {
        login,
        error,
        sending
    }

}
