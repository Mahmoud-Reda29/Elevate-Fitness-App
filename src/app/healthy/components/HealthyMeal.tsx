import useMeal from "@/hooks/meal";
import LoadingSpinner from "@/loading";
// import { ChefHat } from "lucide-react";
import { useParams } from "react-router-dom";

export default function HealthyMeal() {
  const { id } = useParams();
  console.log(id);
  const { data, isLoading } = useMeal(id || "1");

  console.log("data", data);

  if (isLoading || !data) return <LoadingSpinner />;

  return (
    <div className="mx-auto max-w-2xl overflow-hidden rounded-2xl bg-gray-900 text-white shadow-2xl">
      {/* Hero Section */}
      <div className="relative overflow-hidden">
        <img src={data.strMealThumb} alt={data.strInstructions} className="object" />
        <div className="meal-layer absolute inset-0" />
        <div className="absolute right-0 bottom-0 left-0 p-8">
          <h1 className="mb-4 text-center text-4xl font-bold">{data.strMeal}</h1>
          <p className="max-w-lg text-sm leading-relaxed text-gray-200">{data.strInstructions}</p>
          <div className="my-4">
            <ul className="flex justify-between">
              <li className="flex flex-col items-center rounded-2xl border border-white p-1">
                100 k<span className="text-custom-orange-900 font-bold">energy</span>
              </li>
              <li className="flex flex-col items-center rounded-2xl border border-white p-1">
                100 g<span className="text-custom-orange-900 font-bold">energy</span>
              </li>
              <li className="flex flex-col items-center rounded-2xl border border-white p-1">
                58 g<span className="text-custom-orange-900 font-bold">energy</span>
              </li>
              <li className="flex flex-col items-center rounded-2xl border border-white p-1">
                20 g<span className="text-custom-orange-900 font-bold">energy</span>
              </li>
            </ul>
          </div>
        </div>
      </div>

      {/* Nutrition Info */}
      <div className="px-8 py-6">
        <div className="mb-8 flex flex-wrap items-center justify-between gap-4">
          {/* {Array.from({ length: 20 }).map((_, i) => {
            const ingredient = data[`strIngredient${i + 1}` as keyof typeof data];
            const measure = data[`strMeasure${i + 1}` as keyof typeof data];

            // Skip empty values
            if (!ingredient) return null;

            return (
              <div key={i} className="text-center">
                <div className="mb-2 flex h-16 w-16 items-center justify-center rounded-full border-2 border-orange-500">
                  <span className="text-sm font-bold text-orange-500">{measure}</span>
                </div>
                <span className="text-xs font-medium text-orange-500">{ingredient}</span>
              </div>
            );
          })} */}
        </div>

        {/* Ingredients Section */}
        <div className="relative">
          <h2 className="mb-6 text-xl font-semibold">Ingredients</h2>

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

          {/* Optional: Chef icon in the background */}
          {/* 
  <div className="absolute right-0 bottom-0 opacity-10">
    <ChefHat className="h-16 w-16 text-orange-200" />
  </div> 
  */}
        </div>
      </div>
    </div>
  );
}
