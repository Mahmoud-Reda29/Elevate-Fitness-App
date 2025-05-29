import { useTranslations } from "use-intl";

export default function Homepage() {
  const t = useTranslations();
  return (
    <div>
      <h1 className=" text-9xl bg-custom-orange-900">homepage</h1>
      {t("homepage")}
    </div>
  );
}
