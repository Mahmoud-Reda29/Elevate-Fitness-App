import axios from "axios";

export default async function getMealById(id: string) {
  const { data } = await axios.get("https://www.themealdb.com/api/json/v1/1/lookup.php?i=" + id);

  const res: MealBtId = data;

  if (!res || !res.meals) {
    throw new Error("Failed to fetch meals");
  }
  console.log("data data", data);
  return res.meals[0];
}
