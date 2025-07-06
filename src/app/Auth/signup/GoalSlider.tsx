import React, { useState } from "react";
import { FaWeightHanging, FaRunning, FaDumbbell, FaChild, FaBook } from "react-icons/fa";
import type { JSX } from "react/jsx-runtime";

interface GoalSliderProps {
  onGoalChange?: (goal: string) => void; // Callback prop to send selected goal to parent
}

const GoalSlider: React.FC<GoalSliderProps> = ({ onGoalChange }) => {
  const [selectedGoal, setSelectedGoal] = useState<string>(""); // Local state for selected goal

  const handleGoalSelect = (goal: string) => {
    setSelectedGoal(goal);
    if (onGoalChange) {
      onGoalChange(goal); // Send the selected goal to the parent
    }
  };

  // Map goals to their respective icons
  const goalIcons: { [key: string]: JSX.Element } = {
    "Gain Weight": <FaWeightHanging className="h-8 w-8" />,
    "Lose Weight": <FaDumbbell className="h-8 w-8" />,
    "Get Fitter": <FaRunning className="h-8 w-8" />,
    "Gain More Flexibility": <FaChild className="h-8 w-8" />,
    "Learn The Basics": <FaBook className="h-8 w-8" />,
  };

  return (
    <>
      {/* Progress Indicator */}
      <div className="relative mx-auto mb-3.5 flex h-12 w-12 items-center justify-center rounded-full bg-transparent">
        {/* Orange Arc */}
        <svg className="absolute inset-0 h-full w-full rotate-[10deg]" viewBox="0 0 36 36">
          <path
            className="text-custom-orange-900"
            fill="none"
            stroke="currentColor"
            strokeWidth="3"
            strokeLinecap="round"
            strokeDasharray="100"
            strokeDashoffset="20"
            d="M18 2
     a 16 16 0 0 1 0 32
     a 16 16 0 0 1 0 -32"
          />
        </svg>

        {/* Step Text */}
        <span className="text-custom-white-900 z-10 text-sm font-medium">5/6</span>
      </div>

      {/* Heading and Subheading */}
      <div className="text-center">
        <h2 className="text-custom-white-900 text-2xl font-bold">What is YOUR GOAL</h2>
        <p className="text-custom-white-900 mt-2">This Helps Us Create Your Personalized Plan?</p>
      </div>
      {/* Goal Options */}
      <div className="mt-6 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {[
          "Gain Weight",
          "Lose Weight",
          "Get Fitter",
          "Gain More Flexibility",
          "Learn The Basics",
        ].map((goal) => (
          <button
            key={goal}
            type="button"
            onClick={() => handleGoalSelect(goal)}
            className={`flex flex-col items-center justify-center space-y-3 rounded-lg border border-white p-6 text-center transition-all duration-300 hover:cursor-pointer ${
              selectedGoal === goal
                ? "from-custom-orange-900 text-custom-white-900 border-custom-orange-900 bg-gradient-to-r to-amber-600"
                : "text-custom-orange-900 bg-transparent"
            }`}
          >
            {/* Icon */}
            <div
              className={`${
                selectedGoal === goal ? "text-custom-white-900" : "text-custom-orange-900"
              } transition-colors duration-300`}
            >
              {goalIcons[goal]}
            </div>
            {/* Goal Text */}
            <span className="text-lg font-medium">{goal}</span>
          </button>
        ))}
      </div>
    </>
  );
};

export default GoalSlider;
