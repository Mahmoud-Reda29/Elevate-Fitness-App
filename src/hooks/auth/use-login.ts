import { LoginAuth } from "@/components/apis/login-api";
import { useMutation } from "@tanstack/react-query";
import { toast } from "sonner";

export default function useLogin() {
  const { mutate, error, isPending } = useMutation({
    mutationFn: async (value: LoginFields) => {
      const payload = await LoginAuth(value);

      return payload;
    },
    onError: () => {
      toast.error("ERROR")
    },
    onSuccess: () => {
      toast.success("login successfully")
    },
  });

  return {mutate, error, isPending}
}
