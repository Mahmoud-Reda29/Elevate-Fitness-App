import { MdArrowOutward } from "react-icons/md";
import { Link } from "react-router-dom";

type CardItemProps = {
  meal: Meal;
  id?: string;
};

export default function CardItem({ meal, id }: CardItemProps) {
  // Conditional return — choose which template to render
  if (!id) {
    return (
      <div className="relative mx-auto w-full max-w-sm overflow-hidden rounded-lg shadow-lg backdrop-blur-2xl transition-shadow duration-300 hover:shadow-xl">
        {/* Image Container */}
        <div className="overflow-hidden sm:h-56">
          <img
            src={meal.strMealThumb}
            alt={meal.strMeal}
            className="absolute inset-0 h-full w-full object-cover transition-transform duration-300 hover:scale-105"
          />
        </div>

        {/* Content Container */}
        <div className="bg-[#24242480] p-4 backdrop-blur-3xl">
          <Link to={`/healthy/${meal.idMeal}`}>
            <h3 className="mb-3 text-lg font-bold tracking-wide text-white uppercase sm:text-xl">
              {meal.strMeal}
            </h3>
          </Link>

          {/* Read More Link */}
          <div className="text-custom-orange-900 flex cursor-pointer items-center gap-2">
            <span className="text-sm font-medium sm:text-base">explore</span>
            <span className="bg-custom-orange-900 rounded-full border-2">
              <MdArrowOutward className="text-white" size={20} />
            </span>
          </div>
        </div>
      </div>
    );
  }

  // If `id` exists — render the compact version
  return (
    <div className="border-b- max-w-sm border-gray-200 p-4">
      <div className="flex items-center gap-4">
        {/* Recipe Thumbnail */}
        <div className="relative h-20 w-20 flex-shrink-0 overflow-hidden rounded-xl">
          <img src={meal.strMealThumb} alt={meal.strMeal} className="object-cover" />
        </div>

        {/* Recipe Info */}
        <div className="min-w-0 flex-1">
          <Link to={`/en/healthy/${meal.idMeal}`}>
            <h3 className="mb-1 text-lg leading-tight font-semibold text-white">{meal.strMeal}</h3>
          </Link>
          <p className="line-clamp-2 text-sm leading-relaxed text-gray-400">
            Lorem Ipsum Dolor Sit Amet Consectetur. Tempus
          </p>
        </div>
      </div>
    </div>
  );
}
