import { useTranslations } from "use-intl";
import Workouts from "./workouts/Workout";
import BestWay from "./bestway/BestWay";

export default function Homepage() {
  // Translation
  const t = useTranslations();

  return (
    <div>
      <h1 className="bg-custom-orange-900 text-9xl">homepage (hodaaaa elevate)</h1>
      {t("homepage")}
      <Workouts />
      <BestWay />
    </div>
  );
}
