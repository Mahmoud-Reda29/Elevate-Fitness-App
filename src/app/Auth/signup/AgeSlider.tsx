import React, { useState, useRef } from "react";
import { Swiper, SwiperSlide, type SwiperRef } from "swiper/react";
import "swiper/css";

const MIN_AGE = 18;
const MAX_AGE = 60;

interface AgeSliderProps {
  onAgeChange?: (age: number) => void; // Callback prop to send selected age to parent
}

const AgeSlider: React.FC<AgeSliderProps> = ({ onAgeChange }) => {
  const [selectedAge, setSelectedAge] = useState<number>(25);
  const swiperRef = useRef<SwiperRef>(null);
  const ages = Array.from({ length: MAX_AGE - MIN_AGE + 1 }, (_, i) => MIN_AGE + i);

  const handleSlideChange = (swiper: { activeIndex: number }) => {
    const newAge = ages[swiper.activeIndex];
    setSelectedAge(newAge);
    if (onAgeChange) {
      onAgeChange(newAge); // Send the selected age to the parent component
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
            strokeDashoffset="80"
            d="M18 2
     a 16 16 0 0 1 0 32
     a 16 16 0 0 1 0 -32"
          />
        </svg>

        {/* Step Text */}
        <span className="text-custom-white-900 z-10 text-sm font-medium">2/6</span>
      </div>
      {/* Heading and Subheading */}
      <div className="text-center">
        <h2 className="text-custom-white-900 my-4 text-2xl font-bold">HOW OLD ARE YOU?</h2>
        <p className="text-custom-white-900 my-4">This Helps Us Create Your Personalized Plan</p>
      </div>
      <div className="text-custom-orange-900 mb-4 text-lg font-semibold tracking-wide">
        Years Old
      </div>
      <div className="relative w-full">
        <Swiper
          ref={swiperRef}
          onSlideChange={handleSlideChange}
          slidesPerView={5}
          centeredSlides
          initialSlide={selectedAge - MIN_AGE}
          spaceBetween={2} // Reduce this value to decrease space between ages
          className="w-full"
          role="slider"
          aria-label="Age selection slider"
        >
          {ages.map((age) => (
            <SwiperSlide key={age} className="m-0 p-0">
              <span
                className={`block text-center transition-all duration-200 ${
                  age === selectedAge
                    ? "text-custom-orange-900 text-3xl font-bold"
                    : "text-custom-white-800 text-xl opacity-60"
                }`}
              >
                {age}
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

export default AgeSlider;
