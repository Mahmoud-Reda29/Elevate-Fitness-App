import { Button } from "@/components/ui/button";
import { MdArrowOutward } from "react-icons/md";
import { useTranslations } from "use-intl";
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
    <section className="bg-custom-white-700 dark:bg-custom-black-800">
      <div className="container mx-auto py-12">
        <div className="flex flex-col items-start justify-between gap-12 md:flex-row">
          {/* Left side - Images */}
          <div className="relative h-[740px] w-full overflow-visible md:w-1/2">
            <img
              src="/images/img3.png"
              className="absolute top-72 left-64 z-10 w-80 rounded-2xl"
              alt="Gym trainer helping client"
            />
            <img
              src="/images/img1.png"
              className="absolute top-8 left-0 w-80 rounded-2xl"
              alt="Gym equipment"
            />
            <img
              src="/images/img2.png"
              className="absolute top-20 left-96 w-56 rounded-2xl"
              alt="Client working out"
            />
          </div>

          {/* Right side - Content */}
          <div className="w-full space-y-6 md:w-1/2">
            <div className="flex h-16 items-center gap-2 bg-[url('/images/About-us.png')] bg-no-repeat">
              <span className="text-custom-orange-900 text-lg font-medium">{t("about-us")}</span>
            </div>

            <h2 className="text-4xl leading-tight font-bold tracking-tight md:text-5xl">
              {t("empowering-you-to-achieve")}
              <br />
              <span className="text-custom-orange-900">{t("your-fitness")}</span>
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
