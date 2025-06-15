import { Button } from "@/components/ui/button";
import { useFormatter, useTranslations } from "use-intl";

export default function HeroSection() {
  const t = useTranslations();
  const format = useFormatter();

  return (
    <section className="relative h-screen w-full xl:overflow-hidden">
      <div className="absolute inset-0 h-fit bg-[url('/images/hero-image.png')] bg-cover bg-center md:h-auto">
        <div className="bg-custom-white dark:bg-custom-black-700 relative flex flex-col items-center justify-between gap-32 px-6 py-12 pb-0 backdrop-blur-3xl sm:h-full lg:flex-row lg:px-16">
          {/* Text Section */}
          <div className="text-custom-black-900 dark:text-custom-white-800 container max-w-xl space-y-6">
            <h1 className="text-center text-4xl font-bold lg:text-left">
              {t("your-body-can")}
              <span className="text-custom-orange-900"> {t("stand-almost")} </span>
              {t("anything")}
            </h1>
            <div className="flex flex-col gap-16">
              <p className="before:bg-custom-orange-900 text-custom-black-900 dark:text-custom-white-800 relative pl-6 text-center text-lg before:absolute before:top-0 before:left-0 before:h-full before:w-1 lg:text-left">
                {t("hero-pragraph")}
              </p>

              {/* Stats Section */}
              <div className="flex justify-center gap-8 lg:justify-start">
                <div className="">
                  <span className="text-2xl font-semibold">
                    {format.number(Number(1200), "digit")}+
                  </span>
                  <p className="text-sm">{t("active-members")}</p>
                </div>
                <div className="">
                  <span className="text-2xl font-semibold">
                    {format.number(Number(12), "digit")}+
                  </span>
                  <p className="text-sm">{t("certified-trainers")}</p>
                </div>
                <div className="">
                  <span className="text-2xl font-semibold">
                    {" "}
                    {format.number(Number(20), "digit")}+
                  </span>
                  <p className="text-sm">{t("year-of-experience")}</p>
                </div>
              </div>

              {/* buttons */}
              <div className="flex items-center gap-16">
                <Button variant="default">{t("get-started")}</Button>
                <Button variant="outline">{t("explore-more")}</Button>
              </div>
            </div>
          </div>

          {/* Hero Image */}
          <div className="mt-10 lg:mt-0">
            <img src="/images/hero.png" alt="Person working out" className="w-full max-w-md" />
          </div>
        </div>
      </div>
    </section>
  );
}
