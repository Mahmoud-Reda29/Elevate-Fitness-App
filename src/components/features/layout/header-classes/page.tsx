import FullBodyClasses from "@/app/classes/full-body/page";
import { useState } from "react";

export default function HeaderClasses() {
  // Variables
  const navLinks = ["Full Body", "Chest", "Arm", "Shoulder", "Back", "Legs", "Stomach"];

  // Mapping
  const labelToValueMap: Record<string, "fullBody" | "chest" | "arm" | "shoulder" | "back" | "legs" | "stomach"> = {
    "Full Body": "fullBody",
    "Chest": "chest",
    "Arm": "arm",
    "Shoulder": "shoulder",
    "Back": "back",
    "Legs": "legs",
    "Stomach": "stomach",
  };

  // State
  const [Muscles, setMuscles] = useState<
    "fullBody" | "chest" | "arm" | "shoulder" | "back" | "legs" | "stomach"
  >("fullBody");

  return (
    <section className="flex flex-col">
      <header className="flex flex-wrap justify-center gap-2 mb-4">
        {navLinks.map((item) => {
          const value = labelToValueMap[item];

          return (
            <button
              key={item}
              onClick={() => setMuscles(value)}
              className={`rounded-md px-4 py-2 transition cursor-pointer ${
                Muscles === value
                  ? "bg-orange-500 font-bold text-white"
                  : "dark:text-white text-gray-700"
              }`}
            >
              {item}
            </button>
          );
        })}
      </header>

       <div className="mt-8">
        {Muscles === "fullBody" && <FullBodyClasses />}
      </div>     
    </section>
  );
}

