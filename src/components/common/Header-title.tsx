import { CiDumbbell } from "react-icons/ci";
import { useTranslations } from "use-intl";

interface HeaderProps {
  subTitle: string;
  title: string;
  alignment: "start" | "center" | "end";
}

export default function HeaderTitle({ title, subTitle, alignment }: HeaderProps) {
  // Translation
  const t = useTranslations();

  const alignmentClass = {
    start: "text-left items-start",
    center: "text-center items-center",
    end: "text-right items-end",
  };

  return (
    <div className={`relative flex flex-col ${alignmentClass[alignment]} relative`}>
      <h2
        className={`stroke-black stroke-2 text-6xl font-bold text-transparent uppercase ${alignmentClass[alignment].split(" ")[0]}`}
        style={{
          WebkitTextStroke: "2px #000",
        }}
      >
        {t(title)}
      </h2>
      <div
        className={`absolute -bottom-1.5 flex items-center gap-2 text-sm font-medium text-orange-600 dark:text-orange-400 ${alignmentClass[alignment].split(" ")[0]}`}
      >
        <CiDumbbell className="text-lg" />
        <span>{t(subTitle)}</span>
      </div>
    </div>
  );
}
