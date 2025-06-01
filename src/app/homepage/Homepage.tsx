import LoginForm from "@/components/features/auth/login-form";
import { useTranslations } from "use-intl";

export default function Homepage() {
  // Translation
  const t = useTranslations();

  return (
    <div>
      <h1 className="bg-custom-orange-900 text-9xl">homepage (hodaaaa elevate)</h1>
      {t("homepage")}

      <LoginForm/>
    </div>
  );
}
