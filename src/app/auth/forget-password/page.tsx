import z from "zod";
import { useForm, type SubmitHandler } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { Input } from "@/components/ui/input";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { useTranslations } from "use-intl";
import { Button } from "@/components/ui/button";
import useForgetPasssword from "@/hooks/auth/use-forget-passsword";

export default function ForgetPassword() {
  // Translation
  const t = useTranslations();

  //Hooks
  const { forget, isPending, error } = useForgetPasssword();

  // Schema
  const Schema = z.object({
    email: z.string({ required_error: t("email-required") }).min(1, t("email-required")),
  });

  // Types
  type ForgetType = z.infer<typeof Schema>;

  //Forms
  const form = useForm<ForgetType>({
    defaultValues: { email: "" },
    resolver: zodResolver(Schema),
  });

  // Functions
  const onSubmit: SubmitHandler<ForgetType> = (values) => {
    // Muatation fun
    forget(values);
  };

  return (
    <div>
      <h2 className="text-center text-5xl font-extrabold text-white capitalize">
        {t("forget-password-title")}
      </h2>
      <div className="border-custom-gray-400 mt-5 items-center justify-center gap-2 rounded-[50px] border p-10">
        {/* Forget form */}
        <Form {...form}>
          <form onSubmit={form.handleSubmit(onSubmit)} className="flex flex-col gap-6">
            <FormField
              control={form.control}
              name="email"
              render={({ field }) => (
                <FormItem>
                  {/* Label */}
                  <FormLabel className="mx-auto text-2xl font-normal text-white capitalize">
                    {t("email")}
                  </FormLabel>
                  <FormControl>
                    {/* Email input */}
                    <div className="relative">
                      <Input
                        type="email"
                        {...field}
                        placeholder={t("email")}
                        className="w-full rounded-3xl border-white pl-10 text-white"
                      />
                    </div>
                  </FormControl>

                  {/* Feedback */}
                  <FormMessage />
                </FormItem>
              )}
            />
            <div className="flex flex-col gap-2">
              {/*   Error Feeedback */}
              {error && <div className="text-white">{error.message}</div>}

              {/* Submit button */}
              <Button
                className="bg-custom-orange-900 flex-1 rounded-3xl px-4 py-2 text-white"
                disabled={isPending || !form.formState.isValid}
              >
                {t("sent-otp-btn")}
              </Button>
            </div>
          </form>
        </Form>
      </div>
    </div>
  );
}
