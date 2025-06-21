import React, { useState, useEffect } from "react";
import axios from "axios";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import { Pagination } from "swiper/modules";
import { BsArrowUpRight } from "react-icons/bs";
import { CiDumbbell } from "react-icons/ci";

interface Muscle {
  _id: string;
  name: string;
  image: string | null;
}

const Workouts: React.FC = () => {
  const [muscles, setMuscles] = useState<Muscle[]>([]);
  const [selectedCategory, setSelectedCategory] = useState("FULL BODY");

  useEffect(() => {
    const fetchMuscles = async () => {
      try {
        const response = await axios.get("https://fitness.elevateegy.com/api/v1/muscles/random");
        setMuscles(response.data.muscles);
      } catch (error) {
        console.error("Error fetching muscles:", error);
      }
    };
    fetchMuscles();
  }, []);

  // Function to handle explore button click
  const handleExplore = (muscleId: string) => {
    console.log(`Exploring muscle with ID: ${muscleId}`);
    // You can add navigation to a specific muscle page here
  };

  const categoryMapping: { [key: string]: string[] } = {
    "FULL BODY": muscles.map((m) => m.name),
    Chest: ["Pectoralis Major"],
    Arm: ["Biceps Brachii", "Triceps Brachii", "Brachioradialis"],
    Shoulder: ["Anterior Deltoids", "Medial Deltoids", "Posterior Deltoids"],
    Back: ["Latissimus Dorsi", "Upper Trapezius", "Infraspinatus", "Erector Spinae"],
    Legs: ["Adductor Magnus", "Biceps Femoris", "Gastrocnemius", "Soleus", "Tibialis Anterior"],
    Stomach: ["Rectus Abdominis", "Obliques"],
  };

  const filteredMuscles =
    selectedCategory === "FULL BODY"
      ? muscles
      : muscles.filter((m) => categoryMapping[selectedCategory].includes(m.name));

  return (
    <div
      className="bg-custom-white-800 px-8 py-2"
      style={{
        backgroundImage: `url(/bg.jpg)`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundAttachment: "fixed",
      }}
    >
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
      <div className="relative bg-gray-800">
        <div className="bg-opacity-50 absolute inset-0 bg-black"></div>

        <div className="relative z-10 text-center">
          <h1
            className="lg:text-4x font-baloo relative text-4xl font-black tracking-wider text-transparent uppercase md:text-6xl"
            style={{
              WebkitTextStroke: "1px #6b7280",
            }}
          >
            WORKOUTS
            <span className="text-custom-orange-900 font-baloo absolute top-2/3 left-1/2 z-20 flex -translate-x-1/2 -translate-y-1/2 items-center gap-2 text-xl uppercase md:text-xl">
              <CiDumbbell className="text-3xl" />
              Fitness Class
            </span>
          </h1>
        </div>
      </div>

      <div className="from-custom-white-500 to-custom-white-900 rounded-lg bg-gradient-to-r px-4 py-2">
        <div>
          <h1 className="font-baloo text-center text-4xl font-bold text-white">
            TRANSFORM YOUR BODY WITH OUR
            <p>
              DYNAMIC <span className="text-custom-orange-900">UPCOMING WORKOUTS</span>
            </p>
          </h1>
        </div>

        <div className="my-2 flex justify-center space-x-4">
          {Object.keys(categoryMapping).map((category) => (
            <button
              key={category}
              className={`rounded px-4 py-2 ${
                selectedCategory === category
                  ? "bg-custom-orange-900 text-custom-white-900 rounded-3xl"
                  : "text-custom-black-700 cursor-pointer font-bold"
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
              style={{
                backgroundImage: `url(${muscle.image ? muscle.image : "/default.png"})`,
              }}
            >
              <div className="bg-opacity-50 absolute right-0 bottom-0 left-0 rounded-b-lg p-4 backdrop-blur-md">
                <h3 className="text-custom-black-700 text-xl font-bold">{muscle.name}</h3>
                <button
                  className="text-custom-orange-900 hover:text-custom-orange-800 mt-2 flex cursor-pointer items-center rounded-full py-1 font-bold transition-colors"
                  onClick={() => handleExplore(muscle._id)}
                >
                  Explore
                  <span className="bg-custom-orange-900 text-custom-black-700 ml-2 rounded-full p-1 font-bold">
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

export default Workouts;
