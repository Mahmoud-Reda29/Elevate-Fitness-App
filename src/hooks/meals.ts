import getAllMeals from "@/lib/api/meals.api";
import { useQuery } from "@tanstack/react-query";

export default function useMeals(meal: string) {
  const { data, isLoading, error } = useQuery({
    queryKey: [meal],
    queryFn: () => getAllMeals(meal),
  });
  return { data, isLoading, error };
}
