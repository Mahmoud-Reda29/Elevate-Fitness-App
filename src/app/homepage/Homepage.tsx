import { useTranslations } from "use-intl";
import HeroSection from "./_components/Hero-section";

export default function Homepage() {
  // Translation
  const t = useTranslations();

  return (
    <>
      <HeroSection />
      {t("homepage")}
    </>
  );
}
