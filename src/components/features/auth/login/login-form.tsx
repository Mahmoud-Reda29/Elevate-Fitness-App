import { Button } from "@/components/ui/button";
import { Form, FormControl, FormField, FormItem } from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import useLogin from "@/hooks/auth/use-login";
import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import { useTranslations } from "use-intl";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import LoginHeading from "./login-heading";

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
    <div>
      {/* Login heading */}
      <LoginHeading/>

    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="border rounded-4xl p-10 border-custom-gray-500 w-[486px]">
        {/* Email */}
        <FormField
          control={form.control}
          name="email"
          render={({ field }) => (
            <FormItem className="mb-4">
              <FormControl>
                {/* Input */}
                <Input {...field} type="email" placeholder={t("email")} className="border border-custom-gray-600 h-12 rounded-2xl placeholder:text-custom-gray-500"/>
              </FormControl>
            </FormItem>
          )}
        />

        {/* Password */}
        <FormField
          control={form.control}
          name="password"
          render={({ field }) => (
            <FormItem className="mb-4">
              <FormControl>
                {/* Input */}
                <Input {...field} type="password" placeholder={t("password")} className="border border-custom-gray-600 h-12 rounded-2xl placeholder:text-custom-gray-500"/>
              </FormControl>
            </FormItem>
          )}
        />

        {/* Login button */}
        <Button
          disabled={isPending || (!form.formState.isValid && form.formState.isSubmitted)}
          type="submit"
          className="bg-custom-orange-900 text-custom-white-900 w-full h-12 font-extrabold rounded-2xl cursor-pointer"
        >
          {t("login")}
        </Button>
      </form>
    </Form>
    </div>
  );
}
