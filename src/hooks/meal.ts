import getMealById from "@/lib/api/mealById";
import { useQuery } from "@tanstack/react-query";

export default function useMeal(id: string) {
  console.log("id id id", id);
  const { data, isLoading, error } = useQuery({
    queryKey: [id],
    queryFn: () => getMealById(id),
  });
  return { data, isLoading, error };
}
