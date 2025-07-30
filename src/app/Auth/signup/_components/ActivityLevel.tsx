import React, { useState } from "react";
import { FaBed, FaWalking, FaBicycle, FaRunning, FaDumbbell } from "react-icons/fa";
import type { JSX } from "react/jsx-runtime";
import { useTranslations } from "use-intl";
import CircleProgress from "./CircleProgress";

interface ActivityLevelProps {
  onActivityChange?: (activityLevel: string) => void; // Callback prop to send selected activity level to parent
}

const ActivityLevel: React.FC<ActivityLevelProps> = ({ onActivityChange }) => {
  const [selectedActivity, setSelectedActivity] = useState<string>(""); // Local state for selected activity level
  const t = useTranslations();
  const handleActivitySelect = (activity: string) => {
    setSelectedActivity(activity);
    if (onActivityChange) {
      onActivityChange(activity); // Send the selected activity level to the parent
    }
  };

  // Map activity levels to their respective icons
  const activityIcons: { [key: string]: JSX.Element } = {
    Sedentary: <FaBed className="h-8 w-8" />,
    "Lightly Active": <FaWalking className="h-8 w-8" />,
    "Moderately Active": <FaBicycle className="h-8 w-8" />,
    "Very Active": <FaRunning className="h-8 w-8" />,
    "Extremely Active": <FaDumbbell className="h-8 w-8" />,
  };

  return (
    <>
      {/* Progress Indicator */}
      <CircleProgress text="6/6" />

      {/* Heading and Subheading */}
      <div className="text-center">
        <h2 className="text-custom-white-900 text-2xl font-bold">
          {t("what-is-your-activity-level")}
        </h2>
        <p className="text-custom-white-900 mt-2">
          {t("this-helps-us-create-your-personalized-plan-3")}
        </p>
      </div>
      {/* Activity Options */}
      <div className="mt-6 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {["level1", "level2", "level3", "level4", "level5"].map((activity) => (
          <button
            key={activity}
            type="button"
            onClick={() => handleActivitySelect(activity)}
            className={`flex flex-col items-center justify-center space-y-3 rounded-lg border border-white p-6 text-center transition-all duration-300 hover:cursor-pointer ${
              selectedActivity === activity
                ? "from-custom-orange-900 text-custom-white-900 border-custom-orange-900 bg-gradient-to-r to-amber-600"
                : "text-custom-orange-900 bg-transparent"
            }`}
          >
            {/* Icon */}
            <div
              className={`${
                selectedActivity === activity ? "text-custom-white-900" : "text-custom-orange-900"
              } transition-colors duration-300`}
            >
              {activityIcons[activity]}
            </div>
            {/* Activity Text */}
            <span className="text-lg font-medium">{activity}</span>
          </button>
        ))}
      </div>
    </>
  );
};

export default ActivityLevel;
