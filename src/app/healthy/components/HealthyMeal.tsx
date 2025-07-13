import useMeal from "@/hooks/meal";
import MealPlaceholder from "./MealPlaceholder";

export default function HealthyMeal({ id }: { id: string }) {
  // Hooks
  const { data, isLoading } = useMeal(id);

  // Loading
  if (isLoading || !data) return <MealPlaceholder />;

  return (
    <div className="mx-auto max-w-2xl overflow-hidden rounded-2xl bg-gray-900 text-white shadow-2xl">
      {/* Hero Section */}
      <div className="relative overflow-hidden">
        {/* Image */}
        <img src={data.strMealThumb} alt={data.strInstructions} className="object" />
        <div className="meal-layer absolute inset-0" />
        <div className="absolute right-0 bottom-0 left-0 p-8">
          {/* Meal title */}
          <h1 className="mb-4 text-center text-4xl font-bold">{data.strMeal}</h1>
          {/* Description */}
          <p className="max-w-lg text-sm leading-relaxed text-gray-200">{data.strInstructions}</p>
          <div className="my-4">
            {/* Nutrients facts */}
            <ul className="flex justify-between">
              <li className="flex flex-col items-center rounded-2xl border border-white p-1">
                100 k<span className="text-custom-orange-900 font-bold">Energy</span>
              </li>
              <li className="flex flex-col items-center rounded-2xl border border-white p-1">
                100 g<span className="text-custom-orange-900 font-bold">Protein</span>
              </li>
              <li className="flex flex-col items-center rounded-2xl border border-white p-1">
                58 g<span className="text-custom-orange-900 font-bold">Carbs</span>
              </li>
              <li className="flex flex-col items-center rounded-2xl border border-white p-1">
                20 g<span className="text-custom-orange-900 font-bold">Fat</span>
              </li>
            </ul>
          </div>
        </div>
      </div>

      {/* Ingredients Section */}
      <div className="relative p-4">
        <h2 className="mb-6 text-xl font-semibold">Ingredients</h2>

        {/* Ingredient */}
        <div className="flex flex-wrap gap-y-4">
          {Array.from({ length: 20 }).map((_, i) => {
            const ingredient = data[`strIngredient${i + 1}` as keyof typeof data];
            const measure = data[`strMeasure${i + 1}` as keyof typeof data];

            if (!ingredient?.trim()) return null;

            return (
              <div key={i} className="w-full px-2 sm:w-1/2 md:w-5/12">
                <div className="flex items-center justify-between pb-1">
                  <span className="text-sm font-semibold text-white">{ingredient}</span>
                  <span className="text-custom-orange-900 text-xs font-medium text-nowrap">
                    {measure || "—"}
                  </span>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}
