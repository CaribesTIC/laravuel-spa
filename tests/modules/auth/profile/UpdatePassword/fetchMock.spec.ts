import { test, vi, expect } from "vitest"
import Http from "@/utils/Http";
import { updatePassword } from "@/modules/Auth/services";

test("should fetch update-password-profile via http-auth-service", () => {
  const resp = ""
  const payload = {
    current_password: "current-password",
    password: "password",
    password_confirmation: "password-confirm"
  }  
  
  Http.put = vi.fn().mockResolvedValue(resp);

  updatePassword(payload).then(
    (data) => expect(data).toEqual(resp)
  );
});
