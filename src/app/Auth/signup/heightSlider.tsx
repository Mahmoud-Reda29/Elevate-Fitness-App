import React, { useState, useRef } from "react";
import { Swiper, SwiperSlide, type SwiperRef } from "swiper/react";

import { useTranslations } from "use-intl";
import CircleProgress from "./CircleProgress";

const MIN_HEIGHT = 130;
const MAX_HEIGHT = 210;

interface HeightSliderProps {
  onHeightChange?: (height: number) => void; // Callback prop to send selected height to parent
}

const HeightSlider: React.FC<HeightSliderProps> = ({ onHeightChange }) => {
  const t = useTranslations();
  const [selectedHeight, setSelectedHeight] = useState<number>(170); // Default height
  const swiperRef = useRef<SwiperRef>(null);
  const heights = Array.from({ length: MAX_HEIGHT - MIN_HEIGHT + 1 }, (_, i) => MIN_HEIGHT + i);

  const handleSlideChange = (swiper: { activeIndex: number }) => {
    const newHeight = heights[swiper.activeIndex];
    setSelectedHeight(newHeight);
    if (onHeightChange) {
      onHeightChange(newHeight); // Send the selected height to the parent component
    }
  };

  return (
    <div className="mx-auto flex w-full max-w-md flex-col items-center rounded-xl p-6">
      {/* Progress Indicator */}
      <CircleProgress text="4/6" />

      {/* Heading and Subheading */}
      <div className="text-center">
        <h2 className="text-custom-white-900 my-4 text-2xl font-bold">
          {t("what-is-your-height")}
        </h2>
        <p className="text-custom-white-900 my-4">
          {t("this-helps-us-create-your-personalized-plan")}
        </p>
      </div>
      <div className="text-custom-orange-900 mb-4 text-lg font-semibold tracking-wide">
        {t("centimeters")}
      </div>
      <div className="relative w-full">
        <Swiper
          ref={swiperRef}
          onSlideChange={handleSlideChange}
          slidesPerView={5}
          centeredSlides
          initialSlide={selectedHeight - MIN_HEIGHT}
          spaceBetween={2} // Reduced space between heights
          className="w-full"
          role="slider"
          aria-label="Height selection slider"
        >
          {heights.map((height) => (
            <SwiperSlide key={height} className="m-0 p-0">
              <span
                className={`block text-center transition-all duration-200 ${
                  height === selectedHeight
                    ? "text-custom-orange-900 text-3xl font-bold"
                    : "text-custom-white-800 text-xl opacity-60"
                }`}
              >
                {height}
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

export default HeightSlider;
