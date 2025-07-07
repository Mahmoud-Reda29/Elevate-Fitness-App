import { useTranslations } from "use-intl";

export default function LoginHeading() {
  // Translation
  const t = useTranslations();

  return (
    <div className="mb-14 flex flex-col gap-7 text-center">
      {/* Heading */}
      <p className="text-custom-black-900 text-sm">{t("hey-there")}</p>

      <h2 className="text-custom-black-900 text-5xl font-extrabold">{t("welcome-back")}</h2>
    </div>
  );
}
