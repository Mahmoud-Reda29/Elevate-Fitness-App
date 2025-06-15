import { LoginAuth } from "@/components/apis/login-api";
import { useMutation } from "@tanstack/react-query";
import { toast } from "sonner";
import { useTranslations } from "use-intl";

export default function useLogin() {
  // Translation
  const t = useTranslations()

  const { mutate, error, isPending } = useMutation({
    mutationFn: async (value: LoginFields) => {
      const payload = await LoginAuth(value);

      return payload;
    },
    onError: () => {
      toast.error(t("failed-login"))
    },
    onSuccess: () => {
      toast.success(t("success-login"))
    },
  });

  return {mutate, error, isPending}
}
