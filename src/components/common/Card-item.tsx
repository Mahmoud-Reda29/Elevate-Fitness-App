import { MdArrowOutward } from "react-icons/md";
import { Link } from "react-router-dom";

export default function CardItem({ meal }: { meal: Meal }) {
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
