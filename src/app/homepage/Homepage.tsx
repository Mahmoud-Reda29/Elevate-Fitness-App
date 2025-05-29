import { useTranslations } from "use-intl";

export default function Homepage() {
  const t = useTranslations();
  return <div>{t("homepage")}</div>;
}
