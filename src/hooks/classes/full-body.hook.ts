import Classes from "@/components/apis/classes.api";
import { useQuery } from "@tanstack/react-query";

export default function useClasses() {
  const { data, error, isLoading } = useQuery({
    queryKey: ["classes"],
    queryFn: Classes
  });

  return { data, error, isLoading };
}
