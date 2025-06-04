import { forgetAction } from "@/lib/apis/auth/forget-password.action";
import { useMutation } from "@tanstack/react-query";
import { toast } from "sonner";
import { useTranslations } from "use-intl";

export default function useForgetPasssword() {
  // Translation
  const t = useTranslations();

  // Mutation
  const { isPending, error, mutate } = useMutation({
    mutationFn: async (fields: ForgetPasswordFields) => {
      const payload = await forgetAction(fields);

      //Handling error
      if ("error" in payload) {
        throw new Error(payload.error);
      }
      return payload;
    },
    onSuccess: () => {
      toast.success(t("forget-success-noti"));
    },
    onError: (error) => {
      toast.error(error.message);
    },
    retry: false,
  });

  return { isPending, error, forget: mutate };
}
