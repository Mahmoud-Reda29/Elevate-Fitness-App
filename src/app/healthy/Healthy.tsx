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
import { useSearchParams } from "react-router-dom";

function chunkArray(arr: Meal[], size: number) {
  const result = [];
  for (let i = 0; i < arr.length; i += size) {
    result.push(arr.slice(i, i + size));
  }
  return result;
}

export default function Healthy() {
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const [searchParams, setSearchParams] = useSearchParams();

  const meal = searchParams.get("meal") || "breakfast";

  const { data, isLoading } = useMeals(meal);
  console.log("data useMeals", data);
  if (isLoading || !data) return <LoadingSpinner />;

  const chunkedMeals = chunkArray(data, 6);

  return (
    <Carousel>
      <CarouselContent>
        {chunkedMeals.map((group, index) => (
          <CarouselItem key={index}>
            <div className="mx-auto grid w-full max-w-7xl grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3 lg:gap-8">
              {group.map((meal, i) => (
                <CardItem key={i} meal={meal} />
              ))}
            </div>
          </CarouselItem>
        ))}
      </CarouselContent>
      <CarouselPagination />
      {/* <CarouselPrevious />
      <CarouselNext /> */}
    </Carousel>
  );
}
