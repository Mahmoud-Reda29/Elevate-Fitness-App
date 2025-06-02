import { Button } from "@/components/ui/button";
import { Form, FormControl, FormField, FormItem } from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import useLogin from "@/hooks/auth/use-login";
import { useForm } from "react-hook-form";
import { Link, useNavigate } from "react-router-dom";
import { useTranslations } from "use-intl";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import LoginHeading from "./login-heading";
import { Eye, Lock, Mail } from "lucide-react";
import SocialAuth from "@/components/common/social-auth";

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
      <LoginHeading />

      <Form {...form}>
        <form
          onSubmit={form.handleSubmit(onSubmit)}
          className="border-custom-gray-500 w-[486px] rounded-4xl border p-10"
        >
          {/* Heading */}
          <h3 className="text-custom-white-900 mb-4 text-center text-xl font-extrabold">{t("login")}</h3>

          {/* Email */}
          <FormField
            control={form.control}
            name="email"
            render={({ field }) => (
              <FormItem className="relative mb-4 flex items-center">
                {/* Mail icon */}
                <Mail className="text-custom-gray-500 absolute pl-3" />
                <FormControl>
                  {/* Input */}
                  <Input
                    {...field}
                    type="email"
                    placeholder={t("email")}
                    className="border-custom-gray-600 placeholder:text-custom-gray-500 h-12 rounded-2xl border pl-8"
                  />
                </FormControl>
              </FormItem>
            )}
          />

          {/* Password */}
          <FormField
            control={form.control}
            name="password"
            render={({ field }) => (
              <FormItem className="relative mb-2 flex items-center">
                {/* Lock icon */}
                <Lock className="text-custom-gray-500 absolute left-0 pl-3" />
                <FormControl>
                  {/* Input */}
                  <Input
                    {...field}
                    type="password"
                    placeholder={t("password")}
                    className="border-custom-gray-600 placeholder:text-custom-gray-500 h-12 rounded-2xl border pl-8"
                  />
                </FormControl>
                {/* Eye icon */}
                <Eye className="text-custom-gray-500 absolute right-0 pr-3" />
              </FormItem>
            )}
          />

          {/* Forget password */}
          <div className="text-custom-orange-900 cursor-pointer text-end underline">
            <Link to={"/forgetPassword"} className="font-bold">
              {t("forget-password")}
            </Link>
          </div>

          {/* Or */}
          <div className="text-custom-gray-500 flex items-center w-[80%] m-auto gap-4 my-6">
            <hr className="flex-1 border-t" />
            <span className="text-sm">{t("or")}</span>
            <hr className="flex-1 border-t" />
          </div>

          {/* Social */}
          <SocialAuth />

          {/* Login button */}
          <Button
            disabled={isPending || (!form.formState.isValid && form.formState.isSubmitted)}
            type="submit"
            className="bg-custom-orange-900 text-custom-white-900 mb-2 h-12 w-full cursor-pointer rounded-2xl font-extrabold"
          >
            {t("login")}
          </Button>

          {/* Register */}
          <div className="cursor-pointer text-center text-base font-bold">
            <Link to={"/register"} className="text-custom-gray-500">
              {t("no-account")}
              <span className="text-custom-orange-900 ms-1 underline">{t("register")}</span>
            </Link>
          </div>
        </form>
      </Form>
    </div>
  );
}
