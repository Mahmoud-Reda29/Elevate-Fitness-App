import React, { useState, useRef } from "react";
import { Swiper, SwiperSlide, type SwiperRef } from "swiper/react";
import "swiper/css";

const MIN_WEIGHT = 40;
const MAX_WEIGHT = 150;

interface WeightSliderProps {
  onWeightChange?: (weight: number) => void; // Callback prop to send selected weight to parent
}

const WeightSlider: React.FC<WeightSliderProps> = ({ onWeightChange }) => {
  const [selectedWeight, setSelectedWeight] = useState<number>(70); // Default weight
  const swiperRef = useRef<SwiperRef>(null);
  const weights = Array.from({ length: MAX_WEIGHT - MIN_WEIGHT + 1 }, (_, i) => MIN_WEIGHT + i);

  const handleSlideChange = (swiper: { activeIndex: number }) => {
    const newWeight = weights[swiper.activeIndex];
    setSelectedWeight(newWeight);
    if (onWeightChange) {
      onWeightChange(newWeight); // Send the selected weight to the parent component
    }
  };

  return (
    <div className="mx-auto flex w-full max-w-md flex-col items-center rounded-xl bg-gray-900 p-6">
      {/* Progress Indicator */}
      <div className="relative mx-auto flex h-12 w-12 items-center justify-center rounded-full bg-transparent">
        {/* Orange Arc */}
        <svg className="absolute inset-0 h-full w-full rotate-[10deg]" viewBox="0 0 36 36">
          <path
            className="text-custom-orange-900"
            fill="none"
            stroke="currentColor"
            strokeWidth="3"
            strokeLinecap="round"
            strokeDasharray="100"
            strokeDashoffset="60"
            d="M18 2
     a 16 16 0 0 1 0 32
     a 16 16 0 0 1 0 -32"
          />
        </svg>

        {/* Step Text */}
        <span className="text-custom-white-900 z-10 text-sm font-medium">3/6</span>
      </div>
      {/* Heading and Subheading */}
      <div className="text-center">
        <h2 className="text-custom-white-900 my-4 text-2xl font-bold">WHAT IS YOUR WEIGHT?</h2>
        <p className="text-custom-white-900 my-4">This Helps Us Create Your Personalized Plan</p>
      </div>
      <div className="text-custom-orange-900 mb-4 text-lg font-semibold tracking-wide">
        Kilograms
      </div>
      <div className="relative w-full">
        <Swiper
          ref={swiperRef}
          onSlideChange={handleSlideChange}
          slidesPerView={5}
          centeredSlides
          initialSlide={selectedWeight - MIN_WEIGHT}
          spaceBetween={2} // Reduced space between weights
          className="w-full"
          role="slider"
          aria-label="Weight selection slider"
        >
          {weights.map((weight) => (
            <SwiperSlide key={weight} className="m-0 p-0">
              <span
                className={`block text-center transition-all duration-200 ${
                  weight === selectedWeight
                    ? "text-custom-orange-900 text-3xl font-bold"
                    : "text-custom-white-800 text-xl opacity-60"
                }`}
              >
                {weight}
              </span>
            </SwiperSlide>
          ))}
        </Swiper>

        {/* Triangle Indicator */}
        <div className="absolute bottom-0 left-1/2 -translate-x-1/2">
          <div className="border-b-custom-orange-900 h-0 w-0 border-r-[8px] border-b-[8px] border-l-[8px] border-r-transparent border-l-transparent" />
        </div>
      </div>
    </div>
  );
};

export default WeightSlider;
