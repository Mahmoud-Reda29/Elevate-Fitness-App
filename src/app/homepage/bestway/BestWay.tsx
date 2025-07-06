"use client";

import type React from "react";
import { CiDumbbell } from "react-icons/ci";
import { useTranslations } from "use-intl";

const BestWay: React.FC = () => {
  const t = useTranslations();

  const features = t.raw("features") as { title: string; description: string }[];

  return (
    <section className="bg-custom-white-600 px-4 py-16">
      <div className="mx-auto max-w-7xl">
        <div className="grid items-center gap-12 lg:grid-cols-2">
          {/* Left Content */}
          <div className="space-y-8">
            {/* Header */}
            <div className="space-y-4">
              <div className="relative bg-gray-800">
                <div className="relative z-10 text-start">
                  <h1
                    className="lg:text-4x font-baloo relative text-4xl font-black tracking-wider text-transparent uppercase md:text-6xl"
                    style={{
                      WebkitTextStroke: "1px #d3d3d3",
                    }}
                  >
                    {t("why-us")}
                    <span className="text-custom-orange-900 font-baloo absolute top-12 left-18 z-20 flex -translate-x-1/2 -translate-y-1/2 items-center gap-2 text-xl uppercase md:text-xl">
                      <CiDumbbell className="text-4xl" />
                      {t("why-us")}
                    </span>
                  </h1>
                </div>
              </div>

              <h2 className="text-custom-black-700 text-4xl leading-tight font-bold md:text-5xl">
                {t("elevate-fitness-with-the")}{" "}
                <span className="text-custom-orange-900">{t("best-way")}</span> {t("possible")}
              </h2>

              <p className="text-custom-black-700 text-lg leading-relaxed">
                {t(
                  "we-offer-a-fitness-journey-thats-tailored-to-your-goals-supported-by-professional-trainers-and-a-welcoming-community-whether-its-weight-loss-strength-building-or-overall-wellness-our-proven-methods",
                )}
              </p>
            </div>

            {/* Features List */}
            <div className="space-y-6">
              {features.map((feature, index) => (
                <div key={index} className="flex items-start space-x-4">
                  <div className="flex-shrink-0">
                    <div className="bg-custom-orange-900 flex h-12 w-12 items-center justify-center rounded-full">
                      <span className="text-custom-white-900 text-sm font-bold">
                        {String(index + 1).padStart(2, "0")}
                      </span>
                    </div>
                  </div>
                  <div className="flex-1">
                    <h3 className="text-custom-black-700 mb-2 text-xl font-bold">
                      {feature.title}
                    </h3>
                    <p className="text-custom-black-700 leading-relaxed">{feature.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Right Images Grid */}
          <div className="columns-2 gap-4 [column-fill:_balance]">
            <div className="mb-4 break-inside-avoid overflow-hidden rounded-2xl shadow-lg">
              <img
                src="/image1.png"
                alt="Image 1"
                className="h-[380px] w-full object-cover transition-transform duration-300 hover:scale-105"
              />
            </div>

            <div className="mb-4 break-inside-avoid overflow-hidden rounded-2xl shadow-lg">
              <img
                src="/image2.png"
                alt="Image 2"
                className="h-[250px] w-full object-cover transition-transform duration-300 hover:scale-105"
              />
            </div>

            <div className="mb-4 break-inside-avoid overflow-hidden rounded-2xl shadow-lg">
              <img
                src="/image3.png"
                alt="Image 3"
                className="h-[250px] w-full object-cover transition-transform duration-300 hover:scale-105"
              />
            </div>

            <div className="mb-4 break-inside-avoid overflow-hidden rounded-2xl shadow-lg">
              <img
                src="/image4.png"
                alt="Image 4"
                className="h-[380px] w-full object-cover transition-transform duration-300 hover:scale-105"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default BestWay;
