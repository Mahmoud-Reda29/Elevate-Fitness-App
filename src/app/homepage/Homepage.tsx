import HeroSection from "./_components/Hero-section";
import AboutUs from "./_components/About-us";
import NutritionMeals from "./_components/Nutrition-meals";

export default function Homepage() {
  return (
    <>
      {/* Hero section */}
      <HeroSection />

      {/* About us */}
      <AboutUs />

      <NutritionMeals />
    </>
  );
}
