import { useTranslations } from "use-intl";

export default function Homepage() {
  const t = useTranslations();
  return (
    <div>
      <h1 className="bg-custom-orange-900 text-9xl">homepage (hodaaaa)</h1>
      {t("homepage")}
    </div>
  );
}
