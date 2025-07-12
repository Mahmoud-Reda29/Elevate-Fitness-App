import { useEffect, useState } from "react";
import { Outlet, useSearchParams } from "react-router-dom";
import {
  NavigationMenu,
  NavigationMenuItem,
  NavigationMenuList,
  NavigationMenuLink,
} from "@/components/ui/navigation-menu";

export default function HealthyLayout() {
  const [currentMeal, setCurrentMeal] = useState("Lamb");
  const [searchParams, setSearchParams] = useSearchParams();

  useEffect(() => {
    setSearchParams({ meal: currentMeal });
  }, [currentMeal, searchParams, setSearchParams]);

  const meals = [
    {
      name: "breakfast",
      href: "Lamb",
    },
    {
      name: "launch",
      href: "beef",
    },
    {
      name: "dinner",
      href: "pork",
    },
  ];

  return (
    <main className="bg-[#24242499]">
      {/* Header */}
      <h1 className="text-center text-4xl font-bold uppercase">
        Fuel your fitness journey with
        <br /> customized
        <span className="text-custom-orange-900"> meal plans </span> for you
      </h1>

      {/* Navigation menu */}
      <NavigationMenu viewport={false} className="my-8">
        <NavigationMenuList className="w-full">
          <NavigationMenuItem className="flex justify-center gap-8">
            {meals.map((meal, i) => (
              <NavigationMenuLink
                key={i}
                onClick={() => setCurrentMeal(meal.href)}
                className={`text-xl font-bold text-white ${currentMeal === meal.href ? "bg-custom-orange-900 rounded-full" : ""}`}
              >
                {meal.name}
              </NavigationMenuLink>
            ))}
          </NavigationMenuItem>
        </NavigationMenuList>
      </NavigationMenu>

      {/* Outlet children */}
      <Outlet />
    </main>
  );
}
