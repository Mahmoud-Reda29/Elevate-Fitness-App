import HeroSection from "./_components/Hero-section";
import AboutUs from "./_components/About-us";
import NutritionMeals from "./_components/Nutrition-meals";
import ScrollBanner from "@/components/common/Scroll-banner";

export default function Homepage() {
  return (
    <>
      {/* Hero section */}
      <HeroSection />

      {/* About us */}
      <AboutUs />

      <NutritionMeals />
      <ScrollBanner />
    </>
  );
}
