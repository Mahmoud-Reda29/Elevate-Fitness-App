import axios from "axios";

export default async function getAllMeals(meal: string) {
  console.log("meal", meal);
  const { data } = await axios.get(
    // "https://www.themealdb.com/api/json/v1/1/categories.php?c=" + meal,
    "https://www.themealdb.com/api/json/v1/1/filter.php?i=" + meal,
  );

  const res: MealsResponse = data;
  console.log("resssss", res);
  if (!res || !res.meals) {
    throw new Error("Failed to fetch meals");
  }

  return res.meals;
}
