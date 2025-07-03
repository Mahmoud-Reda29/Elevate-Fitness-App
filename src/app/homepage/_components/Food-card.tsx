import { MdArrowOutward } from "react-icons/md";
import { useTranslations } from "use-intl";

interface FoodCardProps {
  image: string;
  title: string;
}

const FoodCard = ({ image, title }: FoodCardProps) => {
  const t = useTranslations();

  return (
    <div className="mx-auto w-full max-w-sm overflow-hidden rounded-lg shadow-lg backdrop-blur-2xl transition-shadow duration-300 hover:shadow-xl">
      {/* Image Container */}
      <div className="relative h-48 overflow-hidden sm:h-56">
        <img
          src={`/images/${image}`}
          alt={title}
          className="h-full w-full object-cover transition-transform duration-300 hover:scale-105"
        />
      </div>

      {/* Content Container */}
      <div className="p-4">
        <h3 className="mb-3 text-lg font-bold tracking-wide text-gray-800 uppercase sm:text-xl">
          {t(title)}
        </h3>

        {/* Read More Link */}
        <div className="text-custom-orange-900 flex cursor-pointer items-center gap-2">
          <span className="text-sm font-medium sm:text-base">{t("read-more")}</span>
          <span className="bg-custom-orange-900 rounded-full border-2">
            <MdArrowOutward className="text-white" size={20} />
          </span>
        </div>
      </div>
    </div>
  );
};

export default FoodCard;
