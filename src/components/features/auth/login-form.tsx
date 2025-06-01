import { Button } from "@/components/ui/button";
import { Form, FormControl, FormField, FormItem } from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import useLogin from "@/hooks/auth/use-login";
import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import { useTranslations } from "use-intl";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";

export default function LoginForm() {
  // Navigation
  const router = useNavigate();

  // Translation
  const t = useTranslations();

  // Variables
  const { mutate: login, isPending } = useLogin();

  // Form & Validation
  const loginFormSchema = z.object({
    email: z.string({ required_error: "Email is required" }).email("Email is invalid"),
    password: z.string({ required_error: "Password is required" }),
  });

  type Input = z.infer<typeof loginFormSchema>;

  const form = useForm<Input>({
    defaultValues: {
      email: "",
      password: "",
    },
    resolver: zodResolver(loginFormSchema),
  });

  async function onSubmit(data: LoginFields) {
    login(data, {
      onSuccess: () => {
        router("/");
      },
    });
  }

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)}>
        {/* Email */}
        <FormField
          control={form.control}
          name="email"
          render={({ field }) => (
            <FormItem>
              <FormControl>
                {/* Input */}
                <Input {...field} type="email" placeholder={t("email")} />
              </FormControl>
            </FormItem>
          )}
        />

        {/* Password */}
        <FormField
          control={form.control}
          name="password"
          render={({ field }) => (
            <FormItem>
              <FormControl>
                {/* Input */}
                <Input {...field} type="password" placeholder={t("password")} />
              </FormControl>
            </FormItem>
          )}
        />

        {/* Login button */}
        <Button
          disabled={isPending || (!form.formState.isValid && form.formState.isSubmitted)}
          type="submit"
        >
          {t("login")}
        </Button>
      </form>
    </Form>
  );
}
