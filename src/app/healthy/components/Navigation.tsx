import {
  NavigationMenu,
  NavigationMenuItem,
  NavigationMenuList,
  NavigationMenuLink,
} from "@/components/ui/navigation-menu";

type NavigationProps = {
  setCurrentMeal: (mealId: string) => void;
  currentMeal: string;
};

// Meals list
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

export default function Navigation({ setCurrentMeal, currentMeal }: NavigationProps) {
  return (
    <NavigationMenu viewport={false} className="mb-8">
      <NavigationMenuList className="w-full">
        {/* Nav item */}
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
  );
}
