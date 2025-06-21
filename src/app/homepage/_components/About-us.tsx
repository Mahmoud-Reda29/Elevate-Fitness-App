import { Button } from "@/components/ui/button";
import { MdArrowOutward } from "react-icons/md";
import { useTranslations } from "use-intl";
import { CiDumbbell } from "react-icons/ci";

const goals = [
  {
    titleKey: "personalTrainer-title",
    descriptionKey: "personalTrainer-description",
  },
  {
    titleKey: "groupClasses-title",
    descriptionKey: "groupClasses-description",
  },
  {
    titleKey: "nutritionGuidance-title",
    descriptionKey: "nutritionGuidance-description",
  },
  {
    titleKey: "onlinePrograms-title",
    descriptionKey: "onlinePrograms-description",
  },
];
export default function AboutUs() {
  const t = useTranslations();
  return (
    <section className="bg-custom-white-700 dark:bg-custom-black-800 px-6 py-12">
      <div className="container mx-auto py-12">
        <div className="flex flex-col items-start justify-between gap-12 lg:flex-row">
          {/* Left side - Images */}
          <div className="relative order-2 h-[500px] w-full overflow-visible md:h-[600px] lg:order-1 lg:h-[740px] lg:w-1/2">
            <img
              src="/images/img3.png"
              className="absolute top-40 left-1/4 z-10 w-48 rounded-2xl md:top-72 md:left-64 md:w-80"
              alt="Gym trainer helping client"
            />
            <img
              src="/images/img1.png"
              className="absolute top-0 left-0 w-48 rounded-2xl md:top-8 md:w-80"
              alt="Gym equipment"
            />
            <img
              src="/images/img2.png"
              className="absolute top-24 left-1/2 w-40 rounded-2xl md:top-20 md:left-96 md:w-56"
              alt="Client working out"
            />
          </div>

          {/* Right side - Content */}
          <div className="order-1 w-full space-y-6 md:w-1/2 lg:order-2">
            <h2 className="text-gradient dark:text-gradient-dark dark:text-custom-black-800 relative text-6xl font-bold text-white uppercase">
              {t("workout")}
              <span className="text-custom-orange-900 absolute flex items-center text-sm">
                <CiDumbbell />
                {t("about-us")}
              </span>
            </h2>
            <h2 className="text-4xl leading-tight font-bold tracking-tight md:text-5xl">
              {t("empowering-you-to-achieve")}
              <br />
              <span className="text-custom-orange-900"> {t("your-fitness")} </span>
              {t("goals")}
            </h2>
            <p className="text-custom-black-900 text-lg leading-relaxed dark:text-gray-300">
              {t("about-us-pragraph")}
            </p>
            <div className="grid grid-cols-1 gap-x-8 gap-y-6 pt-4 md:grid-cols-2">
              {goals.map((goal, index) => (
                <div key={index}>
                  <div className="flex items-center gap-3">
                    <MdArrowOutward className="text-custom-orange-900" size={20} />
                    <h3 className="text-lg font-semibold">{t(goal.titleKey)}</h3>
                  </div>
                  <p className="text-custom-black-900 dark:text-gray-400">
                    {t(goal.descriptionKey)}
                  </p>
                </div>
              ))}
            </div>
            <Button variant="default">{t("get-started")}</Button>
          </div>
        </div>
      </div>
    </section>
  );
}
