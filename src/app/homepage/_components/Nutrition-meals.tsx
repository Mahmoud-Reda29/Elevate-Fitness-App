import { useTranslations } from "use-intl";
import FoodCard from "./Food-card";
import HeaderTitle from "@/components/common/Header-title";

export default function NutritionMeals() {
  const t = useTranslations();
  const foodItems = [
    {
      id: 1,
      image: "meal-1.jpg",
      title: "breakfast",
    },
    {
      id: 2,
      image: "meal-2.jpg",
      title: "lunch",
    },
    {
      id: 3,
      image: "meal-3.jpg",
      title: "dinner",
    },
  ];
  return (
    <section className="relative bg-[url('/images/section-5.jpg')] bg-cover bg-center p-8">
      <div className="flex justify-center">
        <HeaderTitle title="healthy" subTitle="healthy-nutrition" alignment="center" />
      </div>
      <div className="bg-custom-white absolute right-0 left-0 z-0 h-72 w-full backdrop-blur-3xl"></div>
      <h2 className="relative text-center text-4xl font-bold uppercase">
        {t("fuel-your-fitness-journey-with")}
        <br /> {t("customized")} <span className="text-custom-orange-900">{t("meal-plans")}</span>{" "}
        {t("for-you")}
      </h2>
      {/* Cards Grid */}
      <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3 lg:gap-8">
        {foodItems.map((item) => (
          <FoodCard key={item.id} image={item.image} title={item.title} />
        ))}
      </div>
    </section>
  );
}
