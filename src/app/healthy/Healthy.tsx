import CardItem from "@/components/common/Card-item";
import useMeals from "@/hooks/meals";
import LoadingSpinner from "@/loading";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselPagination,
  // CarouselNext,
  // CarouselPrevious,
} from "@/components/ui/carousel";
import { useParams, useSearchParams } from "react-router-dom";
import HealthyMeal from "./components/HealthyMeal";
import { useEffect, useState } from "react";
import Navigation from "./components/Navigation";

function chunkArray(arr: Meal[], size: number) {
  const result = [];
  for (let i = 0; i < arr.length; i += size) {
    result.push(arr.slice(i, i + size));
  }
  return result;
}

export default function Healthy() {
  // Variables
  const [searchParams, setSearchParams] = useSearchParams();
  const [currentMeal, setCurrentMeal] = useState("Lamb");
  // Params
  const { id } = useParams();
  const meal = searchParams.get("meal") || "breakfast";

  useEffect(() => {
    // Set query at url meal
    setSearchParams({ meal: currentMeal });
  }, [currentMeal, searchParams, setSearchParams]);

  // Hooks
  const { data, isLoading } = useMeals(meal);

  // Loading
  if (isLoading || !data) return <LoadingSpinner />;

  // Chunks for carousel
  const chunkedMeals = chunkArray(data, 6);
  const isOnePage = data.length / chunkedMeals.length == data.length;

  return (
    <div className="flex gap-8 p-10">
      <div className="w-full">
        {/* Navigation menu */}
        <Navigation setCurrentMeal={setCurrentMeal} currentMeal={currentMeal} />

        {/* Carousel */}
        <Carousel className="w-full">
          <CarouselContent>
            {chunkedMeals.map((group, index) => (
              <CarouselItem key={index}>
                <div className="mx-auto grid w-full max-w-7xl grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3 lg:gap-8">
                  {group.map((meal, i) => (
                    // Card
                    <CardItem key={i} meal={meal} id={id || ""} />
                  ))}
                </div>
              </CarouselItem>
            ))}
          </CarouselContent>
          {/* Pagination buttons */}
          {!isOnePage && <CarouselPagination />}
        </Carousel>
      </div>

      {/* Selected meal */}
      {id && <HealthyMeal id={id || "1"} />}
    </div>
  );
}
