import { useTranslations } from "use-intl";
import HeroSection from "./_components/Hero-section";
import AboutUs from "./_components/About-us";

export default function Homepage() {
  // Translation
  const t = useTranslations();

  return (
    <>
      {/* Hero section */}
      <HeroSection />

      {/* About us */}
      <AboutUs />
      {t("homepage")}
    </>
  );
}
