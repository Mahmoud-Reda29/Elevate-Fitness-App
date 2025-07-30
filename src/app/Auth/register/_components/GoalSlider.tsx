import React, { useState } from "react";
import { FaWeightHanging, FaRunning, FaDumbbell, FaChild, FaBook } from "react-icons/fa";
import type { JSX } from "react/jsx-runtime";
import { useTranslations } from "use-intl";
import CircleProgress from "./CircleProgress";

interface GoalSliderProps {
  onGoalChange?: (goal: string) => void; // Callback to parent
}

const GoalSlider: React.FC<GoalSliderProps> = ({ onGoalChange }) => {
  const [selectedGoal, setSelectedGoal] = useState<string>("");
  const t = useTranslations();

  const handleGoalSelect = (goal: string) => {
    setSelectedGoal(goal);
    onGoalChange?.(goal);
  };

  const goals = [
    "gain-weight",
    "lose-weight",
    "get-fitter",
    "gain-more-flexibility",
    "learn-the-basics",
  ];

  const goalIcons: { [key: string]: JSX.Element } = {
    "gain-weight": <FaWeightHanging className="h-8 w-8" />,
    "lose-weight": <FaDumbbell className="h-8 w-8" />,
    "get-fitter": <FaRunning className="h-8 w-8" />,
    "gain-more-flexibility": <FaChild className="h-8 w-8" />,
    "learn-the-basics": <FaBook className="h-8 w-8" />,
  };

  return (
    <>
      {/* Progress Circle */}
      <CircleProgress text="5/6" />

      {/* Title */}
      <div className="text-center">
        <h2 className="text-custom-white-900 text-2xl font-bold">{t("what-is-your-goal")}</h2>
        <p className="text-custom-white-900 mt-2">
          {t("this-helps-us-create-your-personalized-plan-1")}
        </p>
      </div>

      {/* Goal Buttons */}
      <div className="mt-6 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {goals.map((goalKey) => (
          <button
            key={goalKey}
            type="button"
            onClick={() => handleGoalSelect(goalKey)}
            className={`flex flex-col items-center justify-center space-y-3 rounded-lg border border-white p-6 text-center transition-all duration-300 hover:cursor-pointer ${
              selectedGoal === goalKey
                ? "from-custom-orange-900 text-custom-white-900 border-custom-orange-900 bg-gradient-to-r to-amber-600"
                : "text-custom-orange-900 bg-transparent"
            }`}
          >
            <div
              className={`${
                selectedGoal === goalKey ? "text-custom-white-900" : "text-custom-orange-900"
              } transition-colors duration-300`}
            >
              {goalIcons[goalKey]}
            </div>
            <span className="text-lg font-medium">{t(goalKey)}</span>
          </button>
        ))}
      </div>
    </>
  );
};

export default GoalSlider;
