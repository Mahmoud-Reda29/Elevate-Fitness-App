import { CiDumbbell } from "react-icons/ci";
import { useTranslations } from "use-intl";

interface HeaderProps {
  subTitle: string;
  title: string;
  alignment: "start" | "center" | "end";
}

export default function HeaderTitle({ title, subTitle, alignment }: HeaderProps) {
  const t = useTranslations();
  const alignmentClass = {
    start: "text-left",
    center: "text-center",
    end: "text-right",
  }[alignment];

  return (
    <h2
      className={`text-gradient dark:text-gradient-dark dark:text-custom-black-800 relative text-6xl font-bold text-white uppercase ${alignmentClass}`}
    >
      {t(title)}
      <span className="text-custom-orange-900 absolute bottom-3 flex items-center text-sm">
        <CiDumbbell />
        {t(subTitle)}
      </span>
    </h2>
  );
}
