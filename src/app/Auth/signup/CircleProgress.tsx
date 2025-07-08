import React from "react";

const CircleProgress = ({ text = "5/6", color = "text-custom-orange-900" }) => {
  return (
    <div className="relative mx-auto mb-3.5 flex h-12 w-12 items-center justify-center rounded-full bg-transparent">
      <svg className="absolute inset-0 h-full w-full rotate-[10deg]" viewBox="0 0 36 36">
        <path
          className={color}
          fill="none"
          stroke="currentColor"
          strokeWidth="3"
          strokeLinecap="round"
          strokeDasharray="100"
          strokeDashoffset="20"
          d="M18 2 a 16 16 0 0 1 0 32 a 16 16 0 0 1 0 -32"
        />
      </svg>
      <span className="text-custom-white-900 z-10 text-sm font-medium">{text}</span>
    </div>
  );
};

export default CircleProgress;
