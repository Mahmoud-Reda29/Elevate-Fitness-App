import React, { useState } from "react";
import axios from "axios";
import { useQuery, QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css/pagination";
import { Pagination } from "swiper/modules";
import { BsArrowUpRight } from "react-icons/bs";
import { CiDumbbell } from "react-icons/ci";
import { useTranslations } from "use-intl";
import { useLocation } from "react-router-dom";

interface Muscle {
  _id: string;
  name: string;
  image: string | null;
  key: string;
}

const queryClient = new QueryClient();

const Workouts: React.FC = () => {
  const t = useTranslations();
  const location = useLocation();
  const isArabic = location.pathname.startsWith("/ar");
  const [selectedCategory, setSelectedCategory] = useState("FULL BODY");

  const {
    data: muscles = [],
    isLoading,
    isError,
  } = useQuery<Muscle[]>({
    queryKey: ["muscles", isArabic],
    queryFn: async () => {
      const response = await axios.get("https://fitness.elevateegy.com/api/v1/muscles/random", {
        headers: {
          "Accept-Language": isArabic ? "ar" : "en",
        },
      });

      // eslint-disable-next-line @typescript-eslint/no-explicit-any
      return response.data.muscles.map((muscle: any) => ({
        ...muscle,
        key: muscle.name.toLowerCase().replace(/\s+/g, "_"),
      }));
    },
  });

  if (isLoading) return <div className="py-4 text-center">{t("loading-muscles")}...</div>;
  if (isError)
    return <div className="py-4 text-center text-red-500">{t("error-loading-muscles")}</div>;

  const categoryMapping: { [key: string]: string[] } = {
    "FULL BODY": muscles.map((m) => m.key),
    Chest: ["pectoralis_major"],
    Arm: ["biceps_brachii", "triceps_brachii", "brachioradialis"],
    Shoulder: ["anterior_deltoids", "medial_deltoids", "posterior_deltoids"],
    Back: ["latissimus_dorsi", "upper_trapezius", "infraspinatus", "erector_spinae"],
    Legs: ["adductor_magnus", "biceps_femoris", "gastrocnemius", "soleus", "tibialis_anterior"],
    Stomach: ["rectus_abdominis", "obliques"],
  };

  const filteredMuscles =
    selectedCategory === "FULL BODY"
      ? muscles
      : muscles.filter((m) => categoryMapping[selectedCategory]?.includes(m.key));

  return (
    <div className="bg-custom-white-800 bg-[url('/bg.jpg')] bg-cover bg-fixed bg-center px-8 py-4">
      <style>{`
        .swiper-pagination {
          position: static;
          margin-top: 20px;
          text-align: center;
        }
        .swiper-pagination-bullet {
          width: 12px;
          height: 12px;
          background-color: #1f1f1f;
          opacity: 1;
          border-radius: 50%;
          transition: all 0.3s ease;
        }
        .swiper-pagination-bullet-active {
          width: 36px;
          height: 12px;
          border-radius: 9999px;
          background-color: #ff4500;
        }
      `}</style>

      <div className="relative bg-gray-800 py-8">
        <div className="bg-opacity-50 absolute inset-0 bg-black"></div>
        <div className="relative z-10 text-center">
          <h1
            className="relative text-4xl font-black tracking-wider text-transparent uppercase md:text-6xl"
            style={{ WebkitTextStroke: "1px #6b7280" }}
          >
            {t("workouts")}
            <span className="text-custom-orange-900 absolute top-2/3 left-1/2 z-20 flex -translate-x-1/2 -translate-y-1/2 items-center gap-2 text-xl uppercase md:text-xl">
              <CiDumbbell className="text-3xl" />
              {t("fitness-class")}
            </span>
          </h1>
        </div>
      </div>

      <div className="from-custom-white-500 to-custom-white-900 rounded-lg bg-gradient-to-r px-4 py-6">
        <h1 className="text-center text-4xl font-bold text-white">
          {t("transform-your-body-with-our")}
          <p>
            {t("dynamic")} <span className="text-custom-orange-900">{t("upcoming-workouts")}</span>
          </p>
        </h1>
        <div className="my-4 flex flex-wrap justify-center gap-2">
          {Object.keys(categoryMapping).map((category) => (
            <button
              key={category}
              className={`cursor-pointer rounded px-4 py-2 transition-all duration-200 ${
                selectedCategory === category
                  ? "bg-custom-orange-900 text-custom-white-900 rounded-3xl"
                  : "text-custom-black-700 font-bold hover:bg-orange-100"
              }`}
              onClick={() => setSelectedCategory(category)}
            >
              {category}
            </button>
          ))}
        </div>
      </div>

      <Swiper
        modules={[Pagination]}
        spaceBetween={30}
        slidesPerView={3}
        pagination={{ clickable: true }}
        className="relative my-6"
      >
        {filteredMuscles.map((muscle) => (
          <SwiperSlide key={muscle._id}>
            <div
              className="relative h-96 rounded-lg bg-cover bg-center"
              style={{ backgroundImage: `url(${muscle.image || "/default.png"})` }}
            >
              <div className="bg-opacity-50 absolute right-0 bottom-0 left-0 rounded-b-lg bg-black p-4 backdrop-blur-md">
                <h3 className="text-custom-black-700 text-xl font-bold">{muscle.name}</h3>
                <button
                  className="text-custom-orange-900 hover:text-custom-orange-800 mt-2 flex items-center rounded-full py-1 font-bold transition-colors hover:cursor-pointer"
                  onClick={() => console.log(`Exploring muscle with ID: ${muscle._id}`)}
                >
                  {t("explore")}
                  <span className="bg-custom-orange-900 text-custom-black-700 ml-2 rounded-full p-1">
                    <BsArrowUpRight />
                  </span>
                </button>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

const App: React.FC = () => (
  <QueryClientProvider client={queryClient}>
    <Workouts />
  </QueryClientProvider>
);

export default App;
